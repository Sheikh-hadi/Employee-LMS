import React, { useState } from 'react';
import { Table, Switch, Button, Row, Col, Modal, Form, Input, Checkbox, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import usePostRegistUser from '../../Hooks/UserHook/usePostRegisterUser';
import useDeleteUser from '../../Hooks/UserHook/useDeleteUser';
const { TextArea } = Input;
const UserTable = ({ user }) => {
  const [form] = Form.useForm();
  const { mutate: users } = usePostRegistUser()
  const { mutate: userDelete } = useDeleteUser()
  const navigate = useNavigate();
  const [userState, setUserState] = useState(
    {
      detail: null,
      model: false,
      delete: false,
    }
  );
  console.log("userState: ", userState);

  const onFinish = (values) => {
    // console.log('Form values:', values);
    users(values)
    setUserState({
      ...userState,
      detail: null
    })
  }


  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    const firstErrorField = errorInfo.errorFields[0]?.name;
    if (firstErrorField) {
      form.scrollToField(firstErrorField);
    }
    notification.error({
      key: 'form-submission-failed',
      message: 'Missing required Fields',
      description: errorInfo.errorFields.map((error, index) => {
        return (

          <li style={{ display: "inline" }} key={index}>
            {`${index + 1}) ${error?.name}  `}
          </li>

        )
      }),
      duration: 5,
      style: {
        borderLeft: `4px solid red`, // Red for error, green for success
        position: 'relative',
        color: 'red'
      },
      showProgress: true,

    });
    setUserState({
      detail: null,
      model: true
    })
  }

  const handleDoubleClick = (record) => {
    navigate(`/user-details/${record.id}`);
  };

  const handleDelete = () => {
    console.log("record in handleDelete: ", userState.detail);
    userDelete(userState.detail)
    setUserState({
      ...userState,
      delete: true,
      detail: null
    })
  }
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
      dataIndex: 'contactNumber' || "N/A",
      key: 'contactNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address' || "N/A",
      key: 'address',
    },
    {
      title: 'Designation',
      dataIndex: 'designation' || "N/A",
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
          checked={text === true}
          style={{
            backgroundColor: text ? 'green' : 'red',
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

          <EditOutlined className="icon-edit"
            onClick={() => {
              navigate(`/user-details/${record.id}`);
            }} />
          <DeleteOutlined
            className="icon-delete"
            onClick={() => setUserState({
              ...userState,
              delete: true,
              detail: record.id
            })

            }
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
          ...userState,
          detail: null,
          model: false,
        })}
        onCancel={() => setUserState({
          ...userState,
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
          scrollToFirstError={true}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
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
            label="UserName"
            name="userName"
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
                <Checkbox value="create">Create </Checkbox>
              </Col>
            </Row>
          </Form.Item>

        </Form>
      </Modal>
      <Modal
        title="Confirmation"
        open={userState.delete}
        onOk={handleDelete}
        onCancel={() => setUserState({
          ...userState,
          delete: false
        })}
        width={"31%"}
      >
        <p>{`Are you sure you want to delete user with ID: ${userState?.detail}?`}</p>
      </Modal>
    </div>
  );
};

export default UserTable;
