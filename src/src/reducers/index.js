import { combineReducers } from 'redux';

import toDoReducer from './toDoReducer';

export default combineReducers({
  toDo: toDoReducer,
});
