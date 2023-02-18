import React from 'react'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

const StyledCarousel = styled.div`
    width: 20em;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 0 4rem;
    margin-top: 80px;
    margin-bottom: 80px;
    border-radius: 2rem;
        /*Glass Effect*/
  /*1. The alpha value controls the transparency*/
  background: rgba(191, 217, 243, 0.3);

/*2. Adding the shadow*/
box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.18 );

/*3. Adding our borders*/
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
    @media(min-width: 800px){
      width: 20em;
      height: 20rem;
        margin-top: 100px;
        margin-bottom: 100px;
    }
`;


 function AboutCarousel() {
    return (
        <StyledCarousel >
        <Carousel>
        <Carousel.Item>
          <a href="https://www.github.com/yellowhatpro">
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/github-1521488-1288230.png?w=256&f=avif'
            alt="Github"
          />
          </a>
          <Carousel.Caption>
            <h2>Open Source</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://www.codeforces.com/profile/yellowhatpro">
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/code-forces-3629285-3031869.png?w=256&f=avif'
            alt="Codeforces"
          />
          </a>
          <Carousel.Caption>
            <h2>Competitive Programming</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://www.leetcode.com/yellowhatpro">
          <img
            className=""
            src='https://cdn.iconscout.com/icon/free/png-512/leetcode-3772786-3146919.png?w=256&f=avif'
            alt="Leetcoding"
          />
          </a>
          <Carousel.Caption>
            <h2>DS and Algorithms</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </StyledCarousel>
    )
}
export default AboutCarousel