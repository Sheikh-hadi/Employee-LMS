import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message, Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import usePostLoginHook from '../Hooks/UserHook/usePostLoginHook';

const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: mutateSignIn } = usePostLoginHook(form);

  const onFinish = (values) => {
    console.log('Success:', values);
    mutateSignIn(values);
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
          boxSizing: 'content-box',
        }}
      >
        {/* Text Section (Form) now on the left */}
        <Col
          xs={24}
          md={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          {/* Logo Image */}
          <img
            src="gpslogo2.png"
            alt="Craxinno Logo"
            style={{
              width: '150px',
              position: 'absolute',
              top: '20px',
              left: '20px',
            }}
          />

          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{ width: '80%', marginTop: '170px' }} 
          >
            <Form.Item
              label={<span style={{ color: 'darkslateblue' }}>Email</span>}
              name="email"
              hasFeedback
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input
                style={{ border: '1px solid darkslateblue' }}
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
                style={{ border: '1px solid darkslateblue' }}
                placeholder="Enter your password"
                prefix={<LockOutlined style={{ color: 'darkslateblue', margin: '5px' }} />}
              />
            </Form.Item>

            <Form.Item>
              <Row justify="space-between">
                <Checkbox style={{ color: 'darkslateblue' }}>Remember Me</Checkbox>
                <span
                  onClick={() => {
                    navigate('/forgetPassword');
                  }}
                  style={{ color: 'darkslateblue', cursor: 'pointer' }}
                >
                  Forgot Password?
                </span>
              </Row>
            </Form.Item>
            <Form.Item
  
>
<Form.Item style={{ border: '1px solid darkslateblue', borderRadius: '7px' ,width:'40%'}}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: '#9978ee', borderColor: '#fff' ,fontSize:'18px'}}
              >
                Login
              </Button>
            </Form.Item>
</Form.Item>

{/* 
            <Form.Item style={{ marginTop: '20px' }}>
              <p>
                Don’t have an account?{' '}
                <a href="/signUpForm" style={{ color: 'darkslateblue' }}>
                  Create here
                </a>
              </p>
            </Form.Item> */}
          </Form>
        </Col>

        {/* Image Section now on the right */}
        <Col
          xs={0}
          md={12}
          style={{
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img
            src="login.png"
            alt="Craxinno CRM"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Col>
      </Col>
    </Row>
  );
};

export default LoginPage;
