// https://www.youtube.com/watch?v=9Q555VoPe4M

import React, { useState } from "react";

import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  List as ListIcon,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import avatar from "../images/avatar.png";
import name_white from "../images/name_white.png";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "azure",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSidebar = (slider, open) => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={() => toggleSidebar("left", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="AltiV" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={listItem.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={() => toggleSidebar("left", true)}>
              <ListIcon style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5">AltiV</Typography>
            <Drawer
              anchor="left"
              open={state.left}
              onClose={() => toggleSidebar("left", false)}
            >
              {sideList("left")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
