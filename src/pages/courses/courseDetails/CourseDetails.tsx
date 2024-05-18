import React, { useEffect, useMemo, useState } from "react";
import useStyles from "./CourseDetails.styles";
import Header from "../../../components/Header/Header";
import { CourseTemp } from "../Courses";
import { useParams } from "react-router-dom";
import { courses_list } from "../../../dummy data/courses";
import {
  Button,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { FallbackComponent } from "../../../components/suspenseFallback/FallbackComponent";
import { user } from "../../../dummy data/user";

export default function CourseDetails() {
  const classes = useStyles();
  const { courseId }: any = useParams();
  const [course, set_course] = useState<CourseTemp>({} as CourseTemp);
  const [loading, set_loading] = useState(false);

  useEffect(() => {
    set_loading(true);
    const current_course = courses_list.find((o) => o.id === courseId) as any;
    if (current_course?.id) {
      set_course(current_course);
    }
    set_loading(false);
  }, [courseId]);

  const bread_crumbs = useMemo(() => {
    return {
      Courses: "/courses",
      [course?.title]: `/courses/${courseId}`,
    };
  }, [course?.title, courseId]);

  if (loading) return <FallbackComponent />;
  if (course?.id) {
    return (
      <div className={classes.root}>
        <Header title="Subject Course Builder" bread_crumbs={bread_crumbs} />

        <div className={classes.subtitle} style={{marginTop:"2rem"}} >
          <Typography variant="h4" color="black">
            Display Information
          </Typography>
          <Divider />
        </div>
        <div className={classes.displayInfo}>
          <div className={classes.displayInfo1}>
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "3rem",
              }}
            >
              <div>
                <InputLabel>Course title </InputLabel>
                <div className={classes.filledContainer}>
                  <Typography variant="BR14">{course?.title} </Typography>
                </div>
              </div>
              <div>
                <InputLabel>Course code </InputLabel>
                <div className={classes.filledContainer}>
                  <Typography variant="BR14">{course?.code} </Typography>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <InputLabel>Course Description </InputLabel>
              <div className={classes.filledContainer}>
                <Typography variant="BR14">{course?.description} </Typography>
              </div>
            </div>
          </div>
          <div style={{ flex: 0.3 }}>
            <img
              src={course?.thumbnail}
              alt=""
              style={{ float: "right", width: "380px",}}
            />
          </div>
        </div>

        <div className={classes.subtitle}>
          <Typography variant="h4" color="black">
            Basic Details
          </Typography>
          <Divider />
        </div>
        <div className={classes.basicDetails}>
          <div>
            <InputLabel>Department</InputLabel>
            <div className={classes.filledContainer}>
              <Typography variant="BR14">
                {course?.department || user?.department}{" "}
              </Typography>
            </div>
          </div>
          <div>
            <InputLabel>Course type </InputLabel>
            <div className={classes.filledContainer}>
              <Typography variant="BR14">{course?.course_type} </Typography>
            </div>
          </div>
          <div>
            <InputLabel>Course expert </InputLabel>
            <div className={classes.filledContainer}>
              <Typography variant="BR14">
                {course?.expert_id ||
                  course?.instructors[0] ||
                  "Preetham Kulal"}{" "}
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.subtitle}>
          <Typography variant="h4" color="black">
            Assignments
          </Typography>
          <Divider />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "2rem 0",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled
            style={{ minWidth: "300px" }}
          >
            Create Assignments
          </Button>
        </div>

        <div className={classes.subtitle}>
          <Typography variant="h4" color="black">
            CIE Papers
          </Typography>
          <Divider />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "2rem 0",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled
            style={{ minWidth: "300px" }}
          >
            Create Paper
          </Button>
        </div>
      </div>
    );
  }
  return (
    <Typography variant="h4" color="error">
      Course does not exist !!
    </Typography>
  );
}
