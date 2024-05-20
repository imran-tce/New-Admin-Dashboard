import React, { useMemo, useState } from "react";
import useStyles from "./StudentActivities.styles";
import SelectInput from "../../../shared/select/SelectInput";
import VerticalBarChart from "../../../shared/charts/VerticalBarChart";
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
import { academic_years } from "../../../dummy data/academic-year";
import { student_activities_status } from "../../../dummy data/student-activities";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StudentActivities() {
  const classes = useStyles();
  const [year, set_year] = useState(1);

  const data = useMemo(() => {
    return {
      labels: academic_years.map((i) => i.year),
      datasets: [
        {
          label: "Programmes",
          data: student_activities_status
            .filter((o) => o.activity === "Programmes")
            ?.map((i) => i.value),
          backgroundColor: "#5D45DB",
          // borderWidth: 10,
          // borderColor:"transparent",
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 12,
          barPercentage: 1,
          categoryPercentage: 0.5,
        },
        {
          label: "Events",
          data: student_activities_status
            .filter((o) => o.activity === "Events")
            ?.map((i) => i.value),
          backgroundColor: "#FDC20F",
          borderWidth: 0,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 12,
        },
        {
          label: "Projects",
          data: student_activities_status
            .filter((o) => o.activity === "Projects")
            ?.map((i) => i.value),
          backgroundColor: "#6CB9AD",
          borderWidth: 0,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 12,
        },
        {
          label: "Attendance",
          data: student_activities_status
            .filter((o) => o.activity === "Attendance")
            ?.map((i) => i.value),
          backgroundColor: "#FE7275",
          borderWidth: 0,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 12,
        },
      ],
    };
  }, [year]);

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

  return (
    <div className={classes.root}>
            <div className={classes.headerContainer}>
        <Typography variant="BM20">Event Progress</Typography>
      </div>
      <div style={{ position: "absolute", right: 10, top: 10 }}>
        <SelectInput
          keys={academic_years.map((i) => i.year)}
          values={academic_years.map((i) => i.value)}
          value={year}
          onChange={(e) => set_year(Number(e.target.value))}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "1rem",
        }}
      >
        <Bar options={options} data={data} height={270} style={{padding:"2rem", marginTop:"2rem"}} />
      </div>
    </div>
  );
}
