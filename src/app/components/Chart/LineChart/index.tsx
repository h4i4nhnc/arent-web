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
import { LineChartData } from 'dummy/chartData';
import { options, recordOptions } from './config';

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

export const LineChart = (props: { type: string }) => {
  const { type } = props;
  const chartOptions = type === 'record' ? recordOptions : options;

  return <Line options={chartOptions} data={data} />;
};
