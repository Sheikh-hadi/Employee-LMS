import React from "react";
import { Row, Col } from "antd";
import { Input } from 'antd';

import InputField from "./InputField";

const Payslip = () => {
  const fakeData = {
    name: "Faizan Haider",
    designation: "UI/UX Designer",
    doj: "July 18, 2022",
    basicSalary: "24500.00",
    transport: "2625.00",
    medicalAllowance: "0.00",
    housing: "2625.00",
    meal: "0.00",
    mobileAllowance: "0.00",
    arrears: "0.00",
    reward: "0.00",
    eotm: "0.00",
    bonus: "0.00",
    incentive: "5250.00",
    tax: "0.00",
    providentFund: "1960.00",
    advanceLoan: "0.00",
    advanceSalaries: "0.00",
    absent: "0.00",
    lateDeductions: "500.00",
    otherDeductions: "0.00",
  };

  return (
    <div style={{
      border: "4px solid black",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "20px",
    }}>
      <Row style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>
        <Col span={12}>
          <h2>Payslip</h2>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <h2>Salary Slip For August-2024</h2>
        </Col>
      </Row>

      <Row style={{ borderBottom: "2px solid black", padding: "10px 0" }}>
        <Col span={8}>
          <strong>Name</strong>
        </Col>
        <Col span={16}>
          <Input 
            value={fakeData.name} 
            disabled 
            style={{
              border: "none",
              color: "black",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "transparent"
            }}
          />
        </Col>
        <Col span={8}>
          <strong>Designation</strong>
        </Col>
        <Col span={16}>
          <Input 
            value={fakeData.designation} 
            disabled 
            style={{
              border: "none",
              outline: "none",
              color: "black",
              boxShadow: "none",
              backgroundColor: "transparent"
            }}
          />
        </Col>
        <Col span={8}>
          <strong>DOJ</strong>
        </Col>
        <Col span={16}>
          <Input 
            value={fakeData.doj} 
            disabled 
            style={{
              border: "none",
              outline: "none",
              color: "black",
              boxShadow: "none",
              backgroundColor: "transparent"
            }}
          />
        </Col>
      </Row>

      <Row style={{ padding: "10px 0" }}>
        <Col span={24}>
          <h3>Salary Distribution</h3>
        </Col>
        <Col span={24}>
          <InputField 
            label="BASIC SALARY" 
            value={fakeData.basicSalary} 
            currency 
          />
          <InputField 
            label="TRANSPORT" 
            value={fakeData.transport} 
            currency 
          />
          <InputField 
            label="MEDICAL ALLOWANCE" 
            value={fakeData.medicalAllowance} 
            currency 
          />
          <InputField 
            label="HOUSING" 
            value={fakeData.housing} 
            currency 
          />
          <InputField 
            label="MEAL" 
            value={fakeData.meal} 
            currency 
          />
          <InputField 
            label="MOBILE ALLOWANCE" 
            value={fakeData.mobileAllowance} 
            currency 
          />
          <InputField 
            label="ARREARS" 
            value={fakeData.arrears} 
            currency 
          />
          <InputField 
            label="REWARD" 
            value={fakeData.reward} 
            currency 
          />
          <InputField 
            label="E. O. T. M" 
            value={fakeData.eotm} 
            currency 
          />
          <InputField 
            label="BONUS" 
            value={fakeData.bonus} 
            currency 
          />
          <InputField 
            label="INCENTIVE" 
            value={fakeData.incentive} 
            currency 
          />
        </Col>
      
        <Col span={24} style={{ fontWeight:"600", padding: "10px 0", borderTop: "2px solid black" }}>
          <InputField 
            label="Total" 
            value={
              parseFloat(fakeData.basicSalary) + 
              parseFloat(fakeData.transport) + 
              parseFloat(fakeData.incentive) + 
              parseFloat(fakeData.housing)
            } 
            currency
          />
        </Col>
      </Row>

      <Row style={{ padding: "10px 0", borderTop: "2px solid black", borderBottom: "2px solid black" }}>
        <Col span={24}>
          <h3>Deductions</h3>
        </Col>
        <Col span={24}>
          <InputField 
            label="TAX" 
            value={fakeData.tax} 
            disabled
            currency 
          />
          <InputField 
            label="PROVIDENT FUND" 
            value={fakeData.providentFund} 
            currency 
          />
          <InputField 
            label="ADVANCE/LOAN" 
            value={fakeData.advanceLoan} 
            currency 
          />
          <InputField 
            label="ADVANCE SALARIES" 
            value={fakeData.advanceSalaries} 
            currency 
          />
          <InputField 
            label="ABSENT" 
            value={fakeData.absent} 
            currency 
          />
          <InputField 
            label="LATE DEDUCTIONS" 
            value={fakeData.lateDeductions} 
            currency 
          />
          <InputField 
            label="OTHER DEDUCTIONS" 
            value={fakeData.otherDeductions} 
            currency 
          />
        </Col>

        <Col span={24} style={{ fontWeight:"500", padding: "10px 0", borderTop: "2px solid black" }}>
          <InputField 
            label="Total Deductions" 
            value={
              parseFloat(fakeData.providentFund) + 
              parseFloat(fakeData.lateDeductions) + 
              parseFloat(fakeData.tax) + 
              parseFloat(fakeData.otherDeductions)
            } 
            currency
          />
        </Col>

        <Col span={24} style={{ fontWeight:"600", padding: "10px 0", borderTop: "2px solid black" }}>
          <InputField 
            label="Net Payable" 
            value={
              (
                parseFloat(fakeData.basicSalary) + 
                parseFloat(fakeData.transport) + 
                parseFloat(fakeData.incentive) + 
                parseFloat(fakeData.housing)
              ) - (
                parseFloat(fakeData.providentFund) + 
                parseFloat(fakeData.lateDeductions) + 
                parseFloat(fakeData.tax) + 
                parseFloat(fakeData.otherDeductions)
              )
            } 
            currency
          />
        </Col>

        <Col span={24} style={{ textAlign: "center", paddingTop: "20px" }}>
          <strong>Amount In Words:</strong> Thirty-two thousand five forty eighty Rupees Only
        </Col>
      </Row>

      <Row style={{ textAlign: "center", paddingTop: "20px" }}>
        <Col span={24}>
          The figures herein are generated electronically. Hence, they do not require a signature except for alterations.
        </Col>
      </Row>
    </div>
  );
};

export default Payslip;
