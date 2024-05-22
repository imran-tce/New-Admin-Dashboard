import React from "react";
import useStyles from "./FacultyRatings.styles";
import { Avatar, IconButton, Rating, Typography } from "@mui/material";
import { faculty_ratings } from "../../../../dummy data/faculty-ratings";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";

export default function FacultyRatings() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <Typography variant="BM20">Faculty Ratings & Feedbacks</Typography>
      </div>

      <div className={classes.container}>
        {faculty_ratings.slice(0, 4).map((faculty, index) => {
          return (
            <div key={index} className={classes.ratingCard}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Avatar src="" alt="" />
                <div>
                  <Typography
                    variant="BM14"
                    color="#313439"
                    component="p"
                    sx={{ mb: 0.2 }}
                  >
                    {faculty.name}
                  </Typography>
                  <Typography
                    variant="BR12"
                    sx={{ fontSize: "10px" }}
                    color="#9E9E9E"
                    component="p"
                  >
                    {faculty.subject}
                  </Typography>
                  <Typography
                    variant="BR12"
                    sx={{ fontSize: "10px" }}
                    component="p"
                  >
                    <Rating
                      max={1}
                      name="read-only"
                      size="small"
                      value={1}
                      readOnly
                    />{" "}
                    {faculty.rating}/5
                  </Typography>
                </div>
              </div>

              <IconButton
                onClick={() => navigate(`/faculty-ratings/${faculty.id}`)}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          );
        })}
      </div>

      {faculty_ratings.length > 4 && (
        <div
          style={{
            width: "100%",
            textAlign: "right",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/faculty-ratings`)}
        >
          <Typography variant="BM14" color="#000">
            View All
          </Typography>
        </div>
      )}
    </div>
  );
}
