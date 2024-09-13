import React, { useState } from 'react';
import { Row, Col, Checkbox, Button } from 'antd';

import EmployeeAccess from '../components/Permissions/EmployeeAccess';
import UserAccess from '../components/Permissions/UserAccess';

const PermissionsPage = () => {
  // State to track the "Full Permission" checkbox
  const [fullPermission, setFullPermission] = useState(false);

  // State to track individual permissions for Employee and User access
  const [employeePermissions, setEmployeePermissions] = useState({
    editEmployee: false,
    createEmployee: false,
    deleteEmployee: false,
    updateEmployee: false,
  });

  const [userPermissions, setUserPermissions] = useState({
    editUser: false,
    createUser: false,
    deleteUser: false,
    updateUser: false,
  });

  // Handle the Full Permission checkbox change
  const handleFullPermissionChange = (e) => {
    const { checked } = e.target;
    setFullPermission(checked);

    // Update all checkboxes in EmployeeAccess and UserAccess
    setEmployeePermissions({
      editEmployee: checked,
      createEmployee: checked,
      deleteEmployee: checked,
      updateEmployee: checked,
    });

    setUserPermissions({
      editUser: checked,
      createUser: checked,
      deleteUser: checked,
      updateUser: checked,
    });
  };

  return (
    <div style={{ padding: '250px', backgroundColor: '#fff', marginTop: '-350px' }}>  
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Permission</h2>

      {/* Full Permission Checkbox */}
      <Checkbox
        style={{ marginBottom: '20px' }}
        checked={fullPermission}
        onChange={handleFullPermissionChange}
      >
        Full Permission
      </Checkbox>

      {/* Grid Layout for Access Permissions */}
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          {/* EmployeeAccess Component */}
          <EmployeeAccess
            permissions={employeePermissions}
            setPermissions={setEmployeePermissions}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          {/* UserAccess Component */}
          <UserAccess
            permissions={userPermissions}
            setPermissions={setUserPermissions}
          />
        </Col>
      </Row>

  
    </div>
  );
};

export default PermissionsPage;
