import React from 'react';
import { Button, Row, Col } from 'antd';

const Footer = () => {
  // Inline styles for each section
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const menuStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '16px',
  };

  const authButtonStyle = {
    borderRadius: '20px',
    border: '1px solid #540c81',
    color: '#540c81',
  };

  const signInStyle = {
    ...authButtonStyle,
    backgroundColor: '#540c81',
    color: '#fff',
    marginRight: '10px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingTextStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
  };

  const subHeadingTextStyle = {
    fontSize: '28px',
    marginTop: '10px',
    color: '#000',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#777',
    margin: '20px 0',
    maxWidth: '500px',
  };

  const buttonStyle = {
    backgroundColor: '#540c81',
    color: '#fff',
    borderRadius: '20px',
    padding: '10px 30px',
    marginRight: '10px',
  };

  const learnMoreButtonStyle = {
    backgroundColor: 'transparent',
    color: '#540c81',
    borderRadius: '20px',
    padding: '10px 30px',
    border: '1px solid #540c81',
  };

  const imageContainerStyle = {
    textAlign: 'center',
    marginTop: '30px',
  };

  const personImageStyle = {
    width: '250px',
    borderRadius: '50%',
  };

  const progressStyle = {
    textAlign: 'center',
    marginTop: '30px',
  };

  const dotStyle = {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    backgroundColor: '#540c81',
    borderRadius: '50%',
    margin: '0 5px',
  };

  return (
    <div>
      {/* Navbar */}
      <div style={navbarStyle}>
        <div style={logoStyle}>Logo</div>
        <div style={menuStyle}>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Service</a>
          <a href="/">Blog</a>
        </div>
        <div>
          <Button style={signInStyle}>Sign In</Button>
          <Button style={authButtonStyle}>Log In</Button>
        </div>
      </div>

      {/* Header Section */}
      <div style={headerStyle}>
        <h1 style={subHeadingTextStyle}>We Are</h1>
        <h2 style={headingTextStyle}>Provide Your BUSINESS IDEA</h2>
        <p style={descriptionStyle}>
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <Button style={buttonStyle}>GET STORE</Button>
        <Button style={learnMoreButtonStyle}>LEARN MORE</Button>
      </div>

      {/* Image Section */}
      <div style={imageContainerStyle}>
        <img src="/OTPLOGO.png" alt="Business" style={personImageStyle} />
      </div>

      {/* Progress Dots */}
      <div style={progressStyle}>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
      </div>
    </div>
  );
};

export default Footer;
