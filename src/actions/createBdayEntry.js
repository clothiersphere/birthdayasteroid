import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function createEntry(response) {
  return {
    type: actionTypes.CREATE_BDAY_ENTRY,
    response,
  };
}

export function createBdayEntry(info) {
  const { birthday, recipientMobile, senderEmail } = info;
  return function (dispatch) {
    const request = axios.post('http://localhost:8080/api/birthdayAsteroid', info);

    return request
      .then((response) => {
        dispatch(createEntry(response.data));
      });
  };
}
