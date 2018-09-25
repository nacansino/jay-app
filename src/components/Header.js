import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  tbar:{
    backgroundColor:'transparent',
    boxShadow: "none",
    overflow: "hidden"
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  appbar:{
    backgroundColor: 'transparent',
    position:'relative'
  }
});

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.tbar}>
          <Typography variant="body2" color="inherit">
            JAY CANSINO BLOG
          </Typography>
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
