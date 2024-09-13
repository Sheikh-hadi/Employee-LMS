import React, { useState } from 'react';
import { Row, Col, Button, Switch, Modal, Input, Form } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';

const UserDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const [currentStep, setCurrentStep] = useState(1); // Step for the modal form
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }); // State to store passwords

  // Show modal when "Change Password" is clicked
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle modal submit
  const handleOk = () => {
    if (currentStep === 1) {
      if (!passwords.oldPassword) {
        Modal.error({
          title: 'Error',
          content: 'Please enter your old password!',
        });
      } else {
        // Go to next step (entering new password)
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      const { newPassword, confirmPassword } = passwords;
      if (!newPassword || !confirmPassword) {
        Modal.error({
          title: 'Error',
          content: 'Please fill out both new password fields!',
        });
      } else if (newPassword !== confirmPassword) {
        Modal.error({
          title: 'Error',
          content: 'Passwords do not match!',
        });
      } else {
        // Success message
        Modal.success({
          title: 'Success',
          content: 'Password changed successfully!',
        });
        setIsModalVisible(false); // Close modal
        setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' }); // Reset fields
        setCurrentStep(1); // Reset modal to step 1
      }
    }
  };

  // Handle cancellation of modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setCurrentStep(1);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#fff', minHeight: '50vh' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <h2><UserOutlined /> User Details</h2>
        </Col>
        <Col>
          {/* Align buttons to the right with spacing between them */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button type="primary" onClick={showModal}>
              Change Password
            </Button>
            <Button type="primary">
              Edit User
            </Button>
          </div>
        </Col>
      </Row>

      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={6} md={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                style={{ borderRadius: '10px', width: '100%', maxWidth: '150px' }}
              />
            </div>
          </Col>

          <Col xs={24} sm={18} md={20}>
            <div style={{ padding: '20px' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <UserOutlined style={{ marginRight: '10px' }} />
                      Full Name
                    </span>
                    <p style={{ fontSize: '17px', color: '#666', marginTop: '10px' }}>Ankit Gupta</p>
                  </div>
                  <div>
                    <HomeOutlined style={{ marginRight: '10px' }} />
                    <span style={{ fontWeight: 'bold' }}>Address</span>
                    <p>A-123, 10B scheme, Triveni, Jaipur, Rajasthan, India 302020</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <PhoneOutlined style={{ marginRight: '10px' }} />
                      Contact Number
                    </span>
                    <p>9887296522</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>
                      <MailOutlined style={{ marginRight: '10px' }} />
                      Email Address
                    </span>
                    <p>ankit@craxinno.com</p>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 'bold' }}>Status</span>
                    <Switch defaultChecked style={{ marginLeft: '10px' }} />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      {/* Modal for Change Password */}
      <Modal
        title={currentStep === 1 ? "Enter Old Password" : "Enter New Password"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        {currentStep === 1 ? (
          <Form layout="vertical">
            <Form.Item label="Old Password">
              <Input.Password
                value={passwords.oldPassword}
                onChange={e => setPasswords({ ...passwords, oldPassword: e.target.value })}
                placeholder="Enter your old password"
              />
            </Form.Item>
          </Form>
        ) : (
          <Form layout="vertical">
            <Form.Item label="New Password">
              <Input.Password
                value={passwords.newPassword}
                onChange={e => setPasswords({ ...passwords, newPassword: e.target.value })}
                placeholder="Enter new password"
              />
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input.Password
                value={passwords.confirmPassword}
                onChange={e => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                placeholder="Confirm new password"
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default UserDetails;
