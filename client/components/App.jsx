import React from 'react'
import { Route } from 'react-router-dom'

// import Components
import Header from './Header.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Intro from './Intro.jsx'

function App () {
  return (
    <div className='app'>
      <Route path='/' exact component={Intro} />
      <Route path='/about' component={Header} />
      <Route path='/about' component={About} />
      <Route path='/about' component={Projects} />
    </div>
  )
}

export default App
