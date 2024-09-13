import React from "react";
import { Row, Col } from "antd";

const PaySlip = () => {
  const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ccc", // Only bottom line for row separation
  };

  const tdCenterStyle = {
    // padding: "10px",
    // textAlign: "left",
 textAlign: "center", 
    
  
    borderBottom: "1px solid #ccc", // Only bottom line for row separation
  };

  const tdRightStyle = {
    ...tdStyle,
    textAlign: "right",
  };

  const footerStyle = {
    backgroundColor: "#4a4a4a",
    padding: "10px",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f8f8f8",
        borderRadius: "10px",
        border: "1px solid #e5e5e5",
      }}
    >
      {/* Existing Content */}
      {/* Header Row */}
      <Row
        style={{
          backgroundColor: "#4a4a4a",
          padding: "20px",
          color: "#fff",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <Col span={12}>
          <p>
            Name: <strong>Name here</strong>
          </p>
          <p>
            Designation: <strong>Game Developer</strong>
          </p>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <p>
            DOB: <strong>Oct 18, 2000</strong>
          </p>
        </Col>
      </Row>

      {/* Salary Distribution Header */}
      <Row>
        <Col
          span={24}
          style={{
            padding: "10px 0",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Salary Distribution
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <tbody>
              <tr>
                <td style={tdStyle}>BASIC SALARY</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>TRANSPORT</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>MEDICAL ALLOWANCE</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>HOUSING</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>MEAL</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>MOBILE ALLOWANCE</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>ARREARS</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>REWARD</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>E. O. T. M</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>BONUS</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>INCENTIVE</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      {/* Footer Row */}
      <Row>
        <Col span={24} style={footerStyle}>
          <Row>
            <Col span={12}>Total</Col>
            <Col span={12} style={{ textAlign: "right" }}>000.00</Col>
          </Row>
        </Col>
      </Row>

      {/* Deductions Section */}
      <Row>
        <Col
          span={24}
          style={{
            padding: "10px 0",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Deductions
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <tbody>
              <tr>
                <td style={tdStyle}>Tax</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Provident Fund</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Advance/Loan</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Advance Salaries</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Absent</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Late Deductions</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Other Deductions</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total Deductions</td>
                <td style={tdCenterStyle}>N</td>
                <td style={tdRightStyle}>0.00</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      {/* Footer Row */}
      <Row>
        <Col span={24} style={footerStyle}>
          <Row>
            <Col span={12}>Net Payable</Col>
            <Col span={12} style={{ textAlign: "right" }}>000.00</Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col
          span={24}
          style={{
            padding: "20px 0",
            textAlign: "center",
            fontSize: "21px",
            fontWeight: "900",
          }}
        >
          Amount in Words
          <div style={{ fontWeight: "normal", marginTop: "10px" }}>
            Thirty two thousand five forty eighty Rupees Only
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          span={24}
          style={{
            padding: "10px 0",
            textAlign: "center",
            fontSize: "16px",
            color: "#666",
          }}
        >
          The figures herein are generated electronically. Hence, does not require signature except for alteration.
        </Col>
      </Row>
    </div>
  );
};

export default PaySlip;
