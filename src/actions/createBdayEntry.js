import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';


function createEntry(response) {
  return {
    type: actionTypes.CREATE_BDAY_ENTRY,
    response,
  };
}

export function createBdayEntry(info) {
  console.log(info, 'info');
  const { birthday, senderEmail, mobile } = info;

  return function (dispatch) {
    const request = axios({
      method: 'POST',
      url: 'http://localhost:8080/api/birthdayAsteroid',
      info: {
        birthday,
        senderEmail,
        mobile,
      },
    });
    return request
      .then((response) => {
        dispatch(createEntry(response.data));
      });
  };
}
