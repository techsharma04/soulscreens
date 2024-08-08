import { Header } from "../../components/header/index";
import './style.css'
import poster from '../../assets/images/movie12.jpg';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../../redux/action/FetchMovieAction";

const Movie = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie);

    console.log(movie);


    useEffect(() => {
        dispatch(fetchMovie(id));
    }, [dispatch, id]);

    return (
        <div classname="container-fluid">
            <Header />
              <div className="movie-details-row">
                    <img src={movie.image} alt="" height={350} width={255} style={{ position: 'absolute', left: '200px' }} />
                    <div className="top-row">
                        <h1>{movie.title}</h1>
                        <p>English Italian</p>
                        <span>Crime</span>
                        <span>Drama</span>
                        <div className="datetime-row">
                            <div className="datetime-col"><i className="fas fa-calendar-alt"></i><small>06 Dec, 2020</small></div>
                            <div className="datetime-col"><i className="fas fa-clock"></i><small>2 hrs 50 mins</small></div>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <Link to='/movie-time'><button className="book-btn">Book Tickets</button></Link>
                    </div>
                </div>
        </div>
    )
}

export default Movie