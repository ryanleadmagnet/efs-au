'use client';
import { useEffect, useRef } from 'react';

export default function TrustIndexWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        
        // Clean up previous script if any to avoid duplicates in devmode
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?3fa9b5f6870d21715c66ad4b9d6';
        script.defer = true;
        script.async = true;

        containerRef.current.appendChild(script);
    }, []);

    return <div ref={containerRef} className="trustindex-container" style={{ minHeight: '200px' }} />;
}
