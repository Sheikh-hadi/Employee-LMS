import React from 'react';
import { Card, Col, Row } from 'antd';
import "../App.css";
import { UserOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';
import employeeDepartmentDropdownOptions from '../models/employeeDapartmentModel';
import { employeesColumn } from '../models/employeeColumnModel';

const EmployeeDashboard = () => {
  const dashboardCardModel = [
    {
      id: 1,
      number: 6,
      icon: (
        <UserOutlined
          style={{
            fontSize: '78px',
            color: '#fff',
            position: 'absolute',
            right: '20px',
            top: '50%',
            opacity: 0.3,
            transform: 'translateY(-50%)',
          }}
        />
      ),
      department: 'Departments',
      backgroundColor: '#3f51b5',
    },
    {
      id: 2,
      number: 8,
      icon: (
        <TeamOutlined
          style={{
            fontSize: '78px',
            color: '#fff',
            position: 'absolute',
            right: '20px',
            top: '50%',
            opacity: 0.3,
            transform: 'translateY(-50%)',
          }}
        />
      ),
      department: 'Employee',
      backgroundColor: '#e91e63',
    },
    {
      id: 3,
      number: 0,
      icon: (
        <LogoutOutlined
          style={{
            fontSize: '78px',
            color: '#fff',
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.3,
          }}
        />
      ),
      department: 'Leave Requests',
      backgroundColor: '#f44336',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#333', fontSize: '28px', fontWeight: 'bold' }}>
        Dashboard <span style={{ color: '#999', fontSize: '19px' }}>Control panel</span>
      </h2>
      <Row gutter={[16, 16]} style={{ marginBottom: '10px' }}>
        {dashboardCardModel.map((card) => (
          <Col span={8} key={card.id}>
            <Card className='dashboardcard'
              hoverable
              style={{
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                padding: '30px',  
                cursor: 'pointer',
                backgroundColor: card.backgroundColor,

                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '200px',  
                position: 'relative', 
              }}
            >
              <div style={{ marginBottom: '10px' }}>{card.icon}</div>
              <div
                style={{
                  fontSize: '46px',
                  fontWeight: '600',
                  color: '#fff',
                  position: 'absolute',
                  left: '20px',
                  top: '20px',
                }}
              >
                {card.number}
              </div>
              <div
                style={{
                  fontSize: '25px',
                  color: '#fff',
                  textAlign: 'left',
                  position: 'absolute',
                  left: '20px',
                  top: '90px', // Adjusted top position
                }}
              >
                {card.department}
              </div>
              <div style={{
                  fontSize: '20px',
                  color: '#fff',
                  textAlign: 'left',
                  position: 'absolute',
                  left: '20px',
                  top: '150px', // Adjusted top position
                }}>More Info ➔</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EmployeeDashboard;
