import { combineReducers } from 'redux';
import loginReducer from "../reducers/LoginReducer";
import signupReducer from "../reducers/SignupReducer";

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
});

export default rootReducer;
