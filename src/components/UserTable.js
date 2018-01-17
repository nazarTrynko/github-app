import React from 'react'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

import './styles.css'

export default ({ user }) => {
  return (
    <div className="user-table">
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            {
              Object.keys(user)
                .map((key) => {
                  return (<th key={_.uniqueId()} className="user-table-head">{key}</th>)
                })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              Object.keys(user)
                .map((key) => {
                  return (<td key={_.uniqueId()}>{user[key] || '-'}</td>)
                })
            }
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
