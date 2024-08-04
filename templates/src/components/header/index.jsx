import './style.css';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


export const Header = () => {

    const [token, setToken] = useState(null);

    useEffect(() => {
        // Simulate fetching token from localStorage or an API
        const storedToken = localStorage.getItem('token'); // Adjust according to your storage method
        setToken(storedToken);
    }, []);

    const handleLogout = () => {
        // Remove token and perform other logout logic
        localStorage.removeItem('token');
        setToken(null);
    };
    return (
        <div className="container-header">
            <div className="row header-row">
                <div className="col-2 header-col-1">
                    <img src={logo} alt='' />
                </div>
                <div className="col-8 header-col-2">
                    <Link className='header-menu'><h4>Home</h4></Link>
                </div>
                <div className="col-2 header-col-3">
                    {token ? (
                        <button className='join-btn' onClick={handleLogout}>Logout</button>
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