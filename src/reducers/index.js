import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import APOD from './apod';
import asteroidList from './asteroidList';

export default combineReducers({
  APOD,
  asteroidList,
  routing: routerReducer,
});
