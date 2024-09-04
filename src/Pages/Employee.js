import React from 'react'
import EmployeeTable from '../components/EmployeeTable'
import AddNewEmployee from '../components/AddNewEmployee'
import EmployeeList from '../components/EmployeeList'

const Employee = () => {
  return (
    <div>
      <EmployeeList/>
      <AddNewEmployee/>
      <EmployeeTable/>

    </div>
  )
}

export default Employee
