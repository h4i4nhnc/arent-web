import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LineChartData } from 'app/dummy/chartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const data = {
  labels: LineChartData.labels,
  datasets: LineChartData.datasets,
};

export const LineChart = () => {
  // TODO: move data to upper level and user as props
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        border: {
          display: true,
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
      y: {
        border: {
          display: false,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};
