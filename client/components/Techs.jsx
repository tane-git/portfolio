import React from 'react'

export default function Techs (props) {
  const project = props.project

  return (
    <div className='techs'>
      {/* <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script> */}
      {project.tech.map((tech, i) => {
        switch (tech) {
          case 'react': return <div key={i} className='tech'><span className="iconify" data-icon="logos:react"></span></div>
          case 'redux': return <div key={i} className='tech'><span className="iconify" data-icon="logos:redux"></span></div>
          case 'node': return <div key={i} className='tech'><span className="iconify" data-icon="logos:nodejs"></span></div>
          case 'html': return <div key={i} className='tech'><span className="iconify" data-icon="vscode-icons:file-type-html"></span></div>
          case 'css': return <div key={i} className='tech'><span className="iconify" data-icon="vscode-icons:file-type-css"></span></div>
          case 'javascript': return <div key={i} className='tech'><span className="iconify" data-icon="logos:javascript"></span></div>
          default: return null
        }
      })}
    </div>
  )
}
