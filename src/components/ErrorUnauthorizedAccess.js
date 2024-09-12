import React from "react";
import { Row, Col } from "antd";

const Error = () => {
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
      {/* Apply opacity or glass effect to the image */}
      <img
        src="error2.png"
        alt="error"
        style={{
          width: "50%", // Adjust the size as needed
          opacity: 0.2, // Reduce opacity for a faded effect
          filter: "blur(2px)", // Slight blur for glass-like effect
        }}
      />

      {/* Text part that will be centered on the image */}
      <div
        style={{
          position: "absolute", // Make it absolutely positioned over the image
          top: "30%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust centering by moving it back by 50% of its own size
          textAlign: "center", // Center text horizontally
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
              Oops! 401
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <div style={{ fontSize: "2rem", color: "#595959" }}>
              Unauthorized Access
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Error;
