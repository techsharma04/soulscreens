import {
    FETCH_RATING_REQUEST,
    FETCH_RATING_SUCCESS,
    FETCH_RATING_FAILURE,
  } from '../action/FetchRatingAction';
  
  const initialState = {
    loading: false,
    rating: [],
    error: '',
  };
  
  const ratingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RATING_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_RATING_SUCCESS:
        return {
          loading: false,
          rating: action.payload,
          error: '',
        };
      case FETCH_RATING_FAILURE:
        return {
          loading: false,
          rating: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ratingReducer;
  