import { Header } from '../../components/header';
import './style.css';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
// import cinema from '../../assets/images/cinema.png';
// import date from '../../assets/images/date.png';
// import city from '../../assets/images/city.png';
import poster from '../../assets/images/movie12.jpg';
import star from '../../assets/images/star.png';
import cake from '../../assets/images/cake.png';
import { fetchCities } from '../../redux/action/FetchCitiesAction';
import { fetchMovies } from '../../redux/action/FetchMoviesAction';
import { fetchRating } from '../../redux/action/FetchRatingAction';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.cities);
    const { rating } = useSelector(state => state.rating);
    const { movies } = useSelector(state => state.movies);
    const [dates, setDates] = useState([]);
    const [filter, setFilter] = useState('filter-display-hide');
    const [randomNumber, setRandomNumber] = useState(null);

    useEffect(() => {
        dispatch(fetchCities());
        dispatch(fetchMovies());
        dispatch(fetchRating());
        generateNext4Dates();
        generateRandomNumber();
    }, [dispatch]);

    const generateNext4Dates = () => {
        const today = new Date();
        const next4Dates = [];
        for (let i = 1; i <= 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            next4Dates.push(nextDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
        }
        setDates(next4Dates);
    };

    const toggleFilter = () => {
        setFilter(prevFilter => (prevFilter === '' ? 'filter-display-hide' : ''));
    };

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 10) + 1;
        setRandomNumber(number); 
    };

    return (
        <div className='container-fluid home-bg'>
            <Header />
            <div className='section-main'>
                <div className='row section-row'>
                    <div className='col-8 section-col'>
                        <h1 className='main-title'>Get <span style={{ color: '#31d7a9' }}>movie</span> tickets</h1>
                        <p className='section-subtitle'>Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more</p>
                    </div>
                </div>
            </div>
            <div className='container-ticket'>
                <div className='row ticket-row'>
                    <div className='col ticket-col'>
                        <h6 className='ticket-title'>Welcome to boleto</h6>
                        <h1 className='ticket-subtitle'>what are you looking for</h1>
                    </div>
                    <div className='col ticket-col ticket-col-form'>
                        <div className='row ticket-form-row'>
                            <div className='col textbox-col'>
                                <Form.Control
                                    type="text"
                                    id="inputtext5"
                                    aria-describedby="textHelpBlock"
                                    placeholder='Search for movies'
                                />
                                <div className='filter' onClick={toggleFilter}>

                                </div>
                            </div>
                        </div>
                        <div className={`row ticket-form-row ${filter}`}>
                            <div className='col form-col'>
                                {/* <img src={city} alt='city' /> */}
                                <span className='label'>City</span>
                                <Form.Select aria-label="select cities">
                                    <option className='select-options'>Select a City</option>
                                    {cities.map((city) => (
                                        <option key={city.id} className='select-options'>{city.name}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className='col form-col'>
                                {/* <img src={date} alt='date' /> */}
                                <span className='label'>Date</span>
                                <Form.Select aria-label="select dates">
                                    <option className='select-options' >Select date</option>
                                    {dates.map((date, index) => (
                                        <option className='select-options' key={index} value={date}>{date}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className='col form-col custom-select'>
                                {/* <img src={cinema} alt='cinema' /> */}
                                <span className='label'>Cinema</span>
                                <Form.Select aria-label="Default select example">
                                    <option className='select-options' >Select a cinema</option>
                                    <option className='select-options'>Big Cinemas</option>
                                    <option className='select-options'>Cinepolis</option>
                                    <option className='select-options'>IMAX</option>
                                    <option className='select-options'>PVR INOX</option>
                                    <option className='select-options'>Paragon</option>
                                    <option className='select-options'>New Empire Cinema</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className={`row ticket-form-row-2 ${filter}`}>
                            <div className='col form-col custom-select'>
                                {/* <img src={Genre} alt='cinema' /> */}
                                <span className='label'>Genre</span>
                                <Form.Select aria-label="Default select example">
                                    <option className='select-options' >Select a Genre</option>
                                    <option className='select-options'>Action</option>
                                    <option className='select-options'>Comedy</option>
                                    <option className='select-options'>Drama</option>
                                    <option className='select-options'>Horror</option>
                                    <option className='select-options'>Romance</option>
                                    <option className='select-options'>Science Fiction</option>
                                    <option className='select-options'>Thriller</option>
                                    <option className='select-options'>Western</option>
                                </Form.Select>
                            </div>

                            <div className='col form-col custom-select'>
                                {/* <img src={Language} alt='langauage' /> */}
                                <span className='label'>Language</span>
                                <Form.Select aria-label="Default select example">
                                    <option className='select-options' >Select a Language</option>
                                    <option className='select-options'>English</option>
                                    <option className='select-options'>French</option>
                                    <option className='select-options'>Hindi</option>
                                    <option className='select-options'>Mandarin</option>
                                    <option className='select-options'>Punjabi</option>
                                    <option className='select-options'>Telugu</option>
                                </Form.Select>
                            </div>

                            <div className='col form-col custom-select'>
                                {/* <img src={Rating} alt='rating' /> */}
                                <span className='label'>Rating</span>
                                <Form.Select aria-label="Default select example">
                                    <option className='select-options' >Select a Rating</option>
                                    {rating.map((rating) => (
                                        <option className='select-options' key={rating.id}>{rating.name}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container container-bottom'>
                {movies.slice().reverse().map((movie) => (
                    <div className='movie' key={movie.id}>
                        <Link to={`/movies/${movie.id}`}><img src={movie.image} alt='poster' width={255} height={357} /></Link>
                        <div className='movie-title'>
                            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>{movie.title}</h5></Link>
                        </div>
                        <div className='movie-row'>
                            <div className='col movie-col'><img src={star} alt='star' width={18} style={{ marginRight: 7 }} /> {movie.star_rating.map((rating) => rating.star)}</div>
                            <div className='col movie-col'><img src={cake} alt='cake' style={{ marginRight: 7 }} /> 90%</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
