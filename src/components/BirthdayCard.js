import React from "react";
import { Card, Row, Col, Tag } from "antd";
import { employeesColumn } from "../models/employeeColumnModel";
import dayjs from "dayjs";

const BirthdayCard = () => {
  const today = dayjs();
  const todayMonth = today.month() + 1; // Months are zero-based in dayjs
  const todayDay = today.date();

  // Function to check if today is the employee's birthday
  const isBirthdayToday = (dob) => {
    const date = dayjs(dob);
    const month = date.month() + 1;
    const day = date.date();
    return month === todayMonth && day === todayDay;
  };

  // Function to check if today is the employee's anniversary and return the number of years
  const getAnniversaryInfo = (doj) => {
    const date = dayjs(doj);
    const month = date.month() + 1;
    const day = date.date();
    
    if (month === todayMonth && day === todayDay) {
      const yearsCompleted = today.diff(date, 'year'); // Calculate the number of years
      return yearsCompleted > 0 ? `${yearsCompleted}th Anniversary` : "Anniversary";
    }
    
    return null; // Return null if it's not the anniversary today
  };

  // Filter employees with today's birthday or anniversary
  const employeesWithTodayBirthday = employeesColumn.filter((emp) =>
    isBirthdayToday(emp.dob)
  );

  const employeesWithTodayAnniversary = employeesColumn.map((emp) => ({
    ...emp,
    anniversaryInfo: getAnniversaryInfo(emp.joiningDate),
  }))
  .filter((emp) => emp.anniversaryInfo);

console.log("employeesWithTodayAnniversary: ", employeesWithTodayAnniversary);

return (
  <Card
    hoverable
    style={{
      border:'2px solid black',
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      padding: "5px",
      height: "100%",
      cursor: "pointer",
      backgroundColor: "#ff9800",
      transition: "transform 1.25s, box-shadow 0.2s",
      position: "relative",
    }}
  >
    <Row gutter={16}>
      {/* Birthday Column */}
      <Col span={12}>
        {employeesWithTodayBirthday.length > 0 && (
          <div>
            <Tag>Birthdays: {employeesWithTodayBirthday.length}</Tag>
            {employeesWithTodayBirthday.map((employee) => (
              <Row key={employee.id}>
                <Col>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    🎉 {employee.name}
                  </span>
                </Col>
              </Row>
            ))}
          </div>
        )}
      </Col>

      {/* Anniversary Column */}
      <Col span={12}>
        {employeesWithTodayAnniversary.length > 0 && (
          <div>
            <Tag>Anniversaries: {employeesWithTodayAnniversary.length}</Tag>
            {employeesWithTodayAnniversary.map((employee) => (
              <Row key={employee.id}>
                <Col>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    🎉 {employee.name} - {employee.anniversaryInfo}
                  </span>
                </Col>
              </Row>
            ))}
          </div>
        )}
      </Col>
    </Row>

    {(employeesWithTodayBirthday.length === 0 &&
      employeesWithTodayAnniversary.length === 0) && (
      <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
        No Birthdays or Anniversaries Today
      </div>
    )}
  </Card>
);
};

export default BirthdayCard;

