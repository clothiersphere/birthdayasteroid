import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import APOD from './apod';
import neo from './neo';

export default combineReducers({
  APOD,
  neo,
  routing: routerReducer,
});
