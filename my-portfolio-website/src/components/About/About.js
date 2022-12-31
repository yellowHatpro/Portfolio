import React from 'react'
import './About.css'

function About() {
  return (
    <div
    className='about'
    >
      <div className="about-me">
        <div className="heading"> ABOUT ME </div>
        <div className="about-me-content"> 
        <div className="about-github">Github</div>
        <div className="about-codeforces">codeforces</div>
        <div className="about-leetcode">Leetcode</div>
        </div>
        </div>

        
        <div className="about-xp">
        <div className="heading"> EXPERIENCE </div>
        <div className="about-xp-content"> TODO: Timeline </div>
        </div>

    </div>
  )
}

export default About