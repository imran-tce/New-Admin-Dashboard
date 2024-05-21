import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    daySubContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      daySubContainer: {
        fontSize: "12px",
        padding: "0.1rem",
      },
    },
  })
);

export default useStyles;
