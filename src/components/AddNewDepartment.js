import React from "react";
import { Button, Modal, Form, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const AddNewDepartment = () => {
  let formInstance;

  const showModal = () => {
    Modal.confirm({
      title: "ADD NEW DEPARTMENT",
      icon: <UserAddOutlined style={{ color: "#1677ff" }}/>,
      width: "31%",
      content: (
        <Form
          ref={(form) => {
            formInstance = form;
          }}
          layout="horizontal"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={(values) => {
            console.log("Received values of form: ", values);
            formInstance.resetFields();
          }}
        >
          <Form.Item
            label="Department Name"
            name="departmentName"
            rules={[{ required: true, message: "Please input the department name!" }]}
          >
            <Input placeholder="Enter department name" />
          </Form.Item>
        </Form>
      ),
      onOk() {
        formInstance.submit();
      },
      onCancel() {},
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="primary" onClick={showModal} icon={<UserAddOutlined  color="blue"/>}>
        Add New Department
      </Button>
    </div>
  );
};

export default AddNewDepartment;
