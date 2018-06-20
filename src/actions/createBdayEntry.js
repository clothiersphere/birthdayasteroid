import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function handleResponse(response) {
  console.log(response, 'response');
  const { success } = response;

  if (success) {
    return {
      type: actionTypes.CREATE_BDAY_SUCCESS,
      response,
    };
  }
  return {
    type: actionTypes.CREATE_BDAY_FAILURE,
    response,
  };
}

export function createBdayEntry(info) {
  return function (dispatch) {
    const request = axios.post('http://localhost:8080/api/birthdayAsteroid', info);

    return request
      .then((response) => {
        dispatch(handleResponse(response.data));
      });
  };
}
