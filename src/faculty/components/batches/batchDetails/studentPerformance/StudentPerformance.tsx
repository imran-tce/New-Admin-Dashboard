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
import { batch_member_details } from "../../../../../dummy data/batches";
import { CourseTempNew } from "../../../../../models/devModels";
import SelectInput from "../../../../../shared/select/SelectInput";
import useStyles from "./StudentPerformance.styles";

export interface BatchMembersDummy {
  batch_id: string;
  user_id: string;
  email: string;
  name: string;
  display_name: string;
  usn: string;
  attendance: number;
  average_internal: number;
  average_assignment: number;
}

const ELIGIBILITY_LIST = ["Eligibility", "Eligible", "Not ELigible"];

interface Props {
  course: CourseTempNew;
}

export default function StudentPerformance({ course }: Props) {
  const classes = useStyles();
  const { batchId }: any = useParams();
  const [batch_members, set_batch_members] = useState<BatchMembersDummy[]>([]);
  const [filtered_members, set_filtered_members] = useState<
    BatchMembersDummy[]
  >([]);
  const [share_list, set_share_list] = useState(false);
  const [share_success, set_share_success] = useState(false);
  const [examiner, set_examiner] = useState("");

  const [eligibility, set_eligibility] = useState(ELIGIBILITY_LIST[0]);

  const handleChangeEligibility = (e: any) => {
    set_eligibility(e.target.value);
  };

  useEffect(() => {
    let members_list = [...batch_members];

    if (eligibility === "Eligible") {
      set_filtered_members(() =>
        members_list.filter((item) => item.attendance > 50)
      );
    } else if (eligibility === "Not ELigible") {
      set_filtered_members(() =>
        members_list.filter((item) => item.attendance <= 50)
      );
    } else {
      set_filtered_members(members_list);
    }
  }, [eligibility]);

  useEffect(() => {
    if (batchId) {
      const members = batch_member_details.filter((b) => b.batch_id == batchId);
      if (members?.length > 0) {
        set_batch_members(members);
        set_filtered_members(members);
      }
    }
  }, [batchId]);

  const getAttendanceStyle = (attendance: number) => {
    return attendance >= 75
      ? "#1C8E00"
      : attendance > 50
      ? "#DD8706"
      : "#CB0000";
  };

  const handleConfirmListShare = () => {
    set_share_list(false);
    set_share_success(true);
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
                  USN
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Attendance
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  CIE 1
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  CIE 2
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  CIE 3
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  A1
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  A2
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  A3
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="center" variant="subtitle2">
                  Grace request
                </Typography>
              </TableCell>
              <TableCell>
                <SelectInput
                  value={eligibility}
                  keys={ELIGIBILITY_LIST}
                  onChange={handleChangeEligibility}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered_members
              .slice(0, course?.students_enrolled)
              .sort((a, b) => b.attendance - a.attendance)
              .map((member, index) => {
                const attendance_color = getAttendanceStyle(member.attendance);
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
                      <Typography variant="BR14">{member.usn}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14" color={attendance_color}>
                        {member.attendance.toFixed(1)} %
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {member.average_internal}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {member.average_assignment}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {member.average_assignment}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {Math.floor(Math.random() * 10)}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {Math.floor(Math.random() * 10)}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">
                        {Math.floor(Math.random() * 10)}/10
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="BR14">-</Typography>
                    </TableCell>
                    <TableCell
                      align="justify"
                      className={
                        member.attendance > 50
                          ? classes.eligible
                          : classes.notEligible
                      }
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="BR14">
                          {member.attendance > 50 ? "Eligible" : "Not Eligible"}
                        </Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>

      <Dialog
        fullWidth
        open={share_list}
        onClose={() => set_share_list(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ pt: 3 }} id="responsive-dialog-title">
          <div>
            <Typography variant="h4" color="#000">
              Notify Examination Office{" "}
            </Typography>
            <Typography variant="caption">
              Sending the list of eligible students to the examiner{" "}
            </Typography>
          </div>

          <IconButton
            aria-label="close"
            onClick={() => set_share_list(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <HighlightOffOutlinedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <SelectInput
              keys={["Preetham Kulal", "Sharat Nayak"]}
              value={examiner}
              onChange={(e) => set_examiner(e.target.value)}
              label="Please select the examiner"
              min_width={400}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 3, pr: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={() => set_share_list(false)}
          >
            Cencel
          </Button>
          <Button
            variant="contained"
            color="primary"
            autoFocus
            onClick={() => handleConfirmListShare()}
          >
            Confirm & Send
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={share_success}
        onClose={() => set_share_success(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          sx={{
            pt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="responsive-dialog-title"
        >
          <IconButton aria-label="close">
            <CheckIcon color="success" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "center" }}>
            <Typography variant="BM20" color="black" align="center">
              Eligibility List sent to Examination Office.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pb: 5,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            autoFocus
            onClick={() => set_share_success(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
