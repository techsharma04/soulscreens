import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeats } from '../../redux/action/FetchSeatsAction';
import { Header } from '../../components/header';
import './style.css';
import { Modal, Button, Table } from 'react-bootstrap';
import screen from "../../assets/images/screen-thumb.png";
import seatBlack from '../../assets/images/seat-black.png';
import seatGreen from '../../assets/images/seat-green.png';
import seatBooked from '../../assets/images/seat-booked.png';
import { fetchMovie } from '../../redux/action/FetchMovieAction';
import { fetchCity } from '../../redux/action/FetchSingleCityAction';
import { fetchLanguage } from '../../redux/action/FetchLanguageAction';
import movieposter from '../../assets/images/movie-poster1.gif';
import { useParams } from 'react-router-dom';
import { submitBooking } from '../../redux/action/BookingActions';
import SuccessModal from '../../components/modal/SuccessModal';

const Seat = () => {
    const { ctid, cid, mid, tid, lid, did } = useParams();
    const dispatch = useDispatch();
    const { city } = useSelector(state => state.city);
    const movie = useSelector(state => state.movie.movie);
    const { language } = useSelector(state => state.language);
    const { loading, bookingData, error } = useSelector(state => state.book);
    const [seatAlert, setSeatAlert] = useState('');
    const [cinemas, setCinemas] = useState([]);
    const [timings, setTimings] = useState([]);
    const [seats, setSeats] = useState([]);
    const [checkedSeats, setCheckedSeats] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (bookingData.message) {
            setShowAlert(true)
        }
    }, [bookingData]);

    // Fetch seats on component mount
    useEffect(() => {
        dispatch(fetchSeats(mid));
        dispatch(fetchMovie(mid));
        dispatch(fetchCity(ctid));
        dispatch(fetchLanguage(lid));
        dispatch(submitBooking());
    }, [dispatch]);

    // Format the date
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString('en-US', options);
    };

    const formattedDate = formatDate(did);

    useEffect(() => {
        if (movie && movie.cinema) {
            // Store all cinemas with id === 1
            const allCinemas = movie.cinema.filter(cinema => cinema.id === parseInt(cid));

            // Extract all timings from cinemas where value === 1
            const allTimings = allCinemas.flatMap(cinema =>
                (cinema.timing || []).filter(time => time.id === parseInt(tid))
            );

            // Extract all seats from filtered timings
            const allSeats = allTimings.flatMap(time => time.seats || []);

            // Store cinemas, timings, and seats separately
            setCinemas(allCinemas);
            setTimings(allTimings);
            setSeats(allSeats);
            setCheckedSeats(Array(allSeats.length).fill(false)); // Initialize with false
        }
    }, [movie]);


    // Define the states to store the separate arrays


    const handleSeatClick = (seatId) => {
        const newCheckedSeats = { ...checkedSeats };
        const seat = seats.find(seat => seat.seat === seatId);

        newCheckedSeats[seatId] = !newCheckedSeats[seatId]; // Toggle the checked state of the clicked seat

        let newSelectedSeats = [...selectedSeats];

        if (newCheckedSeats[seatId]) {
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
        if (totalPrice === 0) {
            setSeatAlert('row-alert');
            setTimeout(() => {
                setSeatAlert(''); // Reset the alert class after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        } else {
            setShowModal(true);
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = prompt("Enter your email");

        // Create booking data from form
        const bookingData = {
            email: email,
            movie: movie.title,
            theatre: cinemas.find((cinema) => cinema.id === parseInt(cid))?.name,
            location: city.name,
            language: language.find(lang => lang.id === parseInt(lid))?.name,
            date: formattedDate,
            time: timings.find(time => time.id === parseInt(tid))?.time,
            seats: selectedSeats.map(seat => ({
                seat: seat.seatNumber,
                price: seat.price,
            })),
            amount_paid: totalPrice,
        };
        dispatch(submitBooking(bookingData));
    };

    return (
        <div className='container-fluid container-seating'>
            <Header />
            <div className="timing-banner">
                <div className="timing-details">
                    <div style={{ position: 'absolute', width: '100%', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <h1 style={{ fontSize: '100px', top: 150, left: '42%', fontFamily: 'fantasy', textTransform: 'uppercase', color: 'rgb(0, 176, 240, 1)' }}>{movie.title}</h1>
                        <p>{language.find(lang => lang.id === parseInt(lid))?.name}</p>
                    </div>
                    <img src={movieposter} alt="movie-poster" style={{ position: 'absolute', right: 100, opacity: '.2', width: '800px' }} />
                    <div className='timing-details-row'>
                        <div className='timing-top-row'>
                            <div className='container-seat'>
                                <div className='seat-header'>
                                    <span style={{ marginRight: '25px' }}>{formattedDate}</span>
                                    <button className='btn-button'>
                                        {timings.map((time, index) => (
                                            <span key={index}>{time.time}</span>  // Display time for filtered timings
                                        ))
                                        }
                                    </button>
                                </div>
                                <div className='seat-screen'>
                                    <hr style={{ width: '280px' }} />
                                    <h2>Screen</h2>
                                    <span style={{ color: '#ccc', textTransform: 'uppercase' }}>({cinemas.map((cinema) => cinema.name)})</span>
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
                                <div className={`seat-rows ${seatAlert}`}>
                                    <div className='seat-chairs'>
                                        <div className='chairs'>G</div>
                                        <div className='chairs'>
                                            {seats.slice(0, 4).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
                                                    )}
                                                    <small>{seat.seat}</small>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='chairs'>
                                            {seats.slice(4, 10).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
                                                    )}
                                                    <small>{seat.seat}</small>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='chairs'>
                                            {seats.slice(10, 14).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
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
                                            {seats.slice(14, 18).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
                                                    )}
                                                    <small>{seat.seat}</small>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='chairs'>
                                            {seats.slice(18, 24).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
                                                    )}
                                                    <small>{seat.seat}</small>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='chairs'>
                                            {seats.slice(24, 28).map((seat) => (
                                                <div
                                                    key={seat.seat}
                                                    onClick={() => handleSeatClick(seat.seat)}
                                                    style={{ cursor: seat.status === 'vacant' ? 'pointer' : 'not-allowed' }}
                                                >
                                                    {seat.status === 'vacant' ? (
                                                        checkedSeats[seat.seat] ? (
                                                            <img src={seatGreen} alt="Checked" style={{ opacity: 1 }} />
                                                        ) : (
                                                            <img src={seatBlack} alt="Unchecked" />
                                                        )
                                                    ) : (
                                                        <img src={seatBooked} alt="Booked" />
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
                        </div>
                    </div>
                </div>
            </div>

            <Modal size='lg' show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ background: '#02122e', color: '#fff' }}>
                    <Modal.Title>Booking Summary</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: '#02122e', color: '#fff' }}>
                    <form method="POST" onSubmit={handleSubmit}>
                        <input type="hidden" name="movieTitle" value={movie.title} />
                        <input type="hidden" name="city" value={city.name} />
                        <input type="hidden" name="theatre" value={cinemas.map((cinema) => cinema.name)} />
                        <input type="hidden" name="language" value={language.find(lang => lang.id === parseInt(lid))?.name} />
                        <input type="hidden" name="date" value={formattedDate} />
                        <input type="hidden" name="time" value={timings.find(time => time.id === parseInt(tid))?.time} />
                        {selectedSeats.map((seat, index) => (
                            <div key={index}>
                                <input type="hidden" name={`seats[${index}][seatNumber]`} value={seat.seatNumber} />
                                <input type="hidden" name={`seats[${index}][price]`} value={seat.price} />
                            </div>
                        ))}
                        <input type="hidden" name="totalPrice" value={totalPrice} />

                        <Table className='table-dark' striped bordered hover responsive >
                            <tbody>
                                <tr>
                                    <th>Movie Title</th>
                                    <td>{movie.title}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{city.name}</td>
                                </tr>
                                <tr>
                                    <th>Theatre</th>
                                    <td style={{ textTransform: 'capitalize' }}>{cinemas.map((cinema) => cinema.name)}</td>
                                </tr>
                                <tr>
                                    <th>Language</th>
                                    <td>{language.find(lang => lang.id === parseInt(lid))?.name}</td>
                                </tr>
                                <tr>
                                    <th>Date & Time</th>
                                    <td>{formattedDate} @ {timings.find(time => time.id === parseInt(tid))?.time}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <h5>Selected Seats:</h5>
                        <Table className='table-dark' striped bordered hover responsive>
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
                        <h5 style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 25 }}>Total Amount: ₹ {totalPrice}</h5>

                        <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button type="button" variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="info">
                                {loading ? 'Loading...' : 'Confirm my booking'} </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
            <SuccessModal show={showAlert} handleClose={() => setShowAlert(false)} />
        </div >
    );
};

export default Seat;
