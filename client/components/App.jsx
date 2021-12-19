import React from 'react'
import { Route } from 'react-router-dom'
// import ErrorMessage from './ErrorMessage.jsx'

// import Components
import ExampleComponent from './ExampleComponent.jsx'
import Header from './Header.jsx'
import Projects from './Projects.jsx'

function App () {
  return (
    <div className='app'>
      <Header />
      <Projects />
      {/* <Route path='/' component={ExampleComponent} /> */}
      {/* <Route path='/' component={ErrorMessage} /> */}
    </div>
  )
}

export default App
