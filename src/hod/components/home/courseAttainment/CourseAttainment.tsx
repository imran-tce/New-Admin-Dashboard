import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "../../../../shared/select/SelectInput";
import { SEMESTERS_LIST } from "../../../../constants/AppConstants";
import { courses_list } from "../../../../dummy data/courses";
import useStyles from "./CourseAttainment.styles";
import { CourseTemp } from "../../../../hod/pages/courses/Courses";
import { Theme, useMediaQuery } from "@material-ui/core";
import {
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Box, LinearProgress, Typography } from "@mui/material";

const CO_LABELS = ["co_1", "co_2", "co_3", "co_4", "co_5"];
const CO_COLORS = ["#A73EF3", "#FDC20F", "#004EFD", "#DE9A56", "#2ECC71"];

export default function CourseAttainment() {
  const classes = useStyles();
  const [semester, set_semester] = useState(SEMESTERS_LIST[0]);
  const [course, set_course] = useState(courses_list[0].id);
  const [selected_course, set_selected_course] = useState<CourseTemp>(
    courses_list[0] as any
  );

  useEffect(() => {
    if (course) {
      const temp_selected_course = courses_list.find(
        (o) => o.id === course
      ) as any;
      set_selected_course(temp_selected_course);
    }
  }, [course]);

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const chart_data = useMemo(() => {
    const labels: string[] = [];
    const data: any[] = [];

    if (selected_course && selected_course.co_attainment) {
      CO_LABELS.forEach((co) => {
        labels.push(co);
        data.push(selected_course.co_attainment[co]);
      });
    }

    const datasets = [
      {
        label: "CO Attainemnet",
        data: data,
        backgroundColor: "rgba(167, 62, 243, 0.5)",
        borderColor: "#820585",
        borderWidth: 1,
      },
    ];

    return {
      labels,
      datasets,
    };
  }, [selected_course]);

  const chart_options: ChartOptions<"radar"> = useMemo(() => {
    return {
      responsive: true,
      showLine: false,
      interaction: {
        mode: "index",
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            usePointStyle: false,
            font: {},
          },
        },
        tooltip: {
          usePointStyle: true,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 3,
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            font: {
              size: 12,
            },
            color: "#000",
          },
          pointLabels: {
            font: {
              size: 14,
            },
            color: "#000",
          },
        },
      },
    };
  }, []);

  const Rating = (props: {
    label: string;
    value: number;
    fill_color: string;
  }) => {
    const classes = useStyles();

    const getFillWidth = (index: number) => {
      const fillValue = props.value - index;
      if (fillValue >= 1) return "100%";
      if (fillValue > 0) return `${fillValue * 100}%`;
      return "0%";
    };

    return (
      <div className={classes.ratingContainer}>
        <Typography variant="BM14" sx={{mr:"1rem"}} >{props.label}</Typography>

        {[...Array(3)].map((_, index) => (
          <div key={index} className={classes.box}>
            <div
              className={classes.filled}
              style={{
                width: getFillWidth(index),
                background: props.fill_color,
              }}
            />
          </div>
        ))}
        <Typography variant="BM14" sx={{ml:"1rem"}} >{props.value}</Typography>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.filterContainer}>
        <SelectInput
          keys={SEMESTERS_LIST}
          value={semester}
          onChange={(e: any) => set_semester(e.target.value)}
          label="Sem"
        />

        <SelectInput
          keys={courses_list
            .filter((c) => c.semester === Number(semester.split(" ")[1]))
            .map((i) => i.title)}
          values={courses_list
            .filter((c) => c.semester === Number(semester.split(" ")[1]))
            .map((i) => i.id)}
          value={course}
          onChange={(e: any) => set_course(e.target.value)}
          label="Subject"
        />
      </div>
      <div className={classes.chartContainer}>
        <div className={classes.chart}>
          <Radar data={chart_data} options={chart_options} />
        </div>
        <div className={classes.tagContainer} >
          {CO_LABELS.map((label, index) => {
            let attainment = selected_course?.co_attainment[label];
            return (
              <Rating
                key={index}
                value={attainment}
                label={label}
                fill_color={CO_COLORS[index]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
