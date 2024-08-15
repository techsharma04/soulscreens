import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = timing => ({
  type: FETCH_USERS_SUCCESS,
  payload: timing,
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = (email) => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios.get(`${Endpoints.FORGOT_PASSWORD_URL}${email}`)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data.email));
      })
      .catch(error => {
        
        dispatch(fetchUsersFailure(error.response.status));
      });
  };
};
