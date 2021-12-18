import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} />

export default function Header () {
  return (
    <div className='header'>
      <div className='titles'>
        <div className='title'>
          <h1>Tane Wilson</h1>
        </div>
        <div className='title'>
          <h2>Software Developer</h2>
        </div>
      </div>
      <div className='icons'>
        <div className='icon'>
          {github}
        </div>
        <div className='icon'>
          {linkedIn}
        </div>
      </div>
    </div>
  )
}
