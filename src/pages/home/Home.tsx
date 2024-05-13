import React, { useState } from "react";
import useStyles from "./Home.styles";
import SelectInput from "../../shared/select/SelectInput";
import { ROLES } from "../../constants/AppConstants";
import SearchBar from "../../shared/searchBar/SearchBar";
import { Avatar, Typography } from "@mui/material";
import { user } from "../../dummy data/user";

export default function Home() {
  const classes = useStyles();
  const [role, set_role] = useState(ROLES[0]);

  const handleRoleChange = (e: any) => {
    set_role(e.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer} >
      <SearchBar search_text={"wdwdw"} handleChange={undefined}  />
      <div className={classes.headerUserDetails} >
      <SelectInput
        keys={ROLES}
        value={role}
        autoWidth={false}
        multiple={false}
        native={false}
        onChange={handleRoleChange}
      />
      <Avatar src={user.photo_url} alt="" />
      <Typography>
        {user.name}
      </Typography>
      </div>
      </div>
           
   
    </div>
  );
}
