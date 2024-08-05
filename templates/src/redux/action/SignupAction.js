import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

export const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
});

export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error
});

export const submitForm = (formData) => async (dispatch) => {
    dispatch(signupRequest);
    try {
        const response = await axios.post('signup/', formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        dispatch(signupSuccess(response.data.message));
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            dispatch(signupFailure(error.response.data.error || 'An error occurred'));
        } else if (error.request) {
            // Request was made but no response received
            dispatch(signupFailure('No response from server'));
        } else {
            // Something else happened in setting up the request
            dispatch(signupFailure('Request error: ' + error.message));
        }
    }
};
