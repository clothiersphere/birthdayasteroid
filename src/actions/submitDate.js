import * as actionTypes from '../constants/actionTypes';

export function submitDate(date) {
  return {
    type: actionTypes.SUBMIT_DATE,
    date,
  };
}
