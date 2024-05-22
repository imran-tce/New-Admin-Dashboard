import React, { useState } from "react";
import useStyles from "./Home.styles";
import SelectInput from "../../shared/select/SelectInput";
import { ROLES } from "../../constants/AppConstants";
import SearchBar from "../../shared/searchBar/SearchBar";
import { Avatar, Typography } from "@mui/material";
import { user } from "../../dummy data/user";
import Text from "../../shared/texts/Text";
import TrlStatus from "../../components/home/TrlStatus";
import AcademicStatus from "../../components/home/AcademicStatus";
import EventsProgress from "../../components/home/eventsProgress/EventsProgress";
import ProjectGrants from "../../components/home/projectGrants/ProjectGrants";
import StudentSkills from "../../components/home/studentSkills/StudentSkills";
import CourseAttainment from "../../components/home/courseAttainment/CourseAttainment";
import StudentActivities from "../../components/home/studentActivities/StudentActivities";
import FacultyRatings from "../../components/home/facultyRatings/FacultyRatings";
import StudentAchievements from "../../components/home/studentAchievements/StudentAchievements";
import Calendar from "../calendar/Calendar";
import Broadcasts from "../../components/broadcasts/Broadcasts";

const GRID_ITEM_1 = ["Academic", "TRL Status"];

export default function Home() {
  const classes = useStyles();
  const [role, set_role] = useState(ROLES[0]);
  const [grid_1_selection, set_grid_1_selection] = useState(GRID_ITEM_1[0]);

  const handleRoleChange = (e: any) => {
    set_role(e.target.value);
  };

  const handleChangeGrid1 = (e: any) => {
    set_grid_1_selection(e.target.value);
  };

  function formatDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatter.format(date);
  }

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <SearchBar search_text={"wdwdw"} handleChange={undefined} />
        <div className={classes.headerUserDetails}>
          <SelectInput keys={ROLES} value={role} onChange={handleRoleChange} />
          <Avatar src={user.photo_url} alt="" />
          <Text variant="body6">{user.name}</Text>
        </div>
      </div>

      <div>
        <h2>{user.name}</h2>
        <Text variant="body3" color="#626A79">
          {formatDate(new Date())} | {user.department}{" "}
        </Text>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem1}>
            <div style={{ position: "absolute", left: 5, top: 5 }}>
              <SelectInput
                keys={GRID_ITEM_1}
                value={grid_1_selection}
                onChange={handleChangeGrid1}
              />
            </div>
            <div style={{ width: "100%", height: "350px" }}>
              {grid_1_selection === "Academic" ? (
                <AcademicStatus />
              ) : (
                <TrlStatus />
              )}
            </div>
          </div>
          <div className={classes.gridItem2}>
            <Broadcasts />
          </div>

          <div className={classes.gridItem3}>
            <EventsProgress />
          </div>

          <div className={classes.gridItem4}>
            <ProjectGrants />
          </div>

          <div className={classes.gridItem5}>
            <StudentAchievements />
          </div>
          <div className={classes.gridItem6}>
            <CourseAttainment />
          </div>
          <div className={classes.gridItem7}>
            <StudentSkills />
          </div>
          <div className={classes.gridItem8}>
            <Calendar />
          </div>
          <div className={classes.gridItem9}>
            <FacultyRatings />
          </div>
          <div className={classes.gridItem10}>
            <StudentActivities />
          </div>
        </div>
      </div>
    </div>
  );
}
