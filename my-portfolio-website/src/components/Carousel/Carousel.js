import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

 function AboutCarousel() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/github-1521488-1288230.png?w=256&f=avif'
            alt="Github"
          />
          <Carousel.Caption>
            <h3>Github</h3>
            <p>Open Source Contributions.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/code-forces-3629285-3031869.png?w=256&f=avif'
            alt="Codeforces"
          />
      
          <Carousel.Caption>
            <h3>Competitive Programming</h3>
            <p>I am also interested in doing Competitive Programming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/leetcode-3772786-3146919.png?w=256&f=avif'
            alt="Leetcoding"
          />
      
          <Carousel.Caption>
            <h3>DS and Algorithms</h3>
            <p>Currently learning Data Structures and Algorithms.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
}
export default AboutCarousel