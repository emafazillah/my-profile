import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import octocat from '../img/octocat.png';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    marginLeft: 10,
  },
  avatar: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: 10,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: 10,
  },
  fullWidth: {
    width: '100%',
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Hi, everyone!</Typography>
      </div>
      <div className={classes.avatar}>
      <Grid container justify='left' alignItems='center'>
          <Avatar
            src={octocat}
            className={classes.bigAvatar}
          />
        </Grid>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          My name is Ema.<br/>
          I am a software developer from Malaysia.<br/>
          I code in Java on daily basis.<br/>
          I also code in Javascript occasionally.<br/>
          I used to code in C#, .NET, PHP, C and Assembly Language in my previous projects.<br/>
          Currently, I am learning Python.
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;