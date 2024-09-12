import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CreditCardOutlined,
  UserOutlined,
  BarChartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Employee from "./Pages/Employee";
import Attendence from "./Pages/Attendence";
import Payment from "./Pages/Payment";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./components/LoginPage";
import Department from "./Pages/Department";
import SignUpForm from "./components/SignUpForm";
import SalaryForm from "./Pages/SalaryForm";
import EditEmployeeForm from "./components/EditEmployeeForm";
import EmployeeAttendenceTracking from "./components/EmployeeAttendenceTracking";

import ForgotPasswordOtp from "./components/ForgotPasswordOtp";
import UserPage from "./Pages/UserPage";
import CompanyDetail from "./Pages/CompanyDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/ErrorUnauthorizedAccess";
import ErrorForbidden from "./components/ErrorForbidden";
import UserdetailPage from "./Pages/UserdetailPage";
const { Sider, Content } = Layout;
const { SubMenu } = Menu; // Importing SubMenu from Ant Design's Menu

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = window.location.pathname;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLocation = location === "/login" || location === "/Login" || location === "/signup" || location === "/Signup"? false : true;

  return (
    <Router>
      <Routes>
        <Route path="/salary" element={<SalaryForm />} />
        <Route path="/editForm" element={<EditEmployeeForm />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/error" element={<Error />} />
        <Route path="/error403" element={<ErrorForbidden />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/sentOtp" element={<ForgotPasswordOtp />} />
        <Route path="/forgetPassword" element={<ForgotPasswordOtp />} />
        <Route path="/userDetails" element={<UserdetailPage/>} />
        <Route path="/company" element={<CompanyDetail />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/employeeAttendenceRecord" element={<EmployeeAttendenceTracking />} />
      </Routes>

      {handleLocation && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              position: "fixed",
              height: "100vh",
              left: 0,
              top: 0,
              zIndex: 1000,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: collapsed ? "center" : "flex-start",
                padding: "10px",
              }}
            >
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <MenuUnfoldOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  ) : (
                    <MenuFoldOutlined
                      style={{ fontSize: "24px", color: "white" }}
                    />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "24px",
                  marginLeft: collapsed ? "0" : "10px",
                }}
              />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/employee">Employee</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<BarChartOutlined />}>
                <Link to="/attendence">Attendance</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<CreditCardOutlined />}>
                <Link to="/department">Department</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<CreditCardOutlined />}>
                <Link to="/payment">Payment</Link>
              </Menu.Item>

              {/* Submenu for "User" */}
              <SubMenu key="6" icon={<UserOutlined />} title="User">
                <Menu.Item key="6-1">
                  <Link to="/user">User Table</Link>
                </Menu.Item>
                <Menu.Item key="6-2">
                  <Link to="/userDetails">User Details</Link>
                </Menu.Item>
               
              </SubMenu>

              <Menu.Item key="7" icon={<CreditCardOutlined />}>
                <Link to="/company">Company Details</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout
            style={{
              marginLeft: collapsed ? "80px" : "200px",
              transition: "margin-left 0.2s",
            }}
          >
            <Content>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/department" element={<Department />} />
                <Route path="/" element={<UserPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </Router>
  );
};

export default App;
