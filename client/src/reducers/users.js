// import { ADD_USER } from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  data: null,
  error: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        fetching: true,
        data: null,
        error: null
      };

    case "GET_USER_SUCCESS":
      return {
        fetching: false,
        data: action.data,
        error: null
      };

    case "GET_USER_ERROR":
      return {
        fetching: false,
        data: null,
        error: action.error
      };

    default:
      return state;
  }
}
