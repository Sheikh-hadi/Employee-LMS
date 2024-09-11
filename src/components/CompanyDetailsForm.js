import React from "react";
import { Table } from "antd";

const CompanyDetailsForm = () => {
  const columns = [
    {
      title: "Sr.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "Detail",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[]} // Empty dataSource since no content needed
      pagination={false}
      rowKey="id"
    />
  );
};

export default CompanyDetailsForm;
