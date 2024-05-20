import React from "react";
import useStyles from "./ProjectGrants.styles";
import { Typography } from "@mui/material";
import { events_progress } from "../../../dummy data/events";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { project_grants } from "../../../dummy data/grants";

export default function ProjectGrants() {
  const classes = useStyles();


 const currencyFormatter = (value: number): string => {
    return value.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Total Grant</Typography>
      </div>

      <div className={classes.container}>
        <div className={classes.totalGrant}>
          <div>
            <Typography
              variant="BSb14"
              component="p"
              sx={{mb: 1 }}
            >
              {project_grants.length} teams
            </Typography>
          </div>

          <div>
            <Typography variant="h3" sx={{ fontSize: "24px" }}>
              {currencyFormatter(project_grants.reduce((a, b) => a + Number(b.grant), 0))}
            </Typography>
          </div>
        </div>
        {project_grants.map((item, index) => {
          return (
            <div key={index} className={classes.progressCard}>
              <div>
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{ fontSize: "18px", mb: 1 }}
                >
                  {item.team_name}
                </Typography>
                <Typography variant="BR14" color="#9E9E9E" component="p">
                  {item.project_name}
                </Typography>
              </div>

              <div>
                <Typography variant="h3" sx={{ fontSize: "18px" }}>
                {currencyFormatter(Number(item.grant))}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
