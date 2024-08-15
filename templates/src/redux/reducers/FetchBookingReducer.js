import {
    FETCH_BOOKING_REQUEST,
    FETCH_BOOKING_SUCCESS,
    FETCH_BOOKING_FAILURE,
} from '../action/FetchBookingActions';

const initialState = {
    loading: false,
    bookings: [],
    error: '',
};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BOOKING_SUCCESS:
            return {
                loading: false,
                bookings: action.payload,
                error: '',
            };
        case FETCH_BOOKING_FAILURE:
            return {
                loading: false,
                bookings: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bookingsReducer;
