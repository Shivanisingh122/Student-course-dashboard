// redux/store.js

import { createStore, combineReducers } from 'redux';
import courseReducer from './reducers/courseReducer';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  student: studentReducer,
});

const store = createStore(rootReducer);

export default store;
