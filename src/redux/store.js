import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import indexReducer from './index-reducer';
import groupsReducer from './groups-reducer';
import groupReducer from './group-reducer';

const reducers = combineReducers({
  groupsData: groupsReducer,
  groupData: groupReducer,
  indexData: indexReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;