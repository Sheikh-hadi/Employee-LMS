import React from 'react';
import { Table } from 'antd';
import 'antd/dist/reset.css';
import moment from 'moment';

// Function to get color based on status
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

// Sample data with status for each employee (array length should match the number of days in the month)
const data = [
  { fullname: 'John Doe', status: Array(31).fill('Present') },
  { fullname: 'Jane Smith', status: Array(31).fill('Absent') },
  { fullname: 'John Doe', status: Array(31).fill('Leave') },
  { fullname: 'Jane Smith', status: Array(31).fill('Late') },
  // Add more employee data as needed
];

// Get the current year, month, and formatted date using moment
const currentYear = moment().year();
const currentMonth = moment().month(); // 0-indexed (e.g., 8 for September)
const currentMonthShortName = moment().format('MMM'); // Short month name (e.g., Sep for September)

// Calculate the number of days in the current month
const daysInMonth = moment(`${currentYear}-${currentMonth + 1}`, 'YYYY-MM').daysInMonth(); // +1 because month is 0-indexed

// Generate column titles with formatted date for each day
const dayColumns = Array.from({ length: daysInMonth }, (_, i) => {
  return {
    title: (
      <div style={{ transform: 'rotate(90deg)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
        {`day ${i + 1}`}
      </div>
    ),
    dataIndex: ['status', i], // Access each status by index
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

// Column configuration with sub-child for "Name"
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
    title: `Attendance (${currentMonthShortName}-${currentYear})`, // Main title with short month-year
    key: 'attendance',
    width: '90%',
    children: dayColumns, // Subtitles with detailed day-MMM-year format
  },
];

const AttendanceTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="fullname"
      scroll={{ x: 1500 }} // Adjust as needed
    />
  );
};

export default AttendanceTable;
