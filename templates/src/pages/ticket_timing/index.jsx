import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header';
import './style.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovie } from '../../redux/action/FetchMovieAction';
import movieposter from '../../assets/images/movie-poster1.gif';
import { Select } from 'antd';
import { fetchCities } from '../../redux/action/FetchCitiesAction';
import { fetchCity } from '../../redux/action/FetchSingleCityAction';
import cityImg from '../../assets/images/city.png';
import dateImg from '../../assets/images/date.png';
import expImg from '../../assets/images/exp.png';
import bannerAd from '../../assets/images/banner03.jpg';

const Timing = () => {
    const { mid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const movie = useSelector(state => state.movie.movie);
    const { cities } = useSelector(state => state.cities);
    const { city } = useSelector(state => state.city);
    const [dates, setDates] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCinema, setSelectedCinema] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        dispatch(fetchMovie(mid));
        dispatch(fetchCities());
        generateNext4Dates();
    }, [dispatch, mid]);

    const generateNext4Dates = () => {
        const today = new Date();
        const next4Dates = [];
        for (let i = 0; i <= 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            next4Dates.push(nextDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
        }
        setDates(next4Dates);
    };

    const handleCityChange = (value) => {
        setSelectedCity(value || '');
        if (value) dispatch(fetchCity(value));
    };

    const handleDateChange = (value) => setSelectedDate(value || '');
    const handleLanguageChange = (value) => setSelectedLanguage(value || '');

    const handleProceed = (time, cinema) => {
        if (!selectedCity || !selectedDate || !selectedLanguage) {
            setIsFormValid(false);
            return;
        }
        
        navigate(`/city/${selectedCity}/cinemas/${cinema}/movies/${mid}/timing/${time}/language/${selectedLanguage}/seatselection/${selectedDate}`);
    };

    const filteredCinemas = movie.cinema?.filter(cinema => {
        const matchingLocation = selectedCity
            ? cinema.cities.some(city => city.id === selectedCity)
            : true; // If no city is selected, return true

        const matchingLanguage = selectedLanguage
            ? movie.language.some(lang => lang.id === selectedLanguage)
            : true; // If no language is selected, return true

        return matchingLocation && matchingLanguage;
    }) || [];

    return (
        <div className="container-fluid">
            <Header />
            <div className="timing-banner">
                <div className="timing-details">
                    <div style={{ position: 'absolute', width: '100%', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '100px', fontFamily: 'fantasy', textTransform: 'uppercase', color: 'rgb(0, 176, 240, 1)' }}>{movie.title}</h1>
                        <p>{movie.language && movie.language.map((lang, index) => lang.name).join(', ')}</p>
                    </div>
                    <img src={movieposter} alt="movie-poster" style={{ position: 'absolute', right: 100, opacity: '.2', width: '800px' }} />
                    <div className='timing-details-row'>
                        <div className='timing-top-row'>
                            <div className='timing-input'>
                                <div className={`timing-input-div ${!selectedCity && !isFormValid ? 'error-message' : ''}`}>
                                    <div className='time-input-div-2'>
                                        <img src={cityImg} alt="city" />
                                        <span className='timing-label'>City</span>
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            allowClear
                                            placeholder="Select City"
                                            optionFilterProp="label"
                                            onChange={handleCityChange}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            // Flatten and filter for unique city IDs
                                            options={
                                                movie.cinema && [...new Map(
                                                    movie.cinema
                                                        .filter((cinema) => cinema.cities) // Ensure cinema has cities
                                                        .flatMap((cinema) =>
                                                            cinema.cities.map((city) => ({
                                                                value: city.id,
                                                                label: city.name
                                                            }))
                                                        )
                                                        .map(city => [city.value, city]) // Create a Map with unique city IDs
                                                ).values()] // Extract only the unique city objects
                                            }
                                        />
                                    </div>
                                </div>
                                <div className={`timing-input-div ${!selectedLanguage && !isFormValid ? 'error-message' : ''}`}>
                                    <div className='time-input-div-2'>
                                        <img src={expImg} alt="language" />
                                        <span className='timing-label'>Language</span>
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            allowClear
                                            placeholder="Select Language"
                                            optionFilterProp="label"
                                            onChange={handleLanguageChange}
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            options={movie.language && movie.language.map((lang, index) => ({
                                                value: lang.id,
                                                label: lang.name,
                                                key: index,
                                            }))}
                                        />
                                    </div>
                                </div>
                                <div className={`timing-input-div ${!selectedDate && !isFormValid ? 'error-message' : ''}`}>
                                    <div className='time-input-div-2'>
                                        <img src={dateImg} alt="date" />
                                        <span className='timing-label'>Date</span>
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            allowClear
                                            placeholder="Select Date"
                                            optionFilterProp="label"
                                            onChange={handleDateChange}
                                            options={dates.map((date, index) => ({
                                                value: date,
                                                label: date,
                                                key: index,
                                            }))}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='timing-bottom-row'>
                            <div className="timing-bottom-inside-row">
                                {filteredCinemas.length > 0
                                    ? filteredCinemas.map((cinema, index) => (
                                        <div className='row time-row' key={index}>
                                            <div className='col-3 time-col time-col-1'>
                                                <div className='time-col-row'>
                                                    <div style={{ width: '50px' }}>
                                                        <i className="far fa-heart"></i>
                                                    </div>
                                                    <div style={{ width: '200px' }}>
                                                        <span style={{ cursor: 'pointer' }}>{cinema.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-9 time-col time-col-2'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            {cinema.timing && cinema.timing.map((time, tindex) => (
                                                                <td style={{ width: '100px' }} key={tindex}>
                                                                    <button className='btn btn-primary time-btn' onClick={() => handleProceed(time.id, cinema.id)}>{time.time}</button>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))
                                    : <p>No cinemas found matching the selected criteria</p>
                                }
                            </div>
                            <img src={bannerAd} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timing;
;
