import React from 'react';
import { Form, Input, Button, message, Typography, Row, Col } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const SignUpForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { fullName, userName, email, password, confirmPassword } = values;
    if (!fullName || !userName || !email || !password || !confirmPassword) {
      message.error('Please fill in all fields!');
      return;
    }

    message.success('Successfully signed up!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f2f5' }}>
      <Col xs={24} sm={18} md={16} lg={14} xl={12} style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <Row style={{ height: '100%' }}>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}
            style={{ backgroundColor: '#f0f2f5', borderRadius: '10px 0 0 10px', position: 'relative' }}>
            <img
              src="login_page.png"
              alt="Craxinno CRM"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 0 0 10px' }}
            />
            <a href='/login'>
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
                Log In
              </Button>
            </a>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ padding: '10px', borderRadius: '0 10px 10px 0', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography.Title style={{ fontSize: '54px', marginBottom: '30px', color: 'darkblue', textAlign: 'center' }}>
              Sign Up
            </Typography.Title>

            <Form
              form={form}
              name="signUp"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              style={{ width: '70%' }}
              autoComplete='off'
            >
              <Form.Item
                label={<span style={{ color: 'darkslateblue' }}>Name</span>}
                name="fullName"
                hasFeedback
                prefix={<UserOutlined style={{ color: "#F51636", fontSize: "18px" }} />}
                rules={[
                  { required: true, message: 'Please enter your name!' }
                ]}
              >
                <Input
                  allowClear
                  style={{ border: "1px solid darkslateblue" }}
                  placeholder="Enter your name"

                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: 'darkslateblue' }}>Username</span>}
                hasFeedback
                name="userName"
                rules={[{ required: true, message: 'Please enter your username!' }]}
                prefix={<UserOutlined style={{ color: "#F51636", fontSize: "18px" }} />}
              >
                <Input
                  allowClear
                  style={{ border: "1px solid darkslateblue" }}
                  placeholder="Enter your username"
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: 'darkslateblue' }}>Email</span>}
                name="email"
                hasFeedback
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}>

                <Input
                  allowClear
                  style={{ border: "1px solid darkslateblue" }}
                  placeholder="Enter your email"
                  prefix={<MailOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}

                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: 'darkslateblue' }}>Password</span>}
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: 'Please enter your password!' },
                  { min: 8, message: 'Password must be at least 8 characters long!' }
                ]}>
                <Input.Password
                  allowClear
                  style={{ border: "1px solid darkslateblue" }}
                  placeholder="Enter your password"
                  prefix={<LockOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
                />
              </Form.Item>

              <Form.Item
                label={<span style={{ color: 'darkslateblue' }}>Confirm Password</span>}
                name="confirmPassword"
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Passwords do not match!"));
                    },
                  }),
                ]}
              >
                <Input.Password
                  allowClear
                  style={{ border: "1px solid darkslateblue" }}
                  placeholder="Confirm your password"
                  prefix={<LockOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
                />
              </Form.Item>

              <Form.Item
                style={{
                  border: '1px solid darkslateblue',
                  borderRadius: '7px'
                }}
              >
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
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignUpForm;
