import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import { Skeleton } from "antd";
import UseFetchEmployee from "../Hooks/Employee/UseFetchEmployeeHook";

const Employee = () => {
  const { data: employees = [], isLoading, isError, error } = UseFetchEmployee();
  const [filteredData, setFilteredData] = React.useState(employees);
  console.log("filteredData: ", filteredData)


  if (isLoading) {
    return <Skeleton active />;
  }

  if (isError) {
    console.error("Error fetching employees:", error.response.data.message);
    if (error.response.data.message === "Employee Not Found") {
      return (
        <div>
          <AddNewEmployee  />
          <EmployeeTable employees={filteredData} />
        </div>
      );
    }  
      return <div>Error: {error?.message || 'An unexpected error occurred.'}</div>;

  }

  return (
    <div>
      <AddNewEmployee employees={employees} setFilteredData={setFilteredData}/>
      <EmployeeTable employees={filteredData} />
    </div>
  );
};

export default Employee;
