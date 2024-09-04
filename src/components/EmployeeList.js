import axios from "axios";
import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("object", employees);
  console.log("loading", loading);
  console.log("error", error);

  const feetchEmployees = async () => {
    console.log("fetcemployees");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:6000/api/v1/employee");
      console.log("response", response)

      setEmployees(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    feetchEmployees();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default EmployeeList;
