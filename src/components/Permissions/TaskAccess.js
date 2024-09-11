import React from 'react';
import { Checkbox } from 'antd';

const TaskAccess = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px',  }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Global Task access:</h3>
      <Checkbox> Select all </Checkbox><br />
      <Checkbox checked> View Task </Checkbox><br />
      <Checkbox> Create Task </Checkbox><br />
      <Checkbox checked> Edit/Update Task </Checkbox><br />
      <Checkbox checked> Delete Task </Checkbox><br />
      <Checkbox checked> View Only Created Task </Checkbox>
    </div>
  );
};

export default TaskAccess;
