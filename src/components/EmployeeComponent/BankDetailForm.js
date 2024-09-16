import React from "react";
import { Form, Input } from "antd";
import { BankOutlined } from "@ant-design/icons";
const BankDetailForm = () => {
  return (
    <>
      <hr />
      <h1> Bank Detail </h1>
      <hr />
      <Form.Item
        label="Bank Name"
        name="bankName"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your bank name!",
          },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only Alphabets are allowed)" }
        ]}
      >
        <Input
          type="text"
          placeholder="Enter your bank name"
          prefix={<BankOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Account Title"
        name="accountTitle"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your bank account Title!",
          },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only Alphabets are allowed)" }
        ]}
      >
        <Input
          type="text"
          placeholder="Enter your account title"
          prefix={<BankOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Account Number"
        name="accountNumber"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your account Number!",
          },
          {
            pattern: /^\d+$/,
            message: "Please enter a valid account number (only  numbers are allowed)"
          }
        ]}
      >
        <Input
          type="text"
          placeholder="Enter your account number"
          prefix={<BankOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>
    </>
  );
};

export default BankDetailForm;
