import React, { useState } from 'react';
import { Row, Col, Button, Table, Modal, Input, Form } from 'antd';

const EmployeePayment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm(); // Ant Design form instance
  const [messageModal, setMessageModal] = useState({ visible: false, message: '' });

  // Dummy data with salary
  const data = [
    {
      key: '1',
      sr: '1',
      employeeName: 'John Doe',
      transaction: '5000',
      salary: '20000',
    },
    {
      key: '2',
      sr: '2',
      employeeName: 'Jane Smith',
      transaction: '7000',
      salary: '25000',
    },
    {
      key: '3',
      sr: '3',
      employeeName: 'Mark Johnson',
      transaction: '9000',
      salary: '30000',
    },
  ];

  // Table columns
  const columns = [
    {
      title: 'Sr',
      dataIndex: 'sr',
      key: 'sr',
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName',
    },
    {
      title: 'Transaction',
      dataIndex: 'transaction',
      key: 'transaction',
      render: (text) => `Rs ${text}`,
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      render: (text) => `Rs ${text}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="primary" onClick={() => alert('Money Sent!')}>
          Send Money
        </Button>
      ),
    },
  ];

  // Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle modal OK
  const handleOk = () => {
    form
      .validateFields() // validate fields in the form
      .then(() => {
        setIsModalVisible(false);
        setMessageModal({ visible: true, message: 'Information added successfully' });
      })
      .catch((errorInfo) => {
        setMessageModal({ visible: true, message: 'Please fill in all fields correctly.' });
      });
  };

  // Handle modal cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Close message modal
  const handleMessageModalOk = () => {
    setMessageModal({ visible: false, message: '' });
  };

  // Validation rules for inputs
  const accountTitleRules = [
    {
      required: true,
      message: 'Account Title is required',
    },
    {
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Only alphabets are allowed',
    },
  ];

  const accountNumberRules = [
    {
      required: true,
      message: 'Account Number is required',
    },
    {
      pattern: /^\d+$/,
      message: 'Only numbers are allowed',
    },
  ];

  const bankNameRules = [
    {
      required: true,
      message: 'Bank Name is required',
    },
    {
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Only alphabets are allowed',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <h2>Employee Transactions</h2>
        </Col>
        <Col>
          <Button type="primary" onClick={showModal} style={{ marginRight: '10px' }}>
            Account
          </Button>
          <Button type="primary">Salary</Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Table dataSource={data} columns={columns} pagination={false} />
        </Col>
      </Row>

      {/* Modal for Account Form */}
      <Modal
        title="Account Information"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Account Title"
            name="accountTitle"
            rules={accountTitleRules}
          >
            <Input placeholder="Enter Account Title" />
          </Form.Item>

          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={accountNumberRules}
          >
            <Input placeholder="Enter Account Number" />
          </Form.Item>

          <Form.Item
            label="Bank Name"
            name="bankName"
            rules={bankNameRules}
          >
            <Input placeholder="Enter Bank Name" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Message Modal */}
      <Modal
        title="Message"
        visible={messageModal.visible}
        onOk={handleMessageModalOk}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>{messageModal.message}</p>
      </Modal>
    </div>
  );
};

export default EmployeePayment;
