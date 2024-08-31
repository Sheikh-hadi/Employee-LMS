import React from "react";
import { Form, Input, Select } from "antd";
import gardianRealationDropdownOption from "../models/gardianRealationDropdownModel";
import { UserOutlined } from "@ant-design/icons";
const GurdaianDetailForm = () => {
  return (
    <>
      <hr />
      <h1> Guardian Name </h1>
      <hr />

      <Form.Item
        label="Name"
        name="guardianName"
        rules={[
          {
            required: true,
            message: "Please input your guardian name!",
          },
        ]}
      >
        <Input
          type="text"
          placeholder="Enter your guardian name"
          prefix={<UserOutlined />}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="guardianPhoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your guardian phone number!",
          },
          {
            pattern: /^\d{11}$/, // Regex pattern for 11-digit phone number
            message: "Please enter a valid 11-digit phone number!",
          },
        ]}
      >
        <Input type="text" placeholder="0300-0000000" />
      </Form.Item>

      <Form.Item
        label="Relationship"
        name="guardianRelationship"
        rules={[
          {
            required: true,
            message: "Please input your relationship!",
          },
        ]}
      >
        <Select options={gardianRealationDropdownOption}>
          {gardianRealationDropdownOption.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default GurdaianDetailForm;
