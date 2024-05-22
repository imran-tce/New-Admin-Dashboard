import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      boxSizing: "border-box",
      width: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiTypography-subtitle2": {
        fontSize: "1.5rem",
        color: theme.palette.primary.main,
      },
      marginBottom:"1rem"
    },
    [theme.breakpoints.down("sm")]: {
      heading: {
        "& .MuiTypography-subtitle2": {
          fontSize: "1.2rem",
        },
        "& img": {
          height: "14px",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      heading: {
        padding: 0,
        height: "40px",
      },
    },
  })
);

export default useStyles;
