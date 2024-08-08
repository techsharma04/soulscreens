import { combineReducers } from 'redux';
import loginReducer from "../reducers/LoginReducer";
import signupReducer from "../reducers/SignupReducer";
import citiesReducer from './FetchCitiesReducer';
import ratingReducer from './FetchRatingReducer';
import movieReducer from './FetchMovieReducer';
import moviesReducer from './FetchMoviesReducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    cities: citiesReducer,
    rating: ratingReducer,
    movie: movieReducer,
    movies: moviesReducer,
});

export default rootReducer;
