import { createStore, combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductsReducer from './ProductsReducer';
const root = combineReducers({
  ProductsReducer,
  CartReducer
});
const store = createStore(root);
export default store;