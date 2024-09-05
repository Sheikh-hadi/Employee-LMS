import React, { useState } from "react";
import { Row, Col } from "antd";
import { Input } from 'antd';

import InputField from "./InputField";

const Payslip = () => {
  // Fake data or initial placeholders
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

  // State management
  const [formData, setFormData] = useState(fakeData);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
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
            value={formData.name} 
            onChange={(e) => handleInputChange("name", e.target.value)} 
            placeholder="Enter name" 
            style={{
              border: "none",
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
            value={formData.designation} 
            onChange={(e) => handleInputChange("designation", e.target.value)} 
            placeholder="Enter designation" 
            style={{
              border: "none",
              outline: "none",
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
            value={formData.doj} 
            onChange={(e) => handleInputChange("doj", e.target.value)} 
            placeholder="Enter DOJ" 
            style={{
              border: "none",
              outline: "none",
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
            value={formData.basicSalary} 
            onChange={(e) => handleInputChange("basicSalary", e.target.value)} 
            placeholder="Enter basic salary" 
            currency 
          />
          <InputField 
            label="TRANSPORT" 
            value={formData.transport} 
            onChange={(e) => handleInputChange("transport", e.target.value)} 
            placeholder="Enter transport allowance" 
            currency 
          />
          <InputField 
            label="MEDICAL ALLOWANCE" 
            value={formData.medicalAllowance} 
            onChange={(e) => handleInputChange("medicalAllowance", e.target.value)} 
            placeholder="Enter medical allowance" 
            currency 
          />
          <InputField 
            label="HOUSING" 
            value={formData.housing} 
            onChange={(e) => handleInputChange("housing", e.target.value)} 
            placeholder="Enter housing allowance" 
            currency 
          />
          <InputField 
            label="MEAL" 
            value={formData.meal} 
            onChange={(e) => handleInputChange("meal", e.target.value)} 
            placeholder="Enter meal allowance" 
            currency 
          />
          <InputField 
            label="MOBILE ALLOWANCE" 
            value={formData.mobileAllowance} 
            onChange={(e) => handleInputChange("mobileAllowance", e.target.value)} 
            placeholder="Enter mobile allowance" 
            currency 
          />
          <InputField 
            label="ARREARS" 
            value={formData.arrears} 
            onChange={(e) => handleInputChange("arrears", e.target.value)} 
            placeholder="Enter arrears" 
            currency 
          />
          <InputField 
            label="REWARD" 
            value={formData.reward} 
            onChange={(e) => handleInputChange("reward", e.target.value)} 
            placeholder="Enter reward" 
            currency 
          />
          <InputField 
            label="E. O. T. M" 
            value={formData.eotm} 
            onChange={(e) => handleInputChange("eotm", e.target.value)} 
            placeholder="Enter EOTM" 
            currency 
          />
          <InputField 
            label="BONUS" 
            value={formData.bonus} 
            onChange={(e) => handleInputChange("bonus", e.target.value)} 
            placeholder="Enter bonus" 
            currency 
          />
          <InputField 
            label="INCENTIVE" 
            value={formData.incentive} 
            onChange={(e) => handleInputChange("incentive", e.target.value)} 
            placeholder="Enter incentive" 
            currency 
          />
        </Col>
        <Col span={24} style={{ textAlign: "right", paddingTop: "10px", borderTop: "2px solid black" }}>
          <strong>Total</strong> =N= {parseFloat(formData.basicSalary) + parseFloat(formData.transport) + parseFloat(formData.incentive)}
        </Col>
      </Row>

      <Row style={{ padding: "10px 0", borderTop: "2px solid black", borderBottom: "2px solid black" }}>
        <Col span={24}>
          <h3>Deductions</h3>
        </Col>
        <Col span={24}>
          <InputField 
            label="TAX" 
            value={formData.tax} 
            onChange={(e) => handleInputChange("tax", e.target.value)} 
            placeholder="Enter tax" 
            currency 
          />
          <InputField 
            label="PROVIDENT FUND" 
            value={formData.providentFund} 
            onChange={(e) => handleInputChange("providentFund", e.target.value)} 
            placeholder="Enter provident fund" 
            currency 
          />
          <InputField 
            label="ADVANCE/LOAN" 
            value={formData.advanceLoan} 
            onChange={(e) => handleInputChange("advanceLoan", e.target.value)} 
            placeholder="Enter advance/loan" 
            currency 
          />
          <InputField 
            label="ADVANCE SALARIES" 
            value={formData.advanceSalaries} 
            onChange={(e) => handleInputChange("advanceSalaries", e.target.value)} 
            placeholder="Enter advance salaries" 
            currency 
          />
          <InputField 
            label="ABSENT" 
            value={formData.absent} 
            onChange={(e) => handleInputChange("absent", e.target.value)} 
            placeholder="Enter absent" 
            currency 
          />
          <InputField 
            label="LATE DEDUCTIONS" 
            value={formData.lateDeductions} 
            onChange={(e) => handleInputChange("lateDeductions", e.target.value)} 
            placeholder="Enter late deductions" 
            currency 
          />
          <InputField 
            label="OTHER DEDUCTIONS" 
            value={formData.otherDeductions} 
            onChange={(e) => handleInputChange("otherDeductions", e.target.value)} 
            placeholder="Enter other deductions" 
            currency 
          />
        </Col>
        <Col span={24} style={{ textAlign: "right", paddingTop: "10px", borderTop: "2px solid black" }}>
          <strong>Total Deductions</strong> =N= {parseFloat(formData.providentFund) + parseFloat(formData.lateDeductions)}
        </Col>
        <Col span={24} style={{ textAlign: "right", paddingTop: "10px", borderTop: "2px solid black" }}>
          <strong>Net Payable</strong> =N= {35000.00 - 2460.00}
        </Col>
        <Col span={24} style={{ textAlign: "center", paddingTop: "20px" }}>
          <strong>Amount In Words:</strong> Thirty two thousand five forty eighty Rupees Only
        </Col>
      </Row>

      <Row style={{ textAlign: "center", paddingTop: "20px" }}>
        <Col span={24}>
          The figures herein are generated electronically. Hence, does not require signature except for alteration.
        </Col>
      </Row>
    </div>
  );
};

export default Payslip;
