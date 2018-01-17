import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import _ from 'lodash'

import './SearchView.css'

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

        <Row>
          {
            <UserTable
              sortable={false}
              showPagination={false}
              showPageSizeOptions={false}
              user={user}
              defaultPageSize={10}
            />
          }
        </Row>

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
          'Name': name,
          'Company': company,
          'Email': email,
          'Followers': followers,
          'Updated at': updated_at,
          'Avatar url': avatar_url,
        },
        userName: this.state.value
      })
    } catch (error) {
      this.showError(error, 'No such user')
    }
  }

  showRepos = () => this.props.showRepos(this.state.userName)

  showError = (error, message) => {
    this.setState({ error: message }, () => {
      setTimeout(() => {
        this.setState({ error: null })
      }, 1500)
    })
  }
}