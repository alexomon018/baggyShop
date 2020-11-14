import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  if (action.type === CART_ADD_ITEM) {
    const item = action.payload

    const existItem = state.cartItems.find((x) => x.product === item.product)
    if (existItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      }
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      }
    }
  }
  if (action.type === CART_REMOVE_ITEM) {
    return {
      ...state,
      cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    }
  }
  if (action.type === CART_SAVE_SHIPPING_ADDRESS) {
    return {
      ...state,
      shippingAddress: action.payload,
    }
  }
  return state
}
