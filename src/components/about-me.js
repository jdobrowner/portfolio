import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="about">
        <div className="sub-header">
          <h3>About</h3>
        </div>
        <p>{testText()}</p>
      </div>
    )
  }
}

function testText() {
  return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
