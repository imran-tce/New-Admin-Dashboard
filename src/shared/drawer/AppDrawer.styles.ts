import { makeStyles , Theme } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    height: "100%",
    flexShrink: 1,
  },
  drawerOpen: {
    background: theme.palette.primary.main,
    color: "#FBFBFB",
    width: drawerWidth,
    height: "100%",
    transition: "all 0.5s ease-in-out",
    zIndex: 20,
    overflow: "hidden",
  },
  drawerClose: {
    background: theme.palette.primary.main,
    color: "#FBFBFB",
    position: "fixed",
    transition: "all 0.5s ease-in-out",
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    height: "100%",
    zIndex: 20,
  },
  drawerAlign: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "0.5rem",
    alignItems: "center",
  },
  backdrop: {
    width: "100hw",
    height: "100vh",
    position: "fixed",
    top: 0,
    // background: "rgba(0, 0, 0 ,0.8)",
    zIndex: 16,
    transition: "all 1s",
  },
  desktop: {
    display: "black",
  },
  mobile: {
    display: "none",
  },
  listItem: {
    "&.MuiAvatar-colorDefault": {
      backgroundColor: theme.palette.primary.main,
    },
    "& > div": {
      backgroundColor: theme.palette.primary.main,
    },
    "& svg": {
      fill: "none",
      stroke: "#fff",
    },
    "&:hover": {
      "& div": {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
      },
      "& svg": {
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
      },
    },
  },
  linkStyle: {
    textDecoration: "none",
    "& .MuiTypography-body2": {
      cursor: "pointer",
    },
  },
  logoutButton: {
    color: "#fff",
    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    drawerClose: {
      width: 0,
    },
    mobile: {
      display: "block",
    },
  },
}));

export default useStyles;