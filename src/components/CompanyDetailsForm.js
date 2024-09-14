import React, { useState } from 'react'; 
import { Row, Col, Input, Button, Upload, Form, Modal, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CompanyDetailsForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control the modal visibility
  const [password, setPassword] = useState(''); // State to store the entered password
  const [logo, setLogo] = useState('logo.png'); // State to store the company logo URL

  // Show modal when "Save changes" is clicked
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Handle the submission of the password in the modal
  const handleOk = () => {
    if (!password) {
      Modal.error({
        title: 'Error',
        content: 'Please enter your password!',
      });
    } else {
      // Perform save operation here
      console.log("Password entered: ", password);
      setIsModalVisible(false); // Close the modal after submitting the password
      setPassword(''); // Reset password field after submission
      Modal.success({
        title: 'Success',
        content: 'Changes saved successfully!',
      });
    }
  };

  // Handle cancellation of modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setPassword(''); // Reset password field if modal is closed without submission
  };

  // Handle file upload
  const handleUpload = (file) => {
    // Create a URL for the uploaded file and set it as the logo
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
    return false; // Prevent automatic upload
  };

  const formItems = [
    { title: "Name", dataIndex: "name", placeholder: "Enter company name" },
    { title: "Email", dataIndex: "email", placeholder: "Enter company email" },
    { title: "Phone", dataIndex: "phone", placeholder: "Enter company phone" },
    { title: "Website", dataIndex: "website", placeholder: "Enter company website" },
    { title: "Address", dataIndex: "address", placeholder: "Enter company address" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Header Section */}
      <Row>
        <Col span={2}>
          <img
            src={logo} 
            alt="Company Logo"
            style={{ borderRadius: '10%' ,width: '100%'}}
          />
        </Col>
        <Col span={20}>
          <h2 style={{ marginBottom: '0', marginLeft: "150px" }}>Game Pixel Studio</h2>
          <a href="mailto:gamepixelstudio@gmail.com" style={{ fontSize: '14px', color: '#666', marginLeft: "150px" }}>
            gamepixelstudio@gmail.com
          </a>
        </Col>
      </Row>

      {/* Company Profile Section */}
      <Row style={{ marginTop: '20px' }}>
        <Col span={24}>
          <h3>Company profile</h3>
          <p>Update your company photo and details here.</p>
        </Col>
      </Row>

      {/* Dynamic Form Fields */}
      <Form layout="vertical">
        {formItems.map((item) => (
          <Row key={item.dataIndex} gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={12}>
              <Form.Item label={item.title}>
                <Input placeholder={item.placeholder} />
              </Form.Item>
            </Col>
          </Row>
        ))}
      </Form>

      {/* Company Logo Upload Section */}
      <Row style={{ marginTop: '20px' }}>
        <Col span={4}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ borderRadius: '10%', width: '100%' }}
          />
        </Col>
        <Col span={20}>
          <Upload
            beforeUpload={handleUpload}
            showUploadList={false} // Hide the default upload list
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
          <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </Col>
      </Row>

      {/* Save and Cancel Buttons */}
      <Row justify="end" style={{ marginTop: '20px' }}>
        <Button style={{ marginRight: '10px' }}>Cancel</Button>
        <Button type="primary" onClick={showModal}>Save changes</Button>
      </Row>

      {/* Modal for Password Input */}
      <Modal
        title="Enter Password"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form layout="vertical">
          <Form.Item label="Password">
            <Input.Password
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CompanyDetailsForm;
