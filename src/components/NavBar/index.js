import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar } from 'react-bootstrap'

export default () => {
  return (
    <Navbar>
      <Navbar.Header>
        <LinkContainer exact to={`/`}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#search">Search</a>
            </Navbar.Brand>
          </Navbar.Header>
        </LinkContainer>
      </Navbar.Header>
    </Navbar>
  )
}
