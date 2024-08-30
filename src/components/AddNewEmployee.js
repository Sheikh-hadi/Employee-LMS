import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd"; // Import Modal from Ant Design

const AddNewEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Button type="primary" onClick={showModal}>
        Add New Employee
      </Button>
      <Modal
        style={{ position: "absolute", top: 0, right: 0 }}
        title="Add New Employee"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="layout-multiple-horizontal"
          layout="horizontal"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>{" "}
          <Form.Item
            label="CNIC"
            name="cnic"
            rules={[
              {
                required: true,
                message: "Please input  CNIC!",
              },
            ]}
          >
            <Input />
          </Form.Item>{" "}
          <Form.Item
            label="Designation"
            name="designation"
            rules={[
              {
                required: true,
                message: "Please input  Designation!",
              },
            ]}
          > <Input type="text" /></Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your EmailId!",
              },
            ]}
          >
             <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Contact"
            name="contact"
            rules={[
              {
                required: true,
                message: "Please input your Contact!",
              },
            ]}
          > <Input type="text" /></Form.Item>{" "}
          <Form.Item
            label="Dob"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input your Date of birth!",
              },
            ]}
          > <Input type="text" /></Form.Item>{" "}
          <Form.Item
            label="CurrentAddress"
            name="currentAddress"
            rules={[
              {
                required: true,
                message: "Please input your Current Address!",
              },
            ]}
          > <Input type="text" /></Form.Item>{" "}
          <Form.Item
            label="JoiningDate"
            name="joiningDate"
            rules={[
              {
                required: true,
                message: "Please input  Joining Date!",
              },
            ]}
          > <Input type="text" /></Form.Item>
          <Form.Item
            label="EndDate"
            name="endDate"
            rules={[
              {
                required: true,
                message: "Please input your End Date!",
              },
            ]}
          > <Input type="text" /></Form.Item>
          <Form.Item
            label="Duration"
            name="duration"
            rules={[
              {
                required: true,
                message: "Please input your Duration!",
              },
            ]}
          > <Input type="text" /></Form.Item>
           <Form.Item
            label="Contract"
            name="contract"
            rules={[
              {
                required: true,
                message: "Please input your Contract!",
              },
            ]}
          > <Input type="text" /></Form.Item>
           <Form.Item
            label="GuardianName"
            name="guardianName"
            rules={[
              {
                required: true,
                message: "Please input your Guardian Name!",
              },
            ]}
          > <Input type="text" /></Form.Item>
           <Form.Item
            label="Contact"
            name="contact"
            rules={[
              {
                required: true,
                message: "Please input your Contact!",
              },
            ]}
          > <Input type="text" /></Form.Item>
           <Form.Item
            label="Relation"
            name="relation"
            rules={[
              {
                required: true,
                message: "Please input your Relation!",
              },
            ]}
          > <Input type="text" /></Form.Item>
           <Form.Item
            label="BankAccount"
            name="bankAccount"
            rules={[
              {
                required: true,
                message: "Please input your BankAccount!",
              },
            ]}
          > <Input type="text" /></Form.Item>
        
        </Form>
        
      </Modal>
    </div>
  );
};

export default AddNewEmployee;
