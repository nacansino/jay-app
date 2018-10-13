import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
  },
  appbar:{
    background:'linear-gradient(to bottom, rgb(0,0,0, 00), rgb(0,0,0, 0.75))',
    boxShadow: "none",
    position:'absolute',
    alignSelf: 'flex-end'
  },
};

function Footer(props) {
  const { classes } = props;

  return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="body2" color="inherit">
            This is a Footer
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
