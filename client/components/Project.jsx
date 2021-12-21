import React from 'react'

export default function Project (props) {
  const project = props.project

  return (
    <>
      <p><h4>What:</h4>{project.what}</p>
      <p><h4>Who:</h4>{project.who}</p>
      <p><a href={project.link}><h4>{project.title}</h4></a></p>
    </>
  )
}
