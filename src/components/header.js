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
        <div className="title-box">
          <div className="jason"><h1>Jason Dobrowner</h1></div>
        </div>
        <div className="web-dev">
          <h2>Projects | About</h2>
        </div>
      </header>
    )
  }
}

export default Header;
