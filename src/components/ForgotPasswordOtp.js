import React, { useState, useEffect, useRef } from 'react'; 
import { Row, Col, Button, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [modalVisible, setModalVisible] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const otpInputs = useRef([]);

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

  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    console.log('Email:', email);
    setShowOtpSection(true); // Show OTP section and button
    setTimerActive(true); // Start the timer
  };

  const handleSubmit = () => {
    console.log('Entered OTP:', otp.join(''));
    console.log('Email:', email);
    setTimerActive(false); // Stop the timer
    navigate("/new-password"); // Navigate to new password page after verification
  };

  const handleResendOtp = () => {
    setTimeLeft(300); // Reset timer to 5 minutes
    setModalVisible(false);
    setTimerActive(true); // Restart the timer
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

        {/* OTP Input Fields and Timer */}
        {showOtpSection && (
          <>
            <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>{email}</p>
            <p style={{ color: 'green', fontWeight: 'bold' }}>{`00:${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`}</p>

            {/* OTP Input Fields */}
            <Row gutter={10} justify="center" style={{ marginBottom: '20px' }}>
              {otp.map((digit, index) => (
                <Col key={index}>
                  <Input
                    ref={el => otpInputs.current[index] = el}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    style={{ 
                      width: '40px', 
                      height: '50px', 
                      textAlign: 'center', 
                      fontSize: '18px', 
                      borderRadius: '8px', 
                      border: '1px solid pink' // Pink border
                    }}
                  />
                </Col>
              ))}
            </Row>

            {/* Submit Button */}
            <Button 
              type="primary" 
              style={{ 
                width: '100%', 
                height: '45px', 
                borderRadius: '8px', 
                backgroundColor: 'darkslateblue',
                color: '#fff' // White text
              }} 
              onClick={handleSubmit} // Single onClick handler for form submission and navigation
            >
              Verify and Proceed
            </Button>

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
        visible={modalVisible}
        onOk={handleResendOtp}
        onCancel={() => setModalVisible(false)}
      >
        <p>Time's up. Please resend the OTP.</p>
      </Modal>
    </Row>
  );
};

export default ForgotPasswordOtp;
