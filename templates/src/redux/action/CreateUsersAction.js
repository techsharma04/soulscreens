import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const CREATE_USERS_REQUEST = 'CREATE_USERS_REQUEST';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const CREATE_USERS_FAILURE = 'CREATE_USERS_FAILURE';

export const createUsersRequest = () => ({
  type: CREATE_USERS_REQUEST,
});

export const createUsersSuccess = users => ({
  type: CREATE_USERS_SUCCESS,
  payload: users,
});

export const createUsersFailure = error => ({
  type: CREATE_USERS_FAILURE,
  payload: error,
});

export const createUserPassword = (email, password) => {
  return dispatch => {
    dispatch(createUsersRequest());


    axios.put(`${Endpoints.CREATE_NEW_PASSWORD_URL}${email}`, { password })
      .then(response => {
        
        dispatch(createUsersSuccess(response.data));
      })
      .catch(error => {

        dispatch(createUsersFailure(error.response.status));
      });
  };
};
