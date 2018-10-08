import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Segment from '../components/Segment'
import SliderContainer from '../components/SliderContainer'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    width: '100%',
    height: '100vh'
  }
};

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
        <SliderContainer />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
