import {
  FETCH_CINEMAS_REQUEST,
  FETCH_CINEMA_SUCCESS,
  FETCH_CINEMAS_SUCCESS,
  FETCH_CINEMAS_FAILURE,
} from '../action/FetchCinemasAction';

const initialState = {
  loading: false,
  cinemas: [],
  cinema: [],
  error: '',
};

const cinemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CINEMAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CINEMAS_SUCCESS:
      return {
        loading: false,
        cinemas: action.payload,
        error: '',
      };
    case FETCH_CINEMA_SUCCESS:
      return {
        loading: false,
        cinema: action.payload,
        error: '',
      };
    case FETCH_CINEMAS_FAILURE:
      return {
        loading: false,
        cinemas: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cinemasReducer;
