import React from "react";

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";

import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";

import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
  },
}));

const projects = [
  {
    name: "Issue Tracker",
    description: "MERN Stack",
    website: "https://issue-tracker-mern.herokuapp.com/",
    github: "https://github.com/AltiV/Issue-Tracker",
  },
  {
    name: "KartRider Rush+ Unofficial Manual",
    description: "Angular",
    website: "https://krrplus.web.app/",
    github: null,
  },
  {
    name: "Personal Website (Old)",
    description: "HTML/CSS/Javascript",
    website: "https://altiv.github.io/website/",
    github: "https://github.com/AltiV/website",
  },
];

const Portfoilo = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        {projects.map((project, key) => (
          <>
            <ListItem alignItems="flex-start" key={key}>
              <ListItemAvatar>
                <Avatar alt={project.name} src="">
                  {project.name[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={project.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {project.description}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction style={{ color: "white" }}>
                <IconButton edge="end">
                  <a
                    href={project.website}
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebIcon />
                  </a>
                </IconButton>
                {project.github && (
                  <IconButton edge="end">
                    <a
                      href={project.github}
                      className={classes.button}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </IconButton>
                )}
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
};

export default Portfoilo;
