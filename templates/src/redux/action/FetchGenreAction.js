import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const FETCH_GENRE_REQUEST = 'FETCH_GENRE_REQUEST';
export const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS';
export const FETCH_GENRE_FAILURE = 'FETCH_GENRE_FAILURE';

export const fetchGenreRequest = () => ({
  type: FETCH_GENRE_REQUEST,
});

export const fetchGenreSuccess = genre => ({
  type: FETCH_GENRE_SUCCESS,
  payload: genre,
});

export const fetchGenreFailure = error => ({
  type: FETCH_GENRE_FAILURE,
  payload: error,
});

export const fetchGenre = () => {
  return dispatch => {
    dispatch(fetchGenreRequest());
    axios.get(`${Endpoints.FETCH_GENRE_URL}`)
      .then(response => {
        dispatch(fetchGenreSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchGenreFailure(error.message));
      });
  };
};
