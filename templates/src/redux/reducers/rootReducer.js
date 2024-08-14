import { combineReducers } from 'redux';
import loginReducer from "../reducers/LoginReducer";
import signupReducer from "../reducers/SignupReducer";
import citiesReducer from './FetchCitiesReducer';
import ratingReducer from './FetchRatingReducer';
import movieReducer from './FetchMovieReducer';
import moviesReducer from './FetchMoviesReducer';
import cinemasReducer from './FetchCinemasReducer';
import genreReducer from './FetchGenreReducer';
import languageReducer from './FetchLanguageReducer';
import timingReducer from './FetchTimingReducer';
import cityReducer from './FetchSingleCityReducer';
import seatReducer from './FetchSeatsReducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    cities: citiesReducer,
    city: cityReducer,
    rating: ratingReducer,
    movie: movieReducer,
    movies: moviesReducer,
    cinemas: cinemasReducer,
    genre: genreReducer,
    timing: timingReducer,
    language: languageReducer,
    seat: seatReducer,
});

export default rootReducer;
