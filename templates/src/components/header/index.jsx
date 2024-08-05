import './style.css';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { loginSuccess } from '../../redux/action/LoginAction';
import { useDispatch, useSelector } from 'react-redux';


export const Header = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState(null);
    const { csrfToken, user } = useSelector((state) => state.login);

    useEffect(() => {
        setToken(csrfToken);
    }, []);
    
    const handleLogout = () => {
        // Remove token and perform other logout logic
        dispatch(loginSuccess('', '', ''));
        setToken(null);
    };
    return (
        <div className="container-header">
            <div className="row header-row">
                <div className="col-2 header-col-1">
                    <img src={logo} alt='' />
                </div>
                <div className="col-2 header-col-2">
                    <Link to='/' className='header-menu'><h4>Home</h4></Link>
                </div>
                <div className="col-8 header-col-3">
                    {token ? (
                        <>
                            <h4>Hello, {user.name}</h4>
                            <button className='join-btn' onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link to='/signup'>
                            <button className='join-btn'>Join Us</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};