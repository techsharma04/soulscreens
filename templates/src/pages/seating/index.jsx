import { Header } from '../../components/header'
import './style.css'
import screen from "../../assets/images/screen-thumb.png";
import seatBlack from '../../assets/images/seat-black.png';
import seatGreen from '../../assets/images/seat-green.png';
import seatBooked from '../../assets/images/seat-booked.png';

const Seat = () => {
    return (
        <div className='container-fluid container-seating'>
            <Header />
            <div className='container-seat'>
                <div className='seat-header'>
                    <span style={{ marginRight: '25px' }}>MON, July 31, 2024</span>
                    <button className='btn-button'>09:40 PM</button>
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
                            <div><img src={seatBooked} alt="chairs" /><small>G1</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G2</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G3</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>G4</small></div>
                        </div>
                        <div className='chairs'>
                            <div><img src={seatBlack} alt="chairs" /><small>G5</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>G6</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G7</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G8</small></div>
                            <div><img src={seatGreen} alt="chairs" /><small>G9</small></div>
                            <div><img src={seatGreen} alt="chairs" /><small>G10</small></div>
                        </div>
                        <div className='chairs'>
                            <div><img src={seatBlack} alt="chairs" /><small>G11</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G12</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>G13</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>G14</small></div>
                        </div>
                        <div className='chairs'>G</div>
                    </div>

                    <div className='seat-chairs'>
                        <div className='chairs'>F</div>
                        <div className='chairs'>
                            <div><img src={seatBlack} alt="chairs" /><small>F1</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F2</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>F3</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F4</small></div>
                        </div>
                        <div className='chairs'>
                            <div><img src={seatBlack} alt="chairs" /><small>F5</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>F6</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F7</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F8</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F9</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F10</small></div>
                        </div>
                        <div className='chairs'>
                            <div><img src={seatBlack} alt="chairs" /><small>F11</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>F12</small></div>
                            <div><img src={seatBlack} alt="chairs" /><small>F13</small></div>
                            <div><img src={seatBooked} alt="chairs" /><small>F14</small></div>
                        </div>
                        <div className='chairs'>F</div>
                    </div>
                </div>
                <div className='seat-total-count'>
                    <div className='seat-total'>
                        <div className='seat-total-row-div'>
                            <span>You have choosed seat</span>
                            <h1>G9, G10</h1>
                        </div>
                        <div className='seat-total-row-div'>
                            <span>total price</span>
                            <h1>300</h1>
                        </div>
                        <div>
                            <button className='btn-button btn-proceed'>Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seat