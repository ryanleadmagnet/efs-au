'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        // --- Intersection Observer for Scroll Animations ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Once visible, we don't need to observe it anymore
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Find all elements with .animate-on-scroll that aren't already visible
        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // --- Handlers ---
        const stickyHeader = document.getElementById('sticky-header');
        const handleScroll = () => {
            // Sticky header
            if (stickyHeader) {
                if (window.scrollY > 300) {
                    stickyHeader.classList.add('visible');
                } else {
                    stickyHeader.classList.remove('visible');
                }
            }

            // Parallax circles
            const parallaxElements = document.querySelectorAll('.parallax-circle');
            const sectionsCircle = document.getElementById('sections-circle');

            requestAnimationFrame(() => {
                parallaxElements.forEach(el => {
                    const htmlEl = el as HTMLElement;
                    const rect = htmlEl.parentElement?.getBoundingClientRect();
                    if (rect) {
                        const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
                        htmlEl.style.transform = `translateY(${centerOffset * 0.3}px)`;
                    }
                });

                if (sectionsCircle) {
                    const rect = sectionsCircle.parentElement?.getBoundingClientRect();
                    if (rect) {
                        const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
                        sectionsCircle.style.transform = `translateY(${centerOffset * 0.35}px)`;
                    }
                }
            });
        };

        // --- Global Quote Trigger Listener ---
        const handleQuoteClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('quote-trigger') || target.closest('.quote-trigger')) {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-quote-modal'));
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleQuoteClick);
        // Run once on mount to check initial position
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleQuoteClick);
        };
    }, [pathname]); // Re-run when route changes

    return null;
}
