import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import { Skeleton } from "antd";
import UseFetchEmployee from "../Hooks/Employee/UseFetchEmployeeHook";

const Employee = () => {

  const { data: employees, isLoading, isError, error } = UseFetchEmployee()


  if (isLoading) {
    return <Skeleton active />;
  }

  if (isError) {
    // console.log("error message: ", error.response.data.message );
    // console.log("error: ", isError);
    if (error.response.data.message === 'Employee not found' ) {
      return <EmployeeTable employees={employees} />
    } return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default Employee;
