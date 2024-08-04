
import {
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD,
    SET_ERROR,
    SUBMIT_FORM,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE
} from '../action/SignupAction';

const initialState = {
    password: '',
    confirmPassword: '',
    error: null,
    loading: false,
    submitSuccess: false,
    submitError: null
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case SET_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SUBMIT_FORM:
            return {
                ...state,
                loading: true,
                submitSuccess: false,
                submitError: null
            };
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                submitSuccess: true,
                submitError: null
            };
        case SUBMIT_FORM_FAILURE:
            return {
                ...state,
                loading: false,
                submitSuccess: false,
                submitError: action.payload
            };
        default:
            return state;
    }
};

export default signupReducer;
