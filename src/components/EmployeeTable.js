import { Table, Tooltip, Select, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { employeesColumn } from "../models/employeeColumnModel";
import employeeDapartmentDropdownOptions from "./../models/employeeDapartmentModel";
import { toWords } from "number-to-words";

import "../App.css";

const EmployeeTable = () => {
  const handleDepartmentChange = (value, key) => { };

  const columns = [
    {
      title: "Sr.",
      dataIndex: "id",
      key: "id",
      width: "1%",
      render: (text) => <span style={{ fontWeight: "bold", }}>{`${text}_`} </span>,
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      width: "5%",
      render: (photo) => (
        <img src={photo} alt="" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Detail",
      dataIndex: "name",
      key: "name",
      width: "10%",
      render: (text, record) => {
        return (
          <Tooltip
            color="blue"
            placement="right"
            title={<div style={{ lineHeight: '1.3' }}>
              <span>Name: {text}</span>
              <p style={{ margin: 0 }}>{record.contact}</p>
              <p style={{ margin: 0 }}>Email: {record.email}</p>
              <p style={{ margin: 0 }}>SkypeID: </p>
            </div>}
          >
            <div style={{ lineHeight: '1.3' }}> {/* Decrease space between lines */}
              <span>{text}</span>
              <p style={{ margin: 0 }}>{record.contact}</p> {/* Remove margin to decrease space */}
              <span style={{ margin: 0, color: "blue" }}>{record.email}</span>
            </div>
          </Tooltip>
        );
      },
    },

    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    //   render: (email) => <span style={{ color: "blue" }}>{email}</span>,
    // },
    // {
    //   title: "Contact",
    //   dataIndex: "contact",
    //   key: "contact",
    //   width: "12%",
    //   render: (contact) => <span style={{ border: "2px solid black" }}>{contact}</span>,
    // },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      width: "10%",
      render: (text, record) => (
        <Select
          defaultValue={text}
          style={{ width: "80%" }}
          onChange={(value) => handleDepartmentChange(value, record.key)}
          options={employeeDapartmentDropdownOptions}
        ></Select>
      ),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      width: "10%",
      render: (salary) => (salary ?
        <Tooltip title={toWords(salary).toUpperCase()}
          color="blue"
          placement="right">
          <p >{salary}</p>
        </Tooltip>
        : "N/A"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: "10%",
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

    {
      title: "Address",
      dataIndex: "currentAddress",
      key: "currentAddress",
      width: "25%",
      render: (text) => <Tooltip
        title={text.toLocaleUpperCase()}
        color="blue"
        placement="right" ><span style={{ textAlign: "justify" }}>{text}</span></Tooltip>,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "10%",

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
      title: "Author",
      key: "actions",
      width: "10%",
      render: () => (
        <span style={{ display: "flex", gap: "10px" }}>
          <Tooltip title="Created Employee" color="blue" placement="right">
            <span> Hadi</span>
          </Tooltip>
          <DeleteOutlined className="icon-delete" />
        </span>
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
