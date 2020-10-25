import React from "react";

import { Box, Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import avatar from "../images/avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  mainBox: {
    // position: "absolute",
    // top: "50%",
    // width: "80%",
    // margin: "auto",
    border: "5px solid black",
    // textAlign: "center",
    display: "flex",
    color: "white",
  },
  gridItem: {
    textAlign: "center",
    border: "5px solid red",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Grid container alignItems="center" direction="row">
        <Grid
          item
          xs={12}
          sm={6}
          direction="column"
          justify="center"
          alignItems="center"
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
          <Typography variant="h6">Full Stack Developer</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
