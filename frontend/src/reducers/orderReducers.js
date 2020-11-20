import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  if (action.type === ORDER_CREATE_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_CREATE_SUCCESS) {
    return {
      loading: false,
      success: true,
      order: action.payload,
    }
  }
  if (action.type === ORDER_CREATE_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  return state
}
export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  if (action.type === ORDER_DETAILS_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_DETAILS_SUCCESS) {
    return {
      loading: false,
      order: action.payload,
    }
  }
  if (action.type === ORDER_DETAILS_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  return state
}
export const orderPayReducer = (state = {}, action) => {
  if (action.type === ORDER_PAY_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_PAY_SUCCESS) {
    return {
      loading: false,
      success: true,
    }
  }
  if (action.type === ORDER_PAY_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  if (action.type === ORDER_PAY_RESET) {
    return {}
  }
  return state
}
export const orderDeliverReducer = (state = {}, action) => {
  if (action.type === ORDER_DELIVER_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_DELIVER_SUCCESS) {
    return {
      loading: false,
      success: true,
    }
  }
  if (action.type === ORDER_DELIVER_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  if (action.type === ORDER_DELIVER_RESET) {
    return {}
  }
  return state
}
export const orderListMyReducer = (state = { orders: [] }, action) => {
  if (action.type === ORDER_LIST_MY_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_LIST_MY_SUCCESS) {
    return {
      loading: false,
      orders: action.payload,
    }
  }
  if (action.type === ORDER_LIST_MY_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  if (action.type === ORDER_LIST_MY_RESET) {
    return {
      orders: [],
    }
  }
  return state
}
export const orderListReducer = (state = { orders: [] }, action) => {
  if (action.type === ORDER_LIST_REQUEST) {
    return {
      loading: true,
    }
  }
  if (action.type === ORDER_LIST_SUCCESS) {
    return {
      loading: false,
      orders: action.payload,
    }
  }
  if (action.type === ORDER_LIST_FAIL) {
    return {
      loading: false,
      error: action.payload,
    }
  }
  return state
}
