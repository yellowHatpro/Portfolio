import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

 function AboutCarousel() {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='../public/images/github-logo.png'
            alt="Github"
          />
          <Carousel.Caption>
            <h3>Github</h3>
            <p>Open Source Contributions.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
            alt="Codeforces"
          />
      
          <Carousel.Caption>
            <h3>Competitive Programming</h3>
            <p>I am also interested in doing Competitive Programming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://leetcode.com/static/images/LeetCode_logo_rvs.png'
            alt="Leetcoding"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
}
export default AboutCarousel