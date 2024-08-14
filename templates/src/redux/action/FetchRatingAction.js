import axios from 'axios';
import Endpoints from '../../api/endpoint';


export const FETCH_RATING_REQUEST = 'FETCH_RATING_REQUEST';
export const FETCH_RATING_SUCCESS = 'FETCH_RATING_SUCCESS';
export const FETCH_RATING_FAILURE = 'FETCH_RATING_FAILURE';

export const fetchRatingRequest = () => ({
  type: FETCH_RATING_REQUEST,
});

export const fetchRatingSuccess = rating => ({
  type: FETCH_RATING_SUCCESS,
  payload: rating,
});

export const fetchRatingFailure = error => ({
  type: FETCH_RATING_FAILURE,
  payload: error,
});

export const fetchRating = () => {
  return dispatch => {
    dispatch(fetchRatingRequest());
    axios.get(`${Endpoints.FETCH_RATING_URL}`)
      .then(response => {
        dispatch(fetchRatingSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchRatingFailure(error.message));
      });
  };
};
