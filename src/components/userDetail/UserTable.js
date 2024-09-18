import React, { useState } from 'react';
import { Table, Switch, Button, Row, Col, Modal, Form, Input, Checkbox } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import usePostRegistUser from '../../Hooks/UserHook/usePostRegisterUser';
const { TextArea } = Input;
const UserTable = ({ user }) => {
  const {mutate: users} = usePostRegistUser()
  const navigate = useNavigate();
  const [userState, setUserState] = useState(
    {
      detail: null,
      model: false
    }
  );
  
 

  const onFinish = (values) => {
    console.log('Form values:', values);
    users(values)
    setUserState({
      detail: null,
      model: false
    })
  }
 

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    // Handle form submission error here
    setUserState({
      detail: null,
      model: true
    })
  }

  const handleDoubleClick = (record) => {
    // Construct the URL with query parameters
    navigate(`/user-details/${record.id}`);
  };

  const columns = [
    {
      title: 'Sr.',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },

    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'name',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber' || "",
      key: 'contactNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address' || "",
      key: 'address',
    },
    {
      title: 'Designation',
      dataIndex: 'designation' || "",
      key: 'designation',
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "13%",
      render: (text, record) => (
        <span>
          <p
            style={{
              color: "",
              fontSize: "12px",
              margin: "0",
            }}
          >
              {moment(record.updatedAt).format('YYYY-MM-DD')}
        
          </p>
          <p
            style={{
              color: "green",
              fontSize: "12px",
              margin: "0",
            }}
          >
            {moment(record.createdAt).format('YYYY-MM-DD')}
          </p>
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status" || "",
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
    {
      title: "Actions",
      key: "actions",
      width: "12%",
      render: (text, record) => (
        <span style={{ display: "flex", gap: "10px" }}>
         
          <EditOutlined className="icon-edit" />
          <DeleteOutlined
            className="icon-delete"
          
          />
        </span>
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
          <Button type="primary" onClick={() => setUserState({
            detail: null,
            model: true
          })}>Add User</Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={user?.data}
        onRow={(record) => ({
          onDoubleClick: () => handleDoubleClick(record), // Handle the double click event
        })}
      />

      <Modal
        style={{ position: "absolute", top: 0, right: 0 }}
        title={"Add New User"}
        open={userState.model}
        onOk={() => setUserState({
          detail: null,
          model: false,
        })}
        onCancel={() => setUserState({
          detail: null,
          model: false
        })}
        width={"31%"}

        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={userState.detail}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
           <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            label="Name"
            name="fullName"
            hasFeedback
            rules={[
              { required: true, message: "Please input your first name!" },
              { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only Alphabets are allowed)" }
            ]}
          >
            <Input placeholder="Enter name" allowClear />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            hasFeedback
            rules={[
              { required: true, message: 'Please input the username!' },
              { min: 6, message: 'Username must be at least 6 characters long!' },
            ]}
          >
            <Input placeholder="Enter username" allowClear />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            hasFeedback
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'The input is not valid E-mail!' },
            ]}
          >
            <Input placeholder="Enter email" allowClear />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password placeholder="Enter password" allowClear />
          </Form.Item>
          <Form.Item
            label="Contact Number"
            name="contactNumber"
            hasFeedback
            rules={[
              { required: true, message: 'Please input the contact number!' },
              { pattern: /^[0-9]+$/, message: 'Contact number can only contain numbers!' },
            ]}
          >
            <Input placeholder="Enter contact number" allowClear maxLength={11} />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            hasFeedback
            rules={[
              { required: true, message: 'Please input the address!' },
            ]}
          >
            <TextArea placeholder="Enter address" allowClear />
          </Form.Item>
          <Form.Item label="Roles">
                        <Row>
                            <Col span={6}>
                                <Checkbox value="edit">Edit </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="delete">Delete </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="update">Update </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox value="createEmployee">Create </Checkbox>
                            </Col>
                        </Row>
                    </Form.Item>

        </Form>
      </Modal>
    </div>
  );
};

export default UserTable;
