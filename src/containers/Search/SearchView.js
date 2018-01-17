import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

import './SearchView.css'

import constants from '../../constants/main'
import { getUser } from '../../utils/api'
import UserTable from '../../components/UserTable'
import UserSearch from '../../components/UserSearch'

export default class SearchView extends Component {

  state = {
    value: '',
    user: {},
    userName: '',
    error: ''
  }

  render() {
    const { user, value, error } = this.state

    return (
      <Grid>
        <Row className="center-text">
          <UserSearch
            value={value}
            error={error}
            disabled={!!error}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Row>
        {
          !_.isEmpty(user) &&
          <Row>
            <UserTable
              user={user}
            />
          </Row>
        }

        {
          !_.isEmpty(user) &&
          <Row>
            <Button
              onClick={this.showRepos}
              className="show-repos-button center-self"
              bsStyle="info" block>Show user's Repositories</Button>
          </Row>
        }

      </Grid>
    )
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
          [constants.NAME]: name,
          [constants.COMPANY]: company,
          [constants.EMAIL]: email,
          [constants.FOLLOWERS]: followers,
          [constants.UPDATED_AT]: updated_at,
          [constants.AVATAR_URL]: avatar_url,
        },
        userName: this.state.value
      })
    } catch (error) {
      this.showError(error, { 404: 'No such user', default: 'Please check your connection' })
    }
  }

  /**
   * go to repos view and pass username
   */
  showRepos = () => this.props.showRepos(this.state.userName)

  showError = (error, message) => {
    const { status } = error.response
    const errorMessage = message.hasOwnProperty(status) ? message[status] : message.default

    this.setState({ error: errorMessage }, () => {
      setTimeout(() => {
        this.setState({ error: null })
      }, 1500)
    })
  }
}
