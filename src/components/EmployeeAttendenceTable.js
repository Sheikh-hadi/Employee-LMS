import React from "react";
import { Table, Tooltip } from "antd";
import { employeesColumn } from "../models/employeeColumnModel"; 
import { render } from "@testing-library/react";

const EmployeeAttendenceTable = () => {
  const columns = [
    {
      title: "Sr.",
      dataIndex: "id",
      key: "id",
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
      title: "Basic Salary",
      dataIndex: "salary",
      key: "basicSalary",
    },
    {
      title: "Late Comings",
      dataIndex: ["attendance", "late"],
      key: "lateComings",
    },
    {
      title: "Leaves",
      dataIndex: ["attendance", "leave"], 
      key: "leaves",
    },
    {
      title: "Absent",
      dataIndex: ["attendance", "absent"],
      key: "absent",
    },
    {
      title: "Advance",

      dataIndex: "advance",
      key: "advance",
      render: (text) => (<span>0</span>),
    },
    {
      title: "Provident Fund",
      dataIndex: "providentFund",
      key: "providentFund",
    },
    {
      title: "Payment In Words",
      dataIndex: "paymentInWords",
      key: "paymentInWords",
    },
    {
      title: "Loan",
      dataIndex: "loan",
      key: "loan",
    },
    {
      title: "Total Salary",
      dataIndex: "totalSalary",
      key: "totalSalary",
    },
  ];

  return <Table columns={columns} dataSource={employeesColumn} />;
};

export default EmployeeAttendenceTable;
