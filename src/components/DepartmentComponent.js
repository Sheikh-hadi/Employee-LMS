import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import employeeDepartmentDropdownOptions from '../models/employeeDapartmentModel'; // Adjust the import path

const DepartmentComponent = () => {


  const columns = [
    {
      title: 'Sr',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Department Name',
      dataIndex: 'label',
      key: 'department',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <Button type="primary" icon={<EditOutlined />} style={{ marginRight: 8, backgroundColor: 'green', borderColor: 'green' }}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />} style={{ backgroundColor: 'red', borderColor: 'red' }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table dataSource={employeeDepartmentDropdownOptions} columns={columns} rowKey="id" />;
};

export default DepartmentComponent;
