// LeadAccess.js
import React from 'react';
import { Row, Col, Checkbox } from 'antd';

const LeadAccess = () => {
  const leadAccessOptions = [
    { label: 'View Leads', checked: true },
    { label: 'Create Leads', checked: false },
    { label: 'Edit/Update Leads', checked: true },
    { label: 'Delete Leads', checked: true },
    { label: 'Allow to turns Lead into Client', checked: true },
    { label: 'View Only Created Leads', checked: true },
  ];

  return (
    <div style={styles.cardContainer}>
      <Row>
        <Col span={24} style={styles.title}>
          <strong>Lead access</strong>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Checkbox style={styles.checkbox}>Select all</Checkbox>
        </Col>
      </Row>
      <Row>
        {leadAccessOptions.map((option, index) => (
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
  cardContainer: {
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    maxWidth: '100%',
  },
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

export default LeadAccess;
