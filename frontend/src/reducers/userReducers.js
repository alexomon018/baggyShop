import {
  USER_LOGIN_REQUSET,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUSET,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants'

const userLoginReducer = (state = {}, action) => {
  if (action.type === USER_LOGIN_REQUSET) {
    return { loading: true }
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return { loading: false, userInfo: action.payload }
  }
  if (action.type === USER_LOGIN_FAIL) {
    return { loading: false, error: action.payload }
  }
  if (action.type === USER_LOGOUT) {
    return {}
  }

  return state
}
const userRegisterReducer = (state = {}, action) => {
  if (action.type === USER_REGISTER_REQUSET) {
    return { loading: true }
  }
  if (action.type === USER_REGISTER_SUCCESS) {
    return { loading: false, userInfo: action.payload }
  }
  if (action.type === USER_REGISTER_FAIL) {
    return { loading: false, error: action.payload }
  }

  return state
}

export { userLoginReducer, userRegisterReducer }
