import React, { useEffect, useMemo, useState } from "react";
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
import { attendance_classsrooms } from "../../../dummy data/attendance";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SelectInput from "../../../shared/select/SelectInput";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import useStyles from "./StudentAttendanceList.styles";
import { Classroom, StudentAttendance } from "../../../models/devModels";
import { BatchMembersDummy } from "../batches/batchDetails/studentPerformance/StudentPerformance";

const ATTENDANCE_FILTER = [
  "All Students",
  "Below 50%",
  "50% - 75%",
  "75% and above",
];

interface Props {
  batch_members: BatchMembersDummy[];
}

export default function StudentAttendanceList({ batch_members }: Props) {
  const classes = useStyles();

  const [dates_list, set_dates_list] = useState<string[]>([]);
  const [students_data, set_students_data] = useState<StudentAttendance[]>([]);
  const [filtered_students_data, set_filtered_students_data] = useState<
    StudentAttendance[]
  >([]);
  const [attendance_filter, set_attendance_filter] = useState(
    ATTENDANCE_FILTER[0]
  );

  // randomly assigning attendance to the students_data
  useEffect(() => {
    let temp_student_list: StudentAttendance[] = [];

    batch_members.forEach((st) => {
      temp_student_list.push({
        ...st,
        attendnace_data: [],
        attendnace_percentage: 0,
      } as unknown as StudentAttendance);
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
  }, [dates_list, batch_members]);

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
    let dates = generateDatesFromMonth(new Date());
    // Needs the dates only till todays date
    const day = new Date().getDate();
    dates = dates.filter((d) => Number(d.split("/")[0]) <= day);
    set_dates_list(dates);
  }, []);

  const getAttendanceColor = (attendance: number) => {
    return attendance >= 75
      ? "#1C8E00"
      : attendance >= 50
      ? "#DD8706"
      : "#CB0000";
  };

  return (
    <div>
      <div className={classes.headerFilterContainer}>
        <SelectInput
          value={attendance_filter}
          keys={ATTENDANCE_FILTER.map((item) => item)}
          onChange={(e) => set_attendance_filter(e.target.value)}
          background="#FAFAFA"
          label="Attendance %"
        />

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
                        {student.display_name || student.name || student.email}{" "}
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
                          />{" "}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
