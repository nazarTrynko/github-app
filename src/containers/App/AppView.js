import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../../components/NavBar'
import Repos from '../Repos'
import Search from '../Search'

export default () => (
  <div>
    <Navbar />
    <Switch className="container">
      <Route exact path='/' component={Search} />
      <Route path='/repos/:userName' component={Repos} />
    </Switch>
  </div>
)
