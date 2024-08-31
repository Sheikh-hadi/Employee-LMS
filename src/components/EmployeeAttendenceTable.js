import React from "react";
import { Table, Tooltip } from "antd";
import { employeesColumn } from "../models/employeeColumnModel"; // Importing the employeesColumn data
import { render } from "@testing-library/react";
import { toWords } from "number-to-words";

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
      dataIndex: ["attendance", "days"], // Adjusted for nested data
      key: "days",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "basicSalary",
    },
    {
      title: "Late",
      dataIndex: ["attendance", "late"], // Adjusted for nested data
      key: "lateComings",
    },
    {
      title: "Leaves",
      dataIndex: ["attendance", "leave"], // Adjusted for nested data
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
      render: (text) => <span>0</span>,
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
      render: (text) => <span>0</span>,
    },

    {
      title: "Total Salary",
      dataIndex: "totalSalary",
      key: "totalSalary",
      render: (text, record) => {
        console.log("record: ", record);

        let totalSalary = record.salary; // Initialize totalSalary with the base salary

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
        return <span>{totalSalary}</span>; // Return the calculated totalSalary
      },
    },
    {
      title: "Payment In Words",
      dataIndex: "paymentInWords",
      key: "paymentInWords",
      render: (text, record) => {
        let salaryInWord = toWords(record.salary) ; 
        return <span>{salaryInWord.toUpperCase()}</span>;
    }},
  ];

  return <Table columns={columns} dataSource={employeesColumn} />;
};

export default EmployeeAttendenceTable;
