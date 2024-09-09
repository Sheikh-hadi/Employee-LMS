// GlobalTaskAccess.js
import React from 'react';
import { Row, Col, Checkbox } from 'antd';

const GlobalTaskAccess = () => {
  const globalTaskOptions = [
    { label: 'View Task', checked: true },
    { label: 'Create Task', checked: false },
    { label: 'Edit/Update Task', checked: true },
    { label: 'Delete Task', checked: true },
    { label: 'View Only Created Task', checked: true },
  ];

  return (
    <div style={styles.cardContainer}>
      <Row>
        <Col span={24} style={styles.title}>
          <strong>Global Task access</strong>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Checkbox style={styles.checkbox}>Select all</Checkbox>
        </Col>
      </Row>
      <Row>
        {globalTaskOptions.map((option, index) => (
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

export default GlobalTaskAccess;
