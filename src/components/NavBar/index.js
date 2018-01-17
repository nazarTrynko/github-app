import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'

import { Button, Navbar } from 'react-bootstrap'

export default () => {
  return (
    <Navbar>
      <Navbar.Header>
        <LinkContainer exact to={`/`}>
          <Button>Search</Button>
        </LinkContainer>
      </Navbar.Header>
    </Navbar>
  )
}
