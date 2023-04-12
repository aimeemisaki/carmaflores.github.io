import React from 'react';
import logoVideo from '../assets/logoVideo.mp4'

function LaunchPage () {
    
    return (
        <div className='centered' style={{width: '100vw'}}>
            <iframe
            id='iframe-logo'
            src="https://player.vimeo.com/video/513255357?autoplay=1&loop=1&muted=1&controls=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{ width: '100%' }}
            ></iframe>
        </div>
    )
}

export default LaunchPage