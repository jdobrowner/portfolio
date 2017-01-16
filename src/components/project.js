import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
    this.buttons = this.buttons.bind(this);
  }
  buttons() {
    if (this.props.title !== 'Alpha Bees') {
      return (
        <div className="buttons">
          <a href={this.props.url} target="_blank"><div className="button">Go There</div></a>
          <a href={this.props.repo} target="_blank"><div className="button">Repo</div></a>
        </div>
      )
    }
    else {
      return (
        <div className="buttons">
          <a href={this.props.url} target="_blank"><div className="button">See on iTunes Preview</div></a>
        </div>
      )
    }
  }
  render() {
    const bkgColor = { backgroundColor: this.props.bkgColor };
    //const image = `/${this.props.image}.png`;
    return (
      <div className="project" style={bkgColor}>
        <div className="box">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
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
