import {
    FETCH_TIMING_REQUEST,
    FETCH_TIMING_SUCCESS,
    FETCH_TIMING_FAILURE,
  } from '../action/FetchTimingAction';
  
  const initialState = {
    loading: false,
    timing: [],
    error: '',
  };
  
  const timingReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TIMING_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TIMING_SUCCESS:
        return {
          loading: false,
          timing: action.payload,
          error: '',
        }; 
      case FETCH_TIMING_FAILURE:
        return {
          loading: false,
          timing: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default timingReducer;
  