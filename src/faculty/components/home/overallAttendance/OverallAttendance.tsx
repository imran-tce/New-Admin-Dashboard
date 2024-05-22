import React, { useState } from "react";
import faker from "faker";
import SelectInput from "../../../../shared/select/SelectInput";
import VerticalBarChart from "../../../../shared/charts/VerticalBarChart";
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
import useStyles from "./OverallAttendance.styles";
import { Button, Typography } from "@mui/material";
import ToggleButtons from "../../../../shared/toggleButtons/ToggleButtons";
import theme from "../../../../theme/AppTheme";

const SEMESTERS = [
  "1st sem",
  "2nd sem",
  "3rd sem",
  "4th sem",
  "5th sem",
  "6th sem",
  "7th sem",
  "8th sem",
];

const FREQUENCIES = ["Days", "Weeks", "Months"];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OverallAttendance() {
  const classes = useStyles();
  const [freq, set_freq] = useState(FREQUENCIES[0]);

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "SEM 1",
        data: labels.map(() => faker.datatype.number({ min: 50, max: 100 })),
        backgroundColor: "#FDC20F",
        // borderWidth: 10,
        // borderColor:"transparent",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 12,
        barPercentage: 1,
        categoryPercentage: 0.5,
      },
      {
        label: "SEM 1",
        data: labels.map(() => faker.datatype.number({ min: 40, max: 100 })),
        backgroundColor: "#050418",
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 12,
      },
      {
        label: "SEM 3",
        data: labels.map(() => faker.datatype.number({ min: 30, max: 100 })),
        backgroundColor: "#182AD2",
        borderWidth: 0,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 12,
      },
    ],
  } as any;

  const options = {
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
        y: {
          title: {
            display: true,
            text: "Subject",
          },
        },
      },
      barThickness: 12,
    },
  };

  const handleFrequencyChange = (
    event: React.MouseEvent<HTMLElement>,
    new_value: string
  ) => {
    set_freq(new_value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Overall Class Attendance</Typography>

        <ToggleButtons
          value={freq}
          button_contents={FREQUENCIES}
          handleButtonToggle={handleFrequencyChange}
          background_color={theme.palette.primary.main}
          color="#FFF"
        />
      </div>

      <div
        style={{
          height: "300px",
          width: "100%",
        }}
      >
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
