import React from 'react';
import logoVideo from '../assets/logoVideo.mp4'

function LaunchPage () {
    
    return (
        <div className='centered sm:flex-centered'>
            <video muted loop autoplay playsinline>
                <source src={logoVideo} type='video/mp4' id='logo-video'>
                </source>
            </video>
        </div>
    )
}

export default LaunchPage