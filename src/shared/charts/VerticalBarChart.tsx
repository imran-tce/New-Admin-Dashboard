import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
  options: {
    scales: {
      categoryPercentage: 0.2,
      xAxes: [
        {
          gridLines: {
            color: "red", // Transparent black
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "red", // Transparent black
          },
        },
      ],
    },
    barThickness: 12,
  },
};

interface Props {
  chart_data: any;
}

export default function VerticalBarChart({ chart_data }: Props) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar options={options} data={chart_data} />
    </div>
  );
}
