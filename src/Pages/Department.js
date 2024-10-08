import React, { useEffect } from 'react';
import DepartmentComponent from '../components/DepartmentComponent';
import useGetDepartment from '../Hooks/Department/useGetDepartmentHook';
import { useDepartmentContext } from '../context/DepartmentContext';
import { Skeleton } from 'antd';

const Department = () => {

  const { data, isLoading, isError, error, isFetching } = useGetDepartment();


  // Logging isLoading, isFetching, isError, and error.message to the console
  console.log("isLoading: ", isLoading);
  console.log("isFetching: ", isFetching);
  console.log("isError: ", isError);

 


  if (isLoading || isFetching) {
    return <Skeleton />;
  }

  if (isError) {
    // console.log("error message: ", error.response.data.message );
    // console.log("error: ", isError);
if(error.response.data.message === "Not Record Found"){
   return <DepartmentComponent data={data?.data} />
  } return <div>Error: {error.message}</div>
  }

  return (
    <>
      <DepartmentComponent data={data?.data} />
    </>
  );
};

export default Department;
