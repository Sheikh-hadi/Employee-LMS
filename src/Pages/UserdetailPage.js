import React from 'react'
import UserDetails from '../components/userDetail/UserDetails'
import PermissionsPage from './PermissionsPage'
import EditUserDetail from '../components/userDetail/EditUserDetail';

const UserdetailPage = () => {
  const [initialValues, setInitialValues] = React.useState(null);

  const handleInitiailValues = (values) => {
    setInitialValues(values);
  }
  return (
    <div>
      <EditUserDetail initialValues={initialValues} />
      <UserDetails handleInitiailValues={handleInitiailValues} />
      <PermissionsPage />

    </div>
  )
}

export default UserdetailPage
