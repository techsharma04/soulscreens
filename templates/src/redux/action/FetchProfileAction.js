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

export const fetchProfile = (email) => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios.get(`${Endpoints.PROFILE_URL}${email}`)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        
        dispatch(fetchUsersFailure(error.response.status));
      });
  };
};
