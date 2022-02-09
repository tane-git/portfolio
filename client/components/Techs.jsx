import React from 'react'

export default function Techs (props) {
  const project = props.project

  return (
    <div className='techs'>
      {/* <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script> */}
      {project.tech.map((tech, i) => {
        // how can I make this more programattic?
        switch (tech) {
          case 'next': return <div key={i} className='tech'><span className="iconify" data-icon="cib:next-js"></span></div>
          case 'react': return <div key={i} className='tech'><span className="iconify" data-icon="logos:react"></span></div>
          case 'redux': return <div key={i} className='tech'><span className="iconify" data-icon="logos:redux"></span></div>
          case 'node': return <div key={i} className='tech'><span className="iconify" data-icon="logos:nodejs"></span></div>
          case 'html': return <div key={i} className='tech'><span className="iconify" data-icon="vscode-icons:file-type-html"></span></div>
          case 'css': return <div key={i} className='tech'><span className="iconify" data-icon="vscode-icons:file-type-css"></span></div>
          case 'javascript': return <div key={i} className='tech'><span className="iconify" data-icon="logos:javascript"></span></div>
          case 'handlebars': return <div key={i} className='tech'><span className="iconify" data-icon="simple-icons:handlebarsdotjs"></span></div>
          case 'sql': return <div key={i} className='tech'><span className="iconify" data-icon="carbon:sql"></span></div>
          case 'tailwind': return <div key={i} className='tech'><span className="iconify" data-icon="logos:tailwindcss-icon"></span></div>
          case 'threeJs': return <div key={i} className='tech'><span className="iconify" data-icon="simple-icons:threedotjs"></span></div>
          case 'knex': return <div key={i} className='tech'><span className="iconify" data-icon="logos:knex"></span></div>
          default: return null
        }
      })}
    </div>
  )
}
