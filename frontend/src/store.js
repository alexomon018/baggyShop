import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  productListReducers,
  productDetailsReducers,
} from './reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
})

const initalState = {}
const middleware = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
