import React, { useEffect } from 'react'
import Project from './Project.jsx'
import accordion from '../helpers/accordion.js'
import projectsData from '../helpers/projects.js'

export default function Projects () {
  const projects = projectsData()

  useEffect(() => {
    accordion()
  }, [])

  return (
    <div className='projects'>
      <div className='sectionTitle'>
        <h1>Projects</h1>
      </div>
      {projects.map(project => {
        return (
          <div className='project' key={project.title}>
            <button className='accordion'><h2>{project.title}</h2></button>
            <div className='panel'>
              <Project project={project} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
