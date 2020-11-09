import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
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
  return state
}
