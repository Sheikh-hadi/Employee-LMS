import React from "react";
import { Card, Col, Row } from "antd";
import {useDepartmentContext} from "../context/DepartmentContext";
import "../App.css";
// import { useEmployeeContext } from "../context/EmployeeContext";
import { UserOutlined, TeamOutlined, LogoutOutlined } from "@ant-design/icons";
// import employeeDepartmentDropdownOptions from "../models/employeeDapartmentModel";
import UseFetchEmployee from "../Hooks/Employee/UseFetchEmployeeHook";

const EmployeeDashboard = () => {
  const { data } = UseFetchEmployee()
 const {departments} = useDepartmentContext()
 console.log("department: ", departments)
  const employee = data?.length || 0;
  const department =departments?.data?.length || 0;
  console.log("data: ", employee)
  console.log("department: ", department)

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

  // Inline styles
  const containerStyle = {
    padding: "20px",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",

  };

  const subtitleStyle = {
    color: "#999",
    fontSize: "19px",
  };

  const cardBaseStyle = {
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: "30px",
    cursor: "pointer",
    height: "160px",
    position: "relative",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const cardIconStyle = {
    fontSize: "68px",
    color: "#fff",
    position: "absolute",
    right: "20px",
    top: "50%",
    opacity: 0.3,
    transform: "translateY(-50%)",
  };

  const cardTitleStyle = {
    fontSize: "36px",
    fontWeight: "600",
    color: "#fff",
    position: "absolute",
    left: "20px",
    top: "10px",
  };

  const cardDescriptionStyle = {
    fontSize: "18px",
    color: "#fff",
    textAlign: "left",
    position: "absolute",
    left: "10px",
    top: "70px",
  };

  const cardMoreInfoStyle = {
    fontSize: "16px",
    color: "#fff",
    textAlign: "left",
    position: "absolute",
    left: "10px",
    top: "110px",
  };

  const cardStyle = (color) => ({
    ...cardBaseStyle,
    backgroundColor: color,
  });

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        Dashboard <span style={subtitleStyle}>Control panel</span>
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {/* Department Card */}
        <Col xs={24} sm={12} md={8} lg={8}>
          <a href="/department">
            <Card style={cardStyle("#3f51b5")} hoverable>
              <div style={cardIconStyle}>
                <UserOutlined />
              </div>
              <div style={cardTitleStyle}>{department}</div>
              <div style={cardDescriptionStyle}>Departments</div>
              <div style={cardMoreInfoStyle}>More Info ➔</div>
            </Card>
          </a>
        </Col>

        {/* Employee Card */}
        <Col xs={24} sm={12} md={8} lg={8}>
          <a href="/employee">
            <Card style={cardStyle("#e91e63")} hoverable>
              <div style={cardIconStyle}>
                <TeamOutlined />
              </div>
              <div style={cardTitleStyle}>{employee 
              }</div>
              <div style={cardDescriptionStyle}>Employees</div>
              <div style={cardMoreInfoStyle}>More Info ➔</div>
            </Card>
          </a>
        </Col>

        {/* Attendance Card */}
        <Col xs={24} sm={12} md={8} lg={8}>
          <a href="/attendence">
            <Card style={cardStyle("#f44336")} hoverable>
              <div style={cardIconStyle}>
                <LogoutOutlined />
              </div>
              <div style={cardTitleStyle}>0</div>
              <div style={cardDescriptionStyle}>Attendance</div>
              <div style={cardMoreInfoStyle}>More Info ➔</div>
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeDashboard;
