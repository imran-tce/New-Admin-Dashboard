import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      width: "100%",
      height: "80vh",
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      overflow: "hidden",
    },
    navigationBar: {
      gridColumn: "1/2",
      background: "#373646",
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
      padding: "2rem 1rem 0 1rem",
      height: "100%",
      overflow: "auto",
    },
    navigationCard: {
      "& .MuiTypography-root": {
        color: "#FFF",
      },
    },
    unitContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.5rem",
      padding: "0.3rem",
      borderRadius: "3px",
      cursor: "pointer",
    },
    unit: {
      border: "1px solid #FFF",
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      borderRadius: "50%",
    },
    courseDetails: {
      padding: "2rem 3rem 2rem 2rem",
      height: "100%",
      overflow: "auto",
    },
    unitTitle: {
      background: "#FFEDB7",
      width: "fit-content",
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      padding: "0.3rem 1rem",
      margin: "2rem 0",
      borderRadius: "7px",
    },
    uitTitle1: {
      border: "1px solid #000",
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem",
      borderRadius: "50%",
    },
  })
);

export default useStyles;
