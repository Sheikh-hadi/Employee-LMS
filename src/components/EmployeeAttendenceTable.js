import React, { useState } from "react";
import { Table, Tooltip, Input, Button, Modal, Form, InputNumber, Col, Row } from "antd";
import { CalendarOutlined, ClockCircleOutlined, CheckCircleOutlined, SearchOutlined, PrinterOutlined } from "@ant-design/icons";
import { employeesColumn } from "../models/employeeColumnModel";
import { toWords } from "number-to-words";
import "../App.css";

const EmployeeAttendenceTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(employeesColumn);
  const [isFineModalVisible, setIsFineModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fineForm] = Form.useForm();

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = employeesColumn.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  // Handle Add button click
  const handleAddClick = () => {
    setIsModalVisible(true);
  };

  // Handle Fine button click
  const handleFineClick = () => {
    setIsFineModalVisible(true);
  };

  // Handle Modal OK click for Fine
  const handleFineOk = () => {
    fineForm.validateFields()
      .then((values) => {
        console.log('Fine values:', values);
        // Handle fine logic here
        setIsFineModalVisible(false);
        fineForm.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  // Handle Modal OK click
  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        console.log('Form values:', values);
        // Handle form submission logic here
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  // Handle Modal Cancel click
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleFineCancel = () => {
    setIsFineModalVisible(false);
    fineForm.resetFields();
  };

  const columns = [
    {
      title: "Sr.",
      dataIndex: "id",
      key: "id",
      width: "1%",
      render: (text) => <span style={{ fontWeight: "bold", }}>{`${text}_`} </span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return (
          <Tooltip
            color="blue"
            placement="right"
            title={`${record.firstName} ${record.lastName}`}
          >
            <span>{text}</span>
          </Tooltip>
        );
      },
    },
    {
      title: "Days",
      dataIndex: ["attendance", "days"],
      key: "days",
    },
    {
      title: "Attendance",
      key: "lateComings",
      render: (text, record) => {
        return (
          <Tooltip
            color="blue"
            placement="right"
            title={
              <>
                <p style={{ margin: 0 }}>Absent: {record.attendance.absent}</p>
                <p style={{ margin: 0 }}>Late: {record.attendance.late}</p>
                <p style={{ margin: 0 }}>Leave: {record.attendance.leave}</p>
              </>
            }
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                <CalendarOutlined style={{ color: record.attendance.absent > 0 ? 'red' : 'grey' }} />
                <span style={{ marginLeft: 5 }}>{record.attendance.absent}</span>
              </div>
              <div style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                <ClockCircleOutlined style={{ color: record.attendance.late > 0 ? 'magenta' : 'grey' }} />
                <span style={{ marginLeft: 5 }}>{record.attendance.late}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleOutlined style={{ color: record.attendance.leave > 0 ? 'green' : 'grey' }} />
                <span style={{ marginLeft: 5 }}>{record.attendance.leave}</span>
              </div>
            </div>
          </Tooltip>
        );
      }
    },
    {
      title: "Advance",
      dataIndex: "advance",
      key: "advance",
      render: () => <span>0</span>,
    },
    {
      title: "Provident Fund",
      dataIndex: "providentFund",
      key: "providentFund",
      render: (text, record) => {
        let fund = (record.salary / 100) * 6;
        record.providentFundValue = fund;
        return <span>{fund}</span>;
      },
    },
    {
      title: "Loan",
      dataIndex: "loan",
      key: "loan",
      render: () => <span>0</span>,
    },
    {
      title: "Total Salary",
      dataIndex: "totalSalary",
      key: "totalSalary",
      render: (text, record) => {
        let totalSalary = record.salary;

        if (record.providentFundValue) {
          totalSalary -= record.providentFundValue;
        }
        if (record.attendance.late > 1) {
          totalSalary -= record.attendance.late * 500;
        }
        if (record.attendance.absent > 0) {
          totalSalary -= record.attendance.absent * 500;
        }
        if (record.attendance.leave > 2) {
          let leave = record.attendance.leave - 2;
          totalSalary -= leave * 500;
        }
        record.salary = totalSalary;
        return <span>{totalSalary}</span>;
      },
    },
    {
      title: "Payment In Words",
      dataIndex: "paymentInWords",
      key: "paymentInWords",
      render: (text, record) => {
        let salaryInWord = toWords(record.salary);
        return <span>{salaryInWord.toUpperCase()}</span>;
      },
    },
    {
      title: "Print",
      key: "print",
      render: () => <PrinterOutlined className="icon-edit" />
    },
  ];

  return (
    <div>
      {/* Search Bar */}
      <Row>
        <Col span={6}>
          <Input
            placeholder="Search employee"
            prefix={<SearchOutlined style={{ color: 'blue' }} />}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>

        <Col span={7} offset={11}  >

          <Row gutter={16}>
            <Col span={8}>
              <Button
                block
                type="primary"
                onClick={handleFineClick}
              >
                Set Fine
              </Button>
            </Col>
            <Col span={8}>
              <Button
                block
                type="primary"
              >
                Send Email
              </Button>
            </Col>
            <Col span={8} >
              <Button
                block
                type="primary"
                onClick={handleAddClick}
              >
                Add
              </Button>
            </Col>

          </Row>
        </Col>
      </Row>
      {/* Employee Table */}
      <Table columns={columns} dataSource={filteredData} />

      {/* Modal for Adding Days and Provident Fund */}
      <Modal
        title="Add Days and Provident Fund"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="days"
            label="Days"
            rules={[{ required: true, message: 'Please enter the number of days!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter days" />
          </Form.Item>
          <Form.Item
            name="providentFund"
            label="Provident Fund"
            rules={[{ required: true, message: 'Please enter the provident fund amount!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter provident fund" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal for Setting Fines */}
      <Modal
        title="Set Fines"
        visible={isFineModalVisible}
        onOk={handleFineOk}
        onCancel={handleFineCancel}
      >
        <Form form={fineForm} layout="vertical">
          <Form.Item
            name="lateFine"
            label="Late Fine"
            rules={[{ required: true, message: 'Please enter the late fine!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter late fine" />
          </Form.Item>
          <Form.Item
            name="absentFine"
            label="Absent Fine"
            rules={[{ required: true, message: 'Please enter the absent fine!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter absent fine" />
          </Form.Item>
          <Form.Item
            name="halfDayFine"
            label="Half Day Fine"
            rules={[{ required: true, message: 'Please enter the half-day fine!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter half-day fine" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeeAttendenceTable;
