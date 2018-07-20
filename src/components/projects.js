import React, { Component } from 'react';
import Project from './project';
import colors from '../colors';
import { urls, repos } from '../content/urls';
import caImg from '../../images/ca.png';
import gsImg from '../../images/gs.png';
import luImg from '../../images/lu.png';
import kitajImg from '../../images/kitaj.png';
import mitchImg from '../../images/mitch.png';
import * as projects from '../content/projects';

export default class Projects extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="projects">
        <div className="spacer"></div>
        <div className="sub-header">
          <h3>PROJECTS</h3>
        </div>
        <Project title="Cellular Automaton" text={projects.cellularAutomaton} image={caImg} url={urls.ca} repo={repos.ca} classProp="odd"/>
        <Project title="R.B. Kitaj Studio Project" text={projects.kitaj} image={kitajImg} url={urls.kitaj} classProp="even"/>
        <Project title="Mitch Dobrowner Photography" text={projects.mitch} image={mitchImg} url={urls.mitch} classProp="odd"/>
        <Project title="Galaxy Synth" text={projects.galaxySynth} image={gsImg} url={urls.gs} repo={repos.gs} classProp="even"/>
        <Project title="Learn: Ukulele" text={projects.learnUkulele} image={luImg} url={urls.lu} repo={repos.lu} classProp="odd"/>
      </div>
    )
  }
}

function testText() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
}
