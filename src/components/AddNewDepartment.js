import React from "react";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import usePostDepartment from "../Hooks/Department/usePostDepartmentHook";

const AddNewDepartment = () => {
  const { mutate } = usePostDepartment()
  const [form] = Form.useForm();

  const showModal = () => {
    Modal.confirm({
      title: "ADD NEW DEPARTMENT",
      icon: <UserAddOutlined style={{ color: "#1677ff" }} />,
      content: (
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            mutate(values);
            console.log("Received values of form: ", values);
            form.resetFields();
          }}
        >
          <Form.Item
            label="Department Name"
            name="name"
            rules={[{ required: true, message: "Please input the department name!" }]}
          >
            <Input placeholder="Enter department name" />
          </Form.Item>
        </Form>
      ),
      onOk() {
        form.submit();
      },
    });
  };

  return (
    <Row justify="center" style={{ padding: "10px" }}>
      <Col xs={29} sm={27} md={8} lg={6} style={{ textAlign: "center" }}>
        <Button type="primary" onClick={showModal} icon={<UserAddOutlined />}>
          Add New Department
        </Button>
      </Col>
    </Row>
  );
};

export default AddNewDepartment;
