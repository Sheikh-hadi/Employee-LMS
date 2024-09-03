import React, { useState } from "react";
import { Table, Tooltip, Select, Switch, Input } from "antd";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { employeesColumn } from "../models/employeeColumnModel";
import employeeDapartmentDropdownOptions from "./../models/employeeDapartmentModel";
import { toWords } from "number-to-words";

import "../App.css";

const EmployeeTable = () => {
  // State to hold the filtered data and search input
  const [filteredData, setFilteredData] = useState(employeesColumn);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDepartmentChange = (value, key) => {};

  // Columns definition
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

  // Handle the search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = employeesColumn.filter((item) => {
      console.log(employeesColumn)
      return (
        item.name.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.contact.toLowerCase().includes(value)||
        item.salary.toLowerCase().includes(value)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "-16px" }}>
  

      {/* Search Input */}
      <Input
        placeholder="Search by name, email, or contact"
        prefix={<SearchOutlined style={{ color: "blue" }} />}
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginTop: "-20px", width: "250px", margin: "0 auto" }}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        rowKey="id"
      />
    </div>
  );
};

export default EmployeeTable;
