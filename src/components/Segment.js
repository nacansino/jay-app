import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import HMain from '../assets/img/h_main.jpg'
import HLife from '../assets/img/h_life.jpg'
import HAdventure from '../assets/img/h_adventure.jpg'
import HContact from '../assets/img/h_contact.jpg'

const styles = {
  segment: {
    display: 'flex',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  }
}

const dispImg = (param) => {
  switch (param) {
    case 'welcome':
      return { backgroundImage: 'url(' + HMain + ')' }
    case 'life':
      return { backgroundImage: 'url(' + HLife + ')' }
    case 'adventure':
      return { backgroundImage: 'url(' + HAdventure + ')' }
    case 'contact':
      return { backgroundImage: 'url(' + HContact + ')' }
    default:
      return { backgroundImage: 'url(' + HMain + ')' }
  }
}

class Segment extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.segment} style={dispImg(this.props.imgname)}>
        {this.props.children}
      </div>
    )
  }
}

Segment.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Segment)
