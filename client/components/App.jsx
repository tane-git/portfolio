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
      <div className='bugFix'>
        <div className='aboutRoute'>
          <Route path='/about' component={About} />
          <Route path='/about' component={Projects} />
        </div>
      </div>
    </div>
  )
}

export default App
