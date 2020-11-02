import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import { LinkedIn, GitHub } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES
const useStyles = makeStyles({
  bottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#222",
  },
  button: {
    margin: "0 50px",
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: "#3385ff",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  // Seems like using BottomNavigationAction with a tag is considered anti-pattern, so need to fix this
  return (
    <BottomNavigation width="auto" className={classes.bottom}>
      <a
        href="https://www.linkedin.com/in/alan-vuong-08579860/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BottomNavigationAction
          className={classes.button}
          icon={<LinkedIn />}
        />
      </a>
      <a
        href="https://github.com/AltiV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BottomNavigationAction className={classes.button} icon={<GitHub />} />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
