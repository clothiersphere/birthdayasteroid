import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import APOD from './apod';
import neo from './neo';
import entry from './entry';

export default combineReducers({
  APOD,
  neo,
  entry,
  routing: routerReducer,
});
