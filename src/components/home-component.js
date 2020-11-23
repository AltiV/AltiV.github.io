import React from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import avatar from "../images/avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  mainBox: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    display: "flex",
    color: "white",
    width: "80%",
    background:
      "linear-gradient(45deg, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.8) 80%)",
    boxShadow: "0 3px 3px 0px rgba(50, 50, 50, .5)",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      className={classes.mainBox}
    >
      <Grid
        item
        xs={12}
        sm={6}
      >
        <Avatar
          src={avatar}
          variant="rounded"
          alt="Alan Vuong"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h3">Alan Vuong</Typography>
        <Typography variant="caption">Full stack web developer.</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
