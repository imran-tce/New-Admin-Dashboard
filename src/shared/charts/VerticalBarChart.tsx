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
      position: "right" as const,
    },
    title: {
      //   display: true,
      //   text: "Chart.js Bar Chart",
    },
  },
  options: {
    scales: {
      y:{
        title:{
          display:true,
          text:"Subject"
        }
      }
    },
    barThickness: 12,
    
  },
};

interface Props {
  chart_data: any;
}

export default function VerticalBarChart({ chart_data }: Props) {
  return (
    <div style={{ width: "100%", height: "100%",padding:"1rem" }}>
      <Bar options={options} data={chart_data} width={700}/>
    </div>
  );
}
