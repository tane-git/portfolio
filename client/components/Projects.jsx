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
      <div className='projectsIntro'>
        <h2>Bootcamp Friday Projects</h2>
        <p>We were randomly sorted into teams, and then given complete freedom to develop any random app we wanted, to reinforce the tech we had just learnt that week.</p>
        <p>The projects were fast-paced, hands-on and resulted in messy but inspiring results, proving to ourselfs how much we could accomplish in just 1 day if we worked as team. </p>
        <h2>Bootcamp Final Week Project</h2>
        <p>The final projects began with a cohort wide brainstorming and voting session to decide on the final ideas and teams. </p>
        <p>We then spent the next week working around the clock, as an agile team.</p>
        <p>See my team&apos;s project, Argumentum below!</p>
        <h2>Personal Projects</h2>
        <p>I currently have two personal projects I am working on, however they are not demo ready yet.</p> 
        Watch this space!
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
