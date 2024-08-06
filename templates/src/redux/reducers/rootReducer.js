import { combineReducers } from 'redux';
import loginReducer from "../reducers/LoginReducer";
import signupReducer from "../reducers/SignupReducer";
import citiesReducer from './FetchCitiesReducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    cities: citiesReducer,
});

export default rootReducer;
