import React from 'react'
import DisplayCard from '../Card/Card'
import {ProjectItems} from './ProjectItems'
import './Projects.css'

function Projects() {
  return (
    <div className="projectCards">
     { ProjectItems.map((item, index) => {
        return (
          <DisplayCard name={item.name} desc={item.desc} link={item.link} tools = {item.tools} />
        )
      })}

    </div>
  )
}

export default Projects