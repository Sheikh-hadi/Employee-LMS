import React, { useState } from "react";
import { Table, Button, Input, Row, Col } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// Adjust the import path
import AddNewDepartment from "./AddNewDepartment";

const DepartmentComponent = ({ data }) => {
  const option = data.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
  }))
  console.log("employeeDepartmentDropdownOptions: ", option);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(
    option
  );

  // Columns definition
  const columns = [
    {
      title: "Sr",
      dataIndex: "id",
      key: "id",
      width: "6%"
    },
    {
      title: (
        <span style={{ display: "block", textAlign: "center", width: "100%" }}>
          Department Name
        </span>
      ),
      dataIndex: "name",
      key: "department",
      width: "40%",
      render: (text) => (
        <span style={{ display: "block", textAlign: "center" }}>
          {text}
        </span>
      ),
    },


    {
      title: "Action",
      key: "action",
      width: "15%",
      render: () => (
        <>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Button
                block
                icon={<EditOutlined />}
                style={{
                  marginRight: 8,
                  backgroundColor: "green",
                  borderColor: "green",
                  color: "white",
                }}
              >
                Edit
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Button
                block
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
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",

    },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    setSearchTerm(value);

    // Filter the data based on the search term
    const filtered = option.filter((item) =>
      item.label.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <>
      <Row>
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
        <Col span={6} offset={14}>
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