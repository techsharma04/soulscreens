import { Header } from '../../components/header';
import './style.css';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { fetchCities } from '../../redux/action/FetchCitiesAction';
import { fetchMovies } from '../../redux/action/FetchMoviesAction';
import { fetchRating } from '../../redux/action/FetchRatingAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenre } from '../../redux/action/FetchGenreAction';
import { fetchLanguage } from '../../redux/action/FetchLanguageAction';
import Spinner from 'react-bootstrap/Spinner';
import { Movies } from '../../components/movies';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Select } from 'antd';
import { fetchCinemas } from '../../redux/action/FetchCinemasAction';
import { fetchCity } from '../../redux/action/FetchSingleCityAction'

const Home = () => {
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.cities);
    const { city } = useSelector(state => state.city);
    const { cinemas } = useSelector(state => state.cinemas);
    const { rating } = useSelector(state => state.rating);
    const { loading, movies } = useSelector(state => state.movies);
    const { genre } = useSelector(state => state.genre);
    const { language } = useSelector(state => state.language);

    const [dates, setDates] = useState([]);
    const [filter, setFilter] = useState('filter-display-hide');

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCinema, setSelectedCinema] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [loadingPercentage, setLoadingPercentage] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1; // Increase by 10 each time
            });
        }, 50); // Update every 500ms

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {

        dispatch(fetchCities());
        dispatch(fetchCinemas());
        dispatch(fetchMovies());
        dispatch(fetchRating());
        dispatch(fetchGenre());
        dispatch(fetchLanguage());
        generateNext4Dates();
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



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Extract the input value from the event object
    };
    const handleCityChange = (e) => { e === undefined ? setSelectedCity('') : setSelectedCity(e); dispatch(fetchCity(e)); }
    const handleCinemaChange = (e) => e === undefined ? setSelectedCinema('') : setSelectedCinema(e);
    const handleDateChange = (e) => e === undefined ? setSelectedDate('') : setSelectedDate(e);
    const handleGenreChange = (e) => e === undefined ? setSelectedGenre('') : setSelectedGenre(e);
    const handleLanguageChange = (e) => e === undefined ? setSelectedLanguage('') : setSelectedLanguage(e);
    const handleRatingChange = (e) => e === undefined ? setSelectedRating('') : setSelectedRating(e);

    const filterMovies = () => {
        return movies.filter(movie => {
            const search = (searchTerm && typeof searchTerm === 'string') ? searchTerm.toLowerCase() : '';
            const matchesSearch = movie.title.toLowerCase().includes(search);
            const matchesCinema = selectedCinema === '' || (movie.cinema.map((cinema) => (cinema.name)).includes(selectedCinema));
            const matchesGenre = selectedGenre === '' || (movie.genre.map((genre) => (genre.name)).includes(selectedGenre));
            const matchesLanguage = selectedLanguage === '' || (movie.language.map((lang) => (lang.name)).includes(selectedLanguage));
            const matchesRating = selectedRating === '' || (movie.rating.map((rating) => (rating.name)).includes(selectedRating));

            return matchesSearch && matchesCinema && matchesGenre && matchesLanguage && matchesRating;
        });
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
            {/* movies search & filter start             */}
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
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <div className='filter' onClick={toggleFilter}></div>
                            </div>
                        </div>
                        <div className={`row ticket-form-row ${filter}`}>
                            <div className='col form-col'>
                                <span className='label'>City</span>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Search City"
                                    optionFilterProp="label"
                                    onChange={handleCityChange}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={cities.map((city, index) => ({
                                        value: city.id,
                                        label: city.name,
                                        key: index,
                                    }))}
                                />
                            </div>


                            <div className='col form-col custom-select'>
                                <span className='label'>Cinema</span>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Search Theatre"
                                    optionFilterProp="label"
                                    onChange={handleCinemaChange}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={city.cinemas && city.cinemas.map((cinema, index) => ({
                                        value: cinema.name,
                                        label: cinema.name,
                                        key: index,
                                    }))}
                                />
                            </div>


                            <div className='col form-col'>
                                <span className='label'>Date</span>
                                <Select
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Select a Date"
                                    onChange={handleDateChange}
                                    options={
                                        dates.map((date, index) => ({
                                            value: date,
                                            label: date,
                                            key: index,
                                        }))}
                                />
                            </div>


                            <div className='col form-col custom-select'>
                                <span className='label'>Genre</span>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Search Genre"
                                    optionFilterProp="label"
                                    onChange={handleGenreChange}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={genre.map((gen, index) => ({
                                        value: gen.name,
                                        label: gen.name,
                                        key: index,
                                    }))}
                                />
                            </div>


                            <div className='col form-col custom-select'>
                                <span className='label'>Language</span>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Search Language"
                                    optionFilterProp="label"
                                    onChange={handleLanguageChange}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={language.map((lang, index) => ({
                                        value: lang.name,
                                        label: lang.name,
                                        key: index,
                                    }))}
                                />
                            </div>

                            <div className='col form-col custom-select'>
                                <span className='label'>Rating</span>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    allowClear
                                    placeholder="Search Rating"
                                    optionFilterProp="label"
                                    onChange={handleRatingChange}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={rating.map((rate, index) => ({
                                        value: rate.name,
                                        label: rate.name,
                                        key: index,
                                    }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* movies search and filter finished */}
            {/* Fetching movies start*/}
            {loading ? (
                <div className="spinner-container position-fixed">
                    <Spinner
                        animation="border"
                        variant="light"
                        className="large-spinner"
                    />
                    <span className="spinner-text">
                        {/* <ProgressBar striped variant="danger" label={loadingPercentage} now={loadingPercentage} style={{width: '100%'}}/>  */}
                        {loadingPercentage}%</span>
                </div>
            ) : (
                <div className='container container-bottom'>
                    {filterMovies().slice().reverse().map((movie, index) => (
                        <Movies movie={movie} key={index} />
                    )
                    )
                    }
                </div>
            )}
            {/* fetching moviies finished             */}
        </div>
    );
};

export default Home;