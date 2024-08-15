import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Form, FormCheck, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../redux/action/LoginAction';
import loaderImg from '../../../assets/images/loader.gif';

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, message, error } = useSelector((state) => state.login);
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setLoader(true);
        dispatch(login({ email, password }));
    };

    useEffect(() => {
        let timer;
        if (message) {
            // Set a 2-second delay before redirecting
            timer = setTimeout(() => {
                navigate('/');
            }, 2000);
        } else if(error){
            setLoader(false);
        }

        // Cleanup the timer if the component unmounts or if message changes
        return () => clearTimeout(timer);
    }, [message, error, navigate]);

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>HELLO</h3>
                    <h1 style={{ fontWeight: 700, marginBottom: '30px' }}>WELCOME BACK</h1>
                </div>
                {error && (<Alert variant="danger" style={{ marginTop: '20px' }}>{error}</Alert>)}
                {message && (<Alert variant="primary" style={{ marginTop: '20px' }}>{message}</Alert>)}
                <Form.Label htmlFor="inputEmail">Email</Form.Label>
                <Form.Control
                    type="email"
                    id="inputEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="emailHelpBlock"
                    placeholder="Enter Your Email"
                    required
                />
                <Form.Label htmlFor="inputPassword">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="passwordHelpBlock"
                    placeholder="Password"
                    required
                />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '25px' }}>
                    <span style={{ display: 'flex', width: '40%', justifyContent: 'space-between', color: '#6d7bba' }}>
                        <FormCheck />Remember Password
                    </span>
                    <Link to={`/retrieve-password`} style={{ textDecoration: 'none', color: '#6d7bba' }}>Forgot Password</Link>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit" disabled={loading}>
                        {loader === true ? (<img src={loaderImg} alt="loader" style={{ height: '40px' }} />) : (<>LOG IN</>)}
                    </Button>
                    <span style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>
                        Don't have an account? <Link to='/signup' style={{ color: '#31d7a9' }}>Sign up now</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};


