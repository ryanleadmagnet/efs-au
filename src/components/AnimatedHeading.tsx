'use client';

import React, { useEffect, useRef, ElementType, ReactNode, useState } from 'react';

interface AnimatedHeadingProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    delay?: number; // base delay in ms
}

export default function AnimatedHeading({
    tag = 'h2',
    children,
    className = '',
    style,
    delay = 0,
}: AnimatedHeadingProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    const Tag = tag as ElementType;

    return (
        <Tag
            ref={ref}
            className={`${className}`}
            style={{
                ...style,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
            }}
        >
            {children}
        </Tag>
    );
}
