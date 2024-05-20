import React from "react";
import useStyles from "./StudentSkills.styles";
import { LinearProgress, Typography } from "@mui/material";
import { student_skills } from "../../../dummy data/student-skills";

export default function StudentSkills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Student Skill credential </Typography>
      </div>
      <div className={classes.container}>
        {student_skills.map((item, index) => {
          return (
            <div className={classes.progressCard} key={index}>
              <Typography variant="BM14" sx={{ flex: 0.2, mt:1 }}>
                {item.skill}
              </Typography>
              <div className={classes.progressBarContainer}>
                <LinearProgress
                  color="secondary"
                  sx={{
                    minHeight: "2rem",
                    maxHeight: "2rem",
                    background: "#F6F4FE",
                    backgroundImage: `repeating-linear-gradient(
                        0deg, 
                        #ded8f0, 
                        #ded8f0 1px, 
                        transparent 1px, 
                        transparent 5px
                      )`,
                    borderRadius: "5px",
                  }}
                  value={item.value}
                  variant="determinate"
                />
                <Typography variant="caption" sx={{ float: "right", mt: 1 }}>
                  {item.value}/100
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
