import {
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from '../action/FetchCitiesAction';

const initialState = {
  loading: false,
  cities: [],
  error: '',
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
        error: '',
      };
    case FETCH_CITIES_FAILURE:
      return {
        loading: false,
        cities: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default citiesReducer;
