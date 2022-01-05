import React from 'react'

export default function Project (props) {
  const project = props.project

  return (
    <>
      <div className='projectSection'><h4>What:</h4>{project.what}</div>
      <div className='projectSection'><h4>Who:</h4>{project.who}</div>
      <div className='projectSection'>
        <a href={project.link} target='_blank' rel='noreferrer'>
          <h4>Check it out!</h4>
          <img className='projectImg' src={`images/projects/${project.image}`} alt={project.imageAlt} />
        </a>
      </div>
      <div className='projectSection'><h4>Note:</h4>{project.note}</div>
    </>
  )
}
