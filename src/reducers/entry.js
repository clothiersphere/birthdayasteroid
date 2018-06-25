import * as actionTypes from '../constants/actionTypes';

const initialState = {
  recipientMobile: null,
  birthday: null,
  senderEmail: null,
  error: null,
};

function handleResponse(state, action) {
  const { resp } = action;
  const { success } = resp;
  const { recipientMobile, birthday, senderEmail } = resp.info;

  if (success) {
    return {
      ...state,
      recipientMobile,
      birthday,
      senderEmail,
    };
  }
  const { flag } = resp;

  return {
    ...state,
    error: flag,
    recipientMobile,
    birthday,
    senderEmail,
  };
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_BDAY_SUCCESS:
      return handleResponse(newState, action);
    case actionTypes.CREATE_BDAY_FAILURE:
      return handleResponse(newState, action);
    case actionTypes.DATA_RESET:
      return {
        ...state,
        recipientMobile: null,
        birthday: null,
        senderEmail: null,
        error: null,
      };
    default:
      return state;
  }
}
