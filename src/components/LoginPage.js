import React from 'react';
import { Form, Input, Button, Checkbox, Typography, message, Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Login successful!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please fill in all required fields!');
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        backgroundColor: '#f0f2f5',
        padding: '20px 0', // Add padding to the top and bottom
        minHeight: '100vh',
      }}
    >
      <Col
        xs={24}
        sm={18}
        md={16}
        lg={14}
        xl={12}
        style={{
          display: 'flex',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          minHeight: '80vh', // Adjust the minimum height
          boxSizing: "content-box",
        }}
      >
        <Col
          xs={0}
          md={12}
          style={{
            backgroundColor: '#f0f2f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img
            src="login_page.png"
            alt="Craxinno CRM"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <a href='/signup'>
            <Button
              type="primary"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'darkslateblue',
                borderColor: 'darkslateblue',
              }}
            >
              Sign Up
            </Button>
          </a>
        </Col>

        <Col
          xs={24}
          md={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: 'white',
          }}
        >
          <Typography.Title
            level={2}
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginTop: '20px',
              color: 'darkblue',
            }}
          >
            Craxinno CRM
          </Typography.Title>
          <Typography.Title
            style={{
              fontSize: '32px',
              marginBottom: '20px',
              color: 'darkblue',
              textAlign: 'center',
              marginTop: '2px',
            }}
          >
            Welcome To <span style={{ fontSize: '32px', color: 'darkblue' }}>Craxinno CRM</span>
          </Typography.Title>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ width: '80%' }}
          >
            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Email</span>}
              name="email"
              hasFeedback
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Enter your email"
                prefix={<MailOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Password</span>}
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Enter your password"
                prefix={<LockOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
              />
            </Form.Item>

            <Form.Item>
              <Row justify="space-between">
                <Checkbox style={{ color: "darkslateblue" }}>Remember Me</Checkbox>
                <a href="/" style={{ color: "darkslateblue" }}>
                  Forgot Password?
                </a>
              </Row>
            </Form.Item>

            <Form.Item style={{ border: '1px solid darkslateblue', borderRadius: '7px' }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: "darkslateblue", borderColor: "darkslateblue" }}
              >
                Login
              </Button>
            </Form.Item>

            <Form.Item style={{ marginTop: '20px' }}>
              <p>
                Don’t have an account? <a href="/signUpForm" style={{ color: "darkslateblue" }}>Create here</a>
              </p>
            </Form.Item>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

export default LoginPage;
