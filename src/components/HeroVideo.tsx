'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroVideo() {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Randomly choose from Sequence-01 to Sequence-04
        const randomIndex = Math.floor(Math.random() * 4) + 1;
        const extension = randomIndex === 4 ? 'mp4' : 'm4v';
        setVideoSrc(`/assets/Sequence-0${randomIndex}.${extension}`);
    }, []);

    // Manual loop: when the video ends, seek to 0 and restart immediately.
    // This avoids the buffering pause caused by the native `loop` attribute,
    // since the whole file is already in memory via preload="auto".
    const handleEnded = () => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
    };

    return (
        <div className="hero-video-container">
            {videoSrc && (
                <video
                    ref={videoRef}
                    key={videoSrc}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={handleEnded}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            <div className="hero-overlay"></div>
        </div>
    );
}
