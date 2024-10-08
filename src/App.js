import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CreditCardOutlined,
  UserOutlined,
  BarChartOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import LoginPage from "./components/LoginPage";
import SignUpForm from "./components/SignUpForm";
import ForgotPasswordOtp from "./components/ForgotPasswordOtp";
import RoutePath from "./components/RoutePath";
import useUserLogout from "./Hooks/UserHook/useLogoutUserHook";


const { Sider, Content } = Layout;
const { SubMenu } = Menu;


const App = () => {

  const {mutate: logout} = useUserLogout()
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgetPassword" element={<ForgotPasswordOtp />} />
   
      </Routes>

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

            <SubMenu key="3" icon={<BarChartOutlined />} title="Attendance">
              <Menu.Item key="3-1">
                <Link to="/attendence">Attendence Table</Link>
              </Menu.Item>
              <Menu.Item key="3-2">
                <Link to="/employee-attendence-record">Attendence Details</Link>
              </Menu.Item>
              <Menu.Item key="3-4">
                <Link to="/employee-attendence-monthly-record">Attendence Record</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<CreditCardOutlined />}>
              <Link to="/department">Department</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CreditCardOutlined />}>
              <Link to="/payment">Payment</Link>
            </Menu.Item>

         
              <Menu.Item key="6" icon={<CreditCardOutlined />}>
                <Link to="/user-table">User Table</Link>
              </Menu.Item>

            <Menu.Item key="7" icon={<CreditCardOutlined />}>
              <Link to="/company">Company Details</Link>
            </Menu.Item>

            {/* Logout button at the bottom */}
            <Menu.Item
              key="8"
              style={{
                position: "absolute",
                bottom: 0,
                width: "90%",
                backgroundColor: isLoggedOut ? "white" : "#02183d",
                color: isLoggedOut ? "#02183d" : "white",
                border: `2px solid ${isLoggedOut ? "#02183d" : "transparent"}`,
                textAlign: "center",
                cursor: "pointer",
                display: collapsed ? "none" : "block", // Show only when not collapsed
              }}
              onClick={()=>{logout()}}
            >
              <LogoutOutlined style={{ color: isLoggedOut ? "#02183d" : "white", marginRight: 8 }} />
              {!collapsed && "Logout"} {}
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
            <RoutePath />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
