import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from './reducers/orderReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const initalState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
