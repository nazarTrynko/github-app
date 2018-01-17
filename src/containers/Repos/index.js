import React, { Component } from 'react'

export default class Repos extends Component {
  
  render() {
    return (
      <div>
          This is repo #{this.props.match.params.userId}
      </div>
    )
  }
}
