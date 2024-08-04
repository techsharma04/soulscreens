import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../action/LoginAction';

const initialState = {
    loading: false,
    message: '',
    error: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: '' };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, message: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default loginReducer;
