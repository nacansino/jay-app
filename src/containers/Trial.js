import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

import { withStyles } from '@material-ui/core/styles'

import { Debounce } from '../utils/function'

import HMain from '../assets/img/h_main.jpg'
import HLife from '../assets/img/h_life.jpg'

const styles = {
  segment: {
    display: 'flex',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundImage: 'url(' + HMain + ')'
  },
  segment2: {
    display: 'flex',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundImage: 'url(' + HLife + ')'
  }
}

class Trial extends Component {
  componentDidMount(){
    window.addEventListener('scroll', Debounce(this.handleScroll, 200));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll= () => {
    console.log("pageYOfset: " + window.pageYOffset)
  }
  handleScroll2= () => {
    console.log(window.pageYOffset)
  }
  render () {
    const { classes } = this.props
    return (
      <div>
      <div onScroll={this.handleScroll2} className={classes.segment}>
      </div>
      <div ref={(ref) => this.scrollIcon = ref} className={classes.segment}>
      </div>
    </div>
    )
  }
}

Trial.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Trial)
