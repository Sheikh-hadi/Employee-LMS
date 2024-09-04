import React from 'react';
import { Row, Col, Card, Progress } from 'antd';
import BirthdayCard from './BirthdayCard';

const AttendenceDashboard = () => {
  return (
    <Row gutter={[16, 16]} style={{ marginTop: 20,}}>
      {/* Today's Attendance Card */}
      <Col xs={24} md={12}>
        <Card style={{ height: '100%' }}>
          <h3>Today Attendance</h3>
          <Row gutter={[16, 10]}style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Col xs={20} sm={6}  style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'lightblue' , }}>
              <div style={{ fontSize: 24, color: 'green',}}>0</div>
              <div><b>Present</b></div>
            </Col>
            <Col xs={20} sm={5} style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'lightblue' , }}>
              <div style={{ fontSize: 24, color: 'red' }}>0</div>
              <div><b>Absent</b></div>
            </Col>
            <Col xs={20} sm={4} style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'lightblue', }}>
              <div style={{ fontSize: 24, color: 'orange' }}>0</div>
              <div><b>Half Day</b></div>
            </Col>
            <Col xs={20} sm={7} style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: 'lightblue' ,}}>
              <div style={{ fontSize: 24, color: 'gray' }}>0</div>
              <div style={{ textAlign: 'left' }}><b>Unmarked</b></div>
            </Col>
          </Row>
        </Card>
      </Col>

      {/* March's Attendance Progress Card */}
      <Col xs={24} md={6}>
        <Card>
          <h3 style={{ textAlign: 'left' }}>March's Attendance</h3>
          <Progress type="dashboard" percent={78} />
        </Card>
      </Col>

      {/* Birthday Card */}
      <Col xs={24} md={6}>
        <BirthdayCard />
      </Col>
    </Row>
  );
};

export default AttendenceDashboard;
