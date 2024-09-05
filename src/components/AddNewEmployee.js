import React, { useState } from "react";
import { Button, Modal, Form, notification } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import EmployeeDetailForm from "./EmployeeDetailForm";
import BankDetailForm from "./BankDetailForm";
import GurdaianDetailForm from "./GurdaianDetailForm";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";



const AddNewEmployee = () => {
  const queryClient = useQueryClient();
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
      notification.success({
        message: 'Success',
        description: data.message,
      });
      console.log('data: ', data);
      setIsModalOpen(false);
      form.resetFields();
      queryClient.invalidateQueries('employees');
    },
    onError: (error) => {
      console.log("error: ", error);
      notification.error({
        message: 'Error',
        description: `Employee addition failed: ${error?.response?.message || 'Unknown error'}`,
      });
      console.error('error: ', error);
      setIsModalOpen(false);
      form.resetFields();
    },
  });

  const [form] = Form.useForm();

  const onFinish = (values) => {
    mutation.mutate(values);
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
            gender: "male",
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
