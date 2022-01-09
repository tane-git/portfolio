import React from 'react'
import Techs from './Techs.jsx'

export default function Project (props) {
  const project = props.project

  return (
    <div className='projectPanel'>
      <div className='projectInfo'>
        <div className='projectColumn'>
          <div className='projectSection'><h4>What:</h4><p className='what'>{project.what}</p></div>
        </div>
        <div className='projectColumn'>
          <div className='projectSection'><h4>Who:</h4><p className='who'>{project.who}</p></div>
        </div>
      </div>
      <div className='projectSection'>
        <h4>Link:</h4>
        <p> <a href={project.link} target='_blank' rel='noreferrer'>
          <div className='projectImgSection'>
            <img className='projectImg' src={`images/projects/${project.image}`} alt={project.imageAlt} />
          </div>
        </a> </p>
      </div>
      <div className='projectSection'><h4>Tech:</h4>
        <Techs project={project} />
      </div>
      <div className='projectSection'><h4>Note:</h4><p className='note'>{project.note}</p></div>
    </div>
  )
}
