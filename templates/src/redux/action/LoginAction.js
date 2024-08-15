import axios from 'axios';
import Endpoints from '../../api/endpoint';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (message, user, csrfToken) => ({
    type: LOGIN_SUCCESS,
    payload: {message, user, csrfToken}
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

// Get CSRF token from meta tag
const getCsrfToken = () => {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return token;
};

// Set CSRF token in Axios default headers
axios.defaults.headers.common['X-CSRFToken'] = getCsrfToken(); 

export const login = (formData) => async (dispatch) => {
    dispatch(loginRequest());
    
    
    try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await axios.post(`${Endpoints.LOGIN_URL}`, formData, {
            headers: {
                'X-CSRFToken': csrfToken
            }
        });
        
        localStorage.setItem('id', response.data.user.id);
        localStorage.setItem('email', response.data.user.email);
        dispatch(loginSuccess(response.data.message, response.data.user, csrfToken));
    } catch (error) {
        dispatch(loginFailure(error.response.data.error || 'An error occurred'));
    }
};