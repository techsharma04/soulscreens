import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Form, FormCheck, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../redux/action/FetchUsersAction';
import loaderImg from '../../../assets/images/loader.gif';

export const ForgotPasswordComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { loading, users, error } = useSelector(state => state.user);
    const { errorMsg, setErrorMsg } = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchUsers(email));
        let timer;
        if (users) {
            setLoader(true);
            timer = setTimeout(() => {
                navigate(`/confirmation-code/${email}`);
            }, 2000);
        }

        // Cleanup the timer if the component unmounts or if message changes
        return () => clearTimeout(timer);
    };

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>LOST PASSWORD!</h3>
                    <h4 style={{ fontWeight: 700, marginBottom: '30px' }}>NO PROBLEM. WE ARE HERE FOR YOU</h4>
                </div>
                {error && error === 500 ? (<Alert variant="danger" style={{ marginTop: '20px' }}>Email not found</Alert>) : ''}
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

                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit">
                        {loader === true ? (<img src={loaderImg} alt="loader" style={{ height: '40px' }} />) : (<>Send Email</>)}
                    </Button>
                </div>
            </form>
        </div>
    );
};


