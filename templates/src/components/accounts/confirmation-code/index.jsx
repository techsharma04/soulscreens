import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Form, FormCheck, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../../redux/action/FetchUsersAction';
import loaderImg from '../../../assets/images/loader.gif';

export const ConfirmationCodeComponent = ({email}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [code, setCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        let timer;
        if (parseInt(code) === 123456) {
            setError('')
            timer = setTimeout(() => {
                navigate(`/create-new-password/${email}`);
            }, 2000);
        } else {
            setError('Verification code is incorrect... Please try again...')
            setLoader(false);
        }

        // Cleanup the timer if the component unmounts or if message changes
        return () => clearTimeout(timer);
    };

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>We are almost there!</h3>
                    <h4 style={{ fontWeight: 700, marginBottom: '30px' }}>Code has been sent on your email.</h4>
                </div>
                {error && (<Alert variant="danger" style={{ marginTop: '20px' }}>{error}</Alert>)}
                <Form.Label htmlFor="inputEmail">Temporary Code</Form.Label>
                <Form.Control
                    type="text"
                    id="inputEmail"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    aria-describedby="emailHelpBlock"
                    placeholder="Please enter your code here..."
                    required
                />

                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit">
                        {loader === true ? (<img src={loaderImg} alt="loader" style={{ height: '40px' }} />) : (<>Verify</>)}
                    </Button>
                </div>
            </form>
        </div>
    );
};


