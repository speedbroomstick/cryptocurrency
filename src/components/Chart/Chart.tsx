import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./options";
import { IChart } from "../../types/IChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ data }: IChart) {
  const labels = data?.map((price) => price.date);

  const dataRow = {
    labels,
    datasets: [
      {
        label: "Price USD",
        data: data?.map((price) => price.priceUsd),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
    ],
  };
  return <Line options={options} data={dataRow} />;
}
