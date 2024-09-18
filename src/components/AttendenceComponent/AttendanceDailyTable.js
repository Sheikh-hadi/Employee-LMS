import React from 'react';
import { Table } from 'antd';
import 'antd/dist/reset.css';
import moment from 'moment';

const getStatusColor = (status) => {
  switch (status) {
    case 'Present':
      return 'green';
    case 'Absent':
      return 'red';
    case 'Leave':
      return 'blue';
    case 'Late':
      return 'orange';
    default:
      return 'grey';
  }
};

const data = [
  { fullname: 'John Doe', status: Array(31).fill('Present') },
  { fullname: 'Jane Smith', status: Array(31).fill('Absent') },
  { fullname: 'John Doe', status: Array(31).fill('Leave') },
  { fullname: 'Jane Smith', status: Array(31).fill('Late') },
];

const currentYear = moment().year();
const currentMonth = moment().month(); 

const daysInMonth = moment(`${currentYear}-${currentMonth + 1}`, 'YYYY-MM').daysInMonth(); 

const dayColumns = Array.from({ length: daysInMonth }, (_, i) => {
  return {
    title: `day ${i + 1}`, 
    dataIndex: ['status', i], 
    key: `day-${i + 1}`,
    width: '3%',
    render: (status) => (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: getStatusColor(status),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        {status.charAt(0)}
      </div>
    ),
  };
});


const columns = [
  {
    title: 'Name', 
    key: 'name',
    width: '10%',
    children: [
      {
        title: 'Employee',
        dataIndex: 'fullname',
        key: 'fullname',
        width: '100%',
      },
    ],
  },
  {
    title: `Attendance (${moment().format('MMMM')}- ${currentYear})`, 
    key: 'attendance',
    width: '90%',
    children: dayColumns, 
  },
];

const AttendanceTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="fullname"
      scroll={{ x: 1500 }}
    />
  );
};

export default AttendanceTable;
