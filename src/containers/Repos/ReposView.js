import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export default class ReposView extends Component {

  columns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Description',
    accessor: 'description',
  }, {
    Header: 'Url',
    accessor: 'html_url',
    Cell: row => (
      <a href={row.value} target="_blank">{row.value}</a>
    )
  }, {
    Header: '# of forks',
    accessor: 'forks_count'
  }, {
    Header: '# of watchers',
    accessor: 'watchers_count'
  }]

  componentDidMount() {
    this.props.getRepos(this.props.match.params.userName)
  }

  render() {
    const { repos, reposLoading } = this.props

    return (
      <ReactTable
        className="container"
        data={repos}
        loading={reposLoading}
        columns={this.columns}
      />
    )
  }
}