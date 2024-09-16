import React from "react";
import { Form, Input, Select } from "antd";
import guardianRelationDropdownOption from "../../models/gardianRealationDropdownModel";
import { UserOutlined, PhoneOutlined, } from "@ant-design/icons";

const GurdaianDetailForm = () => {
  return (
    <>
      <hr />
      <h1> Guardian Name </h1>
      <hr />

      <Form.Item
        label="Name"
        name="guardianName"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your guardian name!",
          },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only Alphabets are allowed)" }
        ]}
      >
        <Input
          type="text"
          placeholder="Enter your guardian name"
          prefix={<UserOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="guardianPhoneNumber"
        hasFeedback
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
        <Input
          placeholder="0000-0000000"
          maxLength={11}
          prefix={<PhoneOutlined rotate={90} style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Relationship"
        name="guardianRelationship"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please input your relationship!",
          },
        ]}
      >
        <Select>
          {guardianRelationDropdownOption.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.icon} {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default GurdaianDetailForm;
