import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Segment from '../components/Segment'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    height: '100vh'
  }
};

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
        <Segment imgname={'main'} />
        <Segment imgname={'adventure'} />
        <Segment imgname={'life'} />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
