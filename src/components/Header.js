import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SocialMediaButtons from '../components/SocialMediaButtons';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  button_current: {
    margin: theme.spacing.unit,
    color: 'rgba(0, 0, 0, 0.5)',
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



class Header extends Component {
  bandler = (index) => {
    return () => {
      this.props.onClick(index);
      console.log('Clicked button ' + index + 'of the menu');
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Button classes={classes.bTitle} href="/">JAY CANSINO BLOG</Button>
            <div className={classes.hMenu}>
              <Button className={this.props.sliderSelectedItem==0 ? classes.button_current : classes.button} onClick={this.bandler(0)}>ABOUT ME</Button>
              <Button className={this.props.sliderSelectedItem==1 ? classes.button_current : classes.button} onClick={this.bandler(1)}>WORKS</Button>
              <Button className={this.props.sliderSelectedItem==2 ? classes.button_current : classes.button} onClick={this.bandler(2)}>BLOGS</Button>
              <Button className={this.props.sliderSelectedItem==3 ? classes.button_current : classes.button} onClick={this.bandler(3)}>CONTACT</Button>
            </div>
            <SocialMediaButtons />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
