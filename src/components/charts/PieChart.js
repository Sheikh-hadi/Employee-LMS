// components/charts/PieChart.js

import React from "react";
import { Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import {
  Chart as Chartjs,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { pieChartData } from "../../models/pieChartModel"; 

Chartjs.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Employee Distribution by Department",
      },
    },
  };

  return (
    <Row justify="center" style={{ padding: "20px" }}>
      <Col xs={24} sm={24} md={18} lg={12}>
        <Pie data={pieChartData} options={options} />
      </Col>
    </Row>
  );
};

export default PieChart;
