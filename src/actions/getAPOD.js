import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';

function displayAPOD(apod) {
  return {
    type: actionTypes.GET_APOD,
    apod,
  };
}


export function getAPOD() {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: 'http://localhost:8080/api/APOD',
    });
    return request
      .then((response) => {
        dispatch(displayAPOD(response.data));
      });
  };
}
