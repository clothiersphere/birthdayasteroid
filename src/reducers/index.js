import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import APOD from './apod';

export default combineReducers({
  APOD,
  routing: routerReducer,
});
