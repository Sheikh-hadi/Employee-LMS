import React from "react";
import { Row, Col } from "antd";

const BusinessCard = () => {
  return (
    <div style={{ border: "2px solid black", width: "600px", margin: "0 auto", padding: "10px" }}>
      <Row align="middle">
        <Col span={8}>
          <img 
            src="GPSlogo.png" 
            alt="Game Pixel Studio Logo" 
            style={{ width: "100%", padding: "10px" }} 
          />
        </Col>
        <Col span={16} style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "5px" }}>Game Pixel Studio</h2>
          <p style={{ marginBottom: "5px" }}>30-C Salik Street New Muslim Town Lahore</p>
          <p style={{ marginBottom: "5px" }}>PH # 042-35884488</p>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessCard;
