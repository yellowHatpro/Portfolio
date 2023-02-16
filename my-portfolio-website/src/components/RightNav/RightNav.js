import React from 'react'
import styled from 'styled-components'
import { MenuItems } from "../Navbar/MenuItems";
import {Link} from "react-router-dom"

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
    transition: transform 0.3s ease-in-out;
      /*Glass Effect*/
    /*1. The alpha value controls the transparency*/
    background: rgba(145, 153, 205, 0.9);

    /*2. Adding the shadow*/
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.18 );

    /*3. Adding our borders*/
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    li{
        padding: 18px 10px;
        color: #fff;
        &:hover{
            background-color: #586282;
        }
        border-radius: 1rem 1rem 1rem 1rem;
        margin: 10px 10px;
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
        <RightNavbar open={open}>
        {MenuItems.map((item, index) => {
          return (
                <Link to= {`${item.link}`}>
                      <li key={index}>
                 {item.name}
            </li>
                </Link>
          );
        })}
        </RightNavbar>
    </>
  )
}

export default RightNav