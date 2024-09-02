import React from "react";
import { Card, Row, Col } from "antd";
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

  // Function to check if today is the employee's anniversary
  const isAnniversaryToday = (doj) => {
    const date = dayjs(doj);
    const month = date.month() + 1;
    const day = date.date();
    return month === todayMonth && day === todayDay;
  };

  // Filter employees with today's birthday or anniversary
  const employeesWithTodayBirthday = employeesColumn.filter((emp) =>
    isBirthdayToday(emp.dob)
  );

  const employeesWithTodayAnniversary = employeesColumn.filter((emp) =>
    isAnniversaryToday(emp.doj)
  );

  return (
    <Card
      hoverable
      style={{
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
      {employeesWithTodayBirthday.length > 0 && (
        <div>
          <h1>Birthdays: {employeesWithTodayBirthday.length}</h1>
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
      {employeesWithTodayAnniversary.length > 0 && (
        <div>
          <h1>Anniversaries: {employeesWithTodayAnniversary.length}</h1>
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
                  🎉 {employee.name}
                </span>
              </Col>
            </Row>
          ))}
        </div>
      )}
      {employeesWithTodayBirthday.length === 0 &&
        employeesWithTodayAnniversary.length === 0 && (
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
            No Birthdays or Anniversaries Today
          </div>
        )}
    </Card>
  );
};

export default BirthdayCard;
