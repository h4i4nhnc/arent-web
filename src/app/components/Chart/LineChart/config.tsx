export const options = {
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
        color: '#777777',
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      },
      ticks: {
        color: '#ffff',
      },
    },
    y: {
      border: {
        display: false,
      },
      ticks: {
        color: '#2E2E2E',
      },
    },
  },
};

export const recordOptions = {
  responsive: true,
  maintainAspectRatio: false,
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
        color: '#777777',
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
      },
      ticks: {
        color: '#ffff',
      },
    },
    y: {
      title: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
