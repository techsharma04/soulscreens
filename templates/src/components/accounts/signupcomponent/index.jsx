import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormCheck, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { setPassword, setConfirmPassword, setError, submitForm } from '../../../redux/action/SignupAction';

export const SignupComponent = () => {
    const dispatch = useDispatch();
    const password = useSelector((state) => state.signup.password);
    const confirmPassword = useSelector((state) => state.signup.confirmPassword);
    const submitSuccess = useSelector((state) => state.signup.submitSuccess);
    const submitError = useSelector((state) => state.signup.submitError);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState(''); // 'success' or 'error'

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            dispatch(setError('Passwords do not match'));
            setModalMessage('Passwords do not match');
            setModalType('error');
            setShowModal(true);
            return;
        }

        dispatch(setError(''));
        setModalMessage(''); // Clear previous messages

        const formData = {
            email: event.target.email.value,
            password: password
        };

        dispatch(submitForm(formData));
    };

    // Show modal based on redux state changes
    React.useEffect(() => {
        if (submitSuccess) {
            setModalMessage('Form submitted successfully!');
            setModalType('success');
            setShowModal(true);
        } else if (submitError) {
            setModalMessage(submitError);
            setModalType('error');
            setShowModal(true);
        }
    }, [submitSuccess, submitError]);

    const handleClose = () => setShowModal(false);

    return (
        <div>
            <form className="signup-container" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#31d7a9', marginBottom: '30px' }}>WELCOME</h3>
                    <h1 style={{ fontWeight: 700, marginBottom: '30px' }}>SOUL SCREENS</h1>
                </div>
                
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
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
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
                        value={confirmPassword}
                        onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                        aria-describedby="passwordHelpBlock"
                        placeholder="Confirm Password"
                        required
                    />
                </Form.Group>

                <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between', marginTop: '15px' }}>
                    <FormCheck /><span>I agree to the <span style={{ color: '#30d7a9' }}>Terms, Privacy Policy</span> and <span style={{ color: '#30d7a9' }}>Fees</span></span>
                </div>

                <div style={{ display: "flex", flexDirection: 'column', marginTop: '50px' }}>
                    <Button size="lg" className="signup-btn" type="submit" disabled={submitSuccess}>Sign Up</Button>
                    <span style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>
                        Already have an account? <Link to='/login' style={{ color: '#31d7a9' }}>Login</Link>
                    </span>
                </div>
            </form>

            {/* Modal for success/error messages */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType === 'success' ? 'Success' : 'Error'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: modalType === 'success' ? 'green' : 'red' }}>{modalMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
