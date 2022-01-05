import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithub} size="lg" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" />

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
        <div className='connect'>
          {/* <img className='connectImg' src='/images/connect.png' /> */}
          <img className='connectImg' src='/images/dark/connect.png' />
        </div>
        <div className='icon'>
          <a href='https://www.linkedin.com/in/tane-w/' target='_blank' rel='noreferrer' >{linkedIn}</a>
        </div>
        <div className='icon'>
          <a href='https://github.com/tane-git' target='_blank' rel='noreferrer' >{github}</a>
        </div>
      </div>
    </div>
  )
}
