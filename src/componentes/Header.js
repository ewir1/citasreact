import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="text-center text-white">{this.props.titulo}</h1>
      </header>
    )
  }
}

export default Header;
