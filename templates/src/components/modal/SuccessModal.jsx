import { Flex } from 'antd';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ show, handleClose }) => {

    const navigate = useNavigate();

    const handleok = () => {
        navigate('/login')
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} centered >
            <Modal.Body className="text-center">
                <div style={{ padding: '25px', height: '250px' }}>
                    <div style={{ fontSize: '50px', color: '#28a745', paddingBottom: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><span style={{ background: '#82ce34', padding:'10px 15px', borderRadius: 50, position:'absolute', top:'-50px'}}>✔</span></div>
                    <h2 style={{color: '#aaa'}}>Awesome!</h2>
                    <p>Your booking has been confirmed. <br />Please wait for redirection... </p>
                    <Button variant="dark" onClick={handleok} style={{background: '#28a745', border: 0, width: 150}}>OK</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SuccessModal;
