import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const FETCH_LANGUAGE_REQUEST = 'FETCH_LANGUAGE_REQUEST';
export const FETCH_LANGUAGE_SUCCESS = 'FETCH_LANGUAGE_SUCCESS';
export const FETCH_LANGUAGE_FAILURE = 'FETCH_LANGUAGE_FAILURE';

export const fetchLanguageRequest = () => ({
  type: FETCH_LANGUAGE_REQUEST,
});

export const fetchLanguageSuccess = language => ({
  type: FETCH_LANGUAGE_SUCCESS,
  payload: language,
});

export const fetchLanguageFailure = error => ({
  type: FETCH_LANGUAGE_FAILURE,
  payload: error,
});

export const fetchLanguage = () => {
  return dispatch => {
    dispatch(fetchLanguageRequest());
    axios.get(`${Endpoints.FETCH_LANGUAGE_URL}`)
      .then(response => {
        dispatch(fetchLanguageSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLanguageFailure(error.message));
      });
  };
};
