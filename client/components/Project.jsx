import React from 'react'

export default function Project (props) {
  const project = props.project
  console.log('TCL: Project -> project', project)

  return (
    <>
      <h1>{project.title}</h1>
      <p><h2>What:</h2>{project.what}</p>
      <p><h2>Who:</h2>{project.who}</p>
      <p><a href={project.link}><h2>{project.title}</h2></a></p>
    </>
  )
}
