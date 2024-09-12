import React from 'react';
import { Row, Col, Button } from 'antd';

import {
  HomeOutlined,
  InfoCircleOutlined,
  ToolOutlined,
  PhoneOutlined,
  LaptopOutlined,
  BankOutlined,
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';

// Inline styles
const headerStyle = {
  backgroundColor: 'darkslateblue',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 999,
  transition: 'all 0.5s ease-in-out',
  backgroundImage: 'url("https://www.transparenttextures.com/patterns/cloudy-day.png")', // Example cloud background
  backgroundRepeat: 'repeat',
};

const navButtonStyle = {
  color: 'white',
  fontSize: '18px',
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'color 0.3s',
};

const buttonHoverStyle = {
  color: '#f39c12', // hover color
};

const iconStyle = {
  position: 'absolute',
  color: 'white',
  opacity: 0.6,
  fontSize: '20px',
  zIndex: -1,
};

const Header = () => {
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const handleMouseEnter = (button) => setHoveredButton(button);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <Row style={headerStyle}>
      {/* Title */}
      <Col span={6}>
        <h2 style={{ color: 'white', marginLeft: '20px', position: 'relative' }}>MyOffice</h2>

        {/* Sprinkling office-related icons */}
        <LaptopOutlined style={{ ...iconStyle, top: '20px', left: '120px' }} />
        <BankOutlined style={{ ...iconStyle, top: '50px', left: '100px' }} />
        <DesktopOutlined style={{ ...iconStyle, top: '10px', left: '200px' }} />
      </Col>

      {/* Navigation */}
      <Col span={18}>
        {[
          { option: 'Home', icon: <HomeOutlined /> },
          { option: 'About Us', icon: <InfoCircleOutlined /> },
          { option: 'Services', icon: <ToolOutlined /> },
          { option: 'Contact Us', icon: <PhoneOutlined /> },
        ].map(({ option, icon }) => (
          <Button
            key={option}
            type="text"
            style={
              hoveredButton === option
                ? { ...navButtonStyle, ...buttonHoverStyle }
                : navButtonStyle
            }
            onMouseEnter={() => handleMouseEnter(option)}
            onMouseLeave={handleMouseLeave}
          >
            {icon} {option}
          </Button>
        ))}

        {/* More office-related icons sprinkled between the buttons */}
        <UserOutlined style={{ ...iconStyle, top: '10px', left: '400px' }} />
        <LaptopOutlined style={{ ...iconStyle, top: '30px', left: '500px' }} />
        <BankOutlined style={{ ...iconStyle, top: '20px', left: '600px' }} />
      </Col>
    </Row>
  );
};

export default Header;
