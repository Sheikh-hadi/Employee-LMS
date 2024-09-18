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

// Sample data with status for each employee
const data = [
  { fullname: 'John Doe', status: Array(31).fill('Present') },
  { fullname: 'Jane Smith', status: Array(31).fill('Absent') },
  { fullname: 'John Doe', status: Array(31).fill('Leave') },
  { fullname: 'Jane Smith', status: Array(31).fill('Late') },
];

// Get the current year and month
const currentYear = moment().year();
const currentMonth = moment().month();

// Calculate the number of days in the current month
const daysInMonth = moment(`${currentYear}-${currentMonth + 1}`, 'YYYY-MM').daysInMonth();

// Generate column titles for each day
const dayColumns = Array.from({ length: daysInMonth }, (_, i) => {
  const date = moment(`${currentYear}-${currentMonth + 1}-${i + 1}`, 'YYYY-MM-DD');
  const isWeekend = date.day() === 6 || date.day() === 0;

  // Determine the day abbreviation
  const dayAbbreviation = date.day() === 0 ? 'Sun' : date.day() === 6 ? 'Sat' : `Day ${i + 1}`;

  return {
    title: (
      <div
        style={{

          whiteSpace: 'nowrap',
        }}
      >
        {dayAbbreviation}
      </div>
    ),
    dataIndex: ['status', i],
    key: `day-${i + 1}`,
    width: '6%',
    render: (status) => {
      return isWeekend ? '' : (
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
      );
    },
  };
});

// Column configuration
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
    title: `Attendance (${moment().format('MMM')} ${currentYear})`,
    key: 'attendance',
    width: '50%',
    children: dayColumns,
  },
  {
    title: (<div
      style={{

        whiteSpace: 'nowrap',
      }}
    >
      Percentage %
    </div>),
    key: 'perccentage',
    width: '5%',
  },
];

const AttendanceTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey="fullname"
      scroll={{ x: 'max-content' }} // Adjust scroll to fit the content width
    />
  );
};

export default AttendanceTable;
