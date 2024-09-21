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
      description: errorInfo.errorFields.map((error, index) => {
        return (

          <li style={{ display: "inline" }} key={index}>
            {`${index + 1}) ${error?.name}  `}
          </li>

        )
      }),
      duration: 5,
      style: {
        borderLeft: `4px solid red`, // Red for error, green for success
        position: 'relative',
        color: 'red'
      },
      showProgress: true,

    });
  };

  const handleOk = () => {
    form.submit();
    setIsModalOpen(true)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
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
        onCancel={handleCancel}
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
