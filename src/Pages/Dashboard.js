import React from 'react'
import EmployeeDasboard from '../components/DasboardComponent'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
import AttendenceDashboard from '../components/AttendenceDashboard'


const Dashboard = () => {
  return (
    <div>
<EmployeeDasboard/>
<AttendenceDashboard/>
<BarChart/>
<LineChart/>
</div>


  )
}

export default Dashboard