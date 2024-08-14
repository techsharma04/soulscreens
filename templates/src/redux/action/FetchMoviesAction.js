import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesRequest());
    axios.get(`${Endpoints.FETCH_MOVIES_URL}`)
      .then(response => {
        
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};
