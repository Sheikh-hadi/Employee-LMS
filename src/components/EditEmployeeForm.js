import React from "react";
import { Form, Input, Select, Button, Row, Col, Card } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import genderDropdownOptions from "../models/genderDropdownModel";
import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel";
import booleanDropdownOptions from "../models/booleanDropdownModel";

const { TextArea } = Input;
const { Option } = Select;

const EditEmployeeForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  // Form submit handler
  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card} title="Edit Employee">
        <Form
          layout="vertical"
          form={form}
          initialValues={initialValues}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            {/* First Name */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input the first name!" },
                  { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name" },
                ]}
              >
                <Input
                  placeholder="Enter first name"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>

            {/* Last Name */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input the last name!" },
                  { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name" },
                ]}
              >
                <Input
                  placeholder="Enter last name"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>

            {/* Email */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input the email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Enter email"
                  prefix={<MailOutlined />}
                />
              </Form.Item>
            </Col>

            {/* Phone Number */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please input the phone number!" },
                  { pattern: /^\d{11}$/, message: "Please enter a valid 11-digit phone number!" },
                ]}
              >
                <Input
                  placeholder="0000-0000000"
                  maxLength={11}
                  prefix={<PhoneOutlined rotate={90} />}
                />
              </Form.Item>
            </Col>

            {/* CNIC */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="CNIC"
                name="cnic"
                rules={[
                  { required: true, message: "Please input the CNIC!" },
                  { pattern: /^\d{13}$/, message: "Please enter a valid 13-digit CNIC!" },
                ]}
              >
                <Input
                  placeholder="Enter CNIC"
                  prefix={<IdcardOutlined />}
                />
              </Form.Item>
            </Col>

            {/* Address */}
            <Col xs={24}>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please input the address!" }]}
              >
                <TextArea placeholder="Enter address" autoSize={{ minRows: 3 }} />
              </Form.Item>
            </Col>

            {/* Gender */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select placeholder="Select gender">
                  {genderDropdownOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {/* Designation */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Designation"
                name="designation"
                rules={[{ required: true, message: "Please select designation!" }]}
              >
                <Select placeholder="Select designation">
                  {employeeDepartmentDropdownOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {/* Salary */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Salary"
                name="salary"
                rules={[
                  { required: true, message: "Please input the salary!" },
                  { pattern: /^\d+$/, message: "Please enter a valid salary (whole numbers only)!" },
                ]}
              >
                <Input
                  placeholder="Enter salary"
                  prefix={<DollarOutlined />}
                />
              </Form.Item>
            </Col>

            {/* Contract Status */}
            <Col xs={24} sm={12}>
              <Form.Item
                label="Contract Status"
                name="contract"
                rules={[{ required: true, message: "Please select contract status!" }]}
              >
                <Select placeholder="Select contract status">
                  {booleanDropdownOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.icon} {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            {/* Submit Button */}
            <Col xs={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Save Changes
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
 
  // card: {
  //   width: '100%',
  //   padding: '20px',
  // },
};

export default EditEmployeeForm;
