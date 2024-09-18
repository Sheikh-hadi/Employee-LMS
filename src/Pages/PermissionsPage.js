import { Checkbox, Col, Row, Card, Form, Button } from 'antd';
import React from 'react';

const PermissionsPage = () => {
  const [form] = Form.useForm();

  // Handler for the Permissions checkbox
  const onChangePermission = (e) => {
    const checked = e.target.checked;
    // Update the form with the checked status for all permissions
    form.setFieldsValue({
      employeeCreate: checked,
      employeeEdit: checked,
      employeeDelete: checked,
      employeeView: checked,
      employeePermissions: checked,
    });
  };

  const onChangePermissionemployee = (e) => {
    const checked = e.target.checked;
    // Update the form with the checked status for all permissions
    form.setFieldsValue({
      employeeCreate: checked,
      employeeEdit: checked,
      employeeDelete: checked,
      employeeView: checked,
    });
  };

  // When the form is submitted
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // When the form submission fails
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {/* Checkbox to control all permissions */}
      <Checkbox onChange={onChangePermission}>Permissions</Checkbox>
      <Form
        form={form}
        name="permissionsForm"
        layout="horizontal"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError={true}
      >
        <Row>

          <Col span={12}>
            <Card
              title={
                <Form.Item name="employeePermissions" valuePropName='checked'>
                  <Checkbox onChange={onChangePermissionemployee}>Employee Permissions</Checkbox>
                </Form.Item>
              }
              style={{ width: 300 }}
            >
              <Form.Item name="employeeCreate" valuePropName="checked">
                <Checkbox>Create Employee</Checkbox>
              </Form.Item>

              <Form.Item name="employeeEdit" valuePropName="checked">
                <Checkbox>Edit Employee</Checkbox>
              </Form.Item>

              <Form.Item name="employeeDelete" valuePropName="checked">
                <Checkbox>Delete Employee</Checkbox>
              </Form.Item>

              <Form.Item name="employeeView" valuePropName="checked">
                <Checkbox>View Employee</Checkbox>
              </Form.Item>
            </Card>
          </Col>
        </Row>
        <Row justify={"end"}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default PermissionsPage;
