import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormCheck, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signupFailure, submitForm } from '../../../redux/action/SignupAction';
import loaderImg from '../../../assets/images/loader.gif';



export const SignupComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { message, error } = useSelector((state) => state.signup);
    const [loader, setLoader] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);

        if (event.target.password.value !== event.target.confirmPassword.value) {
            dispatch(signupFailure('Passwords do not match'));
            setLoader(false);
            return;
        }

        dispatch(signupFailure(''));

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        };
        

        dispatch(submitForm(formData));

    };


    useEffect(() => {
        let timer;
        if (message) {
            // Set a 2-second delay before redirecting
            timer = setTimeout(() => {
                navigate('/login');
            }, 2000);
        } else if (error) {
            setLoader(false);
        }

        // Cleanup the timer if the component unmounts or if message changes
        return () => clearTimeout(timer);
    }, [message, error, navigate]);

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>WELCOME</h3>
                    <h1 style={{ fontWeight: 700, marginBottom: '30px' }}>SOUL SCREENS</h1>
                </div>
                {error && (<Alert variant="danger" style={{ marginTop: '20px' }}>{error}</Alert>)}
                {message && (<Alert variant="primary" style={{ marginTop: '20px' }}>{message}</Alert>)}
                <Form.Group>
                    <Form.Label htmlFor="inputName">Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputName"
                        name="name"
                        aria-describedby="nameHelpBlock"
                        placeholder="Enter Your Full Name"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control
                        type="email"
                        id="inputEmail"
                        name="email"
                        aria-describedby="emailHelpBlock"
                        placeholder="Enter Your Email"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword"
                        name="password"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Confirm Password"
                        required
                    />
                </Form.Group>

                <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between', marginTop: '15px' }}>
                    <FormCheck /><span>I agree to the <span style={{ color: '#30d7a9' }}>Terms, Privacy Policy</span> and <span style={{ color: '#30d7a9' }}>Fees</span></span>
                </div>

                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit" disabled={message}>
                        {loader === true ? (<img src={loaderImg} alt="loader" style={{ height: '40px' }} />) : (<>Sign Up</>)}
                    </Button>
                    <span style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>
                        Already have an account? <Link to='/login' style={{ color: '#31d7a9' }}>Login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};
