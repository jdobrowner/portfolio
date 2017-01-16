import React from 'react';
import Header from './header';
import Intro from './intro';
import Projects from './projects';
import About from './about-me'

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Projects />
      <About />
    </div>
  )
}

export default App;
