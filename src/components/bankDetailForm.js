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
        rules={[
          {
            required: true,
            message: "Please input your bank name!",
          },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only letters and spaces are allowed)" }
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
        rules={[
          {
            required: true,
            message: "Please input your account Title!",
          },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only letters and spaces are allowed)" }
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
        rules={[
          {
            required: true,
            message: "Please input your account Number!",
          },
          {
            pattern: /^\d+$/,
            message: "Please enter a valid salary (only whole numbers are allowed)"
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
