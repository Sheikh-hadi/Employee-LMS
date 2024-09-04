import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddNewEmployee from "../components/AddNewEmployee";
import useGetHooks from "../Hooks/useGetHook";

const Employee = () => {
  const [employeedata, setEmployeedata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const fetch = useGetHooks(setLoading, setError, setEmployeedata, "/api/employees");
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <AddNewEmployee />
      <EmployeeTable employees={employeedata} />
    </div>
  );
};

export default Employee;
