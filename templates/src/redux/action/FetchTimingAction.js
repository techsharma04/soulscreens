import axios from 'axios';

export const FETCH_TIMING_REQUEST = 'FETCH_TIMING_REQUEST';
export const FETCH_TIMING_SUCCESS = 'FETCH_TIMING_SUCCESS';
export const FETCH_TIMING_FAILURE = 'FETCH_TIMING_FAILURE';

export const fetchTimingRequest = () => ({
  type: FETCH_TIMING_REQUEST,
});

export const fetchTimingSuccess = timing => ({
  type: FETCH_TIMING_SUCCESS,
  payload: timing,
});

export const fetchTimingFailure = error => ({
  type: FETCH_TIMING_FAILURE,
  payload: error,
});

export const fetchTiming = () => {
  return dispatch => {
    dispatch(fetchTimingRequest());
    axios.get('timing/')
      .then(response => {        
        dispatch(fetchTimingSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTimingFailure(error.message));
      });
  };
};
