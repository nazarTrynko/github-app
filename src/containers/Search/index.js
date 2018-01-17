import React, { Component } from 'react'
import './Search.css'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Table, Grid, Row, Col } from 'react-bootstrap'
import { getUser, getReposByUsername } from '../../utils/api'
import { Button } from 'react-bootstrap'
import UserTable from '../../components/UserTable'

export default class Search extends Component {

  state = {
    value: '',
    user: {},
    userName: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const { name, company, email, followers, updated_at, avatar_url } = await getUser(this.state.value)

      this.setState({
        user: {
          name, company, email, followers, updated_at, avatar_url,
        },
        userName: this.state.value
      }, () => {
        getReposByUsername(this.state.userName)
      })
    } catch (error) {
      //Todo handle
    }
  }

  render() {
    const { user, value } = this.state

    return (
      <Grid>
        <Row>
          <form style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'

          }} onSubmit={this.handleSubmit}>
            <Col sm={6}>
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type='text'
                value={value}
                placeholder="Enter username"
                onChange={this.handleChange}
              />
            </Col>
            <Col sm={1}>
              <Button className="align-middle" disabled={!value} type='submit' bsStyle='primary'>Search</Button>
            </Col>
          </form>
        </Row>

        <Row>
          <Col sm={12}>
            <UserTable user={user} />
          </Col>
        </Row>
      </Grid>
    )
  }
}
