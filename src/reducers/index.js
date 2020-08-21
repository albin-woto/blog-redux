import { combineReducers } from 'redux';

import userReducer from './userReducer';
import publicationReducer from './publicationReducer';

export default combineReducers({
  userReducer,
  publicationReducer
});
