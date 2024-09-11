import React from 'react';
import { Checkbox } from 'antd';

const SupportTypeAccess = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px',  }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Support Type access:</h3>
      <Checkbox> Select all </Checkbox><br />
      <Checkbox checked> View Support Types </Checkbox><br />
      <Checkbox> Create Support Types </Checkbox><br />
      <Checkbox checked> Edit/Update Support Types </Checkbox><br />
      <Checkbox checked> Delete Support Types </Checkbox>
    </div>
  );
};

export default SupportTypeAccess;
