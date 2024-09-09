// PermissionsPage.js
import React from 'react';
import { Row, Col } from 'antd';

import GlobalTaskAccess from '../components/Permissions/GlobalTaskAccess';
import ClientAccess from '../components/Permissions/ClientAccess';
import LeadAccess from '../components/Permissions/LeadAccess';
import UserAccess from '../components/Permissions/UserAccess';


const PermissionsPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <ClientAccess/>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
        <LeadAccess/>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <GlobalTaskAccess/>
        </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
      <UserAccess/>
      </Col>
      </Row>
    </div>
  );
};

export default PermissionsPage;
