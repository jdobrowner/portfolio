import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <header>
        <h1><span className="firstName">Jason </span><span className="lastName">Dobrowner</span></h1>
      </header>
    )
  }
}

export default Header;
