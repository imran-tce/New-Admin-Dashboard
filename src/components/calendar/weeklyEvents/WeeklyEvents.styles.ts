import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: "1 1 0",
    },
    dayContainer: {
      width: "100%",
      height: "100%",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(11,1fr)",
      margin: 0,
      borderBottom: "1px solid #d7d7d7",
      borderLeft: "1px solid #cccccc",
      cursor: "pointer",
      "& h5": {
        gridColumn: "1/2",
        boxSizing: "border-box",
        fontSize: "1rem",
        fontWeight: 300,
        textTransform: "capitalize",
        margin: 0,

        paddingLeft: "1rem",
      },
      "& h4": {
        gridColumn: "2/3",
        fontSize: "2.25rem",
        textTransform: "capitalize",
        margin: 0,
      },
    },
    eventsContainer: {
      gridColumn: "3/11",
      display: "flex",
      alignItems: "flex-start",
      overflowX: "hidden",
      overflowY: "hidden",
      scrollBehavior: "smooth",
      justifyContent: "space-between",
      textAlign: "left",
      "& h6": {
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: "1.1rem",
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
      "& a": {
        color: "#3366cc",
        fontSize: "1rem",
        textDecoration: "underline",
        fontStyle: "italic",
      },
      "& p": {
        color: "#000",
        fontSize: "14px",
        fontWeight: 400,
        margin: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
    scrollButtonContainer: {
      gridColumn: "11/12",
      justifySelf: "end",
      alignSelf: "center",
    },
    [theme.breakpoints.down("sm")]: {
      dayContainer: {
        borderLeft: "none",
        "& h5": {
          fontSize: "12px",
        },
        "& h4": {
          fontSize: "14px",
        },
      },
      eventsContainer: {
        gridColumn: "3/11",
        "& h6": {
          fontSize: "10px",
        },
        "& a": {
          fontSize: "10px",
          wordWrap: "break-word",
        },
        "& p": {
          fontSize: "8px",
        },
      },
      scrollButtonContainer: {
        display: "none",
      },
    },
  })
);

export default useStyles;
