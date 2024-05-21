import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import { Avatar, Rating, Typography } from "@mui/material";
import useStyles from "./FacultyRatings.styles";
import { faculty_ratings } from "../../../dummy data/faculty-ratings";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import SelectInput from "../../../shared/select/SelectInput";
import SearchBar from "../../../shared/searchBar/SearchBar";

export default function FacultyRatings() {
  const classes = useStyles();
  const [selected_faculty, set_selected_faculty] = useState(faculty_ratings[0]);

  const [behavior_tab_value, set_behavior_tab_value] = useState(1);
  const [academic_tab_value, set_academic_tab_value] = useState(1);
  const [attendance_tab_value, set_attendance_tab_value] = useState(1);
  const [class_name, set_class_name] = useState<string>(
    selected_faculty.class[0]
  );
  const [search_text, set_search_text] = useState("");

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

  const handleFacultyClick = (id: number) => {
    set_selected_faculty(faculty_ratings.find((a) => a.id === id) as any);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="BM20" color="primary" sx={{mt:2}}>
        Faculty Ratings & Feedbacks
      </Typography>
      <Typography variant="BR14" color="primary" sx={{mb:2}}>
        CSE Department
      </Typography>

      <div className={classes.gridContainer}>
        <div className={classes.gridItem1}>
          <Typography variant="BM20" sx={{ mb: 2 }}>
            Faculties
          </Typography>

          <div style={{ marginBottom: "1rem" }}>
            <SearchBar
              search_text={search_text}
              handleChange={(e: any) => set_search_text(e.target.value)}
              placeholder={"Please search by faculty name.."}
            />
          </div>

          <div className={classes.facultiesContainer}>
            {faculty_ratings
              .filter((a) =>
                search_text !== ""
                  ? a.name.toLowerCase().includes(search_text.toLowerCase())
                  : true
              )
              .map((faculty, index) => {
                return (
                  <div
                    key={faculty.id}
                    onClick={() => handleFacultyClick(faculty.id)}
                    className={classes.facultyCard}
                  >
                    <Avatar src="" alt="" />
                    <div>
                      <Typography variant="BM14">{faculty.name} </Typography>
                      <Typography variant="BR12" color="#50545B">
                        {faculty.subject}{" "}
                      </Typography>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Rating
                          max={1}
                          name="read-only"
                          size="small"
                          value={1}
                          readOnly
                          sx={{ mr: 0.5 }}
                        />
                        <Typography variant="BM12">
                          {faculty.rating}/5
                        </Typography>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={classes.gridItem2}>
          <div className={classes.facultyDetails}>
            <Avatar src="" alt="" />
            <div>
              <Typography variant="h4">{selected_faculty.name} </Typography>
              <Typography variant="BSb14" component="p" sx={{ mt: 1 }}>
                <Rating
                  max={1}
                  name="read-only"
                  size="small"
                  value={1}
                  readOnly
                />
                {selected_faculty.rating}{" "}
              </Typography>

              <div className={classes.facultySubDetails}>
                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Employee ID
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {selected_faculty.employee_id}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Date of Joining{" "}
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {selected_faculty.date_of_join}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Class
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {class_name}{" "}
                  </Typography>
                </div>

                <div>
                  <Typography variant="BR14" color="#004EFD">
                    Subject{" "}
                  </Typography>
                  <Typography variant="BR14" component="p" sx={{ mt: 0.5 }}>
                    {selected_faculty.subject}{" "}
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
                  keys={selected_faculty.class}
                  onChange={(e) => set_class_name(e.target.value)}
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
                  keys={selected_faculty.class}
                  onChange={(e) => set_class_name(e.target.value)}
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
                  keys={selected_faculty.class}
                  onChange={(e) => set_class_name(e.target.value)}
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
