import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  button_home: {
    margin: theme.spacing.unit,
  },
  appbar:{
    display: 'flex',
    backgroundColor:'rgba(0,0,0,0)',
    boxShadow: "none",
    position:'absolute',
  },
  hMenu: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  bTitle: {
    marginLeft: -12,
    marginRight: 20,
  },
  smbutton: {
    margin: theme.spacing.unit,
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button classes={classes.bTitle} href="/">JAY CANSINO BLOG</Button>
          <div className={classes.hMenu}>
            <Button className={classes.button} href="#">Default</Button>
            <Button className={classes.button} href="/about">About</Button>
          </div>
          <IconButton className={classes.button}>
            Social Media Icons Here
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
