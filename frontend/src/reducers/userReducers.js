import {
  USER_LOGIN_REQUSET,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
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

export { userLoginReducer }
