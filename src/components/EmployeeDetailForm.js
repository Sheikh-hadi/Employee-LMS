import React from "react";
import { DatePicker, Form, Input, Select } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import moment from "moment";
import genderDropdownOptions from "../models/genderDropdownModel";
import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel";
import booleanDropdownOptions from "../models/booleanDropdownModel";

const { TextArea } = Input;
const { Option } = Select;

const EmployeeDetailForm = () => {
  const disabledDate = (current) => {
    // Can not select days after today
    return current && current > moment().endOf('day');
  };
  return (
    <>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          { required: true, message: "Please input your first name!" },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only letters and spaces are allowed)" }
        ]}
      >
        <Input
          placeholder="Enter your first name"
          prefix={<UserOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          { required: true, message: "Please input your last name!" },
          { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only letters and spaces are allowed)" }
        ]}
      >
        <Input
          placeholder="Enter your last name"
          prefix={<UserOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          placeholder="Enter your email"
          prefix={<MailOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          { required: true, message: "Please input your phone number!" },
          { pattern: /^\d{11}$/, message: "Please enter a valid 11-digit phone number!" },
        ]}
      >
        <Input
          placeholder="0000-0000000"
          maxLength={12}
          prefix={<PhoneOutlined rotate={90} style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="CNIC"
        name="cnic"
        rules={[
          { required: true, message: "Please input your CNIC!" },
          { pattern: /^\d{13}$/, message: "Please enter a valid 13-digit CNIC!" },
        ]}
      >
        <Input
          placeholder="Enter your CNIC"
          prefix={<IdcardOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <TextArea
          autoSize={{ minRows: 4 }}
          placeholder="Enter your address "
        />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select your gender!" }]}
      >
        <Select placeholder="Select your gender">
          {genderDropdownOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.icon} {option.label}
            </Select.Option>
          ))}
        </Select>


      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[
          { required: true, message: "Please input your date of birth!" },
          ]}
      >
        <DatePicker disabledDate={disabledDate}
          format="YYYY-MM-DD"
          style={{ width: '100%' }}
        />

      </Form.Item>

      <Form.Item
        label="Duration"
        name="duration"

      >
        <Input
          placeholder="Enter duration"
          prefix={<UserOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please select your designation!" }]}
      >
        <Select placeholder="Select your designation">
          {employeeDepartmentDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.icon}
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Salary"
        name="salary"
        rules={[
          { required: true, message: "Please input your salary!" },
          { 
            pattern: /^\d+$/, 
            message: "Please enter a valid salary (only whole numbers are allowed)" 
          }]}
      >
        <Input
          placeholder="Enter your salary"
          prefix={<DollarOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
        />
      </Form.Item>

      <Form.Item
        label="Contract"
        name="contract"
        rules={[{ required: true, message: "Please select your contract status!" }]}
      >
        <Select placeholder="Select contract status">
          {booleanDropdownOptions.map(option => (
            <Option key={option.value} value={option.value}>
              {option.icon}
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default EmployeeDetailForm;
