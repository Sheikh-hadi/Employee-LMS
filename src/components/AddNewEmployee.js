import React, { useState } from "react";
import { Button, Modal, Form } from "antd"; // Import Modal from Ant Design
import { UserAddOutlined , UserOutlined} from "@ant-design/icons";
import EmployeeDetailForm from "./EmployeeDetailForm";
import BankDetailForm from "./bankDetailForm";
import GurdaianDetailForm from "./GurdaianDetailForm";

const AddNewEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const length = Object.keys(values).length;
    console.log(length);
    console.log("Received values of form: ", values);
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        onOk={() => setIsModalOpen(false)}
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
              icon={<UserOutlined/>}
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
