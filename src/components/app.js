import React from 'react';
import Header from './header';
import Intro from './intro';
import Projects from './projects';
import About from './about-me';
import Contact from './contact';

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <Header />
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default App;




var cuteAnimals = ['cat', 'dog', 'hamster'];

var linkedList = {};

for (var i = cuteAnimals.length-1; i >= 0; i--) {
  var node;
  // if the tail
  if (i === cuteAnimals.length-1) {
    node = { value: cuteAnimals[i], pointer: null };
  }
  else {
    var previousNode = { value: cuteAnimals[i], pointer: linkedList[cuteAnimals[i+1]].pointer };
    node = { value: cuteAnimals[i], pointer: previousNode };
  }
  linkedList[node.value.toString()] = node;
}
