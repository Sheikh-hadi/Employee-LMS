import React from "react";
import { Row, Col } from "antd";

const BusinessCard = () => {
  return (
    <div
      style={{
        border: "4px solid black",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh", // Makes the div take up the full height of the viewport
        margin: "40px auto", // Centers the card horizontally
      }}
    >
      <Row align="middle" style={{ width: "100%" }}>
        <Col span={8} style={{ textAlign: "center" }}>
          <img 
            src="GPSlogo.png" 
            alt="Game Pixel Studio Logo" 
            style={{ width: "80%" }} 
          />
        </Col>
        <Col span={16} style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "34px" }}>Game Pixel Studio</h2>
          <h3>30-C Salik Street New Muslim Town Lahore</h3>
          <h3>PH # 042-35884488</h3>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessCard;
