import React from 'react';
import './Home.css';
import { Player } from '@lottiefiles/react-lottie-player';


function Home(){
    return <div className='home'>
        <div className="intro">
                <h1 className='intro-my-name'>Hi there <br/> I am Ashutosh Aswal.</h1>
                <p className='intro-my-description'>An Open Source contributor, experienced in Android Development, with a hunger to learn and explore different technologies.</p>
            </div>
            <div className="lottie">
            <Player
                    src="https://assets6.lottiefiles.com/packages/lf20_nOfkZot060.json"
                    className='lottie-player'
                    autoplay
                    loop
                    style={{ height: '400px', width: '400px' }}
                >
                </Player>
                </div>
    </div>
}
export default Home;