import React from 'react';
import EmployeeDasboard from '../components/DasboardComponent';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import AttendenceDashboard from '../components/AttendenceDashboard';
import PieChart from '../components/charts/PieChart';
import { Row, Col } from 'antd';

const Dashboard = () => {
  return (
    <div>
      <EmployeeDasboard />
      <AttendenceDashboard />

      {/* Row for BarChart and PieChart */}
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={12} lg={12}>
          <BarChart />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} >
          <PieChart />
        </Col>
      </Row>

      {/* Row for LineChart */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <LineChart />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
