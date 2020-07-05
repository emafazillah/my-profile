import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100%)`,
    marginLeft: 240,
    backgroundColor: '#34495e',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
  },
}));

function Footer() {
  const classes = useStyles();
  const todaysdate = new Date();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.footer}>
          © Copyright {todaysdate.getUTCFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;