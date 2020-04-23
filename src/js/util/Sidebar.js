import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import StudentRoute from "./Sidebar.router.student";
import TeacherRoute from "./Sidebar.router.teacher";
import * as Action from "../redux/actions";
const drawerWidth = 240;
export default function MiniDrawer(props) {
  const dispatch = useDispatch();
  const { auth, role } = useSelector(({ Authentication }) => Authentication);
  const val = useLocation();
  const history = useHistory();
  const [location, setLocation] = useState(null);
  const [Router, setRouter] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const logout = () => {
    dispatch(Action.LogOut());
  };
  const handleLocation = (e) => {
    history.push(e);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (role === "student") {
      setRouter(StudentRoute);
    } else {
      setRouter(TeacherRoute);
    }
  }, [role]);
  useEffect(() => {
    if (val.pathname !== location) {
      setLocation(val.pathname);
    }
  }, [val]);
  const visible = useSpring({ display: open ? "flex" : "none" });
  if (!auth) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div
          className={classes.toolbar}
          style={{ justifyContent: open ? "flex-end" : "center" }}
        >
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <animated.div style={visible} className={classes.ImageContainer}>
          <img
            className={classes.dp}
            src="https://lh3.googleusercontent.com/proxy/A0SgIeyzRR5nNbLMHhgr7WvKkQAjNv0X0Wsmdq_dGJEX_0XsZ5Mr5ZSYh_gIfHu6iEdTbP8nfRAxCUtXm-7s7W032uKZCHK_jbsF"
            alt=""
          />
        </animated.div>
        <animated.div style={visible} className={classes.rollNo}>
          <Typography variant="button" display="block" gutterBottom>
            BCSM-F18-324
          </Typography>
        </animated.div>
        <animated.div style={visible} className={classes.online}>
          <Typography variant="caption" display="block">
            Online
          </Typography>
        </animated.div>
        <List className={classes.List} style={{ marginTop: open ? 10 : 0 }}>
          {Router.map((text, index) => (
            <ListItem
              className={[classes.ListItem]}
              onClick={() => handleLocation(text.url)}
              style={{
                width: !open ? "90%" : "100%",
                backgroundColor:
                  location === text.url
                    ? theme.palette.secondary.light
                    : "inherit",
              }}
              button
              key={index}
            >
              <i
                className={text.icon}
                style={{
                  ...text.iconStyle,
                  marginLeft: !open ? -1 : 0,
                  marginRight: !open ? -1 : text.iconStyle.marginRight,
                  color:
                    location === text.url
                      ? "white"
                      : theme.palette.primary.main,
                }}
              />
              {open ? (
                <ListItemText
                  primary={
                    <Typography
                      className={classes.ListText}
                      style={{
                        fontWeight: 500,
                        color:
                          location === text.url
                            ? "white"
                            : theme.palette.primary.main,
                      }}
                      variant="caption"
                      display="inline"
                    >
                      {text.name}
                    </Typography>
                  }
                />
              ) : (
                <React.Fragment />
              )}
            </ListItem>
          ))}
          <ListItem
            className={[classes.ListItem]}
            onClick={() => logout()}
            style={{
              width: !open ? "90%" : "100%",
            }}
            button
          >
            <i
              className={"flaticon-logout"}
              style={{
                fontSize: 20,
                width: 40,
                marginLeft: !open ? 0 : 2,
                marginRight: !open ? -1 : 5,
                color: theme.palette.primary.main,
              }}
            />
            {open ? (
              <ListItemText
                primary={
                  <Typography
                    className={classes.ListText}
                    style={{
                      fontWeight: 500,
                    }}
                    variant="caption"
                    display="inline"
                  >
                    Logout
                  </Typography>
                }
              />
            ) : (
              <React.Fragment />
            )}
          </ListItem>
        </List>
      </Drawer>
      <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        {props.children}
      </main>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight: 0,
    display: "flex",
    alignItems: "center",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRight: 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  ImageContainer: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "2.5px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
  },
  dp: {
    width: "100%",
    height: "100%",
  },
  List: {
    width: "96%",
    overflow: "hidden",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ListItem: {
    borderRadius: "5px",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "white",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ListText: {
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.primary.main,
    display: "inline",
  },
  icon: {},
  rollNo: {
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.text.dark,
    display: "inline",
    marginTop: 7,
  },
  online: {
    fontFamily: theme.palette.text.fontFamily,
    fontSize: 10,
    fontWeight: 500,
    color: theme.palette.attendance.success,
    display: "inline",
  },
}));
