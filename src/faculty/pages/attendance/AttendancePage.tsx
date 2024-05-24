import React, { useEffect, useMemo, useState } from "react";
import useStyles from "./AttendancePage.styles";
import Header from "../../../shared/Header/Header";
import { BasicTabPanel, BasicTabs } from "../../../shared/tabs/BasicTabs";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { generateDatesFromMonth } from "../../../utils/utils";
import {
  attendance_batch_students,
  attendance_classsrooms,
} from "../../../dummy data/attendance";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SelectInput from "../../../shared/select/SelectInput";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Classroom, StudentAttendance } from "../../../models/devModels";

const tabLabels = ["All Students", "Grace Request"];

const ATTENDANCE_FILTER = [
  "All Students",
  "Below 50%",
  "50% - 75%",
  "75% and above",
];

export default function AttendancePage() {
  const classes = useStyles();

  const [value, setValue] = useState(1);
  const [dates_list, set_dates_list] = useState<string[]>([]);
  const [students_data, set_students_data] = useState<StudentAttendance[]>([]);
  const [filtered_students_data, set_filtered_students_data] = useState<
    StudentAttendance[]
  >([]);
  const [classroom_id, set_classroom_id] = useState(
    attendance_classsrooms[0].id
  );
  const [classroom, set_classroom] = useState<Classroom>({} as Classroom);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected_date, set_selected_date] = useState("");
  const [attendance_filter, set_attendance_filter] = useState(
    ATTENDANCE_FILTER[0]
  );

  // randomly assigning attendance to the students_data
  useEffect(() => {
    if (classroom?.id) {
      let temp_student_list: StudentAttendance[] = [];

      attendance_batch_students.forEach((st) => {
        if (st.batch_id === classroom.id) {
          temp_student_list.push({
            ...st,
            attendnace_data: [],
            attendnace_percentage: 0,
          } as StudentAttendance);
        }
      });

      for (let i = 0; i < temp_student_list.length; i++) {
        dates_list.forEach((date) => {
          let random_number = Math.floor(Math.random() * 100);
          temp_student_list[i].attendnace_data.push({
            date: date,
            present:
              random_number % 2 == 0
                ? "present"
                : random_number % 3 === 0
                ? "not_taken"
                : "absent",
          });
        });
      }

      for (let i = 0; i < temp_student_list.length; i++) {
        let present_attendance = 0;
        let total_attendance = 0;
        temp_student_list[i].attendnace_data.forEach((att) => {
          if (att.present === "present") present_attendance++;
          if (att.present !== "not_taken") total_attendance++;
        });
        temp_student_list[i].attendnace_percentage =
          total_attendance > 0
            ? (present_attendance / total_attendance) * 100
            : 0;
      }

      set_students_data(temp_student_list);
    }
  }, [classroom?.id, dates_list]);

  useEffect(() => {
    let temp = [];
    if (attendance_filter === "Below 50%") {
      temp = students_data.filter((item) => item.attendnace_percentage < 50);
    } else if (attendance_filter === "50% - 75%") {
      temp = students_data.filter(
        (item) =>
          item.attendnace_percentage >= 50 && item.attendnace_percentage < 75
      );
    } else if (attendance_filter === "75% and above") {
      temp = students_data.filter((item) => item.attendnace_percentage >= 75);
    } else {
      temp = [...students_data];
    }
    set_filtered_students_data(temp);
  }, [students_data, attendance_filter]);

  const bread_crumbs = useMemo(() => {
    return {
      Attendance: "/attendance",
    };
  }, []);

  useEffect(() => {
    if (classroom_id) {
      const temp = attendance_classsrooms.find(
        (i) => i.id === classroom_id
      ) as Classroom;
      set_classroom(temp);
    }
  }, [classroom_id]);

  useEffect(() => {
    let dates = generateDatesFromMonth(new Date());
    // Needs the dates only till todays date
    const day = new Date().getDate();
    dates = dates.filter((d) => Number(d.split("/")[0]) <= day);
    set_dates_list(dates);
  }, []);

  const handleChangeTab = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDateHeaderClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    date: string
  ) => {
    set_selected_date(date);
    setAnchorEl(event.currentTarget);
  };

  const handleMarkAllPresent = () => {
    let temp_student_list: StudentAttendance[] = [...students_data];
    for (let i = 0; i < temp_student_list.length; i++) {
      for (let j = 0; j < dates_list.length; j++) {
        if (temp_student_list[i].attendnace_data[j].date === selected_date) {
          temp_student_list[i].attendnace_data[j].present = "present";
          break;
        }
      }
      let present_attendance = 0;
      let total_attendance = 0;
      temp_student_list[i].attendnace_data.forEach((att) => {
        if (att.present === "present") present_attendance++;
        if (att.present !== "not_taken") total_attendance++;
      });
      temp_student_list[i].attendnace_percentage =
        total_attendance > 0
          ? (present_attendance / total_attendance) * 100
          : 0;
    }

    set_students_data(temp_student_list);
    handleMenuClose();
  };

  const handleMarkAllAbsent = () => {
    let temp_student_list: StudentAttendance[] = [...students_data];
    for (let i = 0; i < temp_student_list.length; i++) {
      for (let j = 0; j < dates_list.length; j++) {
        if (temp_student_list[i].attendnace_data[j].date === selected_date) {
          temp_student_list[i].attendnace_data[j].present = "absent";
          break;
        }
      }
      let present_attendance = 0;
      let total_attendance = 0;
      temp_student_list[i].attendnace_data.forEach((att) => {
        if (att.present === "present") present_attendance++;
        if (att.present !== "not_taken") total_attendance++;
      });
      temp_student_list[i].attendnace_percentage =
        total_attendance > 0
          ? (present_attendance / total_attendance) * 100
          : 0;
    }

    set_students_data(temp_student_list);
    handleMenuClose();
  };

  const handleStudentAttendanceChange = (
    student_id: string,
    date: string,
    checked: boolean
  ) => {
    let temp_student_list: StudentAttendance[] = [...students_data];
    for (let i = 0; i < temp_student_list.length; i++) {
      if (temp_student_list[i].id === student_id) {
        for (let j = 0; j < dates_list.length; j++) {
          if (temp_student_list[i].attendnace_data[j].date === date) {
            temp_student_list[i].attendnace_data[j].present = checked
              ? "present"
              : "absent";
            break;
          }
        }
        let present_attendance = 0;
        let total_attendance = 0;
        temp_student_list[i].attendnace_data.forEach((att) => {
          if (att.present === "present") present_attendance++;
          if (att.present !== "not_taken") total_attendance++;
        });
        temp_student_list[i].attendnace_percentage =
          total_attendance > 0
            ? (present_attendance / total_attendance) * 100
            : 0;
        break;
      }
    }

    set_students_data(temp_student_list);
  };

  const getAttendanceColor = (attendance: number) => {
    return attendance >= 75
      ? "#1C8E00"
      : attendance >= 50
      ? "#DD8706"
      : "#CB0000";
  };

  return (
    <div className={classes.root}>
      <Header title="Attendance" bread_crumbs={bread_crumbs} />

      <div className={classes.headerFilterContainer}>
        <div className={classes.headerFilterSubContainer}>
          <SelectInput
            value={classroom_id}
            keys={attendance_classsrooms.map((obj) => obj.name)}
            values={attendance_classsrooms.map((obj) => obj.id)}
            onChange={(e) => set_classroom_id(e.target.value)}
            background="#FAFAFA"
            label="Choose Class"
          />

          <SelectInput
            value={attendance_filter}
            keys={ATTENDANCE_FILTER.map((item) => item)}
            onChange={(e) => set_attendance_filter(e.target.value)}
            background="#FAFAFA"
            label="Attendance %"
          />
        </div>

        <div
          className={classes.headerFilterSubContainer}
          style={{ justifyContent: "flex-end" }}
        >
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              label={
                <Typography variant="BM14" sx={{ fontSize: "16px" }}>
                  Enable Grace Request
                </Typography>
              }
              control={<Switch defaultChecked color="secondary" />}
            />
          </FormGroup>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              height: "40px",
            }}
          >
            Notify Students
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: 0,
              height: "40px",
            }}
          >
            <ShareOutlinedIcon />
            Share
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 0,
              height: "40px",
            }}
          >
            <img
              style={{ height: "1.5rem", marginRight: "0.5rem" }}
              src="/download.svg"
              alt=""
            />
            Export
          </Button>
        </div>
      </div>

      <BasicTabs
        value={value}
        handleChangeTab={handleChangeTab}
        tabLabels={tabLabels}
      />
      <BasicTabPanel value={value} index={1}>
        <div className={classes.attendanceTable}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="BSb14">S.No</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14">USN</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="BSb14">Attendance</Typography>
                </TableCell>

                {dates_list.map((date, index) => {
                  return (
                    <TableCell key={index} sx={{ padding: "0.2rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="BM12">{date}</Typography>
                        <IconButton
                          onClick={(e) => handleDateHeaderClick(e, date)}
                        >
                          <ExpandMoreIcon color="primary" />
                        </IconButton>
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered_students_data
                .sort((a, b) =>
                  a.display_name
                    .toLowerCase()
                    .localeCompare(b.display_name.toLowerCase())
                )
                .map((student, index) => {
                  return (
                    <TableRow key={student.id}>
                      <TableCell>
                        <Typography variant="BR14">{index + 1} </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="BR14">
                          {student.display_name ||
                            student.name ||
                            student.email}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="BR14"
                          sx={{ textTransform: "uppercase" }}
                        >
                          {student.usn}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="BR14"
                          color={getAttendanceColor(
                            student.attendnace_percentage
                          )}
                        >
                          {student.attendnace_percentage.toFixed(1)} %
                        </Typography>
                      </TableCell>
                      {student.attendnace_data.map((att, j) => {
                        return (
                          <TableCell key={j}>
                            <Checkbox
                              checkedIcon={<CheckCircleIcon color="success" />}
                              icon={<CancelIcon color="error" />}
                              indeterminateIcon={<PanoramaFishEyeIcon />}
                              style={{ color: "#050418" }}
                              checked={att.present === "present"}
                              indeterminate={att.present === "not_taken"}
                              onChange={(e) =>
                                handleStudentAttendanceChange(
                                  student.id,
                                  att.date,
                                  e.target.checked
                                )
                              }
                            />{" "}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            classes={{
              paper: classes.menu,
            }}
          >
            <MenuItem onClick={handleMarkAllPresent}>
              <Typography variant="BM14">Mark All Present </Typography>{" "}
            </MenuItem>
            <MenuItem onClick={handleMarkAllAbsent}>
              <Typography variant="BM14">Mark All Absent </Typography>
            </MenuItem>
          </Menu>
        </div>
      </BasicTabPanel>
      <BasicTabPanel value={value} index={2}>
        <div className={classes.graceRequestTable}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="BSb14">S.No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">USN</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">Attendance</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">Class Attended</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">Absence Proof</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="BSb14">Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filtered_students_data
                  .sort((a, b) =>
                    a.display_name
                      .toLowerCase()
                      .localeCompare(b.display_name.toLowerCase())
                  )
                  .filter((item) => item.attendnace_percentage < 50)
                  .slice(0, 5)
                  .map((student, index) => {
                    return (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Typography variant="BR14">{index + 1} </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="BR14">
                            {student.display_name ||
                              student.name ||
                              student.email}{" "}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="BR14"
                            sx={{ textTransform: "uppercase" }}
                          >
                            {student.usn}{" "}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="BR14"
                            color={getAttendanceColor(
                              student.attendnace_percentage
                            )}
                          >
                            {student.attendnace_percentage.toFixed(1)} %
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="BR14">11/50</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="BR14"
                            sx={{
                              color: "#004EFD",
                              textDecoration: "underline",
                            }}
                          >
                            Open
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="BR14">--</Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </BasicTabPanel>
    </div>
  );
}
