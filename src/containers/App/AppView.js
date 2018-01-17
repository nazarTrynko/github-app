import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Navbar } from 'react-bootstrap'

import './AppView.css'

import Repos from '../Repos'
import Search from '../Search'

export default () => (
  <div>
    <div className="App">
      <Navbar>
        <Navbar.Header>
          <LinkContainer exact to={`/`}>
            <Button>Home</Button>
          </LinkContainer>
        </Navbar.Header>
      </Navbar>
    </div>

    <Switch className="container">
      <Route exact path='/' component={Search} />
      <Route path='/repos/:userName' component={Repos} />
    </Switch>
  </div>
)
