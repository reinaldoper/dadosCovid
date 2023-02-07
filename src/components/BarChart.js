import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";


function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

BarChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default BarChart;