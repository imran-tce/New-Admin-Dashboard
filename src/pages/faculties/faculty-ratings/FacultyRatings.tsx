import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { Avatar, Rating, Typography } from "@mui/material";
import useStyles from "./FacultyRatings.styles";
import { faculty_ratings } from "../../../dummy data/faculty-ratings";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import SelectInput from "../../../shared/select/SelectInput";

export default function FacultyRatings() {
  const classes = useStyles();
  const faculty = faculty_ratings[0];

  const [behavior_tab_value, set_behavior_tab_value] = useState(1);
  const [academic_tab_value, set_academic_tab_value] = useState(1);
  const [attendance_tab_value, set_attendance_tab_value] = useState(1);
  const [class_name, set_class_name] = useState<string>(faculty.class[0]);

  const handleChangeBehaviourTab = (
    _event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    set_behavior_tab_value(newValue);
  };

  const handleChangeAcademicTab = (
    _event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    set_academic_tab_value(newValue);
  };

  const handleChangeAttendanceTab = (
    _event: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    set_attendance_tab_value(newValue);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="BM20" color="primary">
        Faculty Ratings & Feedbacks
      </Typography>
      <Typography variant="BR14" color="primary" component="p">
        CSE Department
      </Typography>

      <div className={classes.gridContainer}>
        <div className={classes.gridItem1}> grid 1 </div>
        <div className={classes.gridItem2}>
          <div className={classes.facultyDetails}>
            <Avatar src="" alt="" />
            <div>
              <Typography variant="h4">{faculty.name} </Typography>
              <Typography variant="BSb14" component="p" sx={{ mt: 1 }}>
                <Rating
                  max={1}
                  name="read-only"
                  size="small"
                  value={1}
                  readOnly
                />
                {faculty.rating}{" "}
              </Typography>

              <div className={classes.facultySubDetails}>
                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Employee ID
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {faculty.employee_id}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Date of Joining{" "}
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {faculty.date_of_join}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Class
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {faculty.class[0]}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Subject{" "}
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {faculty.subject}{" "}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.gridItem3}>
          <BasicTabs
            value={behavior_tab_value}
            handleChangeTab={handleChangeBehaviourTab}
            tabLabels={["Behaviourial", "Comments"]}
            full_width
          />
          <BasicTabPanel value={behavior_tab_value} index={1}>
            <div>
              <div style={{ textAlign: "right" }}>
                <SelectInput
                  value={class_name}
                  keys={faculty.class}
                  onChange={(e) => set_class_name(e.taeget.value)}
                  background="#F8F8F8"
                />
              </div>

              <Typography variant="BR14" color="#828894" sx={{ m: "1rem 0" }}>
                Feedback by {Math.floor(Math.random() * 80 + 30)} students
              </Typography>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  Lecturer Respect all students equally{" "}
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  Level of Comfort & safety in classroom{" "}
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  lecturer encourage & motivate you to learn?
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>
            </div>
          </BasicTabPanel>
        </div>
        <div className={classes.gridItem4}>
          <BasicTabs
            value={academic_tab_value}
            handleChangeTab={handleChangeAcademicTab}
            tabLabels={["Academic", "Comments"]}
            full_width
          />
          <BasicTabPanel value={academic_tab_value} index={1}>
            <div>
              <div style={{ textAlign: "right" }}>
                <SelectInput
                  value={class_name}
                  keys={faculty.class}
                  onChange={(e) => set_class_name(e.taeget.value)}
                  background="#F8F8F8"
                />
              </div>

              <Typography variant="BR14" color="#828894" sx={{ m: "1rem 0" }}>
                Feedback by {Math.floor(Math.random() * 80 + 30)} students
              </Typography>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  Lecturer explains concepts clearly in a way you understand?
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  Lessons are engaging & keeps intrest
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  lecturer uses latest technologies in studies
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                  Lecturer follow all the assessment method
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>
            </div>
          </BasicTabPanel>
        </div>
        <div className={classes.gridItem5}>
          <BasicTabs
            value={attendance_tab_value}
            handleChangeTab={handleChangeAttendanceTab}
            tabLabels={["Attendance", "Comments"]}
            full_width
          />
          <BasicTabPanel value={attendance_tab_value} index={1}>
            <div>
              <div style={{ textAlign: "right" }}>
                <SelectInput
                  value={class_name}
                  keys={faculty.class}
                  onChange={(e) => set_class_name(e.taeget.value)}
                  background="#F8F8F8"
                />
              </div>

              <Typography variant="BR14" color="#828894" sx={{ m: "1rem 0" }}>
                Feedback by {Math.floor(Math.random() * 80 + 30)} students
              </Typography>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                Faculty will be available most of the time
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

              <div className={classes.criteria}>
                <Typography variant="BR16" sx={{ mb: 1 }}>
                Some relevant question goes here
                </Typography>
                <Rating
                  name="read-only"
                  size="medium"
                  value={Math.random() * 5 + 1}
                  readOnly
                />
              </div>

             
            </div>
          </BasicTabPanel>
        </div>
      </div>
    </div>
  );
}
