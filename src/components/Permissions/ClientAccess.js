// ClientAccess.js
import React from 'react';
import { Row, Col, Checkbox } from 'antd';

const ClientAccess = () => {
  const clientAccessOptions = [
    { label: 'View Clients', checked: true },
    { label: 'Create Clients', checked: false },
    { label: 'Edit/Update Clients', checked: true },
    { label: 'View Only Created Clients', checked: true },
    { label: 'Delete Client', checked: true },
    { label: 'Can view credentials sections', checked: true },
    { label: 'Can view agreements, upfront fees, and monthly fees', checked: true },
  ];

  return (
    <div style={{ marginLeft: '200px', backgroundColor: '#f0f2f5',    border: '1px solid #d9d9d9',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        maxWidth: '100%',}}>
      <Row>
        <Col span={24} style={styles.title}>
          <strong>Client access</strong>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Checkbox style={styles.checkbox}>Select all</Checkbox>
        </Col>
      </Row>
      <Row>
        {clientAccessOptions.map((option, index) => (
          <Col span={24} key={index} style={styles.optionRow}>
            <Checkbox checked={option.checked} style={styles.checkbox}>
              {option.label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  
  title: {
    fontSize: '18px',
    marginBottom: '16px',
  },
  optionRow: {
    marginBottom: '12px',
  },
  checkbox: {
    fontSize: '16px',
  },
};

export default ClientAccess;
