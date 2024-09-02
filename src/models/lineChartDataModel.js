// lineChartDataModel.js

import { employeesColumn } from "./employeeColumnModel";
import moment from "moment";

// Extracting and grouping joining dates by month
const groupedData = employeesColumn.reduce((acc, employeesColumn) => {
  const month = moment(employeesColumn.joiningDate).format("MMMM"); // Format the date to get the month name
  acc[month] = (acc[month] || 0) + 1; // Count the number of employees joining in each month
  return acc;
}, {});

// Prepare data for the chart
export const barChartsData = {
  labels: Object.keys(groupedData), // The month names
  datasets: [
    {
      label: "Employee Joining Dates",
      data: Object.values(groupedData), // Number of employees joined each month
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
  ],
};
