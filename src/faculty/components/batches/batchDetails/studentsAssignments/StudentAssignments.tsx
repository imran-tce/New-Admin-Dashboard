import { useEffect, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { CourseTempNew } from "../../../../../models/devModels";
import SelectInput from "../../../../../shared/select/SelectInput";
import useStyles from "./StudentAssignments.styles";
import { BatchMembersDummy } from "../studentPerformance/StudentPerformance";

interface Props {
  course: CourseTempNew;
  batch_members: BatchMembersDummy[];
}

export default function StudentAssignments({ course, batch_members }: Props) {
  const classes = useStyles();
  const [filtered_members, set_filtered_members] = useState<
    BatchMembersDummy[]
  >([]);

  useEffect(() => {
    set_filtered_members([...batch_members]);
  }, [batch_members]);

  return (
    <div className={classes.root}>
      <div className={classes.table}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  S.NO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  USN
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Assignment 1
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Marks for A1
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Assignment 2
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Marks for A2
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Assignment 3
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Marks for A3
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered_members
              .slice(0, course?.students_enrolled)
              .sort((a, b) => b.attendance - a.attendance)
              .map((member, index) => {
                return (
                  <TableRow
                    sx={{
                      background: member.attendance <= 50 ? "#FFE8E8" : "#FFF",
                    }}
                    key={index}
                  >
                    <TableCell>
                      <Typography variant="BR14">{index + 1}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {member.display_name || member.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">{member.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">{member.usn}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="BM14"
                        color="#004EFD"
                        className={classes.view}
                      >
                        View
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                      {Math.floor(Math.random() * 10)}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="BR14"
                        color="#004EFD"
                        className={classes.view}
                      >
                        View
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {member.average_assignment}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="BR14"
                        color="#004EFD"
                        className={classes.view}
                      >
                        View
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {Math.floor(Math.random() * 10)}/10
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
