import { Header } from '../../components/header';
import './style.css';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import cinema from '../../assets/images/cinema.png';
import date from '../../assets/images/date.png';
import city from '../../assets/images/city.png';
import poster from '../../assets/images/movie12.jpg';
import tomato from '../../assets/images/tomato.png';
import cake from '../../assets/images/cake.png';



const Home = () => {
    const [dates, setDates] = useState([]);
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

    // Call the function to generate dates when the component mounts
    useEffect(() => {
        generateNext4Dates();
    }, []);
    return (
        <div className='container-fluid home-bg'>
            <Header />
            <div className='container section-main'>
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
                            <div className='col'>
                                <Form.Control
                                    type="text"
                                    id="inputtext5"
                                    aria-describedby="textHelpBlock"
                                    placeholder='Search for movies'
                                />

                            </div>
                            <div className='col form-col'>
                                <img src={city} alt='city'/>
                                <span className='label'>City</span>
                                <Form.Select aria-label="select cities">
                                    <option className='select-options'>Select a City</option>
                                    <option className='select-options'>Brampton</option>
                                    <option className='select-options'>Mississauga</option>
                                    <option className='select-options'>Oakville</option>
                                    <option className='select-options'>Toronto</option>
                                </Form.Select>
                            </div>
                            <div className='col form-col'>
                                <img src={date} alt='date'/>
                                <span className='label'>Date</span>
                                <Form.Select aria-label="select dates">
                                    <option className='select-options' >Select date</option>
                                    {dates.map((date, index) => (
                                        <option className='select-options' key={index} value={date}>{date}</option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className='col form-col custom-select'>
                                <img src={cinema} alt='cinema'/>
                                <span className='label'>Cinema</span>
                                <Form.Select aria-label="Default select example">
                                    <option className='select-options' >Select a cinema</option>
                                    <option className='select-options'>Cineplex</option>
                                    <option className='select-options'>PVR</option>
                                    <option className='select-options'>Red Carpet</option>
                                </Form.Select>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='container container-bottom'>
                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                <div className='movie'>
                    <Link to='/movie-detail'><img src={poster} alt='poster' /></Link>
                    <div className='movie-title'>
                        <Link to='movie-detail' style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>The most wanted</h5></Link>
                    </div>
                    <div className='movie-row'>
                        <div className='col movie-col'><img src={tomato} alt='tomato'/> 9.3</div>
                        <div className='col movie-col'><img src={cake} alt='cake'/> 90%</div>
                        
                    </div>
                </div>

                

               

            </div>
        </div>
    );
};

export default Home;
