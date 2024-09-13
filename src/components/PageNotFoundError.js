import React from "react";
import { Row, Col } from "antd";

const PageNotFoundError = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#E6F7FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src="error2.png"
        alt="error"
        style={{
          width: "50%",
          opacity: 0.2,
          filter: "blur(2px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Row justify="center">
          <Col>
            <div
              style={{
                fontSize: "5rem",
                color: "#1890ff",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Oops! 404
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <div style={{ fontSize: "2rem", color: "#595959" }}>
          Page Not Found
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PageNotFoundError;
