import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initalState = {
  cart: { cartItems: cartItemsFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
