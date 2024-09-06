import React from "react";
import { Form, Input, Select, Button, Row, Col, Card, notification } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  IdcardOutlined,
  DollarOutlined,
  BankOutlined
} from "@ant-design/icons";
import genderDropdownOptions from "../models/genderDropdownModel";
import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel";
import booleanDropdownOptions from "../models/booleanDropdownModel";
import guardianRelationDropdownOption from "../models/gardianRealationDropdownModel";

const { TextArea } = Input;
const { Option } = Select;

const EditEmployeeForm = ({ setHandleValue }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setHandleValue(
      {
        model: false,
        id: null,
        edit: false,
        record: null
      })
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.error({
      message: 'Form Submission Failed',
      description: 'Required fields are missing or incorrect. Please check the form and try again.',
      duration: 5,
    });
    setHandleValue(
      {
        model: false,
        id: null,
        edit: false,
        record: null
      })
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card} title="Edit Employee">
        <Form
          layout="vertical"
          form={form}
          // initialValues={}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            {/* First Name */}
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>

                {/* First Name */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                <Col xs={24} sm={24} md={8} lg={8}>
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
                <Col xs={24} sm={24} md={8} lg={8}>
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
                </Col>

              </Row>
            </Col>


            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>

                {/* Phone Number */}
                <Col xs={24} sm={24} md={8} lg={8}>
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

                {/* Cnic */}
                <Col xs={24} sm={24} md={8} lg={8}>
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

                {/* Email */}
                <Col xs={24} sm={24} md={8} lg={8}>
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

              </Row>
            </Col>



            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>

                {/* Designation */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                <Col xs={24} sm={24} md={8} lg={8}>
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
                <Col xs={24} sm={24} md={8} lg={8}>
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

              </Row>
            </Col>



            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>

                {/* Designation */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                </Col>

                {/* Salary */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                </Col>

                {/* Contract Status */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                </Col>

              </Row>
            </Col>


            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>

                {/* Designation */}
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Form.Item
                    label="Name"
                    name="guardianName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your guardian name!",
                      },
                      { pattern: /^[a-zA-Z\s]+$/, message: "Please enter a valid name (only letters and spaces are allowed)" }
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter your guardian name"
                      prefix={<UserOutlined style={{ fontSize: '18px', paddingRight: '10px' }} />}
                    />
                  </Form.Item>
                </Col>

                {/* Salary */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                    <Input
                      placeholder="0000-0000000"
                      maxLength={12}
                      prefix={<PhoneOutlined rotate={90} style={{ fontSize: '18px', paddingRight: '10px' }} />}
                    />
                  </Form.Item>
                </Col>

                {/* Contract Status */}
                <Col xs={24} sm={24} md={8} lg={8}>
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
                    <Select>
                      {guardianRelationDropdownOption.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          {option.icon} {option.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

              </Row>
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
