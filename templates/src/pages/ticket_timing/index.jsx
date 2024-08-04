import { Header } from '../../components/header'
import './style.css'
import { Link } from "react-router-dom";

const Time = () => {
    return (
        <div className='container-fluid container-timing'>
            <Header />
            <div className='container-time'>
                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>ABC Theatre</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Cinemark</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>AMC Theatre</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Odeon Cinemas</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Palace Cinemas</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Regal Cinemas</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Cinepolis</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>Vue Cinemas</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>

                <div className='row time-row'>
                    <div className='col-5 time-col time-col-1'>
                        <div className='time-col-row'>
                            <div style={{ width: '50px' }}> <i class="far fa-heart"></i> </div>
                            <div style={{ width: '200px' }}> <span style={{ cursor: 'pointer' }}>PVR Cinemas</span> </div>
                        </div>
                    </div>
                    <div className='col-7  time-col time-col-2'>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>12:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>03:45 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>09:00 PM</button></Link>
                        <Link to='/movie-seating'><button className='btn btn-primary time-btn'>10:15 PM</button></Link>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Time