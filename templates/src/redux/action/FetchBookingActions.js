import axios from 'axios';
import Endpoints from "../../api/endpoint";

export const FETCH_BOOKING_REQUEST = 'FETCH_BOOKING_REQUEST';
export const FETCH_BOOKING_SUCCESS = 'FETCH_BOOKING_SUCCESS';
export const FETCH_BOOKING_FAILURE = 'FETCH_BOOKING_FAILURE';

export const fetchBookingsRequest = () => ({
    type: FETCH_BOOKING_REQUEST,
});

export const fetchBookingsSuccess = bookings => ({
    type: FETCH_BOOKING_SUCCESS,
    payload: bookings,
});

export const fetchBookingsFailure = error => ({
    type: FETCH_BOOKING_FAILURE,
    payload: error,
});

export const fetchBookings = () => {
    return dispatch => {
        dispatch(fetchBookingsRequest());
        axios.get(`http://127.0.0.1:8000/booking/`)
            .then(response => {
                dispatch(fetchBookingsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBookingsFailure(error.message));
            });
    };
};

