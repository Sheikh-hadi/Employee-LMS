import React, { useEffect } from 'react';
import DepartmentComponent from '../components/DepartmentComponent';
import useGetDepartment from '../Hooks/Department/useGetDepartmentHook';
import { useDepartmentContext } from '../context/DepartmentContext';
import { Skeleton } from 'antd';

const Department = () => {
  const { departments, setDepartments } = useDepartmentContext();
  const { data, isLoading, isError, error, isFetching } = useGetDepartment();

  useEffect(() => {
    // console.log("data: ", data);
    setDepartments(data?.data);
  }, [data, setDepartments]);

  // Logging isLoading, isFetching, isError, and error.message to the console
  // console.log("isLoading: ", isLoading);
  // console.log("isFetching: ", isFetching);
  // console.log("isError: ", isError);
  // console.log("departments: ", departments);
  if (isError) {
    // console.log("error message: ", error.message);
  }

  if (isLoading || isFetching) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <DepartmentComponent data={data?.data} />
    </>
  );
};

export default Department;
