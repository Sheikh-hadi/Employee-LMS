import React from 'react';
import { Row, Col } from 'antd';

const GamePixelBanner = () => {
  const containerStyle = {
    backgroundColor: '#1e1e1e', // Black background color
    padding: '20px',
    position: 'relative',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const logoStyle = {
    display: 'inline-block',
    width: '40%', // Adjust the size of the logo
    marginRight: '20px',
  };

  const textStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const sideShapeLeft = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderBottom: '50px solid #fff', // White side shape
  };

  const sideShapeRight = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderRight: '50px solid transparent',
    borderBottom: '50px solid #fff', // White side shape
  };

  const accentShape = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderRight: '100px solid #ff4d4f', // Red triangle
    borderBottom: '100px solid #faad14', // Yellow triangle
  };

  return (
    <div style={containerStyle}>
      <div style={sideShapeLeft}></div>
      <Row justify="center" align="middle">
        <Col>
          <img
            src="gpsblackbg.png" // Replace with your actual logo URL
            alt="Game Pixel Logo"
            style={logoStyle}
          />
        </Col>
        <Col>
          <span style={textStyle}>GAME PIXEL STUDIO</span>
        </Col>
      </Row>
      <div style={sideShapeRight}></div>
      <div style={accentShape}></div>
    </div>
  );
};

export default GamePixelBanner;
