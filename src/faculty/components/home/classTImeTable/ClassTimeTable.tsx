import React, { useState } from "react";
import useStyles from "./ClassTimeTable.styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BasicTabPanel, BasicTabs } from "../../../../shared/tabs/BasicTabs";
import { class_time_table } from "../../../../dummy data/class-time-table";

const DAYS_LIST = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ClassTimeTable() {
  const classes = useStyles();
  const [value, set_value] = useState(1);

  const handleTabChange = (e: any, new_value: number) => {
    set_value(new_value);
  };

  const convertTimeTo24HourFormat = (time: string) => {
    const [hours, minutes, period] = time
      .match(/(\d+):(\d+)\s(AM|PM)/)
      ?.slice(1)!;
    let hour = parseInt(hours, 10);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    return hour * 60 + parseInt(minutes, 10); // Return total minutes
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Overall Class Attendance</Typography>
      </div>
      <BasicTabs
        value={value}
        tabLabels={DAYS_LIST}
        handleChangeTab={handleTabChange}
      />

      {DAYS_LIST.map((day, index) => {
        return (
          <BasicTabPanel value={value} index={index + 1}>
            <div className={classes.table} >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="BM14" color="#2A4C72">
                        Subject
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BM14" color="#2A4C72">
                        Class
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BM14" color="#2A4C72">
                        Timings
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {class_time_table
                    .filter((item) => item.day === day)
                    .sort(
                      (a, b) =>
                        convertTimeTo24HourFormat(a.start_time) -
                        convertTimeTo24HourFormat(b.start_time)
                    )
                    .map((item) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Typography variant="BR14" color="#50545B">
                              {item.subject}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="BR14" color="#50545B">
                              {item.class}-{item.section} Sem {item.semester}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="BR14" color="#50545B">
                              {item.start_time} - {item.end_time}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
          </BasicTabPanel>
        );
      })}
    </div>
  );
}
