import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    day: {
      boxSizing: "border-box",
      position: "relative",
      "&:hover": {
        cursor: "pointer",
      },
    },
    dayContainer: {
      boxSizing: "border-box",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      margin: "0.1rem 0.2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    eventPresentDay: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      marginTop: 0,
    },

    [theme.breakpoints.down("sm")]: {
      day: {
        padding: 0,
      },
      dayContainer: {
        boxSizing: "border-box",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        margin: "0.1rem 0.1rem",
      },
      dayContainerWeeklyView: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        width: "34px",
        height: "34px",
        borderRadius: "0 0 100% 100%",
        margin: "0rem 0.2rem",
      },
      eventPresentDay: {
        marginTop: 0,
      },
      eventPresentDayWeeklyView: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        marginTop: "0.5rem",
      },
    },
    [theme.breakpoints.down("xs")]: {
      day: {
        padding: "0.25rem",
      },
    },
  })
);

export default useStyles;
