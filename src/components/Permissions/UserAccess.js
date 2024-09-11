import React from 'react';
import { Checkbox } from 'antd';

const UserAccess = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px',  }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>User access:</h3>
      <Checkbox> Select all </Checkbox><br />
      <Checkbox checked> View Users </Checkbox><br />
      <Checkbox> Create User </Checkbox><br />
      <Checkbox checked> Edit/Update User </Checkbox><br />
      <Checkbox checked> Delete Users </Checkbox><br />
      <Checkbox> Allow to Set Permissions </Checkbox><br />
      <Checkbox checked> View only created users </Checkbox>
    </div>
  );
};

export default UserAccess;
