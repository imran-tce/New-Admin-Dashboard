import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { attendance_classsrooms } from "../../../dummy data/attendance";
import { batch_member_details } from "../../../dummy data/batches";
import {
    CourseTempNew
} from "../../../models/devModels";
import Header from "../../../shared/Header/Header";
import SelectInput from "../../../shared/select/SelectInput";
import StudentAssignments from "../../components/batches/batchDetails/studentsAssignments/StudentAssignments";
import { BatchMembersDummy } from "../batches/BatchDetails/BatchDetails";
import useStyles from "./AssignmentsPage.styles";

export default function AssignmentsPage() {
  const classes = useStyles();
  const [classroom_id, set_classroom_id] = useState(
    attendance_classsrooms[0].id
  );
  const [batch_members, set_batch_members] = useState<BatchMembersDummy[]>([]);
  const [course, set_course] = useState<CourseTempNew>({} as CourseTempNew);

  const bread_crumbs = useMemo(() => {
    return {
      Assignments: "#",
    };
  }, []);

  useEffect(() => {
    set_batch_members(
      batch_member_details.filter(
        (obj) => obj.batch_id === "6f4453cf-f216-466f-886e-533512da9eac"
      )
    );
  }, []);

  return (
    <div>
      <Header title="Assignments" bread_crumbs={bread_crumbs} />

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
        </div>

        <div
          className={classes.headerFilterSubContainer}
          style={{ justifyContent: "flex-end" }}
        >
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
          <Button variant="contained" color="primary">
            Edit Assignment Details
          </Button>
        </div>
      </div>

      <div>
        <StudentAssignments
          course={course}
          batch_members={batch_members.slice(0, course?.students_enrolled)}
        />
      </div>
    </div>
  );
}
