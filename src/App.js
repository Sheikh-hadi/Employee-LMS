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
import Dapartment from "./Pages/Department";
import SignUpForm from "./components/SignUpForm";

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = window.location.pathname === "/Login" || "/login";
  console.log("location: ", window.location.pathname);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUpForm" element={<SignUpForm/>} />
      </Routes>
      {!location && (
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
                <Link to="/attendence">Attendence</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<CreditCardOutlined />}>
                <Link to="/dapartment">Dapartment</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<CreditCardOutlined />}>
                <Link to="/Payment">Payment</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              marginLeft: collapsed ? "80px" : "200px", // Adjust this based on your collapsed width
              transition: "margin-left 0.2s",
            }}
          >
            <Content
              style={{
                margin: "5px 16px",
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/dapartment" element={<Dapartment />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </Router>
  );
};

export default App;
