import React from 'react'
import Techs from './Techs.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} size="lg" />

export default function Project (props) {
  const project = props.project

  let projectType = ''

  if (project.type === 'Personal Project') {
    projectType = <h3>Personal Project</h3>
  } else if (project.type === 'Bootcamp Friday Project') {
    projectType = <><p>We were randomly sorted into teams, and then given complete freedom to develop any random app we wanted, to reinforce the tech we had just learnt that week.</p><p>The projects were fast-paced, hands-on and resulted in messy but inspiring results, proving to ourselfs how much we could accomplish in just 1 day, if we worked as team. </p></>
  } else if (project.type === 'Bootcamp Final Project') {
    projectType = <><p>The final projects began with a cohort wide brainstorming and voting session to decide on the final ideas and teams. </p><p>We then spent the next week working around the clock, as an agile team, to develop an app and cement our coding skills.</p></>
  }

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
        <h4>Project Type: {project.type}</h4>
        {projectType}
      </div>
      <div className='projectSection'>
        <h4>Link:</h4>
        <a href={project.link} target='_blank' rel='noreferrer'>
          <div className='projectImgSection'>
            <img className='projectImg' src={`images/projects/${project.image}`} alt={project.imageAlt} />
          </div>
        </a>
      </div>
      <div className='projectSection'><h4>Tech:</h4>
        <Techs project={project} />
      </div>
      <div className='projectSection'><h4>Code:</h4>
        <a href={project.github} target='_blank' rel='noreferrer'>
          <div className='projectIcon'>
            {github}
          </div>
        </a>
      </div>
      <div className='projectSection'><h4>Note:</h4><p className='note'>{project.note}</p></div>
    </div>
  )
}
