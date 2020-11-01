import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const productListReducers = (state = { products: [] }, action) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    return { loading: true, products: [] }
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    return { loading: false, products: action.payload }
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload }
  }

  return state
}
