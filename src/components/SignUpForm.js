import React from 'react';
import { Form, Input, Button, message , Typography} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Check if all fields are filled
    const { Name, userName, email, password, confirmPassword } = values;
    if (!Name || !userName || !email || !password || !confirmPassword) {
      message.error('Please fill in all fields!');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }

    // Check if password length is at least 8 characters
    if (password.length < 8) {
      message.error('Password must be at least 8 characters long!');
      return;
    }

    // If all validations pass
    message.success('Successfully signed up!');
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
          position: 'relative',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: '#f0f2f5',
            borderRadius: '10px 0 0 10px',
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
              borderRadius: '10px 0 0 10px',
            }}
          />
       <a href='/login'> <Button
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
            Log In
          </Button></a>  
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
          
          <Typography.Title
            style={{
              fontSize: '54px',
              marginBottom: '30px',
              color: 'darkblue',
              textAlign: 'center',
              marginTop: '2px',
            }}
          >
            Sign Up<span style={{ fontSize: '54px', color: 'darkblue' }}></span>
          </Typography.Title>

          <Form
            form={form}
            name="signUp"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ width: '70%' }}
          >
            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}> Name</span>}
              name="Name"
              rules={[{ required: true, message: 'Please enter your  name!' }]}
            >
              <Input
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Enter your  name"
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Username</span>}
              name="userName"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Enter your username"
              />
            </Form.Item>

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

            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Confirm Password</span>}
              name="confirmPassword"
              rules={[{ required: true, message: 'Please confirm your password!' }]}
            >
              <Input.Password
                style={{ border: "1px solid darkslateblue" }}
                placeholder="Confirm your password"
                prefix={<LockOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
              />
            </Form.Item>

            <Form.Item style={{ border: '1px solid darkslateblue', borderRadius: '7px' }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: "darkslateblue", borderColor: "darkslateblue" }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
