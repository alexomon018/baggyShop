import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
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
export const productDetailsReducers = (
  state = { product: { reviews: [] } },
  action
) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return { loading: true, ...state }
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return { loading: false, product: action.payload }
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return { loading: false, error: action.payload }
  }

  return state
}
export const productDeleteReducer = (state = {}, action) => {
  if (action.type === PRODUCT_DELETE_REQUEST) {
    return { loading: true, ...state }
  }
  if (action.type === PRODUCT_DELETE_SUCCESS) {
    return { loading: false, success: true }
  }
  if (action.type === PRODUCT_DELETE_FAIL) {
    return { loading: false, error: action.payload }
  }

  return state
}
export const productCreateReducer = (state = {}, action) => {
  if (action.type === PRODUCT_CREATE_REQUEST) {
    return { loading: true }
  }
  if (action.type === PRODUCT_CREATE_SUCCESS) {
    return { loading: false, success: true, product: action.payload }
  }
  if (action.type === PRODUCT_CREATE_FAIL) {
    return { loading: false, error: action.payload }
  }
  if (action.type === PRODUCT_CREATE_RESET) {
    return {}
  }

  return state
}
