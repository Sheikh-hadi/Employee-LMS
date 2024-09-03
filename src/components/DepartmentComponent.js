import React, { useState } from 'react';
import { Table, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import employeeDepartmentDropdownOptions from '../models/employeeDapartmentModel'; // Adjust the import path

const DepartmentComponent = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search input
  const [filteredData, setFilteredData] = useState(employeeDepartmentDropdownOptions); // State to hold the filtered data

  // Columns definition
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
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{ marginRight: 8, backgroundColor: 'green', borderColor: 'green' }}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    setSearchTerm(value);

    // Filter the data based on the search term
    const filtered = employeeDepartmentDropdownOptions.filter((item) =>
      item.label.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <div >
      {/* Search Input */}
      <Input
        placeholder="Search departments"
        prefix={<SearchOutlined style={{ color: 'blue' }} />}
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginTop: '-17px', width: '200px', margin: '0 auto' }}
      />

      {/* Filtered Table */}
      <Table dataSource={filteredData} columns={columns} rowKey="id" />
    </div>
  );
};

export default DepartmentComponent;
