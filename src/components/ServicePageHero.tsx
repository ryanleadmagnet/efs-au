'use client';

import React, { useEffect, useRef } from 'react';

interface ServicePageHeroProps {
    title: string;
    subtitle: string;
    bgImage: string;
}

const ServicePageHero: React.FC<ServicePageHeroProps> = ({ title, subtitle, bgImage }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current || !bgRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate movement (subtle shift)
            const moveX = (clientX - innerWidth / 2) / 25;
            const moveY = (clientY - innerHeight / 2) / 25;

            bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section 
            ref={heroRef}
            className="relative w-full overflow-hidden flex flex-col justify-center text-white"
            style={{ 
                height: '500px',
                padding: '180px 20px 150px' 
            }}
        >
            {/* Moving Background Image */}
            <div 
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{ 
                    backgroundImage: `url('${bgImage}')`,
                    zIndex: 0,
                    transform: 'scale(1.1)' // Start slightly scaled to avoid white edges during move
                }}
            ></div>

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1]"></div>

            <div className="container hero-content relative z-10 flex flex-col md:items-start md:text-left items-center text-center">
                <span className="text-white font-heading font-semibold text-[18px] uppercase tracking-wide block mb-2">
                    {subtitle}
                </span>
                <h1 
                    className="font-heading font-extrabold text-white uppercase m-0 p-0"
                    style={{
                        fontSize: 'min(65px, 12vw)',
                        lineHeight: '1.2em',
                        letterSpacing: '0.5px',
                        textShadow: '0px 0px 10px rgba(0,0,0,0.36)',
                    }}
                >
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default ServicePageHero;
