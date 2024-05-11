import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  withStyles,
} from "@mui/material";
import useStyles from "./AppDrawer.styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface AppDrawerProps {
  isDrawerOpen: boolean;
  onDrawerToggle: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  contents: any[];
}

interface DrawerContents {
  title: string;
  link: string;
  icon: JSX.Element;
}

export function AppDrawer(props: AppDrawerProps) {
  const classes = useStyles();

  //   const ListItem = withStyles((theme) => ({
  //     root: {
  //       "& .MuiAvatar-root": {
  //         backgroundColor: theme.palette.dark,
  //         "& svg": {
  //           fill: "none",
  //           stroke: "#fff",
  //         },
  //       },
  //       "&:hover": {
  //         color: theme.palette.secondary.main,
  //         "& .MuiAvatar-root": {
  //           backgroundColor: theme.palette.dark,
  //           "& svg": {
  //             fill: "none",
  //             stroke: "#fff",
  //             strokeWidth: 2,
  //           },
  //         },
  //       },
  //     },
  //     [theme.breakpoints.down("xs")]: {
  //       root: {
  //         marginLeft: "-10px",
  //       },
  //     },
  //   }))(MuiListItem);

  // const handleFeedbackClick = () => {
  //   if (user_meta && user_meta.length > 0 && user_meta[0].institution_id !== null) {
  //     props.handleAppFeedbackButtonClick();
  //   }
  // };

  return (
    <>
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${
          props.isDrawerOpen ? classes.drawerOpen : classes.drawerClose
        }`}
        classes={{
          paper: `${
            props.isDrawerOpen ? classes.drawerOpen : classes.drawerClose
          }`,
        }}
        open={props.isDrawerOpen}
        // onMouseEnter={props.openDrawer}
        // onMouseLeave={props.closeDrawer}
        // onClose={props.closeDrawer}
      >
        <Toolbar />

        <List style={{ height: "100%" }}>
          {props.contents.map((item, index) => {
            return (
              <ListItem onClick={props.closeDrawer}>
                <div className={classes.drawerAlign}>
                  <ListItemIcon>
                    <Avatar>{item.icon}</Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        noWrap
                        variant="body2"
                        style={{ color: "#fff" }}
                      >
                        {item.title}
                      </Typography>
                    }
                  />
                </div>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      {props.isDrawerOpen && (
        <div onClick={props.closeDrawer} className={classes.backdrop}></div>
      )}
    </>
  );
}
