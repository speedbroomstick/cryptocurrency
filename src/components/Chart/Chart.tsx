import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
  Legend,
  Filler
);

export default function Chart({ data }: IChart) {
  const labels = data?.map((price) => price.date);
  const stateChart = data![data!.length-1].priceUsd>data![data!.length-2].priceUsd;
  const dataRow = {
    labels,
    datasets: [
      {
        label: "Price USD",
        data: data?.map((price) => price.priceUsd),
        borderColor:  stateChart?"rgba(94, 255, 70,.5)":"rgba(255, 99, 132, 0.5)",
        backgroundColor: stateChart?"rgba(94, 255, 70,.5)":"rgba(255, 99, 132, 0.5)",
        fill: true,
      },
    ],
  };
  return <Line options={options} data={dataRow} />;
}