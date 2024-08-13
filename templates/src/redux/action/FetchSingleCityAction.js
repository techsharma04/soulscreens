import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST';
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE';

export const fetchCityRequest = () => ({
  type: FETCH_CITY_REQUEST,
});


export const fetchCitySuccess = city => ({
  type: FETCH_CITY_SUCCESS,
  payload: city,
});

export const fetchCityFailure = error => ({
  type: FETCH_CITY_FAILURE,
  payload: error,
});

export const fetchCity = (id) => {
  return dispatch => {
    dispatch(fetchCityRequest());
    axios.get(`${Endpoints.FETCH_CITIES_URL}${id}`)
      .then(response => {        
        dispatch(fetchCitySuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCityFailure(error.message));
      });
  };
};