import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Form, FormCheck, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../redux/action/FetchUsersAction';
import loaderImg from '../../../assets/images/loader.gif';
import { createUserPassword } from '../../../redux/action/CreateUsersAction';

export const CreateNewPasswordComponent = ({ email }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const { loading, users, error: errormsg } = useSelector(state => state.createUser);

    const handleSubmit = (event) => {
        event.preventDefault();

        let timer;
        if (pass !== cpass) {
            setError('Password and Confirm Passwords are not same.')
        } else if (pass === cpass) {
            setError('')
            setLoader(true);
            timer = setTimeout(() => {
                dispatch(createUserPassword(email, pass))
            }, 2000);
            navigate('/login');
        }

        // Cleanup the timer if the component unmounts or if message changes
        return () => clearTimeout(timer);
    };

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>Hurraaayyy!</h3>
                    <h4 style={{ fontWeight: 700, marginBottom: '30px' }}>Create new password now.</h4>
                </div>
                {error && (<Alert variant="danger" style={{ marginTop: '20px' }}>{error}</Alert>)}
                <Form.Label htmlFor="inputEmail">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputEmail"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    aria-describedby="emailHelpBlock"
                    placeholder="Enter new password here..."
                    required
                />
                <Form.Label htmlFor="inputEmail">Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputEmail"
                    value={cpass}
                    onChange={(e) => setCpass(e.target.value)}
                    aria-describedby="emailHelpBlock"
                    placeholder="Enter new password here..."
                    required
                />
                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit">
                        {loader === true ? (<img src={loaderImg} alt="loader" style={{ height: '40px' }} />) : (<>Create new password now</>)}
                    </Button>
                </div>
            </form>
        </div>
    );
};


