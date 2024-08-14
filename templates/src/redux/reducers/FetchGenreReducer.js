import Endpoints from '../../api/endpoint';
import {
    FETCH_GENRE_REQUEST,
    FETCH_GENRE_SUCCESS,
    FETCH_GENRE_FAILURE,
  } from '../action/FetchGenreAction';

  
  const initialState = {
    loading: false,
    genre: [],
    error: '',
  };
  
  const genreReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GENRE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_GENRE_SUCCESS:
        return {
          loading: false,
          genre: action.payload,
          error: '',
        };
      case FETCH_GENRE_FAILURE:
        return {
          loading: false,
          genre: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default genreReducer;
  