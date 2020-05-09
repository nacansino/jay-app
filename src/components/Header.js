import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SocialMediaButtons from '../components/SocialMediaButtons'

const styles = theme => ({
  root: {
    flexGrow: 0
  },
  button: {
    margin: theme.spacing.unit,
    color: 'rgb(240,240,240)'
  },
  button_current: {
    margin: theme.spacing.unit,
    color: 'rgb(192,192,192)'
  },
  button_home: {
    margin: theme.spacing.unit
  },
  appbar: {
    display: 'flex',
    background: 'linear-gradient(to bottom, rgb(0,0,0, 0.45), rgb(0,0,0, 0))',
    boxShadow: 'none',
    position: 'absolute',
    height: 'calc(10vh)'
  },
  hMenu: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center'
  },
  bTitle: {
    color: 'rgb(240,240,240)',
    fontWeight: '500',
    font: '500 2vmin/1vh roboto'
  },
  smbutton: {
    margin: theme.spacing.unit
  }
})

class Header extends Component {
  bandler = index => {
    return () => {
      this.props.onClick(index)
      console.log('Clicked button ' + index + 'of the menu')
    }
  }

  render () {
    const { classes } = this.props

    const headerMenu = ['WELCOME', 'WORKS', 'BLOGS', 'CONTACT'] // change this to add headerMenu
    return (
      <div className={classes.root}>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar>
            <Button href='/'>
              <Typography className={classes.bTitle}>
                JAY CANSINO BLOG
              </Typography>
            </Button>
            <div className={classes.hMenu}>
              {headerMenu.map((item, index) => (
                <Button
                  className={
                    this.props.sliderSelectedItem === index
                      ? classes.button_current
                      : classes.button
                  }
                  onClick={this.bandler(index)}
                >
                  {item}
                </Button>
              ))}
            </div>
            <SocialMediaButtons />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
