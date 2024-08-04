import axios from 'axios';

export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
});

export const setConfirmPassword = (confirmPassword) => ({
    type: SET_CONFIRM_PASSWORD,
    payload: confirmPassword
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
});

export const submitFormSuccess = (data) => ({
    type: SUBMIT_FORM_SUCCESS,
    payload: data
});

export const submitFormFailure = (error) => ({
    type: SUBMIT_FORM_FAILURE,
    payload: error
});

export const submitForm = (formData) => async (dispatch) => {
    dispatch({ type: SUBMIT_FORM });
    try {
        const response = await axios.post('add-booking/', formData, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // Include CSRF token if required
            }
        });

        dispatch(submitFormSuccess(response.data));
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            dispatch(submitFormFailure(error.response.data.error || 'An error occurred'));
        } else if (error.request) {
            // Request was made but no response received
            dispatch(submitFormFailure('No response from server'));
        } else {
            // Something else happened in setting up the request
            dispatch(submitFormFailure('Request error: ' + error.message));
        }
    }
};

// Helper function to get CSRF token from cookies (if required)
function getCookie(name) {
    const cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                return decodeURIComponent(cookie.substring(name.length + 1));
            }
        }
    }
    return cookieValue;
}
