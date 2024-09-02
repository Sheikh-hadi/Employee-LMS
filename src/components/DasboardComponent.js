// EmployeeDashboard.jsx

import React from "react";
import { Card, Col, Row } from "antd";
import "../App.css";
import { UserOutlined, TeamOutlined, LogoutOutlined } from "@ant-design/icons";
import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel";
import { employeesColumn } from "../models/employeeColumnModel";
import BirthdayCard from "./BirthdayCard"; // Ensure correct path

const EmployeeDashboard = () => {
  const employees = employeesColumn?.length;
  const departments = employeeDepartmentDropdownOptions?.length;

  // Get today's month and day
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // Months are zero-based
  const todayDay = today.getDate();

  // Function to check if today is the employee's birthday
  const isBirthdayToday = (dob) => {
    const date = new Date(dob);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month === todayMonth && day === todayDay;
  };

  // Filter employees with today's birthday
  const employeesWithTodayBirthday = employeesColumn.filter((emp) =>
    isBirthdayToday(emp.dob)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#333", fontSize: "28px", fontWeight: "bold" }}>
        Dashboard{" "}
        <span style={{ color: "#999", fontSize: "19px" }}>Control panel</span>
      </h2>
      <Row gutter={[16, 16]} style={{ marginBottom: "10px" }}>
        {/* Department Card */}
        <Col span={8}>
          <a href="/department">
            <Card
              className="dashboardcard"
              hoverable
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "30px",
                cursor: "pointer",
                backgroundColor: "#3f51b5",
                transition: "transform 0.2s, box-shadow 0.2s",
                height: "200px",
                position: "relative",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <UserOutlined
                  style={{
                    fontSize: "78px",
                    color: "#fff",
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    opacity: 0.3,
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "46px",
                  fontWeight: "600",
                  color: "#fff",
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                }}
              >
                {departments || 0}
              </div>
              <div
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "90px",
                }}
              >
                Departments
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "150px",
                }}
              >
                More Info ➔
              </div>
            </Card>
          </a>
        </Col>

        {/* Employee Card */}
        <Col span={8}>
          <a href="/employee">
            <Card
              className="dashboardcard"
              hoverable
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "30px",
                cursor: "pointer",
                backgroundColor: "#e91e63",
                transition: "transform 0.2s, box-shadow 0.2s",
                height: "200px",
                position: "relative",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <TeamOutlined
                  style={{
                    fontSize: "78px",
                    color: "#fff",
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    opacity: 0.3,
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "46px",
                  fontWeight: "600",
                  color: "#fff",
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                }}
              >
                {employees || 0}
              </div>
              <div
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "90px",
                }}
              >
                Employee
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "150px",
                }}
              >
                More Info ➔
              </div>
            </Card>
          </a>
        </Col>

        {/* Attendance Card */}
        <Col span={8}>
          <a href="/attendence">
            <Card
              className="dashboardcard"
              hoverable
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                padding: "30px",
                cursor: "pointer",
                backgroundColor: "#f44336",
                transition: "transform 0.2s, box-shadow 0.2s",
                height: "200px",
                position: "relative",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <LogoutOutlined
                  style={{
                    fontSize: "78px",
                    color: "#fff",
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.3,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "46px",
                  fontWeight: "600",
                  color: "#fff",
                  position: "absolute",
                  left: "20px",
                  top: "20px",
                }}
              >
                0
              </div>
              <div
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "90px",
                }}
              >
                Attendence
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#fff",
                  textAlign: "left",
                  position: "absolute",
                  left: "20px",
                  top: "150px",
                }}
              >
                More Info ➔
              </div>
            </Card>
          </a>
        </Col>
      </Row>

   
    </div>
  );
};

export default EmployeeDashboard;
