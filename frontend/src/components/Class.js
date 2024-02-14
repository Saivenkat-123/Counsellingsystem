import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
      <div><center><h1>Welcome To Class{this.props.name} with ID {this.props.id}</h1></center></div>
    )
  }
}

export default Class
