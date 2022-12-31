import React from 'react';
import Card from "react-bootstrap/Card";
import "./Card.css"


function DisplayCard(type) {
  return (
    <>
    <Card className="displayCard upperLayer">
    <Card.Title className='cardTitle'>{type.name}</Card.Title>
    <Card.Subtitle>{type.desc}</Card.Subtitle>
    <Card.Link href={`${type.link}`}>Github Page</Card.Link>
    {console.log(type)}
    <div className = 'toolset'>
 {   type.tools.map((item) => {
        return (
            <Card.Title className='tools-chips'>{item}</Card.Title>
        )
    })}
    </div>
    </Card>
    </>
  )
}

export default DisplayCard