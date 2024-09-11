import React from 'react';
import { Checkbox ,Row, Col} from 'antd';

const SupportCenterAccess = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', width:"100%",boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Support Center  access:</h3>
      <Row gutter={[2, 16]} style={{ lineHeight: '10px' ,}}>
        <Col span={24}>
          <Checkbox> Select all </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> View Events </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox> Create Events </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> Edit/Update Events </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> Delete Events </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox checked> View Only Created Events </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default SupportCenterAccess;
