import { combineReducers } from 'redux';
import users from './users';
import bands from './bands';

const rootReducer = combineReducers({
  users,
  bands
});

export default rootReducer;