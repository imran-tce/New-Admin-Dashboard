import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      height: "525px",
      overflow: "hidden",
      padding: "1rem",
    },
    headerContainer: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      gap: "1rem",
    },
    progressCard: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      borderRadius: "10px",
      background: "#F0F0F0",
      height: "80px",
    },
    progressBarContainer: {
      flex: 0.8,
      width: "100%",
      "& .MuiLinearProgress-bar": {
        color: "red",
        background: `linear-gradient(90deg, #8061db, #c3b3f5)`,
        // transition: `width 0.3s ease-in-out`
      },
    },
  })
);

export default useStyles;
