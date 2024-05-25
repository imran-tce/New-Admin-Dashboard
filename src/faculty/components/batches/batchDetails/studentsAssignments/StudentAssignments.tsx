import React, { useEffect, useState } from "react";

import { GridCloseIcon } from "@material-ui/data-grid";
import {
  AppBar,
  Dialog,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { attached_documents } from "../../../../../dummy data/attached-documents";
import { CourseTempNew } from "../../../../../models/devModels";
import { AttachedDocuments } from "../../../../../shared/fileManager/AttachedDocuments";
import GenericRubricEvaluations from "../../../../../shared/rubrics/GenericRubricEvaluations";
import { BatchMembersDummy } from "../studentPerformance/StudentPerformance";
import useStyles from "./StudentAssignments.styles";

interface Props {
  course: CourseTempNew;
  batch_members: BatchMembersDummy[];
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StudentAssignments({ course, batch_members }: Props) {
  const classes = useStyles();
  const [filtered_members, set_filtered_members] = useState<
    BatchMembersDummy[]
  >([]);
  const [open, set_open] = useState(false);

  useEffect(() => {
    set_filtered_members([...batch_members]);
  }, [batch_members]);

  const handleClose = () => {
    set_open(false);
  };

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
                    <TableCell onClick={() => set_open(true)}>
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
                    <TableCell onClick={() => set_open(true)}>
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
                    <TableCell onClick={() => set_open(true)}>
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

      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={handleClose}
            >
              <GridCloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <div style={{ padding: "1rem 1rem 3rem 1rem" }}>
          <Typography variant="h4" color="black">
            Attached Documents
          </Typography>
          <AttachedDocuments uploadedDocuments={attached_documents} />
          <Typography variant="h4" color="black">
            Evaluation Rubric
          </Typography>
          <GenericRubricEvaluations callback={handleClose} />
        </div>
      </Dialog>
    </div>
  );
}
