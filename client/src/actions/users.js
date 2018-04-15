import axios from 'axios'

export function getUser() {
  return function (dispatch) {
    dispatch(get_user_pending())
    return axios.get('http://localhost:8080/users').then(
      data => dispatch(get_user_success(data)), //succeed here is data
      error => dispatch(get_user_error(error)) // I have faild here is error
    );
  };
}

export function get_user_pending() {
  return { type: "GET_USER_PENDING" };
}

export function get_user_success(data) {
  return { type: "GET_USER_SUCCESS", data };
}

export function get_user_error(error) {
  return { type: "GET_USER_ERROR", error };
}

// export function add_user_pending() {
//   return { type: "ADD_USER_PENDING" };
// }

// export function add_user_success(data) {
//   return { type: "ADD_USER_SUCCESS", data };
// }

// export function add_user_error(error) {
//   return { type: "ADD_USER_ERROR", error };
// }

