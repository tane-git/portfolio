import React, { useLayoutEffect, useState } from 'react'

function useWindowSize () {
  const [size, setSize] = useState()
  useLayoutEffect(() => {
    function updateSize () {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

// function getSize (props) {
//   const width = useWindowSize()
//   return <span>Window size: {width} x {height}</span>
// }

export default function About () {
  // return (
  //   <div className='about'>
  //     <div className='sectionTitle'>
  //       <h1>About</h1>
  //     </div>
  //     <div className='aboutSection'>
  //       <p>I have recently completed a bootcamp in Web Development after being fascinated by software all my life.</p>
  //       <p>I am currently looking to join an awesome Dev Team that encourages and supports each other while working on cutting-edge Tech.</p>
  //       <p>Please feel free to check out some of the projects I have developed and if you think I might be a good fit for your team reach out, I would love to discuss any oppurtunities.</p>
  //     </div>
  //   </div>
  // )

  // figure out view width to make table responsive
  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // const mobile = vw < 768

  const size = useWindowSize()
  const mobile = size < 768

  if (!mobile) {
    return (
      <div className='about'>
        <div className='sectionTitle'>
          <h1>About</h1>
        </div>
        <div className='aboutTable'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className='myself'>
                    <h2>Myself</h2>
                    <p>I am currently looking to join an awesome Dev Team that encourages and supports each other while working on cutting-edge Tech.</p>
                    <p>Please feel free to check out some of the projects I have developed and if you think I might be a good fit for your team, reach out, I would love to discuss any oppurtunities.</p>
                  </div>
                </td>
                <td>
                  <div className='bootcamp'>
                    <h2>Bootcamp</h2>
                    <p>Enspiral Dev Academy was a 15-week intensive bootcamp that I completed at the end of 2021.</p>
                    <p>My cohort and I got stuck in, developing Full Stack Web Applications as a team, in an intense but encouraging and supportive environment.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div className='about'>
        <div className='sectionTitle'>
          <h1>About</h1>
        </div>
        <div className='aboutTable'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className='myself'>
                    <h2>Myself</h2>
                    <p>I have recently completed a bootcamp in Web Development after being fascinated by software all my life.</p>
                    <p>I am currently looking to join an awesome Dev Team that encourages and supports each other while working on cutting-edge Tech.</p>
                    <p>Please feel free to check out some of the projects I have developed and if you think I might be a good fit for your team reach out, I would love to discuss any oppurtunities.</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='bootcamp'>
                    <h2>Bootcamp</h2>
                    <p>Enspiral Dev Academy was a 15-week intensive bootcamp that I completed at the end of 2021.</p>
                    <p>My cohort and I got stuck in, developing Full Stack Web Applications as team in an intense but supportive environment</p>
                    <p>Friday Projects were randomly selected teams, brainstorming a random and fun app idea to develop, to reinforce the tech we had learnt that week. They were fast-paced and hands-on and resulted in messy but inspiring results, proving to ourselfs how much we could accomplish in just 1 day if we worked as team.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
