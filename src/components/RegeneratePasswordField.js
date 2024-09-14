import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Input, Button, Form } from 'antd';

const RegeneratePasswordField = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Success message modal state
  const [form] = Form.useForm(); // Form instance for validation
  const navigate = useNavigate(); 
  // Handle form submission
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const { newPassword, confirmPassword } = values;

        // Check if new password matches confirm password
        if (newPassword === confirmPassword) {
          setIsModalVisible(true); // Show success modal
        } else {
          form.setFields([
            {
              name: 'confirmPassword',
              errors: ['Passwords do not match!'],
            },
          ]);
        }
      })
      .catch(() => {
        // Handle form validation errors
      });
  };

  // Handle closing success modal
  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/login"); 
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Form
        form={form}
        layout="vertical"
        style={{
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
          width: '300px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Change Password</h2>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: 'Please enter your new password',
            },
          ]}
        >
          <Input.Password placeholder="Enter new password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please confirm your password',
            },
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Button type="primary" block onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      {/* Success Modal */}
      <Modal
        title="Success"
        visible={isModalVisible}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <p>Password changed successfully!</p>
      </Modal>
    </div>
  );
};

export default RegeneratePasswordField;
