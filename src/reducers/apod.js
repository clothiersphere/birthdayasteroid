import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function getAPOD(state, action) {
  console.log(action, 'action');
  const { apod } = action;
  return { ...state, ...apod };
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_APOD:
      return getAPOD(newState, action);
    default:
      return state;
  }
}
