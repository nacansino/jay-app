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

class Navigator extends Component {
  state = {
    sliderSelectedItem: 0,
  };

  changeSelectedItem = (index) => {
    console.log('received index '+ index);
    this.setState(
      {
        sliderSelectedItem: index
      },
    );
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header sliderSelectedItem={this.state.sliderSelectedItem} onClick={this.changeSelectedItem}/>
        <SliderContainer sliderSelectedItem={this.state.sliderSelectedItem}  onClick={this.changeSelectedItem}/>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Navigator);
