import React from 'react'

// import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons'
const react = <FontAwesomeIcon icon={faReact} size='lg' />
const node = <FontAwesomeIcon icon={faNode} size='lg' />
const html5 = <FontAwesomeIcon icon={faHtml5} size='lg' />
const css3 = <FontAwesomeIcon icon={faCss3} size='lg' />
const javascript = <FontAwesomeIcon icon={faJsSquare} size='lg' />

export default function Techs (props) {
  const project = props.project

  project.tech.map((tech, i) => {
    switch (tech) {
      case 'react': return <div key={i} className='tech'>{react}</div>
      case 'node': return <div key={i} className='tech'>{node}</div>
      case 'html5': return <div key={i} className='tech'>{html5}</div>
      case 'css3': return <div key={i} className='tech'>{css3}</div>
      case 'javascript': return <div key={i} className='tech'>{javascript}</div>
      default: return null
    }
  })
}
