import React from "react";
import useStyles from "./EventsProgress.styles";
import { Typography } from "@mui/material";
import { events_progress } from "../../../dummy data/events";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function EventsProgress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Event Progress</Typography>
        <Typography variant="BM12">Attendance in %</Typography>
      </div>

      <div className={classes.container}>
        {events_progress.map((event) => {
          return (
            <div key={event.id} className={classes.progressCard}>
              <div>
                <Typography variant="BSb14" color="#FFF" component="p">
                  {event.title}
                </Typography>
                <Typography variant="BR14" color="#9E9E9E" component="p">
                  {event.registrations} Registered
                </Typography>
              </div>

              <div>
                <CircularProgressbar
                  value={event.attendance}
                  text={`${event.attendance}%`}
                  className={classes.progressBar}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation:0,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                
                    // Text size
                    textSize: '16px',
                
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: `#FDC20F`,
                    textColor: '#FDC20F',
                    trailColor: '#FFF',
                  })}
                  
                />
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
