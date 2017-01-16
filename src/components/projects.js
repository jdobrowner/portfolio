import React, { Component } from 'react';
import Project from './project';
import colors from '../colors';
import { urls, repos } from '../content/urls';
import caImg from '../../images/ca.png';
import gsImg from '../../images/gs.png';
import luImg from '../../images/lu.png';
import lqImg from '../../images/lq.png';
import abImg from '../../images/ab.png';

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="projects">
        <div className="sub-header">
          <h3>Projects</h3>
        </div>
        <Project title="Cellular Automata" bkgColor={colors.white} text={testText()} image={caImg} url={urls.ca} repo={repos.ca} />
        <Project title="Galaxy Synth" bkgColor={colors.white} text={testText()} image={gsImg} url={urls.gs} repo={repos.gs} />
        <Project title="Learn:Ukelele" bkgColor={colors.white} text={testText()} image={luImg} url={urls.lu} repo={repos.lu} />
        <Project title="Logic Quiz" bkgColor={colors.white} text={testText()} image={lqImg} url={urls.lq} repo={repos.lq} />
        <Project title="Alpha Bees" bkgColor={colors.white} text={testText()} image={abImg} url={urls.ab} />
      </div>
    )
  }
}

function testText() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
