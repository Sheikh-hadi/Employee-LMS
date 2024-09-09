import React from 'react'
import DepartmentComponent from '../components/DepartmentComponent'
import useGetDepartment from '../Hooks/Department/useGetDepartmentHook'
import { Skeleton } from 'antd';

const Department = () => {
  const { data, isLoading, isError, error, isFetching } = useGetDepartment();
  // console.log("data: ", data)
  // console.log("isLoading: ", isLoading)
  // console.log("isError: ", isError)
  // console.log("error: ", error)
  // console.log("isFetching: ", isFetching)
  
  if (isLoading) {
    return <Skeleton />
  }
  if (isFetching) {
    return <Skeleton />
  }
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  return (
    <>
      <DepartmentComponent data={data?.data} />
    </>
  )
}

export default Department