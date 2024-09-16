import React from 'react'
import UserTable from '../components/userDetail/UserTable'
import useGetUser from '../Hooks/UserHook/useGetUserHook'
import { Skeleton } from 'antd'

const UserPage = () => {
  const { data: user = [], isLoading, isError, error, isFetching } = useGetUser()
  // console.log("data in User page: ", user);
  // console.log("error in User page: ", error);
  // console.log("isFetching in User page: ", isFetching);
  // console.log("loading in User page: ", isLoading);
  if (isLoading || isFetching) {
    return <h2><Skeleton /></h2>
  }
  if (error) {
    return <h2>Error:
      {error.message}
    </h2>
  }
  if (error?.response?.data?.message === "User does not exist") {
    return <UserTable />
  }
  return (
    <UserTable user={user} />
  )
}

export default UserPage