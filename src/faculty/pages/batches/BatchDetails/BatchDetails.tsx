import { Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { batch_member_details } from "../../../../dummy data/batches";
import { engineering_courses } from "../../../../dummy data/engineering_courses";
import { CourseTempNew } from "../../../../models/devModels";
import Header from "../../../../shared/Header/Header";
import { BasicTabPanel, BasicTabs } from "../../../../shared/tabs/BasicTabs";
import StudentPerformance from "../../../components/batches/batchDetails/studentPerformance/StudentPerformance";
import StudentAssignments from "../../../components/batches/batchDetails/studentsAssignments/StudentAssignments";
import useStyles from "./BatchDetails.styles";
import AttendancePage from "../../attendance/AttendancePage";
import StudentAttendanceList from "../../../components/attendance/StudentAttendanceList";
import CourseOverview from "../../../components/batches/courseOverview/CourseOverview";

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

const TAB_LABELS = [
  "Students Performance",
  "Assignments",
  "Attendance",
  "Subject Overview",
];

export default function BatchDetails() {
  const classes = useStyles();
  const [value, set_value] = useState(1);
  const { batchId, courseId }: any = useParams();
  const [course, set_course] = useState<CourseTempNew>({} as CourseTempNew);
  const [batch_members, set_batch_members] = useState<BatchMembersDummy[]>([]);

  useEffect(() => {
    set_batch_members(
      batch_member_details.filter((obj) => obj.batch_id === batchId)
    );
  }, [batchId]);

  useEffect(() => {
    set_course(
      engineering_courses?.find((item) => item.id === courseId) as CourseTempNew
    );
  }, [courseId]);

  const bread_crumbs = useMemo(() => {
    return {
      "My Batches": "/batches",
      [`Batch_cse0${course.semester}_2024`]: "#",
    };
  }, [course]);

  const handleChangeTab = (e: any, new_value: number) => {
    set_value(new_value);
  };

  return (
    <div className={classes.root}>
      <Header title={course?.title} bread_crumbs={bread_crumbs} />

      <BasicTabs
        value={value}
        tabLabels={TAB_LABELS}
        handleChangeTab={handleChangeTab}
      />

      <Typography variant="BM20" color="secondary" sx={{ mt: 2 }}>
        Total Students Registered : {course?.students_enrolled}
      </Typography>

      <BasicTabPanel value={value} index={1}>
        <StudentPerformance
          course={course}
          batch_members={batch_members.slice(0, course?.students_enrolled)}
        />
      </BasicTabPanel>

      <BasicTabPanel value={value} index={2}>
        <StudentAssignments
          course={course}
          batch_members={batch_members.slice(0, course?.students_enrolled)}
        />
      </BasicTabPanel>

      <BasicTabPanel value={value} index={3}>
        <StudentAttendanceList
          batch_members={batch_members.slice(0, course?.students_enrolled)}
        />
      </BasicTabPanel>

      <BasicTabPanel value={value} index={4}>
        <CourseOverview course={course} />
      </BasicTabPanel>
    </div>
  );
}
