import { makeStyles } from "@mui/styles";

const drawerWidth = "90px";
const primary = "#050418";
const secondary = "#FDC20F";
const open_drawer_width="300px"

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    height: "100%",
    flexShrink: 1,
  },

  drawerOpen: {
    background: "red",
    color: "#fff",
    width: open_drawer_width,
    height: "100%",
    transition: "all 0.5s ease-in-out",
    zIndex: 20,
    overflow: "hidden",
  },
  drawerClose: {
    background: primary,
    color: "#fff",
    position: "fixed",
    transition: "all 0.5s ease-in-out",
    overflowX: "hidden",
    width: drawerWidth,
    height: "100%",
    zIndex: 20,
  },
  drawerAlign: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "0.5rem",
    alignItems: "center",
    "& .MuiAvatar-root": {
      backgroundColor: "inherit",
    },
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
  logo: {
    alignSelf: "flex-start",
    padding: "0.8rem 0 0 1rem",
    marginBottom: "1rem",
  },
}));

export default useStyles;
