import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustIndexWidget from '@/components/TrustIndexWidget';

const QuoteBtn = () => (
    <a href="#" className="btn btn-primary quote-trigger">
        <span className="btn-text">Get a Quote</span>
        <span className="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                <path fill="none" stroke="currentColor" strokeWidth="2"
                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
            </svg>
        </span>
    </a>
);

const panelFeatures = [
    {
        icon: '/assets/Asset-7-2.svg',
        title: 'Lower power loss',
        desc: 'Better performance in shaded and low-light conditions.',
    },
    {
        icon: '/assets/Asset-8.svg',
        title: 'Higher efficiency',
        desc: 'Higher module power efficiency up to 20.6%',
    },
    {
        icon: '/assets/Asset-9.svg',
        title: 'Lower operating temperatures',
        desc: 'Low operating temperatures and coefficients increases performance.',
    },
    {
        icon: '/assets/Asset-10.svg',
        title: 'Half Cell technology',
        desc: 'Excellent performance under real conditions.',
    },
    {
        icon: '/assets/Asset-11.svg',
        title: 'Keeps going and going',
        desc: 'Engineered and designed to withstand harsh environments.',
    },
    {
        icon: '/assets/Asset-7-2.svg',
        title: 'Dual Glass Technology',
        desc: 'Increased durability for better resistance with bi-glass output.',
    },
];

const inverterIcons = [
    { icon: '/assets/Asset-21.svg', label: 'High Performance' },
    { icon: '/assets/Asset-22.svg', label: 'Smart & Compact' },
    { icon: '/assets/Asset-23.svg', label: 'IP65 Rated' },
    { icon: '/assets/Asset-24.svg', label: 'Remote Monitoring' },
];

export const metadata = {
    title: 'Energizer EFS Solar: Premium Solar Panels & Inverters',
    description:
        'Discover energizer solutions for solar panels and inverters. Contact us today to learn more about our offerings for your solar needs.',
};

export default function EnergizerPage() {
    return (
        <>
            <Header />
            <main>

                {/* ── Hero ──────────────────────────────────────── */}
                <section className="ez-hero">
                    <div className="ez-hero-overlay" />
                    <div className="ez-hero-content">

                        {/* Left column: breadcrumb + title */}
                        <div className="ez-hero-left">
                            <span className="ez-hero-breadcrumb animate-on-scroll">Technology &gt;</span>
                            <h1 className="ez-hero-title animate-on-scroll">
                                Our New Partner -Energizer
                            </h1>
                        </div>

                        {/* Right column */}
                        <div className="ez-hero-right">
                            {/* 30-years badge */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/30years.png"
                                alt="30 Year Warranty"
                                className="ez-hero-badge"
                            />
                            {/* Mascot panel image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Asset-2@2x-1.png"
                                alt="Energizer mascot"
                                className="ez-hero-panel"
                            />
                        </div>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="ez-card-section">
                    <div className="ez-card">


                        {/* Energizer × EFS Solar logo row */}
                        <div className="ez-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Asset-2.svg"
                                alt="Energizer logo"
                                className="ez-brand-logo"
                            />
                        </div>

                        {/* ── Beam Series spotlight ── */}
                        <div className="ez-spotlight">
                            <div
                                className="ez-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-3.jpg')" }}
                            >
                                <div className="ez-spotlight-inner">
                                    {/* Panel image – negative margin pulls it outside the bg */}
                                    <div className="ez-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-21-1.png"
                                            alt="Energizer Beam Series Solar Panel"
                                        />
                                    </div>
                                    <div className="ez-spotlight-text animate-on-scroll delay-1">
                                        <h2>Solar Panels</h2>
                                        <h3>Beam Series</h3>
                                        <p>
                                            Energizer Solar Panels are quality checked by Artificial
                                            Intelligence to ensure only the best are used for installation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── 6-Feature grid ── */}
                        <div className="ez-features-grid">
                            {panelFeatures.map((f, i) => (
                                <div
                                    key={i}
                                    className="ez-feature-item animate-on-scroll"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                >
                                    <figure className="ez-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={f.icon} alt="" width={50} height={50} />
                                    </figure>
                                    <div className="ez-feature-text">
                                        <h5 className="ez-feature-title">{f.title}</h5>
                                        <p className="ez-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── Force Series (inside shadow card) ── */}
                        <div className="ez-force-wrapper">
                            <div
                                className="ez-force-bg"
                                style={{ backgroundImage: "url('/assets/Asset-6-1.jpg')" }}
                            >
                                <div className="ez-force-inner">
                                    {/* Text – left column */}
                                    <div className="ez-force-text animate-on-scroll delay-1">
                                        <h2>Solar Selling Inverters</h2>
                                        <h3>Force Series</h3>
                                    </div>
                                    {/* Inverter image – right column, right-aligned */}
                                    <div className="ez-force-img-col animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-5@2x.png"
                                            alt="Energizer Force Series Inverter"
                                            className="ez-force-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Inverter description + icon row ── */}
                        <div className="ez-inverter-desc-section animate-on-scroll">
                            <div className="ez-inverter-desc-inner">
                                <div className="ez-inverter-desc-text">
                                    <p>
                                        Built using Mono-crystalline (HIT) technology, the Energizer Solar
                                        Force Series combines all the best technologies in the market.
                                    </p>
                                </div>
                                <div className="ez-inverter-icons-row">
                                    {inverterIcons.map((item, i) => (
                                        <div key={i} className="ez-inv-icon-item">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={item.icon} alt={item.label} width={85} height={85} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── Full-width image band ─────────────────────── */}
                <section
                    className="ez-banner-image"
                    style={{ backgroundImage: "url('/assets/Asset-20@2x-80.jpg')" }}
                />

                {/* ── CTA Banner ────────────────────────────────── */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Harness the Power of the Sun!<br />Go Solar Today
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
                            <TrustIndexWidget />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
