import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      margin: 0,
      padding: 0,
    },
    header: {
      padding: "1rem 0",
      "& h2": {
        margin: "1.5rem 0",
      },
    },
    container: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap",
      paddingTop:"1rem"
    },
    facultyCard: {
      boxSizing: "border-box",
      margin: 0,
      padding: "1rem",
      background: "#F0F0F0",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      borderRadius: "10px",
      width: "375px",
      height: "96px",
      cursor: "pointer",

      "& .MuiAvatar-root": {
        width: "70px",
        height: "70px",
      },
    },
    facultyDetails: {
      textAlign: "left",
      "& h4": {
        margin: "0.5rem 0",
      },
      "& p": {
        margin: 0,
      },
    },
  })
);

export default useStyles;
