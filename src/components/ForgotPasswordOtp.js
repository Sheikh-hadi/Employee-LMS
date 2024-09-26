import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { OtpForgetPassword } from './OtpForgetPassword';
import usePostCheckMail from '../Hooks/UserHook/usePostCheckMail';
import usePostotp from '../Hooks/otp/usePostOtpHook';

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [modalVisible, setModalVisible] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const { mutate: checkMail, data } = usePostCheckMail()
  const {mutate: otp} =  usePostotp({ setShowOtpSection, setTimerActive })
  // console.log("data", data)


  useEffect(() => {
    if (timeLeft === 0) {
      setModalVisible(true);
      setTimerActive(false);
      return;
    }
    if (timerActive) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }

  }, [timeLeft, timerActive]);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    checkMail({ email })
    if (data) {
      otp({ email })
      setShowOtpSection(true);
      console.log("data", data)
      setTimerActive(true);
    }

  };

  const handleSubmit = (data) => {
    console.log('Email:', email);
    setTimerActive(data);
    navigate("/new-password");
  };

  const handleResendOtp = () => {
    setTimeLeft(300);
    setModalVisible(false);
    setTimerActive(true);
  };

  return (
    <Row justify="center" style={{ height: '80vh', backgroundColor: '#fff', alignItems: 'center' }}>
      <Col span={24} style={{ maxWidth: '450px', padding: '20px', backgroundColor: '#fff', borderRadius: '30px', boxShadow: '0px 14px 20px rgba(0,0,0,0.3)' }}>
        <div style={{ borderRadius: '20px', backgroundColor: '#f7f7f7', padding: '10px', marginBottom: '20px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
          <img
            src="OTPLOGO.png" // Placeholder for logo
            alt="Logo"
            style={{ display: 'block', margin: '0 auto 10px', borderRadius: '50%', border: '2px solid #e0e0e0' }}
          />
        </div>
        <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>OTP Verification</h2>
        <p>We have sent an OTP to the email</p>

        {/* Email Input and Submit Button */}
        {!showOtpSection && (
          <>
            <Input
              value={email}
              onChange={handleEmailChange}
              style={{ marginBottom: '20px' }}
              placeholder="Enter your email"
            />
            <Button
              type="primary"
              style={{
                width: '100%',
                height: '45px',
                borderRadius: '8px',
                backgroundColor: 'darkslateblue',
                color: '#fff' // White text
              }}
              onClick={handleEmailSubmit}
            >
              Submit
            </Button>
          </>
        )}

        {showOtpSection && (
          <>
            <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>{email}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>{`00:${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`}</p>

            <OtpForgetPassword handleSubmit={handleSubmit} />


            {/* Resend OTP */}
            <p style={{ marginTop: '10px', color: 'darkslateblue', cursor: 'pointer' }} onClick={() => handleResendOtp()}>
              Resend OTP
            </p>
          </>
        )}
      </Col>

      {/* Modal for Timeout */}
      <Modal
        title="Error"
        open={modalVisible}
        onOk={handleResendOtp}
        onCancel={() => setModalVisible(false)}
      >
        <p>Time's up. Please resend the OTP.</p>
      </Modal>
    </Row>
  );
};

export default ForgotPasswordOtp;
