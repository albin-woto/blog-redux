import React, { Component } from 'react'

export default class Publications extends Component {
  render() {
    return (
      <div>
        { this.props.match.params.key }
      </div>
    )
  }
}
