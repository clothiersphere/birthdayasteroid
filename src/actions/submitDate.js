import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

function getAsteroid(date) {
  return {
    type: actionTypes.SUBMIT_DATE,
    date,
  };
}

export function submitDate(date) {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: `http://localhost:8080/api/birthday/${date}`,
    });
    return request
      .then((response) => {
        dispatch(getAsteroid(response.data));
      });
  };
}
