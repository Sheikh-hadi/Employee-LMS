import React from 'react';
import { Row, Col, Card, Progress } from 'antd';

import BirthdayCard from './BirthdayCard';

const AttendenceDashboard = () => {


  return (
    <Row gutter={16} style={{ marginTop: 20, border: '2px solid black' }}>
      <Col span={12}>
        <Card>
          <h3>Today's Attendance</h3>
          <Row>
            <Col span={6}>
              <div style={{ fontSize: 24, color: 'green' }}>0</div>
              <div>Present</div>
            </Col>
            <Col span={6}>
              <div style={{ fontSize: 24, color: 'red' }}>0</div>
              <div>Absent</div>
            </Col>
            <Col span={6}>
              <div style={{ fontSize: 24, color: 'orange' }}>0</div>
              <div>Half Day</div>
            </Col>
            <Col span={6}>
              <div style={{ fontSize: 24, color: 'gray' }}>0</div>
              <div>Unmarked</div>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={4}>
        <Card>
          <h3>March's Attendance</h3>
          <Progress type="dashboard" percent={78} />
        </Card>
      </Col>

      {/* Update this Card to show Birthdays */}
      <Col span={8}>
        <BirthdayCard/>
      </Col>
    </Row>
  );
};

export default AttendenceDashboard;
