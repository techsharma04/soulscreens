import axios from 'axios';
import Endpoints from "../../api/endpoint";

export const FETCH_CINEMAS_REQUEST = 'FETCH_CINEMAS_REQUEST';
export const FETCH_CINEMAS_SUCCESS = 'FETCH_CINEMAS_SUCCESS';
export const FETCH_CINEMAS_FAILURE = 'FETCH_CINEMAS_FAILURE';

export const fetchCinemasRequest = () => ({
  type: FETCH_CINEMAS_REQUEST,
});

export const fetchCinemasSuccess = cinemas => ({
  type: FETCH_CINEMAS_SUCCESS,
  payload: cinemas,
});

export const fetchCinemasFailure = error => ({
  type: FETCH_CINEMAS_FAILURE,
  payload: error,
});

export const fetchCinemas = () => {
  return dispatch => {
    dispatch(fetchCinemasRequest());
    axios.get(`${Endpoints.FETCH_CINEMAS_URL}`)
      .then(response => {
        dispatch(fetchCinemasSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCinemasFailure(error.message));
      });
  };
};

