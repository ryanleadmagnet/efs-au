'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header({ alwaysSticky = false }: { alwaysSticky?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalUrl, setModalUrl] = useState('https://form-efs.vercel.app');
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        const initialDropdowns: string[] = [];
        if (pathname.startsWith('/services')) initialDropdowns.push('services');
        if (pathname.startsWith('/technology')) initialDropdowns.push('technology');
        setOpenDropdowns(initialDropdowns);
    }, [pathname]);

    // Listen for global open quote modal event
    useEffect(() => {
        const handleOpen = () => setIsModalOpen(true);
        window.addEventListener('open-quote-modal', handleOpen);
        
        // Also listen for clicks on any element with .quote-trigger
        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const trigger = target.closest('.quote-trigger') as HTMLElement;
            if (trigger) {
                e.preventDefault();
                const customUrl = trigger.getAttribute('data-iframe-url');
                if (customUrl) {
                    setModalUrl(customUrl);
                } else {
                    setModalUrl('https://form-efs.vercel.app');
                }
                setIsModalOpen(true);
            }
        };
        document.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('open-quote-modal', handleOpen);
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    // Handle body overflow when menu or modal is open
    useEffect(() => {
        if (isMenuOpen || isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen, isModalOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdowns(prev => 
            prev.includes(name) ? prev.filter(d => d !== name) : [...prev, name]
        );
    };

    return (
        <>
            {/* Modal Overlay Overlay */}
            {/* Mobile Menu Overlay */}
            <div 
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Quote Modal Overlay */}
            <div id="quote-modal" className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
                <div className="modal-content">
                    <button className="modal-close" onClick={() => setIsModalOpen(false)}><i className="fas fa-times"></i></button>
                    <iframe src={modalUrl} title="Get a Quote" frameBorder="0"></iframe>
                </div>
            </div>

            {/* HEADER TOP BAR */}
            <div className="header-top-bar">
                <div className="container">
                    <div className="top-bar-content">
                        <span className="top-bar-text">Save up to 30% on a home battery</span>
                        <img src="/assets/Asset-43.svg" alt="Battery Icon"
                            className="top-bar-icon" />
                        <a href="#" className="top-bar-link quote-trigger" onClick={toggleModal}>Check eligibility &gt;</a>
                    </div>
                </div>
            </div>

            {/* MAIN NAV HEADER (Transparent over Hero) */}
            {!alwaysSticky && (
                <header className="main-header" id="main-header">
                    <div className="container header-container">
                        <div className="logo">
                        <Link href="/">
                            <img src="/image-0.png" alt="EFS Solar Logo" />
                        </Link>
                    </div>
                    <nav className="desktop-nav">
                        <ul>
                            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li className="has-dropdown"><Link href="/services/residential-solar" className={pathname.startsWith('/services') ? 'active' : ''}>Services <i className="fas fa-caret-down"></i></Link>
                                <ul className="dropdown">
                                    <li><Link href="/services/residential-solar" className={pathname === '/services/residential-solar' ? 'active' : ''}>Residential Solar</Link></li>
                                    <li><Link href="/services/commercial-solar" className={pathname === '/services/commercial-solar' ? 'active' : ''}>Commercial Solar</Link></li>
                                    <li><Link href="/services/batteries" className={pathname === '/services/batteries' ? 'active' : ''}>Batteries</Link></li>
                                    <li><Link href="/services/air-conditioning" className={pathname === '/services/air-conditioning' ? 'active' : ''}>Air-Conditioning</Link></li>
                                </ul>
                            </li>
                            <li className="has-dropdown"><Link href="/technology/energizer" className={pathname.startsWith('/technology') ? 'active' : ''}>Technology <i className="fas fa-caret-down"></i></Link>
                                <ul className="dropdown">
                                    <li><Link href="/technology/energizer" className={pathname === '/technology/energizer' ? 'active' : ''}>Energizer</Link></li>
                                    <li><Link href="/technology/goodwe" className={pathname === '/technology/goodwe' ? 'active' : ''}>GoodWe</Link></li>
                                    <li><Link href="/technology/tesla-powerwall" className={pathname === '/technology/tesla-powerwall' ? 'active' : ''}>Tesla Powerwall</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/reviews" className={pathname === '/reviews' ? 'active' : ''}>Reviews</Link></li>
                            <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link href="/career" className={pathname === '/career' ? 'active' : ''}>Career</Link></li>
                            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="mobile-menu-toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
            )}

            {/* STICKY HEADER (White background, appears on scroll) */}
            <header className={`sticky-header ${alwaysSticky ? 'visible' : ''}`} id="sticky-header" style={alwaysSticky ? { position: 'sticky', top: 0, transform: 'translateY(0)', opacity: 1 } : {}}>
                <div className="container header-container">
                    <div className="logo">
                        <Link href="/">
                            <img src="/image-1.png" alt="EFS Solar Logo Dark" />
                        </Link>
                    </div>
                    <nav className="desktop-nav sticky-nav">
                        <ul>
                            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li className="has-dropdown"><Link href="/services/residential-solar" className={pathname.startsWith('/services') ? 'active' : ''}>Services <i className="fas fa-caret-down"></i></Link>
                                <ul className="dropdown">
                                    <li><Link href="/services/residential-solar" className={pathname === '/services/residential-solar' ? 'active' : ''}>Residential Solar</Link></li>
                                    <li><Link href="/services/commercial-solar" className={pathname === '/services/commercial-solar' ? 'active' : ''}>Commercial Solar</Link></li>
                                    <li><Link href="/services/batteries" className={pathname === '/services/batteries' ? 'active' : ''}>Batteries</Link></li>
                                    <li><Link href="/services/air-conditioning" className={pathname === '/services/air-conditioning' ? 'active' : ''}>Air-Conditioning</Link></li>
                                </ul>
                            </li>
                            <li className="has-dropdown"><a href="#" className={pathname.startsWith('/technology') ? 'active' : ''}>Technology <i className="fas fa-caret-down"></i></a>
                                <ul className="dropdown">
                                    <li><Link href="/technology/energizer" className={pathname === '/technology/energizer' ? 'active' : ''}>Energizer</Link></li>
                                    <li><Link href="/technology/goodwe" className={pathname === '/technology/goodwe' ? 'active' : ''}>GoodWe</Link></li>
                                    <li><Link href="/technology/tesla-powerwall" className={pathname === '/technology/tesla-powerwall' ? 'active' : ''}>Tesla Powerwall</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/reviews" className={pathname === '/reviews' ? 'active' : ''}>Reviews</Link></li>
                            <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link href="/career" className={pathname === '/career' ? 'active' : ''}>Career</Link></li>
                            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="mobile-menu-toggle sticky-toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>

            {/* MOBILE NAVIGATION MENU */}
            <div className={`mobile-nav-menu ${isMenuOpen ? 'active' : ''}`} id="mobile-nav-menu">
                <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="mobile-nav-content" style={{ paddingBottom: '100px' }}>
                    <ul>
                        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li className={`has-dropdown mobile-dropdown-item`}>
                            <a 
                                href="#" 
                                onClick={(e) => toggleDropdown('services', e)} 
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                            >
                                Services <i className={`fas fa-caret-${openDropdowns.includes('services') ? 'up' : 'down'}`}></i>
                            </a>
                            <ul className={`mobile-dropdown ${openDropdowns.includes('services') ? 'open' : ''}`}>
                                <li><Link href="/services/residential-solar" className={pathname === '/services/residential-solar' ? 'active' : ''}>Residential Solar</Link></li>
                                <li><Link href="/services/commercial-solar" className={pathname === '/services/commercial-solar' ? 'active' : ''}>Commercial Solar</Link></li>
                                <li><Link href="/services/batteries" className={pathname === '/services/batteries' ? 'active' : ''}>Batteries</Link></li>
                                <li><Link href="/services/air-conditioning" className={pathname === '/services/air-conditioning' ? 'active' : ''}>Air-Conditioning</Link></li>
                            </ul>
                        </li>
                        <li className={`has-dropdown mobile-dropdown-item`}>
                            <a 
                                href="#" 
                                onClick={(e) => toggleDropdown('technology', e)} 
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                            >
                                Technology <i className={`fas fa-caret-${openDropdowns.includes('technology') ? 'up' : 'down'}`}></i>
                            </a>
                            <ul className={`mobile-dropdown ${openDropdowns.includes('technology') ? 'open' : ''}`}>
                                <li><Link href="/technology/energizer" className={pathname === '/technology/energizer' ? 'active' : ''}>Energizer</Link></li>
                                <li><Link href="/technology/goodwe" className={pathname === '/technology/goodwe' ? 'active' : ''}>GoodWe</Link></li>
                                <li><Link href="/technology/tesla-powerwall" className={pathname === '/technology/tesla-powerwall' ? 'active' : ''}>Tesla Powerwall</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/reviews" className={pathname === '/reviews' ? 'active' : ''}>Reviews</Link></li>
                        <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link href="/career" className={pathname === '/career' ? 'active' : ''}>Career</Link></li>
                        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
