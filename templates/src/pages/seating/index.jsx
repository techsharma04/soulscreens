import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeats } from '../../redux/action/FetchSeatsAction';
import { Header } from '../../components/header';
import './style.css';
import { Modal, Button, Table } from 'react-bootstrap';
import screen from "../../assets/images/screen-thumb.png";
import seatBlack from '../../assets/images/seat-black.png';
import seatGreen from '../../assets/images/seat-green.png';
import { fetchMovie } from '../../redux/action/FetchMovieAction'
import { fetchCity } from '../../redux/action/FetchSingleCityAction'
import { fetchLanguage } from '../../redux/action/FetchLanguageAction'

const Seat = () => {
    const dispatch = useDispatch();
    const { city } = useSelector(state => state.city);
    const { cinemas } = useSelector(state => state.cinemas);
    const { rating } = useSelector(state => state.rating);
    const movie = useSelector(state => state.movie.movie);
    const { genre } = useSelector(state => state.genre);
    const { language } = useSelector(state => state.language);


    // Fetch seats on component mount
    useEffect(() => {
        dispatch(fetchSeats());
        dispatch(fetchMovie(localStorage.getItem('movie')))
        dispatch(fetchCity(localStorage.getItem('city')))
        dispatch(fetchLanguage(localStorage.getItem('language')))
    }, [dispatch]);

    // Format the date
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString('en-US', options);
    };

    const formattedDate = formatDate(localStorage.getItem('date'));
    const seats = useSelector(state => state.seat.seats);

    const [checkedSeats, setCheckedSeats] = useState(Array(seats.length).fill(false));
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSeatClick = (index) => {
        const newCheckedSeats = [...checkedSeats];
        newCheckedSeats[index] = !newCheckedSeats[index]; // Toggle the checked state of the clicked seat

        const seat = seats[index];
        let newSelectedSeats = [...selectedSeats];

        if (newCheckedSeats[index]) {
            // Add the seat to selected seats
            newSelectedSeats.push({ seatNumber: seat.seat, price: seat.price });
        } else {
            // Remove the seat from selected seats
            newSelectedSeats = newSelectedSeats.filter(s => s.seatNumber !== seat.seat);
        }

        setCheckedSeats(newCheckedSeats);
        setSelectedSeats(newSelectedSeats);
    };

    const totalPrice = selectedSeats.reduce((total, seat) => total + parseInt(seat.price, 10), 0);

    const handleProceed = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };


    return (
        <div className='container-fluid container-seating'>
            <Header />
            <div className='container-seat'>
                <div className='seat-header'>
                    <span style={{ marginRight: '25px' }}>{formattedDate}</span>
                    <button className='btn-button'>{localStorage.getItem('time')}</button>
                </div>
                <div className='seat-screen'>
                    <hr style={{ width: '280px' }} />
                    <h2>Screen</h2>
                    <hr style={{ width: '350px' }} />
                </div>
                <div className='screen-img'>
                    <img src={screen} alt="screen-thumb" style={{ width: '850px' }} />
                </div>
                <div className='seat-screen silver-plus'>
                    <hr style={{ width: '280px' }} />
                    <h2>Silver plus</h2>
                    <hr style={{ width: '350px' }} />
                </div>
                <div className='seat-rows'>
                    <div className='seat-chairs'>
                        <div className='chairs'>G</div>
                        <div className='chairs'>
                            {seats.slice(0, 4).map((seat, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSeatClick(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>
                            {seats.slice(4, 10).map((seat, index) => (
                                <div
                                    key={index + 4} // Adjust the index for the next set of seats
                                    onClick={() => handleSeatClick(index + 4)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index + 4] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>
                            {seats.slice(10, 14).map((seat, index) => (
                                <div
                                    key={index + 10} // Adjust the index for the next set of seats
                                    onClick={() => handleSeatClick(index + 10)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index + 10] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>G</div>
                    </div>

                    <div className='seat-chairs'>
                        <div className='chairs'>H</div>
                        <div className='chairs'>
                            {seats.slice(14, 18).map((seat, index) => (
                                <div
                                    key={index + 14} // Adjust the index for the next set of seats
                                    onClick={() => handleSeatClick(index + 14)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index + 14] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>
                            {seats.slice(18, 24).map((seat, index) => (
                                <div
                                    key={index + 18} // Adjust the index for the next set of seats
                                    onClick={() => handleSeatClick(index + 18)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index + 18] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>
                            {seats.slice(24, 28).map((seat, index) => (
                                <div
                                    key={index + 24} // Adjust the index for the next set of seats
                                    onClick={() => handleSeatClick(index + 24)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {checkedSeats[index + 24] ? (
                                        <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                    ) : (
                                        <img src={seatBlack} alt="Unchecked" />
                                    )}
                                    <small>{seat.seat}</small>
                                </div>
                            ))}
                        </div>
                        <div className='chairs'>H</div>
                    </div>
                </div>

                <div className='seat-total-count'>
                    <div className='seat-total'>
                        <div className='seat-total-row-div'>
                            <span>You have chosen seats:</span>
                            <h4>{selectedSeats.map(seat => seat.seatNumber).join(', ')}</h4>
                        </div>
                        <div className='seat-total-row-div'>
                            <span>Total price:</span>
                            <h1>&#x20B9; {totalPrice}</h1>
                        </div>
                        <div>
                            <button className='btn-button btn-proceed' onClick={handleProceed}>Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal size='lg' show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Verify Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover responsive>
                        <tbody>
                            <tr>
                                <td>Movie Title</td>
                                <td>{movie.title}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{city.name}</td>
                            </tr>
                            <tr>
                                <td>Theatre</td>
                                <td>Regal Cinemas</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>
                                    {language.map((lang, index) =>
                                        lang.id === parseInt(localStorage.getItem('language')) ? lang.name : ''
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{formattedDate}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{localStorage.getItem('time')}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h5>Selected Seats:</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Seat</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedSeats.map((seat, index) => (
                                <tr key={index}>
                                    <td>{seat.seatNumber}</td>
                                    <td>₹ {seat.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h5>Total Amount: ₹ {totalPrice}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert('Proceeding with booking')}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default Seat;
