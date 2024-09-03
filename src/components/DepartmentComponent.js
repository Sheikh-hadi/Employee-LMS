import React, { useState } from "react";
import { Table, Button, Input, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel"; // Adjust the import path
import AddNewDepartment from "./AddNewDepartment";

const DepartmentComponent = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input
  const [filteredData, setFilteredData] = useState(
    employeeDepartmentDropdownOptions
  ); // State to hold the filtered data

  // Columns definition
  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Department Name",
      dataIndex: "label",
      key: "department",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{
              marginRight: 8,
              backgroundColor: "green",
              borderColor: "green",
            }}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            style={{
              backgroundColor: "red",
              borderColor: "red",
              color: "white",
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    setSearchTerm(value);

    // Filter the data based on the search term
    const filtered = employeeDepartmentDropdownOptions.filter((item) =>
      item.label.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <Row >
        {/* Search Input */}
        <Col span={4}>
          {" "}
          <Input
            placeholder="Search departments"
            prefix={<SearchOutlined style={{ color: "blue" }} />}
            value={searchTerm}
            onChange={handleSearch}
            // style={{ width: '200px',  }}
            style={{ width: "100%" }}
          />
        </Col>
        <Col span={6} offset={14} >
          <AddNewDepartment />
        </Col>{" "}
      </Row>
      {/* Filtered Table */}
      <Table
        style={{ marginTop: "10px" }}
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
      />
    </>
  );
};

export default DepartmentComponent;
