import React from 'react'

// import Iconify from '@iconify/iconify'

// import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faHtml5, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
const react = <FontAwesomeIcon icon={faReact} size='lg' />
const node = <FontAwesomeIcon icon={faNode} size='lg' />
const html = <FontAwesomeIcon icon={faHtml5} size='lg' />
const css = <FontAwesomeIcon icon={faCss3Alt} size='lg' />
const javaScript = <FontAwesomeIcon icon={faJsSquare} size='lg' />

export default function Techs (props) {
  const project = props.project

  return (
    <div className='techs'>
      {/* <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script> */}
      {project.tech.map((tech, i) => {
        switch (tech) {
          case 'react': return <div key={i} className='tech'>{react}</div>
          // case 'redux': return <span key={i} className="iconify" data-icon="logos:redux"></span>
          case 'redux': return <div><h1>test</h1><span key={i} className="iconify" data-icon="logos:redux"></span></div>
          case 'node': return <div key={i} className='tech'>{node}</div>
          case 'html': return <div key={i} className='tech'>{html}</div>
          case 'css': return <div key={i} className='tech'>{css}</div>
          case 'javascript': return <div key={i} className='tech'>{javaScript}</div>
          default: return null
        }
      })}
    </div>
  )
}
