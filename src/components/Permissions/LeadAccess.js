import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const LeadAccess = () => {
  return (
    <div style={{ backgroundColor: '#fff',width:'100%', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 0px rgba(0, 0, 0, 0)' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Lead access:</h3>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Checkbox> Select all </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> View Leads </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox> Create Leads </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> Edit/Update Leads </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> Delete Leads </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox> Allow to turn Lead into Client </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> View Only Created Leads </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default LeadAccess;
