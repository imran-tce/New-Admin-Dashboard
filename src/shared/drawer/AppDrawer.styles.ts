import { createStyles, makeStyles } from "@mui/styles";

const drawerWidth = 240;
const dark='#050418'
const light="#050418"
const secondary="#FDD835"

const useStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: drawerWidth,
      height: "100%",
      flexShrink: 1,
    },
    drawerOpen: {
      background: dark,
      color: light,
      width: drawerWidth,
      height: "100%",
      transition: "all 0.5s ease-in-out",
      zIndex: 20,
      overflow: "hidden",
    },
    drawerClose: {
      background: dark,
      color: light,
      position: "fixed",
      transition: "all 0.5s ease-in-out",
      overflowX: "hidden",
      width: "96px",
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
      width: "100%",
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
        backgroundColor: dark,
      },
      "& > div": {
        backgroundColor: dark,
      },
      "& svg": {
        fill: "none",
        stroke: "#fff",
      },
      "&:hover": {
        "& div": {
          color: secondary,
          backgroundColor: secondary,
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
  })
);

export default useStyles;
