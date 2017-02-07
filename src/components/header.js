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
        <h1><span className="firstName">JASON </span><span className="lastName">DOBROWNER</span></h1>
      </header>
    )
  }
}

export default Header;
