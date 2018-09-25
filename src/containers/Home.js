import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Segment from '../components/Segment'
import Image from 'react-image-resizer';
import { withStyles } from '@material-ui/core/styles';
import bgi from '../assets/img/h_main.jpg'
import bgi2 from '../assets/img/h_adventure.jpg'

const styles = {
  root: {
    width: '100%',
    backgroundImage: 'url('+bgi+'), url('+bgi2+')',
    display: 'flex',
    backgroundPosition: 'top, bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundSize: '100%'
  },
  imgs:{
    width: '100%'
  }
};

class Home extends Component {
  render() {
    const {classes} = this.props;
    const imgname = 'h_main.jpg';
    return (
      <div>
        <Header />
        <div className={classes.root}>Welcome Home</div>
        <Segment imgname={imgname} />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
