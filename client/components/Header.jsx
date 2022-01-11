import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import home icon from font awesome
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const github = <FontAwesomeIcon icon={faGithub} size="lg" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" />
const home = <FontAwesomeIcon icon={faHome} size="lg" />

export default function Header () {
  return (
    <>
      <div className='spaceholderHeader'></div>
      <div className='header'>
        <div className='titles'>
          <div className='title'>
            <h1 className='name'>Tane Wilson</h1>
          </div>
          <div className='title'>
            <h2 className='job'>Software Developer</h2>
          </div>
        </div>
        <div className='icons'>
          <div className='connect'>
            {/* <img className='connectImg' src='/images/connect.png' /> */}
            <img className='connectImg' src='/images/dark/connect.png' />
          </div>
          <div className='icon'>
            <a href='https://www.linkedin.com/in/tane-w/' target='_blank' rel='noreferrer' className='iconLink' >
              {linkedIn}
            </a>
          </div>
          <div className='icon'>
            <a href='https://github.com/tane-git' target='_blank' rel='noreferrer' className='iconLink' >
              {github}
            </a>
          </div>
          <div className='icon home'>
            <Link to='/' className='iconLink home'>
              {home}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
