import React from 'react';
import { Row, Col, Card, Progress } from 'antd';

import BirthdayCard from './BirthdayCard';

const AttendenceDashboard = () => {


  return (
    <Row gutter={16} style={{ marginTop: 20, }}>
      <Col span={12} >
        <Card style={{ height: "100%" }}>
          <h3>Today Attendance</h3>
          <Row>
            <Col span={5} style={{ textAlign: 'center', padding: '20px', borderRadius: '20px', backgroundColor: 'lightblue' }}>
              <div style={{ fontSize: 24, color: 'green' }}>0</div>
              <div><b>Present </b></div>
            </Col>
            <Col span={5} offset={1} style={{ textAlign: 'center', padding: '20px', borderRadius: '20px', backgroundColor: 'lightblue' }}>
              <div style={{ fontSize: 24, color: 'red' }}>0</div>
              <div><b>Absent </b></div>
            </Col>
            <Col span={5} offset={1} style={{ textAlign: 'center', padding: '20px', borderRadius: '20px', backgroundColor: 'lightblue' }}>
              <div style={{ fontSize: 24, color: 'orange' }}>0</div>
              <div><b> Half Day</b></div>
            </Col>
            <Col span={5} offset={1} style={{ textAlign: 'center', padding: '20px', borderRadius: '20px', backgroundColor: 'lightblue' }}>
              <div style={{ fontSize: 24, color: 'gray' }}>0</div>
              <div><b>Unmarked</b></div>
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
        <BirthdayCard />
      </Col>
    </Row>
  );
};

export default AttendenceDashboard;
