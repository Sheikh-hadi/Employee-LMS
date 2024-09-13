import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const EmployeeAccess = ({ permissions, setPermissions }) => {
  // Handle individual checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', width:"100%", boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Employee access:</h3>
      <Row gutter={[2, 16]} style={{ lineHeight: '10px' }}>
        <Col span={24}>
          <Checkbox
            name="editEmployee"
            checked={permissions.editEmployee}
            onChange={handleCheckboxChange}
          >
            Edit Employee
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="createEmployee"
            checked={permissions.createEmployee}
            onChange={handleCheckboxChange}
          >
            Create Employee
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="deleteEmployee"
            checked={permissions.deleteEmployee}
            onChange={handleCheckboxChange}
          >
            Delete Employee
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="updateEmployee"
            checked={permissions.updateEmployee}
            onChange={handleCheckboxChange}
          >
            Update Employee
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeAccess;
