import React, { useState } from 'react';
import { Row, Col, Button, Table, Modal, Input, Form } from 'antd';

const EmployeePayment = () => {
  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dummy data with salary
  const data = [
    {
      key: '1',
      sr: '1',
      employeeName: 'John Doe',
      transaction: '5000',
      salary: '20000', // Added salary
    },
    {
      key: '2',
      sr: '2',
      employeeName: 'Jane Smith',
      transaction: '7000',
      salary: '25000', // Added salary
    },
    {
      key: '3',
      sr: '3',
      employeeName: 'Mark Johnson',
      transaction: '9000',
      salary: '30000', // Added salary
    },
  ];

  // Columns configuration for the table
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
      render: (text) => `Rs ${text}`, // Formatting the transaction amount
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      render: (text) => `Rs ${text}`, // Formatting the salary amount
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
    // Form submission logic can be added here
    setIsModalVisible(false);
  };

  // Handle modal cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <h2>Employee Transactions</h2>
        </Col>
        <Col>
          {/* Button to trigger modal for account information */}
          <Button type="primary" onClick={showModal} style={{ marginRight: '10px' }}>
            Account
          </Button>
          {/* New button for salary actions */}
          <Button type="primary">
            Salary
          </Button>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          {/* Ant Design Table component */}
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
        <Form layout="vertical">
          <Form.Item label="Account Title">
            <Input placeholder="Enter Account Title" />
          </Form.Item>
          <Form.Item label="Account Number">
            <Input placeholder="Enter Account Number" />
          </Form.Item>
          <Form.Item label="Bank Name">
            <Input placeholder="Enter Bank Name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeePayment;
