
import React from "react";
import { Bar } from "react-chartjs-2";
import { barChartsData } from "../../models/lineChartDataModel";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Employees",
        },
      },
    },
  };

  return <Bar options={options} data={barChartsData} />;
};

export default BarChart;
