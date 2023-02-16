import React, {useState} from 'react';
import RightNav from "../RightNav/RightNav";
import styled from 'styled-components';

const StyledBurger = styled.div`
bottom: 15px;
width: 4rem;
height: 6rem;
position: fixed;
right: 20px;
display: flex;
z-index: 6;
flex-flow: column;

 div{
    width: 2rem;
    padding: 0.2rem;
    margin-top: 0.3rem ;

    background-color: ${({open}) => open ? '#333' : '#ccc'};
    transform-origin: 0px;
    transition: all 0.3s linear;
    border-radius: 10px;

    
    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    
    }
    &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}

@media(min-width: 800px){
    display: none;
    visibility: hidden;
}
`;

const Burger = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
    <StyledBurger open = {open} onClick={()=> setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
    <RightNav open = {open}/>
    </>
      
  )
}

export default Burger;