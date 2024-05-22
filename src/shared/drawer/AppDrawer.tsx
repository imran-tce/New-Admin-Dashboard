import { Avatar, Theme, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpenIcon,
  EventsIcon,
  GroupIcon,
  HomeIcon,
  InternshipIcon,
  LogoutIcon,
  ProjectsIcon1,
} from "../../assets/AppDrawerIcons";
import useStyles from "./AppDrawer.styles";
// import {
//   BookOpenIcon,
//   DiscussionIcon,
//   EventsIcon,
//   GroupIcon,
//   HomeIcon,
//   InternshipIcon,
//   LogoutIcon,
//   ProjectsIcon1,
// } from "../../utils/AppDrawerIcons";

const collapsedWidth = 80; // Adjust as per your requirement
const drawerWidth = 260;

const NavigationPanel = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const content: any[] = [
    {
      title: "Home",
      link: "/",
      // icon: <BoxIcon width={"42"} height={"42"} color={location.pathname === "/" ? "secondary" : "white"} />,
      icon: (
        <HomeIcon
          color={location.pathname === "/" ? "secondary" : "white"}
          strokeWidth={location.pathname === "/" ? 3 : 1}
        />
      ),
    },
    {
      title: "Courses",
      link: "/courses",
      // icon: (
      //   <BoxIcon width={"42"} height={"42"} color={location.pathname.startsWith("/courses") ? "secondary" : "white"} />
      // ),
      icon: (
        <BookOpenIcon
          color={
            location.pathname.startsWith("/courses") ? "secondary" : "white"
          }
          strokeWidth={location.pathname.startsWith("/learn") ? 3 : 1}
        />
      ),
    },
    {
      title: "Problem\nStatements",
      link: "/problem-statements",
      // icon: (
      //   <BoxIcon
      //     width={"42"}
      //     height={"42"}
      //     color={location.pathname.startsWith("/problem-statements") ? "secondary" : "white"}
      //   />
      // ),
      icon: (
        <GroupIcon
          color={
            location.pathname.startsWith("/problem-statements")
              ? "secondary"
              : "white"
          }
          strokeWidth={
            location.pathname.startsWith("/problem-statements") ? 2 : 0.7
          }
        />
      ),
    },
    {
      title: "Events",
      link: "/events",
      // icon: (
      //   <BoxIcon width={"42"} height={"42"} color={location.pathname.startsWith("/events") ? "secondary" : "white"} />
      // ),
      icon: (
        <EventsIcon
          color={
            location.pathname.startsWith("/events") ? "secondary" : "white"
          }
          strokeWidth={location.pathname.startsWith("/events") ? 1.5 : 0.6}
        />
      ),
    },
    {
      title: "Projects",
      link: "/projects",
      // icon: (
      //   <BoxIcon
      //     width={"42"}
      //     height={"42"}
      //     color={location.pathname.startsWith("/projects") ? "secondary" : "white"}
      //   />
      // ),
      icon: (
        <ProjectsIcon1
          color={
            location.pathname.startsWith("/projects") ? "secondary" : "white"
          }
          strokeWidth={location.pathname.startsWith("/projects") ? 0.8 : 0}
        />
      ),
    },
    {
      title: "Internships",
      link: "/internships",
      // icon: (
      //   <BoxIcon
      //     width={"42"}
      //     height={"42"}
      //     color={location.pathname.startsWith("/internships") ? "secondary" : "white"}
      //   />
      // ),
      icon: (
        <InternshipIcon
          color={
            location.pathname.startsWith("/internships") ? "secondary" : "white"
          }
          strokeWidth={location.pathname.startsWith("/internships") ? 1.1 : 0.5}
        />
      ),
    },
    // {
    //   title: "Discussion Room",
    //   link: "/discussion-room",
    //   // icon: (
    //   //   <BoxIcon
    //   //     width={"42"}
    //   //     height={"42"}
    //   //     color={location.pathname.startsWith("/discussion-room") ? "secondary" : "white"}
    //   //   />
    //   // ),

    //   icon: (
    //     <DiscussionIcon
    //       color={location.pathname.startsWith("/discussion-room") ? "secondary" : "white"}
    //       strokeWidth={location.pathname.startsWith("/discussion-room") ? 1.1 : 0.5}
    //     />
    //   ),
    // },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log("oppen", open);

  return (
    <>
      <>
        <Drawer
          variant="permanent"
          // className={`${classes.drawer} ${
          //   open ? classes.drawerOpen : classes.drawerClose
          // }`}
          // classes={{ paper: open ? classes.drawerOpen : classes.drawerClose }}
          classes={{
            paper:classes.drawerClose
          }}
          open={open}
          onMouseEnter={handleDrawerOpen}
          onMouseLeave={handleDrawerClose}
          onClose={handleDrawerClose}
        >
          {/* <Toolbar /> */}

          <div className={classes.logo}>
            <img
              src="/assets/logos/inunity_iu.svg"
              alt="inunity logo"
              width="47"
              height="55"
            />
          </div>
          <List style={{ height: "100%" }}>
            {content.map((item, index) => {
              return (
                <Link to={item.link} key={index} className={classes.linkStyle}>
                  <ListItem button onClick={handleDrawerClose}>
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
                </Link>
              );
            })}

            <ListItem
              button
              onClick={() => {
                navigate("/sign-in");
              }}
              style={{ position: "absolute", bottom: 0, left: 0 }}
              className={classes.desktop}
            >
              <div className={classes.drawerAlign}>
                <ListItemIcon>
                  <Avatar>
                    <LogoutIcon
                      strokeWidth={
                        location.pathname.startsWith("/logout") ? 3 : 1
                      }
                    />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      className={classes.logoutButton}
                    >
                      Logout
                    </Typography>
                  }
                />
              </div>
            </ListItem>
          </List>
        </Drawer>
        {open && (
          <div onClick={handleDrawerClose} className={classes.backdrop}></div>
        )}
      </>
    </>
  );
};

export default NavigationPanel;
