import './style.css';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { loginSuccess } from '../../redux/action/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Navbar, Nav, Button, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import dummy from '../../assets/images/dummy.png'
import { Flex } from 'antd';
import { fetchBookings } from '../../redux/action/FetchBookingActions';

export const Header = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(null);
    const { csrfToken, user } = useSelector((state) => state.login);
    const bookingData = useSelector((state) => state.fetchBook);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setToken(csrfToken);
        dispatch(fetchBookings(localStorage.getItem('email')))
    }, []);

    const handleLogout = () => {
        // Remove token and perform other logout logic
        dispatch(loginSuccess('', '', ''));
        handleClose()
        setToken(null);
    };
    return (
        <>
            <div className="container-header">
                <div className="row header-row ">
                    <div className="col-2 header-col-1">
                        <img src={logo} alt='' width={200}/>
                    </div>
                    <div className="col-2 header-col-2">
                        <Link to='/' className='header-menu'><h4>Home</h4></Link>
                    </div>
                    <div className="col-8 header-col-3">
                        {token ? (
                            <>
                                <h4>Hello, {user.name}</h4>
                                <button className='join-btn' onClick={handleShow}>My Account</button>
                            </>
                        ) : (
                            <Link to='/signup'>
                                <button className='join-btn' onClick={handleShow}>Join Us</button>
                            </Link>
                        )}
                    </div>
                </div>

                <Offcanvas show={show} onHide={handleClose} placement="end" className="ofcanvas">
                    <OffcanvasBody>
                        <Nav className="flex-column">
                            <div style={{ height: 250, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={dummy} alt="dummy" width={200} style={{ background: '#fff', borderRadius: 100, padding: 10 }} />
                            </div>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Profile</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="profile-content">
                                            <table className="profile-table">
                                                <tbody>
                                                    <tr>
                                                        <th>Name</th>
                                                        <td>{user.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Password</th>
                                                        <td>{user.password}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>My Bookings</Accordion.Header>
                                    <Accordion.Body>

                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                {bookingData.bookings.map((book, index) => (
                                                    book.email === localStorage.getItem('email') && (
                                                        <>
                                                            <Accordion.Header>Movie: {book.movie}</Accordion.Header>
                                                            <Accordion.Body>
                                                                <div className="profile-content">
                                                                    <table className="profile-table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <th>Movie</th>
                                                                                <td>{book.movie}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Email</th>
                                                                                <td>{book.email}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>City</th>
                                                                                <td>{book.location}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Theatre</th>
                                                                                <td>{book.theatre}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Language</th>
                                                                                <td>{book.language}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <td>{book.date}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Time</th>
                                                                                <td>{book.time}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Amount Paid</th>
                                                                                <td>{book.amount_paid}</td>
                                                                            </tr>
                                                                            {book.seats.map((seat, index) => {
                                                                                <>
                                                                                <tr>
                                                                                    <th>Seat</th>
                                                                                    <td>{seat.seat}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>Price</th>
                                                                                    <td>{seat.price}</td>
                                                                                </tr>
                                                                            </>
                                                                            })}

                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </Accordion.Body>
                                                        </>
                                                    )))}
                                            </Accordion.Item>
                                        </Accordion>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Nav>
                    </OffcanvasBody>

                    <Link className="text-light" style={{ padding: 25, background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleLogout}>Logout</Link>
                </Offcanvas>
            </div>



        </>
    );
};