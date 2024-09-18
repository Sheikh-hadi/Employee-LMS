import React from 'react';
import { Button, Col, Modal, Row, Typography, Form, Input,   } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const { Search } = Input;

const EditUserDetail = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Row align="middle" justify="space-between" style={{ padding: '8px' }}>
                <Col>
                    <Title level={4}>
                        <UserOutlined style={{ marginRight: '8px' }} />
                        User Details
                    </Title>
                    <Search placeholder='Search By Id' size='small' />
                </Col>
                <Col>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size="middle"
                        onClick={() => setIsModalVisible(true)}
                    >
                        Edit
                    </Button>
                </Col>
            </Row>

            <Modal
                title="User Detail"
                open={isModalVisible} // Use visible to control the modal's visibility
                onOk={handleOk} // Handle form submission on Ok
                onCancel={handleCancel} // Handle modal close
                okText="Submit" // Change Ok button text to "Submit"
                cancelText="Cancel" // Change Cancel button text to "Cancel"
            >
                <Form
                    form={form} // Associate the form with the form instance
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    {/* Row for Name and Username */}
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Name"
                                name="fullName"
                                hasFeedback
                                rules={[
                                    { required: true, message: "Please input your name!" },
                                    { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only Alphabets are allowed)" }
                                ]}
                            >
                                <Input placeholder="Enter name" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                hasFeedback
                                rules={[
                                    { required: true, message: 'Please input the username!' },
                                    { min: 6, message: 'Username must be at least 6 characters long!' },
                                ]}
                            >
                                <Input placeholder="Enter username" allowClear />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Email and Contact Number */}
                    <Form.Item
                        label="Email"
                        name="email"
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please input the email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' },
                        ]}
                    >
                        <Input placeholder="Enter email" allowClear />
                    </Form.Item>

                    <Form.Item
                        label="Contact Number"
                        name="contactNumber"
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please input the contact number!' },
                            { pattern: /^[0-9]+$/, message: 'Contact number can only contain numbers!' },
                        ]}
                    >
                        <Input placeholder="Enter contact number" allowClear maxLength={11} />
                    </Form.Item>

                  
                   
                    {/* Address */}
                    <Form.Item
                        label="Address"
                        name="address"
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please input the address!' },
                        ]}
                    >
                        <TextArea placeholder="Enter address" allowClear />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditUserDetail;
