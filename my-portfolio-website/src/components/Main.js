import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'

const Container = styled.div`
padding: 2rem;
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: 2rem;
text-decoration: none;
z-index: 3;
`

const Main = () => {
  return (
    <MainContainer>
       <Container>
      <LogoComponent/>
      <PowerButton/>
      <SocialIcons/>
      <Contact target="_blank" to={{pathname:"mailto:yellowhatpro3119@gmail.com"}}>
        <h3>
          Contact me..
        </h3>
      </Contact>
       </Container>
    </MainContainer>
  )
}

export default Main
