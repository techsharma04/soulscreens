import axios from 'axios';
import Endpoints from '../../api/endpoint';

// Define the action for submitting the booking form
export const submitBooking = (bookingData) => async (dispatch) => {
    try {
        // Dispatch an action to notify the form submission started
        dispatch({ type: 'BOOKING_REQUEST' });

        const response = await axios.post(`${Endpoints.CONFIRMED_BOOKING_URL}`, bookingData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        dispatch({
            type: 'BOOKING_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        // Dispatch failure action if there is an error
        dispatch({
            type: 'BOOKING_FAILURE',
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        });
    }
};

