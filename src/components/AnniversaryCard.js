// AnniversaryCard.jsx
import React from 'react';

import { Card, Tooltip } from 'antd';

const AnniversaryCard = ({ employee }) => {
  // Calculate the work anniversary year
  const calculateWorkYears = (joiningDate) => {
    const joinDate = new Date(joiningDate);
    const today = new Date();
    let years = today.getFullYear() - joinDate.getFullYear();
    const monthDifference = today.getMonth() - joinDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < joinDate.getDate())) {
      years--;
    }
    return years;
  };

  return (
    <Tooltip
      title={
        <div>
          <p>{employee.name}</p>
          <p>Joining Date: {new Date(employee.joiningDate).toLocaleDateString()}</p>
          <p>Years of Service: {calculateWorkYears(employee.joiningDate)}</p>
        </div>
      }
    >
      <Card
        hoverable
        style={{
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          padding: '20px',
          cursor: 'pointer',
          backgroundColor: '#4caf50',
          transition: 'transform 0.25s, box-shadow 0.2s',
          height: '150px',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: '600', color: '#fff' }}>
          🎉 {employee.name}'s Work Anniversary
        </div>
        <div style={{ fontSize: '16px', color: '#fff', marginTop: '10px' }}>
          Years of Service: {calculateWorkYears(employee.joiningDate)} years
        </div>
      </Card>
    </Tooltip>
  );
};

export default AnniversaryCard;
