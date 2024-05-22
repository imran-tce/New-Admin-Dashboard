import React from "react";
import useStyles from "./StudentAchievements.styles";
import { Avatar, Typography } from "@mui/material";
import SelectInput from "../../../../shared/select/SelectInput";

export default function StudentAchievements() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="BM20">Student Achievements</Typography>
      <div style={{ margin: "2rem 0" }}>
        <SelectInput
          value="All Level"
          keys={["All Level"]}
          onChange={() => {}}
          min_width={"100%"}
        />
      </div>

      <div className={classes.container}>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_cup.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Sidharth shenoy </span> Won 3rd
            Place in Blockchain Technology at google on 2nd Apr'24.
          </Typography>
        </p>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_flag.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Anjali and other 3 </span> Won 3rd
            participated in Relay Compeition held at Mangala stadium on 15Apr'24.
          </Typography>
        </p>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_cup.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Sidharth shenoy </span> Won 3rd
            Place in Blockchain Technology at google on 2nd Apr'24.
          </Typography>
        </p>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_flag.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Anjali and other 3 </span> Won 3rd
            participated in Relay Compeition held at Mangala stadium on 15Apr'24.
          </Typography>
        </p>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_cup.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Sidharth shenoy </span> Won 3rd
            Place in Blockchain Technology at google on 2nd Apr'24.
          </Typography>
        </p>
        <p className={classes.achievement}>
          <Avatar
            src="/studentAchievements/achievement_flag.svg"
            alt=""
            variant="square"
          />
          <Typography variant="BR14">
            <span style={{ color: "#182AD2" }}>Anjali and other 3 </span> Won 3rd
            participated in Relay Compeition held at Mangala stadium on 15Apr'24.
          </Typography>
        </p>
      </div>
    </div>
  );
}
