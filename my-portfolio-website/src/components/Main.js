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

const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 1rem;
transform: rotate(-90deg) translate(-50%,-50%);
text-decoration: none;
z-index: 3;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;

`

const About = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 3;
`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
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
      <Work to="/work">
        <h3>
          My Work..
        </h3>
      </Work>
      <BottomBar>
        <About to="/about">
          <h3>
            About me..
          </h3>
        </About>
        <Skills to="/skills">
          <h3>
           My Skills..
          </h3>
        </Skills>
      </BottomBar>
       </Container>
    </MainContainer>
  )
}

export default Main
