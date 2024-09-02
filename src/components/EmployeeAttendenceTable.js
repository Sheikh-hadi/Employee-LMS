import React from "react";
import { Table, Tooltip } from "antd";
import { employeesColumn } from "../models/employeeColumnModel";
import { toWords } from "number-to-words";
import { PrinterOutlined } from "@ant-design/icons";
import "../App.css";
const EmployeeAttendenceTable = () => {
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
            title={<>
              <p style={{ margin: 0 }}>Absent: {record.attendance.absent}</p>
              <p style={{ margin: 0 }}>Late: {record.attendance.late}</p>
              <p style={{ margin: 0 }}>Leave {record.attendance.leave}</p>
            </>}
          >
            <p
              style={{
                margin: 0,
                background: record.attendance.absent > 0 ? "red" : ""
              }}
            >
              {record.attendance.absent}
            </p>

            <p style={{ margin: 0, background: record.attendance.late > 0 ? "yellow" : "" }}>{record.attendance.late}</p>
            <p style={{ margin: 0, background: record.attendance.leave > 0 ? "green" : "" }}>{record.attendance.leave}</p>
          </Tooltip>
        );
      }
    },
    // {
    //   title: "Leaves",
    //   dataIndex: ["attendance", "leave"],
    //   key: "leaves",
    // },
    // {
    //   title: "Absent",
    //   dataIndex: ["attendance", "absent"],
    //   key: "absent",
    // },
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
        let salaryInWord = toWords(record.salary);
        return <span>{salaryInWord.toUpperCase()}</span>;
      },
    },
    {
      title: "Print",
      key: "print",
      render: () => {
        return <PrinterOutlined className="icon-edit" />
      }
    },
  ];

  return <Table columns={columns} dataSource={employeesColumn} />;
};

export default EmployeeAttendenceTable;
