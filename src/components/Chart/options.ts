export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  stacked: false,
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
    },
  },
  maintainAspectRatio: false,
  aspectRatio: 1,
};
