import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import H_main from '../assets/img/h_main.jpg'
import H_life from '../assets/img/h_life.jpg'
import H_adventure from '../assets/img/h_adventure.jpg'

const styles = {
  segment: {
    width: '100%',
    display: 'flex',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundSize: '100%'
  },
};

class Segment extends Component {
  render() {
  const {classes} = this.props;
  let divBG = {
            backgroundImage: 'url(' + H_main + ')'
  }
  return (
    <div className={classes.segment} style={divBG}>
      <Typography>{this.props.imgname}</Typography>
    </div>
  );
  }
}

Segment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Segment);
