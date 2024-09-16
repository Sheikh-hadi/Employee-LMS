import React, { useState } from "react";
import { Button, Modal, Form, notification } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import EmployeeDetailForm from "./EmployeeDetailForm";
import BankDetailForm from "./BankDetailForm";
import GurdaianDetailForm from "./GurdaianDetailForm";
import usePostEmployee from "../../Hooks/Employee/UsePostEmployeehook";



const AddNewEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { mutate } = usePostEmployee({ setIsModalOpen, form });

  const onFinish = (values) => {
    mutate(values);
    // console.log("Received values of form: ", values);
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    notification.error({
      key: 'form-submission-failed',
      message: 'Form Submission Failed',
      description: 'Required fields are missing. Please check the form and try again.',
      duration: 5,
      style: {
        borderLeft: `4px solid red`, // Red for error, green for success
        position: 'relative',
        color: 'red'
      },
      showProgress: true,

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
