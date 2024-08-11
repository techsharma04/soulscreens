import {
    FETCH_LANGUAGE_REQUEST,
    FETCH_LANGUAGE_SUCCESS,
    FETCH_LANGUAGE_FAILURE,
  } from '../action/FetchLanguageAction';
  
  const initialState = {
    loading: false,
    language: [],
    error: '',
  };
  
  const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LANGUAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_LANGUAGE_SUCCESS:
        return {
          loading: false,
          language: action.payload,
          error: '',
        };
      case FETCH_LANGUAGE_FAILURE:
        return {
          loading: false,
          language: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default languageReducer;
  