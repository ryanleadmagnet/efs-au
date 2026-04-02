import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import TrustIndexWidget from '@/components/TrustIndexWidget';

export const metadata: Metadata = {
    title: 'About EFS Solar — Certified Solar Installers Gold Coast & Sydney',
    description: 'Learn about EFS Solar, a trusted CEC-certified solar installer serving Gold Coast and Sydney. Our expert team delivers premium solar and battery solutions.',
    alternates: { canonical: 'https://www.efssolar.com.au/about' },
    openGraph: { title: 'About EFS Solar', description: 'Certified solar installers on the Gold Coast and Sydney.', url: 'https://www.efssolar.com.au/about' },
};

export default function AboutPage() {

    return (
        <>
            <Header />
            <main>

                {/* ── Hero ─────────────────────────────────────────────── */}
                <section
                    className="about-hero"
                    style={{
                        backgroundImage: 'url(/modern-office.jpg)',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        padding: '180px 20px 150px',
                        position: 'relative',
                    }}
                >
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0,0,0,0.55)',
                    }} />
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <h1 style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: 'clamp(52px, 8vw, 85px)',
                            fontWeight: 700,
                            color: '#fff',
                            textTransform: 'uppercase',
                            lineHeight: 1.05,
                            letterSpacing: '-1px',
                        }}>
                            Who We Are
                        </h1>
                    </div>
                </section>

                {/* ── EFS Solar intro (light grey bg) ──────────────────── */}
                <section style={{ backgroundColor: '#f5f5f5', padding: '50px 20px' }}>
                    <div className="container">
                        <div className="about-intro-grid">
                            {/* left – illustration */}
                            <div className="about-intro-image animate-on-scroll" style={{ textAlign: 'center' }}>
                                <img
                                    src="https://www.efssolar.com.au/wp-content/uploads/2023/06/Asset-22.svg"
                                    alt="EFS Solar illustration"
                                    style={{ width: '100%', maxWidth: 437 }}
                                />
                            </div>
                            {/* right – text */}
                            <div className="about-intro-content animate-on-scroll delay-1">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: '40px',
                                    fontWeight: 600,
                                    color: '#47c7ea',
                                    marginBottom: '12px',
                                }}>EFS Solar</h3>
                                <p style={{ color: '#000', lineHeight: '22px', marginBottom: '1.15em' }}>
                                    With an innovative approach to the renewable energy sector, EFS Solar has revolutionised the business of going solar. EFS delivers a seamless process from initial client contact to installation and aftercare with a company you can trust with a whopping 30 year product warranty guarantee.
                                </p>
                                <p style={{ color: '#000', lineHeight: '22px' }}>
                                    With exceptional customer service at the company&apos;s pinnacle, our staff can assist you at every step. Our technicians are fully qualified solar designers, installers, and master electricians, so you can rest easy knowing that you are dealing with professionals. As a team, we are devoted to and pride ourselves on delivering a seamless renewable energy experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Our Locations (dark bg) ───────────────────────────── */}
                <section style={{ backgroundColor: '#000', padding: '60px 20px' }}>
                    <div className="container">
                        {/* Section heading */}
                        <AnimatedHeading
                            tag="h2"
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: '40px',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '50px',
                            }}
                        >
                            Our Locations
                        </AnimatedHeading>

                        {/* Two-col: map | offices */}
                        <div className="about-locations-grid">
                            {/* Left col - Map only */}
                            <div className="about-locations-left animate-on-scroll">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 'clamp(28px, 4vw, 36px)',
                                    fontWeight: 600,
                                    color: '#47c7ea',
                                    marginBottom: '30px',
                                }}>
                                    Service Coverage
                                </h3>
                                <div className="about-locations-image-container">
                                    <img
                                        src="/assets/Asset-67map2.svg"
                                        alt="Australia service map with locations"
                                        style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>

                            {/* Right col – Offices */}
                            <div className="about-locations-right animate-on-scroll delay-1">
                                <h3 style={{
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 'clamp(28px, 4vw, 36px)',
                                    fontWeight: 600,
                                    color: '#47c7ea',
                                    marginBottom: '30px',
                                }}>
                                    Offices
                                </h3>
                                <div style={{ marginBottom: '32px' }}>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '22px', marginBottom: '6px' }}>
                                        3/15 Lawrence Drive Nerang QLD 4211
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=-28.0028082,153.3430568"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#47c7ea', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                        Google Map <span style={{fontSize: '16px'}}>&#8250;</span>
                                    </a>
                                </div>
                                <div>
                                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: '22px', marginBottom: '6px' }}>
                                        4/147 Smeaton Gra, Smeaton Grange, NSW 2567
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Smeaton+Grange+NSW+2567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#47c7ea', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                    >
                                        Google Map <span style={{fontSize: '16px'}}>&#8250;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA Banner ────────────────────────────────────────── */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Help your pocket and the planet.<br />
                            Make the switch to solar, today!
                        </h2>
                        <a href="#" className="btn btn-primary quote-trigger hover-dark" style={{ backgroundColor: '#1e2e4f', padding: '16px 36px', color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', border: 'none' }}>
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

                {/* ── Reviews ───────────────────────────────────────────── */}
                <section className="section-reviews content-section bg-light">
                    <div className="container">
                        <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
                        <div className="animate-on-scroll visible">
                            <TrustIndexWidget />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
