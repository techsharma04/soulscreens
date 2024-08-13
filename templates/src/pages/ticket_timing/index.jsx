import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header'
import './style.css'
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovie } from '../../redux/action/FetchMovieAction';
import movieposter from '../../assets/images/movie-poster1.gif';
import { Select } from 'antd';
import { fetchCities } from '../../redux/action/FetchCitiesAction';
import { fetchCity } from '../../redux/action/FetchSingleCityAction'
import cityImg from '../../assets/images/city.png';
import cinemaImg from '../../assets/images/cinema.png';
import dateImg from '../../assets/images/date.png';
import expImg from '../../assets/images/exp.png';
import bannerAd from '../../assets/images/banner03.jpg';

const Timing = () => {
    const { id } = useParams();
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
    const [borderColor, setBorderColor] = useState('#d9d9d9');
    console.log(city);
    

    useEffect(() => {
        dispatch(fetchMovie(id));
        dispatch(fetchCities());
        generateNext4Dates();
    }, [dispatch, id]);

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

    const handleCityChange = (e) => { e === undefined ? setSelectedCity('') : setSelectedCity(e); dispatch(fetchCity(e)); }
    const handleDateChange = (e) => e === undefined ? setSelectedDate('') : setSelectedDate(e);
    const handleLanguageChange = (e) => e === undefined ? setSelectedLanguage('') : setSelectedLanguage(e);

    

    return (
        <div classname="container-fluid">
            <Header />
            <div className="timing-banner">
                <div className="timing-details">
                    <div style={{ position: 'absolute', width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '100px', top: 150, left: '42%', fontFamily: 'fantasy', textTransform: 'uppercase', color: 'rgb(0, 176, 240, 1)' }}>{movie.title}</h1>
                        <p>{movie.language && movie.language.map((lang, index) => lang.name).join(', ')}</p>
                    </div>
                    <img src={movieposter} alt="movie-poster" style={{ position: 'absolute', top: 100, right: 100, opacity: '.2', width: '800px' }} />
                    <div className='timing-details-row' >
                        <div className='timing-top-row'>
                            <div className='timing-input'>
                                <div className='timing-input-div'>
                                    <img src={cityImg} alt="city" />
                                    <span className='timing-label'>City</span>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        id='select-city'
                                        allowClear
                                        placeholder="Select City"
                                        optionFilterProp="label"
                                        onChange={handleCityChange}
                                        filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                        }
                                        options={cities && cities.map((city, index) => ({
                                            value: city.id,
                                            label: city.name,
                                            key: index,
                                        }))}
                                    />
                                </div>
                                <div className='timing-input-div'>
                                    <img src={expImg} alt="city" />
                                    <span className='timing-label'>Experience</span>
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
                                            value: lang.name,
                                            label: lang.name,
                                            key: index,
                                        }))}
                                    />
                                </div>
                                <div className='timing-input-div '>
                                    <img src={dateImg} alt="city" />
                                    <span className='timing-label'>Date</span>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        allowClear
                                        placeholder="Select Date"
                                        optionFilterProp="label"
                                        onChange={handleDateChange}
                                        options={
                                            dates.map((date, index) => ({
                                                value: date,
                                                label: date,
                                                key: index,
                                            }))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='timing-bottom-row'>
                            <div className="timing-bottom-inside-row">
                                {city.cinemas && city.cinemas.map((cinema, index) => (
                                    <div className='row time-row'>
                                        <div className='col-5 time-col time-col-1'>
                                            <div className='time-col-row'>
                                                <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                                                <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }} key={index}>{cinema.name}</span> </div>
                                            </div>
                                        </div>
                                        <div className='col-7  time-col time-col-2'>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        {movie.timing && movie.timing.map((value, tindex) => (
                                                            <td style={{ width: '100px' }}>
                                                                <button className='btn btn-primary time-btn' key={tindex} >{value.time}</button>
                                                            </td>

                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <img src={bannerAd} alt="banner" width='200px' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Timing