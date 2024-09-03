import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { GoogleOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '800px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: '#f0f2f5',
            borderRadius: '10px 0 0 10px',
          }}
        >
          <img
            src="login_page.png"
            alt="Craxinno CRM"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px 0 0 10px',
            }}
          />
        </div>

        <div
          style={{
            flex: 0.9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10px',
            borderRadius: '0 10px 10px 0',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginTop: '40px',
              color: 'darkblue',
            }}
          >
            Craxinno CRM
          </div>
          <Typography.Title
            style={{
              fontSize: '54px',
              marginBottom: '30px',
              color: 'darkblue',
              textAlign: 'center',
              marginTop: '2px',
            }}
          >
            Welcome To <span style={{ fontSize: '54px', color: 'darkblue' }}>Craxinno CRM</span>
          </Typography.Title>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ width: '70%' }}
          >
            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Email</span>}
              name="email"
              hasFeedback
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Enter your Email"
                prefix={<MailOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Password</span>
              }
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Checkbox style={{ color: "darkslateblue" }}>Remember Me</Checkbox>
                <a href="/" style={{ color: "darkslateblue" }}>
                  Forgot Password?
                </a>
              </div>
            </Form.Item>

            <Form.Item  style={{ border: '1px solid darkslateblue', borderRadius: '7px' }}>
              <Button style={{ color: "darkslateblue" }} htmlType="submit" block>
                Login
              </Button>
            </Form.Item>

            <Form.Item>
              <p>
                Don’t have an account? <a href="/">Create here</a>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
