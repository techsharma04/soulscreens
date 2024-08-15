const initialState = {
    loading: false,
    success: false,
    error: null,
    bookingData: {},
};

export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKING_REQUEST':
            return { ...state, loading: true };
        case 'BOOKING_SUCCESS':
            return { ...state, loading: false, success: true, bookingData: action.payload };
        case 'BOOKING_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default bookingReducer;