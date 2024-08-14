import axios from 'axios';
import Endpoints from "../../api/endpoint";

export const FETCH_SEATS_REQUEST = 'FETCH_SEATS_REQUEST';
export const FETCH_SEATS_SUCCESS = 'FETCH_SEATS_SUCCESS';
export const FETCH_SEATS_FAILURE = 'FETCH_SEATS_FAILURE';

export const fetchSeatsRequest = () => ({
  type: FETCH_SEATS_REQUEST,
});

export const fetchSeatsSuccess = seats => ({
  type: FETCH_SEATS_SUCCESS,
  payload: seats,
});

export const fetchSeatsFailure = error => ({
  type: FETCH_SEATS_FAILURE,
  payload: error,
});

export const fetchSeats = () => {
  return dispatch => {
    dispatch(fetchSeatsRequest());
    axios.get(`${Endpoints.FETCH_SEAT_SELECTION_URL}`)
      .then(response => {
        
        dispatch(fetchSeatsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchSeatsFailure(error.message));
      });
  };
};

