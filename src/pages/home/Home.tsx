import React, { useState } from "react";
import useStyles from "./Home.styles";
import SelectInput from "../../shared/select/SelectInput";
import { ROLES } from "../../constants/AppConstants";
import SearchBar from "../../shared/searchBar/SearchBar";
import { Avatar, Typography } from "@mui/material";
import { user } from "../../dummy data/user";
import Text from "../../shared/texts/Text";

export default function Home() {
  const classes = useStyles();
  const [role, set_role] = useState(ROLES[0]);

  const handleRoleChange = (e: any) => {
    set_role(e.target.value);
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
          <SelectInput
            keys={ROLES}
            value={role}
            autoWidth={false}
            multiple={false}
            native={false}
            onChange={handleRoleChange}
          />
          <Avatar src={user.photo_url} alt="" />
          <Text variant="body6">{user.name}</Text>
        </div>
      </div>

      <div>
        <Text variant="h2">{user.name}</Text>
        <Text variant="body3" color="#626A79">
          {formatDate(new Date())} | {user.department}{" "}
        </Text>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem1}>Item 1</div>
          <div className={classes.gridItem2}>Item 2</div>

          <div className={classes.gridItem3}>Item 3</div>

          <div className={classes.gridItem4}>Item 4</div>

          <div className={classes.gridItem5}>Item 5</div>
          <div className={classes.gridItem6}>Item 6</div>
          <div className={classes.gridItem7}>Item 7</div>
          <div className={classes.gridItem8}>Item 8</div>
          <div className={classes.gridItem9}>Item 9</div>
          <div className={classes.gridItem10}>Item 10</div>


        </div>
      </div>
    </div>
  );
}
