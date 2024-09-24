import React from 'react';
import { Button, Col, Modal, Row, Typography, Form, Input, notification, Switch } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import useUpdateUser from '../../Hooks/UserHook/usePutUpdateUser';

const { Title } = Typography;
const { TextArea } = Input;

const EditUserDetail = ({ initialValues }) => {
    const [isModalVisible, setIsModalVisible] = React.useState({
        edit: false,
        changePassword: false,
    });
    const [form] = Form.useForm();
    const { mutate: user } = useUpdateUser(setIsModalVisible, form);
    const [showNewPasswordFields, setShowNewPasswordFields] = React.useState(false);

    const onChangeOldPassword = (e) => {
        const password = e.target.value;
        setShowNewPasswordFields(password ? true : false);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setIsModalVisible({ changePassword: false, edit: false });
        form.resetFields();
        setShowNewPasswordFields(false); // Reset new password fields
    };

    const onFinishUserDetails = (values) => {
        console.log('User Details Success:', values);
        setIsModalVisible({ ...isModalVisible, edit: false });
        user(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        const firstErrorField = errorInfo.errorFields[0]?.name;
        if (firstErrorField) {
            form.scrollToField(firstErrorField);
        }
        notification.error({
            key: 'form-submission-failed',
            message: 'Missing required Fields',
            description: errorInfo.errorFields.map((error, index) => (
                <li key={index}>{`${index + 1}) ${error?.name}`}</li>
            )),
            duration: 5,
            style: { borderLeft: `4px solid red`, position: 'relative', color: 'red' },
            showProgress: true,
        });
        setIsModalVisible({ ...isModalVisible, edit: true });
    };

    const onFinishChangePassword = (values) => {
        console.log('Change Password Success:', values);
        // Handle password change logic (e.g., API call)
        setIsModalVisible({ ...isModalVisible, changePassword: false });
        form.resetFields(); // Reset form fields
    };

    return (
        <>
            <Row align="middle" justify="space-between" style={{ padding: '8px' }}>
                <Col>
                    <Title level={4}>
                        <UserOutlined style={{ marginRight: '8px' }} />
                        User Details
                    </Title>
                </Col>
                <Col>
                    <Row gutter={16} align="middle" justify="space-between" style={{ padding: '8px' }}>
                        <Col>
                            <Button
                                type="primary"
                                icon={<EditOutlined />}
                                size="middle"
                                onClick={() => setIsModalVisible({ ...isModalVisible, changePassword: true })}
                            >
                                Change Password
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                type="primary"
                                icon={<EditOutlined />}
                                size="middle"
                                onClick={() => setIsModalVisible({ ...isModalVisible, edit: true })}
                            >
                                Edit
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Modal
                title="Change Password"
                open={isModalVisible.changePassword}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={onFinishChangePassword}>
                    <Form.Item
                        label="Old Password"
                        name="oldPassword"
                        rules={[{ required: true, message: 'Please input your old password!' }]}
                    >
                        <Input.Password
                            placeholder='Old Password'
                            allowClear
                            onChange={onChangeOldPassword}
                        />
                    </Form.Item>
                    {showNewPasswordFields && (
                        <>
                            <Form.Item
                                label="New Password"
                                name="newPassword"
                                rules={[{ required: true, message: 'Please input your new password!' }]}
                            >
                                <Input.Password placeholder='New Password' allowClear />
                            </Form.Item>
                            <Form.Item
                                label="Confirm New Password"
                                name="confirmPassword"
                                rules={[
                                    { required: true, message: 'Please confirm your new password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder='Confirm New Password' allowClear />
                            </Form.Item>
                        </>
                    )}
                    <Form.Item>
                        <Button type="primary" htmlType="submit"> Submit </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="User Detail"
                open={isModalVisible.edit}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinishUserDetails}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={initialValues}
                >
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

                    <Form.Item
                        label="Username"
                        name="userName"
                        hasFeedback
                        rules={[{ required: true, message: 'Please input the username!' }, { min: 6, message: 'Username must be at least 6 characters long!' }]}
                    >
                        <Input placeholder="Enter username" allowClear />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        hasFeedback
                        rules={[{ required: true, message: 'Please input the email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
                    >
                        <Input placeholder="Enter email" allowClear />
                    </Form.Item>

                    <Form.Item
                        label="Contact Number"
                        name="contactNumber"
                        hasFeedback
                        rules={[{ required: true, message: 'Please input the contact number!' }, { pattern: /^[0-9]+$/, message: 'Contact number can only contain numbers!' }]}
                    >
                        <Input placeholder="Enter contact number" allowClear maxLength={11} />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        hasFeedback
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <TextArea placeholder="Enter address" allowClear />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select the status!' }]}
                    >
                        <Switch />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit"> Submit </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditUserDetail;
