import { Typography } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import faker from "faker";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import ToggleButtons from "../../../../shared/toggleButtons/ToggleButtons";
import theme from "../../../../theme/AppTheme";
import useStyles from "./SubjectParticipation.styles";

const CLASSROOM = ["CSE A sem 1", "CSE B sem 1", "CSE B sem 3"];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SubjectParticipation() {
  const classes = useStyles();
  const [classroom, set_classroom] = useState(CLASSROOM[0]);

  const labels = ["Cie", "Events", "Quiz", "Case studies"];
  const subjects=["Physics.  Total students: 75 no's","Physics.  Total students: 83 no's","DSA.  Total students: 81 no's"]

  const data = {
    labels,
    datasets: [
      {
        label: subjects[CLASSROOM.indexOf(classroom)],
        data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
        backgroundColor: theme.palette.secondary.main,
        borderSkipped: false,
        barThickness: 25,
        barPercentage: 1,
        categoryPercentage: 0.5,
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

  const handleClassroomChange = (
    event: React.MouseEvent<HTMLElement>,
    new_value: string
  ) => {
    set_classroom(new_value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Subject Participation</Typography>

        <ToggleButtons
          value={classroom}
          button_contents={CLASSROOM}
          handleButtonToggle={handleClassroomChange}
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
