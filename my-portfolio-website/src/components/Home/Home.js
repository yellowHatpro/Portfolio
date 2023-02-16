import React from 'react';
import './Home.css';
import ashutosh from  '../../images/ashutosh.png';


function Home(){
    return <div className='home'>
        <div className="intro">
                <h1 className='intro-my-name'>Hi there <br/> I am Ashutosh Aswal.</h1>
                <p className='intro-my-description'>An Open Source programmer, with experience in Android Development. I enjoy exploring different tech stacks, and doing Competitive Programming in my spare time. </p>
            </div>
            <div className="ashutosh-pic-container">
            <img src = {ashutosh} alt='Ashutosh Aswal' className='ashutosh-pic'/>
                </div>
    </div>
}
export default Home;