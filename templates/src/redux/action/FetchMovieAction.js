import axios from 'axios';

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovieRequest = () => ({
  type: FETCH_MOVIE_REQUEST,
});

export const fetchMovieSuccess = movie => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
});


export const fetchMovieFailure = error => ({
  type: FETCH_MOVIE_FAILURE,
  payload: error,
});

export const fetchMovie = (id) => {
  return dispatch => {
    dispatch(fetchMovieRequest());

    axios.get(`/movies/${id}`)
      .then(response => {
        dispatch(fetchMovieSuccess(response.data));
      })
      .catch(error => {
        console.log(error.message);
        dispatch(fetchMovieFailure(error.message));
      });
  };
};