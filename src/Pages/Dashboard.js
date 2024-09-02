import React from 'react'
import EmployeeDasboard from '../components/DasboardComponent'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'


const Dashboard = () => {
  return (
    <div>
<EmployeeDasboard/>
<BarChart/>
<LineChart/>
</div>


  )
}

export default Dashboard