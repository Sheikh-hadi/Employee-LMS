// UserAccess.js
import React from 'react';
import { Row, Col, Checkbox } from 'antd';

const UserAccess = () => {
  const userAccessOptions = [
    { label: 'View Users', checked: true },
    { label: 'Create User', checked: false },
    { label: 'Edit/Update User', checked: true },
    { label: 'Delete Users', checked: true },
    { label: 'Allow to Set Permissions', checked: true },
    { label: 'View only created users', checked: true },
  ];

  return (
    <div style={styles.cardContainer}>
      <Row>
        <Col span={24} style={styles.title}>
          <strong>User access</strong>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Checkbox style={styles.checkbox}>Select all</Checkbox>
        </Col>
      </Row>
      <Row>
        {userAccessOptions.map((option, index) => (
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

export default UserAccess;
