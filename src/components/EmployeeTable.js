import { Table, Tooltip } from 'antd'
import React from 'react'
import { employeesColumn } from '../models/employeeColumnModel'
const EmployeeTable = () => {
   
const columns = [
    { title: 'Sr.', dataIndex: 'id', key: 'id' },
    {
        title: 'Photo',
        dataIndex: 'photo',
        key: 'photo',
        render: (photo) => <img src={photo} alt="Employee" style={{ width: 50, height: 50 }} />
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <Tooltip title={`${record.firstName} ${record.lastName}`}>
            <span>{text}</span>
          </Tooltip>
        ),
      },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
        render: (text, record) => (
          <Select
            defaultValue={text} // This sets the current department as the selected option
            style={{ width: 120 }}
            onChange={(value) => handleDepartmentChange(value, record.key)}
          >
            <Option value="HR">HR</Option>
            <Option value="Engineering">Engineering</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Sales">Sales</Option>
            {/* Add more department options here */}
          </Select>
        ),
      },
    { 
        title: 'Salary', 
        dataIndex: 'salary', 
        key: 'salary', 
        render: (salary) => `$${salary.toLocaleString()}`
    },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    {
        title: 'Actions',
        key: 'actions',
        render: (text, record) => (
            <>
                <Button onClick={() => handleEdit(record.id)} type="link" style={{ marginRight: '8px' }}>Edit</Button>
                <Button onClick={() => handleDelete(record.id)} type="link">Delete</Button>
            </>
        )
    },
];

  return (
    <div>
      <Table
       columns={columns} 
       dataSource={employeesColumn} 
       pagination={false} 
       rowKey="id" 
      
      />
    </div>
  )
}

export default EmployeeTable
