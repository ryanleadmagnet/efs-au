import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'Tesla Powerwall by EFS Solar: Certified Installers Available',
    description: 'Harness energy efficiency with the Tesla Powerwall. Contact EFS Solar for your certified installer and solar battery needs.',
};

const features = [
    {
        title: 'Store Extra Energy',
        desc: 'When your solar system generates more energy than you need, you can store the extra energy with Powerwall and save it for later. Powerwall can also recharge from the grid when electricity prices are low.',
    },
    {
        title: 'Use Energy',
        desc: 'Your stored energy is available whenever you need it—during the day, at night or when an outage occurs. A Powerwall system can power your entire home, including your heater or A/C, as well as other large appliances.',
    },
    {
        title: 'Save and Earn',
        desc: 'Using your usage history, weather forecasts and electricity price estimates, Powerwall optimises your stored energy to power your home more efficiently, day and night. With some electricity providers, you can earn money by sharing your energy to the grid.',
    },
];

export default function TeslaPowerwallPage() {
    return (
        <>
            <Header />
            <main>
                {/* ── Hero Section ──────────────────────────────── */}
                <section
                    className="cs-hero"
                    style={{ backgroundImage: "url('/assets/tesla-powerwall.avif')" }}
                >
                    <div className="cs-hero-overlay" />
                    <div className="cs-hero-content">
                        <span className="cs-hero-breadcrumb animate-on-scroll">Technology &gt;</span>
                        <p className="cs-hero-sub animate-on-scroll">CERTIFIED TESLA POWERWALL INSTALLER</p>
                        <h1 className="cs-hero-title animate-on-scroll">Tesla PowerWall</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Asset-23logo.svg"
                                alt="Tesla Powerwall logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight ── 2 cols: product img | text */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-14sungrow.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/powerwall-3-copy.webp"
                                            alt="Tesla Powerwall 3"
                                            style={{ width: '70%' }}
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>Powerwall</h2>
                                        <h3 style={{ color: '#ffffff' }}>A revolutionary battery for your home</h3>
                                        <p style={{ color: '#ffffff' }}>
                                            The Tesla Powerwall is a fully-integrated AC battery system for residential or light commercial use.
                                            Its rechargeable lithium-ion battery pack provides energy storage for solar self-consumption,
                                            time-based control, and backup. Powerwall&apos;s installation is simple and easy, and its
                                            energy monitoring, metering, and smart controls are built in and accessible through the Tesla app.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3-Feature grid */}
                        <div className="cs-features-grid">
                            {features.map((f, i) => (
                                <div key={i} className="cs-feature-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="cs-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-18tick.svg"
                                            alt="tick"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="cs-feature-text">
                                        <h5 className="cs-feature-title">{f.title}</h5>
                                        <p className="cs-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mid-page CTA */}
                        <div className="animate-on-scroll" style={{ textAlign: 'center', margin: '20px 0 40px' }}>
                            <a
                                href="#"
                                className="btn btn-primary quote-trigger"
                                style={{
                                    backgroundColor: '#0a42ab',
                                    color: '#fff',
                                    padding: '12px 30px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontWeight: '600'
                                }}
                            >
                                Get a Quote
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                                </svg>
                            </a>
                        </div>

                        {/* Related Links */}
                        <div className="cs-related-links animate-on-scroll">
                            <h4>Related Links</h4>
                            <ul>
                                <li>
                                    <a href="https://www.tesla.com/en_AU/powerwall" target="_blank" rel="noopener noreferrer">
                                        Tesla PowerWall page
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tesla.com/en_au/support/energy/powerwall/documents/documents" target="_blank" rel="noopener noreferrer">
                                        PowerWall Owner Documents
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* ── Full-width Image Band ─────────────────────── */}
                <section
                    className="cs-banner-image"
                    style={{ backgroundImage: "url('/assets/Asset-20@2x-80.jpg')" }}
                ></section>

                {/* ── CTA Banner ────────────────────────────────── */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Harness the Power of the Sun! Go Solar Today
                        </h2>
                        <a
                            href="#"
                            className="btn btn-primary quote-trigger hover-dark"
                            style={{
                                backgroundColor: '#1e2e4f',
                                padding: '16px 36px',
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                border: 'none',
                            }}
                        >
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

                {/* ── Reviews ───────────────────────────────────── */}
                <section className="section-reviews content-section bg-light text-center">
                    <div className="container">
                        <h3 className="section-title">How customers rate their experience with us</h3>
                        <div className="animate-on-scroll visible">
                            <GoogleReviewsWidget />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
