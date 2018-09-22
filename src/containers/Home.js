import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100%'
  },
};

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Header />
        This is Home
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
