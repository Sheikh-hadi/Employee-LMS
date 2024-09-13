import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const UserAccess = ({ permissions, setPermissions }) => {
  // Handle individual checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', width:"100%", boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>User access:</h3>
      <Row gutter={[2, 16]} style={{ lineHeight: '10px' }}>
        <Col span={24}>
          <Checkbox
            name="editUser"
            checked={permissions.editUser}
            onChange={handleCheckboxChange}
          >
            Edit User
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="createUser"
            checked={permissions.createUser}
            onChange={handleCheckboxChange}
          >
            Create User
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="deleteUser"
            checked={permissions.deleteUser}
            onChange={handleCheckboxChange}
          >
            Delete User
          </Checkbox>
        </Col>
        <Col span={24}>
          <Checkbox
            name="updateUser"
            checked={permissions.updateUser}
            onChange={handleCheckboxChange}
          >
            Update User
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
};

export default UserAccess;
