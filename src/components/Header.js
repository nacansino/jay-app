import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
  },
  button: {
    margin: theme.spacing.unit,
  },
  button_home: {
    margin: theme.spacing.unit,

  },
  appbar:{
    backgroundColor:'rgba(0,0,0,0)',
    boxShadow: "none",
    position:'absolute'
  },
  bname:{
    color: 'rgba(0,0,0,1)',
    fontWeight: 'bold'
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button classes={classes.contained} href="/">JAY CANSINO BLOG</Button>
          <Button className={classes.button} href="#">Default</Button>
          <Button className={classes.button} href="/about">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
