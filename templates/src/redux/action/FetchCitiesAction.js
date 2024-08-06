import axios from 'axios';

export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export const fetchCitiesRequest = () => ({
  type: FETCH_CITIES_REQUEST,
});

export const fetchCitiesSuccess = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities,
});

export const fetchCitiesFailure = error => ({
  type: FETCH_CITIES_FAILURE,
  payload: error,
});

export const fetchCities = () => {
  return dispatch => {
    dispatch(fetchCitiesRequest());
    axios.get('cities/')
      .then(response => {
        const cities = response.data;
        dispatch(fetchCitiesSuccess(cities));
      })
      .catch(error => {
        dispatch(fetchCitiesFailure(error.message));
      });
  };
};
