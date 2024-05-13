import { createStyles, makeStyles } from "@mui/styles";
import { alpha, Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      width:"100%",
      margin:0,
      position: "relative",
      borderRadius: "5px",
      backgroundColor: alpha("#FFF", 0.15),
      "&:hover": {
        backgroundColor: alpha("#FFF", 0.25),
      },
      border: "1px solid #d7d7d7",
      display: "flex",
      padding: "0.3rem",
      alignItems: "center",
    },
    searchIcon: {
      padding: "0px 12px",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      width: "100%",
      height: "100%",
    },
    inputInput: {
      padding: "8px 8px 4px 0px !important",
      paddingLeft: "calc(1em + 40px) !important",
      // transition: theme.transitions.create("width"),
      width: "100%",
      height: "inherit",
      "&::placeholder": {
        fontSize: "18px",
        // color: theme.palette.text.primary,
        color:"#6d6d6d"
      },
    },
  })
);

export default useStyles;
