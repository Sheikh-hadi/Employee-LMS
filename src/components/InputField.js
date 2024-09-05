import React from "react";
import { Row, Col, Input } from "antd";

const InputField = ({ label, value, onChange, placeholder = "", currency = false }) => (
  <Row style={{ padding: "5px 0",  }}>
    <Col span={12}>{label}</Col>
    <Col span={12} style={{ textAlign: "center" }}>
      {currency && "=N= "}
      <Input
        style={{
          width: "80%",
          textAlign: "right",
          border: "none",
          outline: "none",
          boxShadow: "none",
          backgroundColor: "transparent", // Optional: Makes input background transparent
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Col>
  </Row>
);

export default InputField;
