import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const github = <FontAwesomeIcon icon={faGithub} size="lg" />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" />

export default function Intro () {
  return (
    <div className='intro'>
      <div className='introName'>
        <h2 className='introName'>Tane Wilson</h2>
      </div>
      <div className='introJobSection'>
        <h1 className='introJob'>Software Developer</h1>
      </div>
      <div className='introDescriptionHolder'>
        <div className='introDescription'>
          I have recently completed a coding bootcamp and I am excited to enter the tech industry.
        </div>
      </div>
      <div className='introIcons'>
        <div className='linkedIn'>
          <a href='https://www.linkedin.com/in/tane-w/' target='_blank' rel='noreferrer' className='iconLink' >
            {linkedIn}
          </a>
        </div>
        <div className='git'>
          <a href='https://github.com/tane-git' target='_blank' rel='noreferrer' className='iconLink' >
            {github}
          </a>
        </div>
        <div className='portfolio'>
          <Link to='/about' className='portfolioLink'>
            <button className='portfolioButton'>
              PORTFOLIO
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
