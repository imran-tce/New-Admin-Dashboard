import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
} from "@mui/material";
import useStyles from "./AppDrawer.styles";
import { Link } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

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

  console.log("props", props.isDrawerOpen)

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:theme.palette.primary.main,
    overflowX: 'hidden',
  });


const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width:"99px",
  background:theme.palette.primary.main,
});

  

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      transition: "all 0.5s ease-in-out",
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  

  return (
    <>
      <Drawer
        variant="permanent"
        // className={`${classes.drawer} ${
        //   props.isDrawerOpen ? classes.drawerOpen : classes.drawerClose
        // }`}
        // classes={{
        //   paper: `${
        //     props.isDrawerOpen ? classes.drawerOpen : classes.drawerClose
        //   }`,
        // }}
        open={props.isDrawerOpen}
        onMouseEnter={props.openDrawer}
        onMouseLeave={props.closeDrawer}
        onClose={props.closeDrawer}
      >

        <List style={{ height: "100%" }}>
          {props.contents.map((item, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: item.link,
                }}
                className={classes.linkStyle}
              >
                <ListItem button onClick={props.closeDrawer}>
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
           <ListItem button onClick={props.closeDrawer}>
                  <div className={classes.drawerAlign}>
                   wdwdwddw
                  </div>
                </ListItem>
        </List>
      </Drawer>
      {props.isDrawerOpen && (
        <div onClick={props.closeDrawer} className={classes.backdrop}></div>
      )}
    </>
  );
}
