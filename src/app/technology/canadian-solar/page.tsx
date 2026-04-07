import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

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

const features = [
    {
        title: 'Lower power loss',
        desc: 'Advanced N-type TOPCon technology reduces power degradation over time.',
    },
    {
        title: 'Better performance in shaded and low-light conditions',
        desc: 'Half-cut cell design maintains higher output when partially shaded.',
    },
    {
        title: 'Higher efficiency',
        desc: 'Higher module power efficiency up to 22.5%',
    },
    {
        title: 'Lower operating temperatures',
        desc: "Superior temperature coefficients increase performance in Australian heat.",
    },
    {
        title: 'Half Cell technology',
        desc: "Excellent performance under real Australian conditions.",
    },
    {
        title: 'Built to last',
        desc: "Engineered and designed to withstand Australia's harsh climate.",
    },
    {
        title: 'Advanced TOPCon Technology',
        desc: 'Next-generation N-type cells deliver superior efficiency with extended warranties.',
    },
];

export const metadata = {
    title: '7 Innovative Canadian Solar Solutions with EFS Solar',
    description: "Contact EFS Solar for inquiries on Canadian Solar products. We're here to assist you through phone or social media.",
};

export default function CanadianSolarPage() {
    return (
        <>
            <Header />
            <main>
                {/* ── Hero ──────────────────────────────────────── */}
                <section className="cs-hero">
                    <div className="cs-hero-overlay" />
                    <div className="cs-hero-content">
                        <span className="cs-hero-breadcrumb animate-on-scroll">Technology &gt;</span>
                        <p className="cs-hero-sub animate-on-scroll">PREMIUM TIER 1 AUSTRALIA SOLAR PARTNER</p>
                        <h1 className="cs-hero-title animate-on-scroll">Canadian Solar</h1>
                    </div>
                </section>

                {/* ── White card (overlaps hero) ────────────────── */}
                <section className="cs-card-section">
                    <div className="cs-card">

                        {/* Logo row */}
                        <div className="cs-logo-row animate-on-scroll">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/Asset-16sungrow.svg"
                                alt="Canadian Solar logo"
                                className="cs-brand-logo"
                            />
                        </div>

                        {/* Product spotlight  ── 2 cols: panel img | text */}
                        <div className="cs-spotlight">
                            <div
                                className="cs-spotlight-bg"
                                style={{ backgroundImage: "url('/assets/Asset-20tick.webp')" }}
                            >
                                <div className="cs-spotlight-inner">
                                    <div className="cs-spotlight-img animate-on-scroll">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/TOPHiKu6-detailed-au-copy.webp"
                                            alt="TOPHiKu6 Canadian Solar Panel"
                                        />
                                    </div>
                                    <div className="cs-spotlight-text animate-on-scroll delay-1">
                                        <h2 style={{ color: '#ffffff' }}>TOPHiKu Series</h2>
                                        <h3 style={{ color: '#ffffff' }}>Solar Panels</h3>
                                        <p>
                                            Canadian Solar Panels are manufactured by a Tier 1 global leader and
                                            quality tested to ensure only premium panels are used for installation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7-Feature grid */}
                        <div className="cs-features-grid">
                            {features.map((f, i) => (
                                <div key={i} className="cs-feature-item animate-on-scroll" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="cs-feature-icon">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/assets/Asset-17tick.svg"
                                            alt="tick"
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                    <div className="cs-feature-text">
                                        <h5 className="cs-feature-title">{f.title}</h5>
                                        <p className="cs-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Related Links */}
                        <div className="cs-related-links animate-on-scroll">
                            <h4>Related Links</h4>
                            <ul>
                                <li>
                                    <a href="https://www.canadiansolar.com/au/aboutus/" target="_blank" rel="noopener noreferrer">
                                        Official Australian office contact
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.csisolar.com/au/customer/customersupport/" target="_blank" rel="noopener noreferrer">
                                        Technical specifications
                                    </a>
                                </li>
                                <li>
                                    <a href="https://solartechonline.com/blog/canadian-solar-450w-panels-guide/" target="_blank" rel="noopener noreferrer">
                                        TOPHiKu6 panel details
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
                            Ready to install Canadian Solar panels with EFS Solar?
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
