import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    event: {
      width: "100%",
      background: "#FFF",
      display:"flex",
      flexDirection:"column",
      gap:"0.4rem",
      marginBottom:"1rem",
      padding:"1rem 0.5rem",
   
    },
    eventTimeRow: {
      display: "flex",
      alignItems: "center",
    },
    eventLocationRow: {
      display: "flex",
      alignItems: "center",
      margin: "1rem 0 0.6rem 0",
    },
    eventHeading: {
      width: "100%",
      marginBottom: "1rem",
      fontSize: "16px",
      fontWeight: 700,
      color: "#1A0F27",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      event: {
        padding: "1rem",
        "& .MuiTypography-body1": {
          fontSize: "1rem",
          lineHeight: "1.5rem",
        },
      },
      eventHeading: {
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        justifyContent: "space-between",
        "& .MuiTypography-h4": {
          width: "100%",
          fontSize: "1rem",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      event: {
        "& .MuiTypography-body1": {
          fontSize: "12px",
          lineHeight: "1.3rem",
        },
      },
      eventHeading: {
        "& .MuiTypography-h4": {
          fontSize: "1rem",
        },
      },
    },
  })
);

export default useStyles;
