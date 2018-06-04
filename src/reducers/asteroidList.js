import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function getAsteroid(state, action) {
  const { date } = action;
  return { ...state, ...date };
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.SUBMIT_DATE:
      return getAsteroid(newState, action);
    default:
      return state;
  }
}
