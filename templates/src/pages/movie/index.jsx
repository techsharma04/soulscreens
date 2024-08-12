import { Header } from "../../components/header/index";
import './style.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../../redux/action/FetchMovieAction";
import movieposter from '../../assets/images/movie-poster1.gif';

const Movie = ({hide}) => {
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
                <h1 style={{position: 'fixed', fontSize: '150px', top:100, right:500, fontFamily: 'fantasy', textTransform:'uppercase', color:'rgb(0, 176, 240, .25)'}}>{movie.title}</h1>
                <img src={movieposter} alt="movie-poster" style={{position: 'fixed',top:100, right:100, opacity:'.5', width:'800px'}}/>
                    <div className='movie-details-row' >
                        <img src={movie.image} alt="" height={396} width={275} style={{ position: 'absolute', left: '300px', top: 300, padding: 5, border: '15px groove black' }} />
                        <div className='top-row'>
                            <div className="top-inside-row">
                                <div className="inside-top-row">
                                    <h1>{movie.title}</h1>
                                    <p>{movie.movie_language && movie.movie_language.map((lang, index) => lang.name).join(', ')}</p>
                                    <div style={{ display: "flex" }}>
                                        {movie.movie_genre && movie.movie_genre.map((genre, index) => <span className="genre-style" key={index}>{genre.name}</span>)}
                                    </div>
                                    <div className="datetime-row">
                                        <div className="datetime-col"><i className="fas fa-calendar-alt"></i><small>{movie.release_date}</small></div>
                                        <div className="datetime-col"><i className="fas fa-clock"></i><small>{movie.time_length}</small></div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', width: '100%' }}>
                                    <Link to={`/movies/timing/${movie.id}`}><button className="book-btn">Book Tickets</button></Link>
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