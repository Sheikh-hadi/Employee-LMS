import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import { Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEmployeeContext } from "../context/EmployeeContext";

const Employee = () => {
  const { employees, setEmployees } = useEmployeeContext(); // Use the hook here
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/v1/employee");
      return response.data;
    },
  });

  console.log("data: ", data);
  console.log("employees: ", employees);
  React.useEffect(() => {
    if (data) {
      setEmployees(data.data); // Ensure you access the correct data structure
    }
  }, [data, setEmployees]); // Added `data` to the dependency array

  if (isLoading) {
    return <Skeleton active />;
  }

  if (isError) {
    return <div>Error: {error.message || "An unknown error occurred"}</div>;
  }

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable />
    </div>
  );
};

export default Employee;
