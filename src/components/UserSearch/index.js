import React from 'react'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import './styles.css'

const UserSearch = ({ value, error, disabled, onChange, onSubmit }) => {
  return (
    <div>
      <p className="search-label">Search github's user by username</p>
      <form onSubmit={onSubmit}>
        <FormControl
          autoFocus
          className="search-input center-self"
          type='text'
          value={value}
          placeholder="Enter username"
          onChange={onChange}
        />
        <Button className="align-middle search-button" disabled={!value || disabled} type='submit' bsStyle='primary'>Search</Button>
      </form>
      {
        error &&
        <p className="error-message">{error}</p>
      }
    </div>
  )
}

export default UserSearch