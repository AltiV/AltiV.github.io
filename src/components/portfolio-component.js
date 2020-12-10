import React from 'react'

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
  Chip
} from '@material-ui/core'

import WebIcon from '@material-ui/icons/Web'
import GitHubIcon from '@material-ui/icons/GitHub'

import { makeStyles } from '@material-ui/core/styles'

// CSS STYLES
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light
  },
  button: {
    color: 'white'
  },
  websiteLink: {
    color: 'white',
    textDecoration: 'none'
  },
  technologyChip: {
    margin: '0 0.1rem'
  }
}))

const projects = [
  {
    name: 'ClueWords',
    description:
      'A web application version of the CodeNames board game, complete with authentication.',
    technologies: [
      'MERN Stack',
      'Material UI',
      'Web Sockets',
      'multer-s3',
      'Stripe'
    ],
    website: 'https://afternoon-woodland-86224.herokuapp.com/',
    github: 'https://github.com/hatchways/team-fruit-loops'
  },
  {
    name: 'Issue Tracker',
    description: 'Track user-submitted projects and corresponding issues.',
    technologies: ['MERN Stack', 'Bootstrap'],
    website: 'https://issue-tracker-mern.herokuapp.com/',
    github: 'https://github.com/AltiV/Issue-Tracker'
  },
  {
    name: 'KartRider Rush+ Unofficial Manual',
    description:
      "An information repository for the KartRider Rush+ mobile application, holding data for the game's karts, characters, tracks, and more. Includes a basic quiz component.",
    technologies: ['Angular', 'Material UI'],
    website: 'https://krrplus.web.app/',
    github: null
  },
  {
    name: 'Personal Website (Old)',
    description: 'My first portfolio website, using basic web techologies.',
    technologies: ['HTML', 'Javascript'],
    website: 'https://altiv.github.io/website/',
    github: 'https://github.com/AltiV/website'
  }
]

const Portfoilo = () => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {projects.map((project, key) => (
        <>
          <ListItem alignItems='flex-start' key={key}>
            <ListItemAvatar>
              <Avatar alt={project.name} src=''>
                {project.name[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <a
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.websiteLink}
                  >
                    {project.name}
                  </a>
                  &nbsp;
                  {project.technologies.map((technology, key) => (
                    <Chip
                      label={technology}
                      key={key}
                      className={classes.technologyChip}
                    />
                  ))}
                </>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textPrimary'
                  >
                    {project.description}
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction style={{ color: 'white' }}>
              <IconButton edge='end'>
                <a
                  href={project.website}
                  className={classes.button}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <WebIcon />
                </a>
              </IconButton>
              {project.github && (
                <IconButton edge='end'>
                  <a
                    href={project.github}
                    className={classes.button}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GitHubIcon />
                  </a>
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant='inset' component='li' />
        </>
      ))}
    </List>
  )
}

export default Portfoilo
