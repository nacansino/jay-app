import React, { Component } from 'react'
import Navigator from './Navigator'
import NotFound from './NotFound'
import AboutUs from './AboutUs'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class Containers extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Navigator />} />
          <Route exact path='/about' render={() => <AboutUs />} />
          <Route exact path='*' render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Containers
