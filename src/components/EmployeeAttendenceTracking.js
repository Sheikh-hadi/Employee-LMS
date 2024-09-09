import React, { memo, useMemo } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { StarFilled, CheckCircleFilled } from '@ant-design/icons';
import { users } from '../models/userTrackingModel';

// Memoized UserCard component
const UserCard = memo(({ user: { name, role, time, status, imageUrl, date } }) => {

  // Memoized card styles
  const cardStyle = useMemo(() => ({
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    height: '260px',
  }), []);

  // Function to determine styles based on user status
  const getStatusStyles = (status) => {
    if (status === 'Delayed') {
      return { borderColor: '#FF69B4', color: '#FF69B4' };
    }
    return { borderColor: '#1890ff', color: '#1890ff' };
  };

  const { borderColor, color } = getStatusStyles(status);

  return (
    <Card style={cardStyle}>
      <Row style={{ justifyContent: 'left', alignItems: 'center' }}>
        <Col>
          <img src={imageUrl} alt={name} style={{ borderRadius: '60%', width: '70px', height: '80px', objectFit: 'cover', marginBottom: '8px' }} />
        </Col>
        <Col style={{ marginLeft: '16px', textAlign: 'left' }}>
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p style={{ margin: '2px 0', color: 'gray' }}>{role}</p>
          <Row gutter={8} style={{ marginTop: '4px' }}>
            <Col>
              <div style={{
                border: `2px solid ${borderColor}`,
                borderRadius: '50%',
                padding: '4px',
                display: 'inline-block',
                lineHeight: 0
              }}>
                <StarFilled style={{ color, fontSize: '13px' }} />
              </div>
            </Col>
            <Col>
              <CheckCircleFilled style={{ color: status === 'Delayed' ? '#1890ff' : '#fff', fontSize: '24px' }} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: '10px' }}>
        <Col>
          <span style={{ fontSize: '30px', fontWeight: '400' }}>{time}</span>
        </Col>
        <Col>
          <span style={{ fontSize: '16px', color: status === 'Delayed' ? 'red' : 'black' }}>
            {status === 'Delayed' ? status : date}
          </span>
        </Col>
      </Row>
      <Row style={{ marginTop: '28px', justifyContent: 'space-between' }}>
        {status === 'Delayed' ? (
          <>
            <Button type="default" style={{ border: 'none', color: '#24a0ed ' }}>Chat now</Button>
            <Button type="primary">Set Absent</Button>
          </>
        ) : (
          <Button type="link">View Detailed Info</Button>
        )}
      </Row>
    </Card>
  );
});

// Main component for employee attendance tracking
const EmployeeAttendenceTracking = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Row gutter={[16, 16]} style={{ maxWidth: '1200px', width: '100%', justifyContent: 'center' }}>
        {users.map((user, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EmployeeAttendenceTracking;
