import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import H_main from '../assets/img/h_main.jpg'
import H_life from '../assets/img/h_life.jpg'
import H_adventure from '../assets/img/h_adventure.jpg'

const styles = {
  segment: {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
};

const dispImg = (param) => {
  switch(param) {
    case 'main':
      return {backgroundImage: 'url(' + H_main + ')'};
    case 'life':
      return {backgroundImage: 'url(' + H_life + ')'};
    case 'adventure':
      return {backgroundImage: 'url(' + H_adventure + ')'};
    default:
      return {backgroundImage: 'url(' + H_main + ')'};
  }
};

class Segment extends Component {
  render() {
  const {classes} = this.props;
  return (
    <div className={classes.segment} style={dispImg(this.props.imgname)}>
      {this.props.children}
    </div>
  );
  }
}

Segment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Segment);
