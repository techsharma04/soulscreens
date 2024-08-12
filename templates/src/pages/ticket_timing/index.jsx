import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header'
import './style.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { fetchCinemas } from '../../redux/action/FetchCinemasAction';

const Timing = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCinemas());
    }, [dispatch]);

    const { cinemas } = useSelector(state => state.cinemas);
    console.log(cinemas);
    




    return (
        <div className='container-fluid container-timing'>
            <Header />
            <div className='container-time'>
                {cinemas.map((cinema, index) => (
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
                                        {cinema.time.map((value, tindex) => (
                                            <td style={{width:'100px'}}>
                                                <Link to={`/seatselection/${cinema.id}/${value.id}`}><button className='btn btn-primary time-btn' key={tindex}>{value.time}</button></Link>
                                            </td>

                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}




            </div>
        </div>
    )
}

export default Timing