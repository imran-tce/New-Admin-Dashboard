import { Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import {
  Course,
  UserMeta,
} from "../../../../skill-ed-web/src/supabaseServices/models";
import CoursesList from "../../components/courses/CoursesList";
import RadioInput from "../../components/formComponents/RadioInput";
import SelectInput from "../../components/formComponents/SelectInput";
import TextInput from "../../components/formComponents/TextInput";
import Header from "../../components/Header/Header";
import {
  COURSE_ACTIVENESS,
  COURSE_TYPES,
  SEMESTERS_LIST,
} from "../../constants/AppConstants";
import { courses_list } from "../../dummy data/courses";
import { faculties } from "../../dummy data/faculties";
import { user } from "../../dummy data/user";
import SelectComponent from "../../shared/select/SelectInput";
import { BasicTabPanel, BasicTabs } from "../../shared/tabs/BasicTabs";
import useStyles from "./Courses.styles";

export interface CourseTemp extends Course {
  department: string;
  author: UserMeta;
  semester: number;
  academic_year: number;
  course_type: string;
  expert_id: string;
}

export default function Courses() {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [course_type, set_course_type] = useState(COURSE_TYPES[0]);
  const [course_activeness, set_course_activeness] = useState(
    COURSE_ACTIVENESS[0]
  );

  const [create_course, set_create_course] = useState(false);
  const [courses, set_courses] = useState<CourseTemp[]>(courses_list as any[]);

  useEffect(() => {
    let list = [...courses_list];
    list = list.filter((o) => o.course_type === course_type);
    if (course_activeness === COURSE_ACTIVENESS[1]) {
      list = [];
    }
    set_courses(list as any);
  }, [course_type, course_activeness]);

  const initial_values = {
    department: "",
    id: "",
    title: "",
    code: "",
    expert_id: "",
    course_type: "",
    semester: 1,
  };

  const bread_crumbs = useMemo(() => {
    return {
      Courses: "/courses",
    };
  }, []);

  const validationSchema = Yup.object().shape({
    semester: Yup.string()
      .required("Semester is required")
      .min(1, "Semester cannot be negative or 0")
      .max(8, "Semester cannot be more than 8"),
    title: Yup.string()
      .required("Title is required")
      .test("no-whitespace", "Invalid input", (value: any) => {
        return value && value.trim().length > 0;
      })
      .max(200, "Title must not be more than 200 characters"),
    code: Yup.string().required("Code is required"),
    expert_id: Yup.string().required("Please select the Subject expert"),
    course_type: Yup.string().required("Type is required"),
  });

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = (values: any) => {
    const new_course = {
      department: values.department,
      title: values.title,
      code: values.code,
      expert_id: values.expert_id,
      course_type: values.course_type,
      semester: values.semester,
    } as CourseTemp;

    set_courses((courses) => [...courses, new_course]);
    set_create_course(false);
  };

  return (
    <div className={classes.root}>
      <Header title="Courses" bread_crumbs={bread_crumbs} />
      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={SEMESTERS_LIST}
      />

      <div className={classes.filterContainer}>
        <SelectComponent
          value={course_type}
          onChange={(e) => set_course_type(e.target.value)}
          keys={COURSE_TYPES}
        />
        <SelectComponent
          value={course_activeness}
          onChange={(e) => set_course_activeness(e.target.value)}
          keys={COURSE_ACTIVENESS}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ height: 40 }}
          onClick={() => set_create_course(true)}
        >
          Create Subject
        </Button>
      </div>

      <BasicTabPanel value={value} index={1}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={3}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={4}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={5}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={6}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={7}>
        <CoursesList courses={courses} />
      </BasicTabPanel>
      <BasicTabPanel value={value} index={8}>
        <CoursesList courses={courses} />
      </BasicTabPanel>

      <Dialog
        PaperProps={{ style: { padding: "1rem" } }}
        fullWidth
        open={create_course}
      >
        <DialogTitle>
          <Typography variant="h4" color="black">
            Create New Subject{" "}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initial_values}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={classes.courseForm}>
              <TextInput
                label="Department"
                name="department"
                value={user.department}
                disabled
              />
              <TextInput name="semester" label="Semester" type="number" />
              <TextInput name="title" label="Subject name" />
              <TextInput name="code" label="Subject code" />
              <SelectInput
                name="expert_id"
                label="Subject Expert"
                keys={faculties.map((o) => o.personal_details.display_name)}
                values={faculties.map((o) => o.personal_details.id)}
              />

              <RadioInput
                name="course_type"
                label="Subject Type"
                options={COURSE_TYPES}
              />

              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => set_create_course(false)}
                  sx={{ mr: 3 }}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
