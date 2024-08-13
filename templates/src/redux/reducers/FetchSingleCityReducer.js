import {
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from '../action/FetchSingleCityAction';

const initialState = {
  loading: false,
  city: [],
  error: '',
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITY_SUCCESS:
      return {
        loading: false,
        city: action.payload,
        error: '',
      };
    case FETCH_CITY_FAILURE:
      return {
        loading: false,
        city: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
