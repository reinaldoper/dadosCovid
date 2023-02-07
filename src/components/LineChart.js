import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types';

function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

LineChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default LineChart;