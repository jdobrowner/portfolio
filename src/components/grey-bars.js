import React, { Component } from 'react';
import colors from '../colors';

export default class GreyBars extends Component {
  constructor() {
    super();
    this.showBars = this.showBars.bind(this);
    this.widenBars = this.widenBars.bind(this);

    this.state = {
      barWidths: noWidth(14),
      barColors: getColors(14),
      barTransitions: getTransitions(14)
    }
  }
  widenBars(time) {
    const widths = [ ...this.state.barWidths ];
    const widthTest = { width: "200px" };
    const greyBars = widths.map( (w, i) => {
      const newWidth = Math.floor(gaussian(500, 30));
      setTimeout(() => {
        this.setState({ barWidths: updateArray(this.state.barWidths, i, newWidth) }) },
        time + gaussian(1000, 300) );
    });
    return greyBars;
  }
  showBars() {
    const widths = this.state.barWidths;
    const barColors = this.state.barColors;
    const transitions = this.state.barTransitions;
    const greyBars = widths.map( (width, i) => {
      const style = {
        width: `${width}px`,
        backgroundColor: barColors[i],
        transition: `${transitions[i]}s`
       };
      return <div className="bar" style={style} key={`bar${i}`}></div>
    });
    return greyBars;
  }
  componentDidMount() {
    // this.widenBars(300);
  }
  render() {
    return (
      <div className="grey-bars" onClick={ () => this.widenBars(0) }>
        {this.showBars()}
      </div>
    )
  }
}

function updateArray(stateArr, index, element) {
  const arr = [ ...stateArr ];
  const arrStart = arr.slice(0, index);
  const arrEnd = arr.slice( index+1, arr.length );
  return [ ...arrStart, element, ...arrEnd ];
}

function gaussian(mean, stdev) {
  var x1, x2, w;
  do {
       x1 = 2.0 * Math.random() - 1.0;
       x2 = 2.0 * Math.random() - 1.0;
       w  = x1 * x1 + x2 * x2;
  } while( w >= 1.0);
  w = Math.sqrt((-2.0 * Math.log(w))/w);
  const y = x1 * w;
  const val = mean + stdev * y;
  if (val < 0) return val + 2 * stdev * y;
  return mean + stdev * y;
}

function getColors(n) {
  const barColors = [];
  for (let i = 0; i < n; i++) {
    const rand = Math.random() * 6;
    if (rand < 1) barColors.push(colors.grey6);
    else if (rand < 2) barColors.push(colors.grey7);
    else if (rand < 3) barColors.push(colors.grey8);
    else if (rand < 4) barColors.push(colors.grey9);
    else if (rand < 5) barColors.push(colors.grey10);
    else barColors.push(colors.grey11);
  }
  return barColors;
}

function getTransitions(n) {
  const transitions = [];
  for (let i = 0; i < n; i++) {
    const time = gaussian(0.5, 0.1);
    transitions.push(time);
  }
  return transitions;
}

function noWidth(n) {
  const widths = [];
  for (let i = 0; i < n; i++) widths.push(0);
  return widths;
}
