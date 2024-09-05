import React, { useState } from "react";
import { Button, Modal, Form, Alert, notification } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import EmployeeDetailForm from "./EmployeeDetailForm";
import BankDetailForm from "./BankDetailForm";
import GurdaianDetailForm from "./GurdaianDetailForm";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const AddNewEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mutation = useMutation({
    mutationKey: ["employees"],
    mutationFn: async (values) => {
      const response = await axios.post("http://localhost:4000/api/v1/employee", values, {

        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response: ", response);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("data: ", data);
      Alert.success({ content: 'Employee added successfully' });
    },
    onError: (error) => {
      console.error("error: ", error);
      Alert.error({ content: 'Error adding employee' });
    },
  });

  const [form] = Form.useForm();

  const onFinish = (values) => {
    mutation.mutate(values);
    // handlePostData("http://localhost:4000/api/v1/employee", values)
    console.log("Received values of form: ", values);
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.error({
      message: 'Form Submission Failed',
      description: 'Required fields are missing or incorrect. Please check the form and try again.',
      duration: 5,
    });
    setIsModalOpen(false);
  };

  const handleOk = () => {
    form.submit();
    setIsModalOpen(false)
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        icon={<UserAddOutlined />}
      // style={{ margin: "5px 10px" }}
      >
        Add New Employee
      </Button>
      <Modal
        style={{ position: "absolute", top: 0, right: 0 }}
        title="ADD NEW EMPLOYEE"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        width={"31%"}
      >
        <Form
          form={form}
          name="basic"
          layout="horizontal"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          scrollToFirstError={true}
          initialValues={{
            contract: "true",
            gender: "other",
            designation: "engineering",
            guardianRelationship: "father",
          }}
        >
          <Form.Item>
            <Button
              size="medium"
              style={{ float: "right" }}
              type="primary"
              htmlType="submit"
              icon={<UserOutlined />}
            >
              {" "}
              Submit
            </Button>
          </Form.Item>
          <EmployeeDetailForm />
          <BankDetailForm />
          <GurdaianDetailForm />
        </Form>
      </Modal>
    </div>
  );
};

export default AddNewEmployee;
