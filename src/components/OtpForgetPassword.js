import React from 'react'
import { Form, Button, Input } from 'antd'
export const OtpForgetPassword = ({ handleSubmit }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleSubmitButton = () => {
        handleSubmit(false)
        console.log('Button clicked');
    };
    return (
        <>
            <Form
                name='otp'
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="otp"
                    rules={[{ required: true, message: 'Please enter the OTP!' }]}
                >
                    <Input.OTP length={6} />
                </Form.Item>
                <Form.Item>
                    <Button
                        onClick={handleSubmitButton}
                        type="primary"
                        htmlType='submit'
                        style={{
                            width: '100%',
                            height: '45px',
                            borderRadius: '8px',
                            backgroundColor: 'darkslateblue',
                            color: '#fff'
                        }}
                    >
                        Verify and Proceed
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
