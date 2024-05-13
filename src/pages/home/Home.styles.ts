import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2rem 0",
    },
    headerContainer: {
      width: "100%",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: 0,
      maxHeight:"40px"
    },
    searchBar: {
      gridColumn: "1/2",
      alignSelf: "center",
    },
    headerUserDetails: {
      gridColumn: "3/4",
      gap:"0.5rem",
      display: "flex",
      alignItems: "center",
      alignSelf: "center",
      "& .MuiAvatar-root":{
        height:"35px",
        width:"35px",
      }
    },

  })
);

export default useStyles;
