import {
  FETCH_SEATS_REQUEST,
  FETCH_SEATS_SUCCESS,
  FETCH_SEATS_FAILURE,
} from '../action/FetchSeatsAction';

const initialState = {
  loading: false,
  seats: [],
  error: '',
};

const seatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SEATS_SUCCESS:
      return {
        loading: false,
        seats: action.payload,
        error: '',
      };
    case FETCH_SEATS_FAILURE:
      return {
        loading: false,
        seats: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seatsReducer;
