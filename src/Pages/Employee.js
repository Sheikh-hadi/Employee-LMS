import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import { Skeleton } from "antd";
import UseFetchEmployee from "../Hooks/Employee/UseFetchEmployeeHook";

const Employee = () => {
  
 const {data : employees, isLoading, isError, error } = UseFetchEmployee()


  if (isLoading) {
    return <Skeleton active />;
  }

  if (isError) {
    return <div>Error: {error.message || "An unknown error occurred"}</div>;
  }

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Employee;
