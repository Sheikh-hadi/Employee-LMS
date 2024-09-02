// components/charts/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";
import { barChartsData } from "../../models/lineChartDataModel";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
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

  return <Line options={options} data={barChartsData} />;
};

export default LineChart;
