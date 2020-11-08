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
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  Home,
  Web,
  PictureAsPdf,
  ContactMail,
  List as ListIcon,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import name_white from "../images/name_white.png";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Web />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <PictureAsPdf />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact",
  },
];

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    background: "#3385ff",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  listItem: {
    color: "white",
  },
  logo: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(25),
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

  const sideList = () => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={() => toggleSidebar("left", false)}
    >
      {/* Currently does not work */}
      <img
        alt="AltiV"
        src={name_white}
        className={classes.logo}
        component={Link}
        to="/"
      />
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
    <AppBar style={{ background: "#222" }}>
      <Toolbar>
        <IconButton onClick={() => toggleSidebar("left", true)}>
          <ListIcon style={{ color: "#3385ff" }} />
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
  );
};

export default Navbar;
