import React from 'react'
import styled from 'styled-components'

const RightNavbar = styled.ul`

@media screen and (max-width: 800px){
    z-index: 5;
    right:0;
    top: 0;
    flex-flow: column unwrap;
    list-style: none;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100%;
    width: 400px;
    background-color: #0D2538;
    transition: transform 0.3s ease-in-out;
    li{
        padding: 18px 10px;
        color: #fff;
    }
    
}

    @media screen and (min-width: 800px){
        visibility: hidden;
         display: none; 
    }
`;

const RightNav = ( {open}) => {
  return (
    <>
        <RightNavbar className='nav-items' open={open}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </RightNavbar>
    </>
  )
}

export default RightNav