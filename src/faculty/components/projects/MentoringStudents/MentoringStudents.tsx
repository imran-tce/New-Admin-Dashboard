import React from "react";
import { students_list } from "../../../../dummy data/students";
import { Avatar } from "@mui/material";
import Text from "../../../../shared/texts/Text";
import useStyles from "./MentoringStudents.styles";

export default function MentoringStudents() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {students_list.map((student) => {
          return (
            <div key={student.id} className={classes.studentCard}>
              <Avatar variant="circular" src={student?.photo_url} alt="" />
              <div className={classes.studentDetails}>
                <h5>{student.user_meta?.display_name || student?.name} </h5>
                <Text variant="body4" color="#797979">
                  {student.user_meta?.branch}{" "}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
