import React from 'react'

// import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
const react = <FontAwesomeIcon icon={faReact} size='lg' />

export default function Project (props) {
  const project = props.project

  return (
    <>
      <div className='projectSection'><h4>What:</h4><p className='what'>{project.what}</p></div>
      <div className='projectSection'><h4>Who:</h4><p className='who'>{project.who}</p></div>
      <div className='projectSection'>
        <h4>Link:</h4>
        <a href={project.link} target='_blank' rel='noreferrer'>
          {/* <img className='projectImg' src={`images/projects/${project.image}`} alt={project.imageAlt} /> */}
          <div className='projectImgSection'>
            <img className='projectImg' src={`images/projects/${project.image}`} alt={project.imageAlt} />
          </div>
        </a>
      </div>
      <div className='projectSection'><h4>Tech:</h4>
        {react}
      </div>
      <div className='projectSection'><h4>Note:</h4><p className='note'>{project.note}</p></div>
    </>
  )
}
