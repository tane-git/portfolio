import React, { useEffect } from 'react'
import Project from './Project.jsx'
import accordion from '../helpers/accordion.js'

export default function Projects () {
  const projects = [
    {
      title: 'Argumentum',
      what: 'My final project for the Web Dev Bootcamp. A full stack web application built in 7 days, that allows users to select topics they are intereted in discussing, and then allows them to live chat with people that may disagree with them.',
      who: 'A team of 4. I was the Frontend Lead and Product Owner.',
      link: 'argumentum-eda.herokuapp.com'
    },
    {
      title: 'CoinGun',
      what: 'A web app that shows the currently trending cryptocurrencies on GeckoCoin.com',
      who: 'A team of 4, my pair programming partner and I did the Backend and integration into the Frontend.',
      link: 'http://coingun.herokuapp.com/#/'
    }
  ]

  useEffect(() => {
    accordion()
  }, [])

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {projects.map(project => {
        return (
          <div key={project.title}>
            <button className='accordion'>{project.title}</button>
            <div className='panel'>
              <Project project={project} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
