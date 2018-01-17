import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

import './App.css'

import logo from '../../resources/logo.svg'
import Repos from '../Repos'
import Search from '../Search'

export default () => (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <LinkContainer to={`/repos/${6}`}>
        <Button bsStyle="primary" bsSize="large">Foo</Button>
      </LinkContainer>
    </div>

    <Switch className="container">
      <Route exact path='/' component={Search} />
      <Route path='/repos/:userId' component={Repos} />
    </Switch>
  </div>
)
