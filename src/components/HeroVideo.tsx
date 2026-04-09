'use client';

import { useState, useEffect } from 'react';

export default function HeroVideo() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);

    useEffect(() => {
        // Randomly choose from Sequence-01.m4v to Sequence-04.mp4
        const randomIndex = Math.floor(Math.random() * 4) + 1;
        const extension = randomIndex === 4 ? 'mp4' : 'm4v';
        setVideoSrc(`/assets/Sequence-0${randomIndex}.${extension}`);
    }, []);

    // Return the video structure. 
    // We keep the container stable to avoid layout shifts.
    return (
        <div className="hero-video-container">
            <video 
                key={videoSrc} // Using key ensures the video element reloads correctly when src changes
                autoPlay 
                muted 
                playsInline 
                loop
            >
                {videoSrc && <source src={videoSrc} type="video/mp4" />}
            </video>
            <div className="hero-overlay"></div>
        </div>
    );
}
