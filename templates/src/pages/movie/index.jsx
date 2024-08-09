import { Header } from "../../components/header/index";
import './style.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../../redux/action/FetchMovieAction";

const Movie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.movie);


    useEffect(() => {
        dispatch(fetchMovie(id));
    }, [dispatch, id]);

    return (
        <div classname="container-fluid">
            <Header />
            <div className="movie-banner">
                <div className="movie-details">
                <h1 style={{position: 'fixed', fontSize: '150px', top:100, right:100}}>{movie.title}</h1>
                    <div className="movie-details-row">
                        <img src={movie.image} alt="" height={396} width={275} style={{ position: 'absolute', left: '300px', top: 300, padding: 5, border: '15px groove black' }} />
                        <div className="top-row">
                            <div className="top-inside-row">
                                <div>
                                    <h1>{movie.title}</h1>
                                    <p>{movie.movie_language && movie.movie_language.map((lang) => lang.name).join(', ')}</p>
                                    <div style={{ display: "flex" }}>
                                        {movie.movie_genre && movie.movie_genre.map((genre) => <span>{genre.name}</span>)}
                                    </div>
                                    <div className="datetime-row">
                                        <div className="datetime-col"><i className="fas fa-calendar-alt"></i><small>{movie.release_date}</small></div>
                                        <div className="datetime-col"><i className="fas fa-clock"></i><small>2 hrs 50 mins</small></div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', width: '100%' }}>
                                    <Link to='/movie-time'><button className="book-btn">Book Tickets</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie