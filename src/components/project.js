import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
    this.buttons = this.buttons.bind(this);
  }
  buttons() {
    return (
      <div className="buttons">
        <a href={this.props.url} target="_blank"><p className="button goThere">Check It Out</p></a>
        { this.props.repo && <a href={this.props.repo} target="_blank"><p className="button repo">See The Code</p></a> }
      </div>
    )
  }
  render() {
    return (
      <div className={`${this.props.classProp} project`}>
        <div className="box">
          <h3>{this.props.title}</h3>
          <p>{this.props.text.description}</p>
          <br/>
          <p>Tools | <span className='tools'>{this.props.text.tools}</span></p>
          {this.buttons()}
        </div>
        <div className="box centered">
          <div>
            <a href={this.props.url} target="_blank"><img src={this.props.image} alt={this.props.title} /></a>
          </div>
        </div>
      </div>
    )
  }
}
