import React from 'react'
import './About.css'
import AboutCarousel from '../Carousel/Carousel'

function About() {
  return (
    <div
    className='about'
    >
      <div className="about-me">
        <div className="heading"> ABOUT ME </div>
       <AboutCarousel/>
      </div>

        
        <div className="about-xp">
        <div className="heading"> EXPERIENCE </div>
        <div className="about-xp-content"> TODO: Timeline </div>
        </div>

    </div>
  )
}

export default About