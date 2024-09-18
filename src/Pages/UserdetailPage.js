import React from 'react'
import UserDetails from '../components/userDetail/UserDetails'
import PermissionsPage from './PermissionsPage'
import EditUserDetail from '../components/userDetail/EditUserDetail';

const UserdetailPage = () => {
  return (
    <div>
      <EditUserDetail/>
      <UserDetails />
      <PermissionsPage />

    </div>
  )
}

export default UserdetailPage
