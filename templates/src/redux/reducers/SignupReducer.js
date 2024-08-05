
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from '../action/SignupAction';

const initialState = {
    loading: false,
    message: '',
    error: ''
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, loading: true, error: '' };
        case SIGNUP_SUCCESS:
            return { ...state, loading: false, message: action.payload };
        case SIGNUP_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default signupReducer;
