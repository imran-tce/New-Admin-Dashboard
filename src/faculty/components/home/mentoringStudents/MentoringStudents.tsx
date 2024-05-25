import React, { useState } from "react";
import useStyles from "./MentoringStudents.styles";
import { Typography, useTheme } from "@mui/material";
import ToggleButtons from "../../../../shared/toggleButtons/ToggleButtons";

const CLASSROOMS = ["CSE A sem 1", "CSE B sem 1", "CSE B sem 4"];

export default function MentoringStudents() {
  const classes = useStyles();
  const theme = useTheme();
  const [classRoom, set_classRoom] = useState(CLASSROOMS[0]);

  const handleClassChange = (
    event: React.MouseEvent<HTMLElement>,
    new_value: string
  ) => {
    set_classRoom(new_value);
  };

  return (
    <div className={classes.root}>
      <Typography variant="BM20">Mentoring Students</Typography>

      <div style={{textAlign:"right",margin:"1rem 0"}} >
        <ToggleButtons
          value={classRoom}
          button_contents={CLASSROOMS}
          handleButtonToggle={handleClassChange}
          background_color={theme.palette.primary.main}
          color="#FFF"
        />
      </div>

      
    </div>
  );
}
