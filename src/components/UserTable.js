import React, { useState } from 'react';
import { Table, Tooltip, Switch, Button, Row, Col, Modal, Form, Input, notification } from 'antd';

// Dummy employee data
const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    contactNumber: '123-456-7890',
    address: '123 Main St, City',
    designation: 'Software Engineer',
    date: '2024-08-15',
    createdAt: '2024-08-01',
    status: 'Active',
    email: 'john.doe@example.com',
    username: 'johndoe',
    password: 'password123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    contactNumber: '987-654-3210',
    address: '456 Elm St, City',
    designation: 'Project Manager',
    date: '2024-09-01',
    createdAt: '2024-08-10',
    status: 'Inactive',
    email: 'jane.smith@example.com',
    username: 'janesmith',
    password: 'password456',
  },
  // Add more employee records as needed
];

const UserTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddUser, setIsAddUser] = useState(false);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsAddUser(false);
    setIsModalVisible(true);
  };

  const handleAddUserClick = () => {
    setSelectedUser(null);
    setIsAddUser(true);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
    setIsAddUser(false);
  };

  const handleFormSubmit = (values) => {
    console.log('Form values:', values);
    if (isAddUser) {
      // Show success message
      notification.success({
        message: 'User Added Successfully',
        description: `The user ${values.name} has been added.`,
      });
    } else {
      // Show success message for update
      notification.success({
        message: 'User Updated Successfully',
        description: `The user ${values.name} has been updated.`,
      });
    }
    // Handle form submission logic here
    setIsModalVisible(false);
    setSelectedUser(null);
    setIsAddUser(false);
  };

  const columns = [
    {
      title: 'Sr',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Tooltip title={text}>
          <span onClick={() => handleUserClick(record)} style={{ cursor: 'pointer', color: 'blue' }}>
            {text}
          </span>
        </Tooltip>
      ),
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Switch
          checked={text === 'Active'}
          style={{
            backgroundColor: text === 'Active' ? 'green' : 'red',
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <h2>User List</h2>
        </Col>
        <Col>
          <Button type="primary" onClick={handleAddUserClick}>Add User</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={employeeData} rowKey="id" />

      <Modal
        title={isAddUser ? "Add New User" : "User Details"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={selectedUser}
          onFinish={handleFormSubmit}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input the username!' }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'The input is not valid E-mail!' },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isAddUser ? "Add User" : "Update User"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserTable;
