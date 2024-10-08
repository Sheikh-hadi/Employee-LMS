import React from "react";
import { Card, Col, Row } from "antd";import "../App.css";
import { UserOutlined, TeamOutlined, LogoutOutlined } from "@ant-design/icons";
import UseFetchEmployee from "../Hooks/Employee/UseFetchEmployeeHook";
import useGetDepartment from "../Hooks/Department/useGetDepartmentHook";

const EmployeeDashboard = () => {
  const { data: dep } = useGetDepartment();
  const { data } = UseFetchEmployee()
  console.log("department: ", dep)
  const employee = data?.length || 0;
 

  const today = new Date();
  const todayMonth = today.getMonth() + 1; 
  const todayDay = today.getDate();


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
    height: "25vh",
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
              <div style={cardTitleStyle}>{dep?.data?.length || 0}</div>
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
