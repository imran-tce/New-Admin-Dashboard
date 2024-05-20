import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import SelectInput from "../../shared/select/SelectInput";
import { CourseTemp } from "../courses/Courses";
import { courses_list } from "../../dummy data/courses";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useStyles from "./CourseOutcomeAttainments.styles";
import VerticalBarChart from "../../shared/charts/VerticalBarChart";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  ChartOptions,
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

export default function CourseOutcomeAttainments() {
  const classes = useStyles();
  const [course_id, set_course_id] = useState("");

  const [course, set_course] = useState<CourseTemp>({} as CourseTemp);

  useEffect(() => {
    set_course_id(courses_list[0]?.id);
  }, []);

  useEffect(() => {
    set_course(courses_list?.find((i) => i.id === course_id) as any);
  }, [course_id]);

  const bread_crumbs = useMemo(() => {
    return {
      "CO Attainment": "/course-outcomes",
    };
  }, []);

  const chart_data = {
    labels: [...Array(5)].map((i, index) => `${course?.nba_code}.${index + 1}`),
    datasets: [
      {
        label: "CO Attainment",
        data: [2.5, 0.6, 2.3, 1.3, 1.1],
        backgroundColor: "#387FC8",
        // borderWidth: 10,
        // borderColor:"transparent",
        borderRadius: 4,
        // borderSkipped: false,
        barThickness: 30,
      },
      {
        label: "Set Target",
        data: [1.8, 1.8, 1.8, 1.8, 1.8],
        backgroundColor: "#504F5D",
        // borderWidth: 0,
        borderRadius: 4,
        // borderSkipped: false,
        barThickness: 30,
      },
    ],
  } as any;

  const chart_options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "CO Attainment Chart",
      },
    },
    options: {
      scales: {
        x: {
          border: {
            display: false,
          },
          grid: {
            display: false,
            //   drawOnChartArea: CHART_AREA,
            //   drawTicks: TICKS,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Target Level",
          },
        },
        yAxes: [
          {
            ticks: {
              beginAtZero: true, // Adjust as needed
            },
            title: {
              display: true, // Set to true to display the title
              text: "Y-Axis Label", // Set your desired title text
            },
          },
        ],
      },
      barThickness: 12,
    },
  };

  return (
    <div>
      <Header title="CIE CO Attainment" bread_crumbs={bread_crumbs} />

      <div className={classes.filterContainer}>
        <SelectInput
          value={course_id}
          keys={courses_list.map((o) => o.title)}
          values={courses_list.map((o) => o.id)}
          onChange={(e) => set_course_id(e.target.value)}
        />
      </div>
      <div className={classes.courseDetails}>
        <div>
          <Typography variant="BR14" color="#387FC8" component="p">
            Course Name
          </Typography>
          <Typography variant="BR14" color="black">
            {course?.title}
          </Typography>
        </div>

        <div>
          <Typography variant="BR14" color="#387FC8" component="p">
            Course Code
          </Typography>
          <Typography variant="BR14" color="black">
            {course?.code}
          </Typography>
        </div>

        <div>
          <Typography variant="BR14" color="#387FC8" component="p">
            NBA Code
          </Typography>
          <Typography variant="BR14" color="black">
            {course?.nba_code}
          </Typography>
        </div>

        <div>
          <Typography variant="BR14" color="#387FC8" component="p">
            Class Strength
          </Typography>
          <Typography variant="BR14" color="black">
            {course?.capacity}
          </Typography>
        </div>
      </div>

      <div className={classes.attainmentContainer}>
        <div className={classes.attainmentChart} style={{ padding: "2rem" }}>
          <Bar options={chart_options} data={chart_data} />
        </div>

        <div className={classes.attainmentTable}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12"> Cos</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Target Level</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Indirect Attainment</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Direct Attainment</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Overall Direct</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Overall Indirect</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12"> Final Attainment</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12">{course?.nba_code}.1 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">2.4</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">2.5</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12">{course?.nba_code}.2 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.6</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12">{course?.nba_code}.3 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.2</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">2.1</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">2.3</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12">{course?.nba_code}.3 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.9</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.3</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="BR12">{course?.nba_code}.4 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.8</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.2</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">0.6</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">3.0</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BR12">1.1</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
