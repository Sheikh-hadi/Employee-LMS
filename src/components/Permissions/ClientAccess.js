import React from 'react';
import { Checkbox } from 'antd';

const ClientAccess = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px', // Gap between each checkbox line
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Client access:</h3>

      {/* Using Flexbox for equal spacing between checkboxes */}
      <Checkbox> Select all </Checkbox>
      <Checkbox checked> View Clients </Checkbox>
      <Checkbox> Create Clients </Checkbox>
      <Checkbox checked> Edit/Update Clients </Checkbox>
      <Checkbox checked> View Only Created Clients </Checkbox>
      <Checkbox checked> Delete Client </Checkbox>
      <Checkbox checked> Can view credentials sections </Checkbox>
      <Checkbox checked> Can view agreements, upfront fees, and monthly fees </Checkbox>
    </div>
  );
};

export default ClientAccess;
