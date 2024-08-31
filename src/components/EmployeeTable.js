import { Table, Tooltip, Select, Switch } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { employeesColumn } from "../models/employeeColumnModel";
import employeeDapartmentDropdownOptions from "./../models/employeeDapartmentModel";

import "../App.css";

const EmployeeTable = () => {
  const handleDepartmentChange = (value, key) => {};

  const columns = [
    { title: "Sr.", dataIndex: "id", key: "id" },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (photo) => (
        <img src={photo} alt="" style={{ width: 50, height: 50 }} />
      ),
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => <span style={{ color: "blue" }}>{email}</span>,
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (contact) => <span>{contact}</span>,
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      render: (text, record) => (
        <Select
          defaultValue={text}
          style={{ width: 120 }}
          onChange={(value) => handleDepartmentChange(value, record.key)}
          options={employeeDapartmentDropdownOptions}
        ></Select>
      ),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      render: (salary) => (salary ? `PKR: ${salary.toLocaleString()}` : "N/A"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text, record) => (
        <span>
          <p
            style={{
              color: record.endDate ? "red" : "green",
              fontSize: "12px", // Adjust font size as needed
              margin: "0",
            }}
          >
            {record.endDate || "PRESENT"}
          </p>
          <p
            style={{
              color: "green",
              fontSize: "12px", // Adjust font size as needed
              margin: "0", // Adjust spacing (top and bottom margin) as needed
            }}
          >
            {record.joiningDate}
          </p>
        </span>
      ),
    },

    { title: "Address", dataIndex: "currentAddress", key: "currentAddress" },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      render: (text) => {
        console.log("text: ", text);
        return (
          <Switch
            checked={text}
            style={{
              backgroundColor: text ? "green" : "red",
            }}
          />
        );
      },
    },

    {
      title: "Actions",
      key: "actions",
      render: () => (
        <>
          <EditOutlined className="icon-edit" style={{ margin: "5px" }} />
          <DeleteOutlined className="icon-delete" style={{ margin: "5px" }} />
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={employeesColumn}
        pagination={false}
        rowKey="id"
      />
    </div>
  );
};

export default EmployeeTable;
