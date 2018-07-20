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
        <h1><span className="firstName quicksand">JASON </span><span className="lastName quicksand">DOBROWNER</span></h1>
      </header>
    )
  }
}

export default Header;
