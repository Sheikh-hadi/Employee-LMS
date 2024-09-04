import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import UseGetHooks from "../Hooks/useGetHook";
import { Skeleton } from "antd";

const Employee = () => {
  const [employeedata, setEmployeedata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("employess: ", employeedata)

  useEffect(() => {
    UseGetHooks(setLoading, setError, setEmployeedata, " http://localhost:4000/api/v1/employee");
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable employees={employeedata} />
    </div>
  );
};

export default Employee;
