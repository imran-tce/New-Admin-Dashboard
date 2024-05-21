import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    calendar: {
      gridColumn: "1/2",
      gridRow: "1/2",
      alignSelf: "start",
      marginLeft: 0,
      padding: "2rem 2rem 0.5rem 2rem",
      borderColor: theme.palette.text.secondary,
      "& svg": {
        color: theme.palette.text.primary,
      },
    },
    toggleFullCalendarDisplay: {
      marginTop: 0,
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      calendar: {
        width: "100%",
        margin: "0 auto",
        borderRight: "none",
      },
      toggleFullCalendarDisplay: {
        display: "block",
        marginTop: "0.8rem",
      },
    },
  })
);

export default useStyles;
