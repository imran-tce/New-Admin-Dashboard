import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    eventContainer: {
      width: "100%",
      boxSizing: "border-box",
      paddingBottom: "2rem",
      padding: "0 1rem",
      height:"100%",
      overflow:"hidden"
    },
    root: {
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      "& .MuiTypography-h4": {
        fontSize: "1.5rem",
      },
    },
    eventsCardContainer: {
      width: "100%",
      height: "100%",
      overflow:"auto",

    },
    date: {
      width: "100%",
      textAlign: "left",
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "2rem",
      color: theme.palette.primary.main,
      margin: "0.5rem 0",
    },
    noEvent: {
      boxSizing: "border-box",
      width: "100%",
      padding: 0,
      borderRadius: "3px",
      color: "#bbbbbb",
      fontWeight: 600,
      textAlign: "center",
      fontSize: "18px",
      marginTop: "-1rem",
      "& img": {
        width: "60%",
        height: "60%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      root: {
        "& .MuiTypography-h4": {
          fontSize: "1rem",
        },
      },
      eventContainer: {
        width: "100%",
        minHeight: "100%",
        margin: "1rem auto",
        paddingBottom: "1rem",
      },
      date: {
        fontSize: "1.2rem",
      },
      noEvent: {
        marginTop: 0,
        paddingTop: "1rem",
        "& img": {
          width: "50%",
        },
      },
    },
  })
);

export default useStyles;
