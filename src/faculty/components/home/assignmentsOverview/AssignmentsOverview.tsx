import React from "react";
import useStyles from "./AssignmentsOverview.styles";
import { Avatar, Typography } from "@mui/material";
import SelectInput from "../../../../shared/select/SelectInput";

export default function AssignmentsOverview() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="BM20">Overview Assignments</Typography>
  
    </div>
  );
}
