import { combineReducers } from 'redux';
import postReducer from './postReducer';
import productReducer from './productReducer'

export default combineReducers({
  posts: postReducer,
  order: productReducer
});
