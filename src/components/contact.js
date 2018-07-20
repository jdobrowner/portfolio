import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="contact">
        <a className="contact-link" href="mailto:jdobrowner@gmail.com"><p>jdobrowner@gmail.com</p></a>
        <p className="pipe"> | </p>
        <a className="contact-link" href="https://github.com/jdobrowner"><p>github</p></a>
        <p className="pipe"> | </p>
        <a className="contact-link" href="https://www.linkedin.com/in/jasondobrowner/"><p>linkedin</p></a>
      </div>
    )
  }
}
