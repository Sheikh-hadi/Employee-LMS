import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import {Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Employee = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/v1/employee");

      return response.data; 
    },
  });
  console.log("data: ", data?.data);


  if (isLoading) {
    return <Skeleton active />;
  }

  if (isError) {
    return <div>Error: {error.message || "An unknown error occurred"}</div>;
  }

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable employees={data?.data} />
    </div>
  );
};

export default Employee;
