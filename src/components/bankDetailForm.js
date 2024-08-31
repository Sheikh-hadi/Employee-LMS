import React from "react";
import { Form, Input } from "antd";
import { BankOutlined } from "@ant-design/icons";
const bankDetailForm = () => {
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
        ]}
      >
        <Input 
        type="text"
        placeholder="Enter your bank name"
        prefix={<BankOutlined  style={{ fontSize: '18px', paddingRight: '10px' }}/>}
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
        ]}
      >
        <Input
         type="text"
         placeholder="Enter your account title"
         prefix={<BankOutlined  style={{ fontSize: '18px', paddingRight: '10px' }}/>}
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
        ]}
      >
        <Input
         type="text"
         placeholder="Enter your account number"
         prefix={<BankOutlined  style={{ fontSize: '18px', paddingRight: '10px' }}/>}
          />
      </Form.Item>
    </>
  );
};

export default bankDetailForm;
