import { Avatar, Typography } from "@mui/material";
import { useState } from "react";
import FacultyAchievements from "../../components/home/studentAchievements/FacultyAchievements";
import { ROLES } from "../../../constants/AppConstants";
import { user } from "../../../dummy data/user";
import Broadcasts from "../../../hod/components/broadcasts/Broadcasts";
import SelectInput from "../../../shared/select/SelectInput";
import useStyles from "./Home.styles";
import Calendar from "../../../shared/calendar/Calendar";
import OverallAttendance from "../../components/home/overallAttendance/OverallAttendance";

const GRID_ITEM_1 = ["Academic", "TRL Status"];

export default function Home() {
  const classes = useStyles();
  const [role, set_role] = useState(ROLES[1]);
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
        {/* <SearchBar search_text={"wdwdw"} handleChange={undefined} /> */}
        <div className={classes.headerUserDetails}>
          <SelectInput keys={ROLES} value={role} onChange={handleRoleChange} />
          <Avatar src={user.photo_url} alt="" />
          <Typography variant="BSb14" sx={{ fontSize: "1rem" }}>
            {user.name}
          </Typography>
        </div>
      </div>

      <div>
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <Typography variant="h1">{user.name}</Typography>
        </div>

        <div className={classes.gridContainer}>
          <div className={classes.gridItem1}>grid item</div>
          <div className={classes.gridItem2}>
            <OverallAttendance />
          </div>

          <div className={classes.gridItem3}>
            <Broadcasts />
          </div>

          <div className={classes.gridItem4}>grid item</div>

          <div className={classes.gridItem5}>grid item</div>
          <div className={classes.gridItem6}>
            <Calendar />
          </div>
          <div className={classes.gridItem7}>grid item</div>
          <div className={classes.gridItem8}>
            <FacultyAchievements />
          </div>
          <div className={classes.gridItem9}>grid item</div>
        </div>
      </div>
    </div>
  );
}
