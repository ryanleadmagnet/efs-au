import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServicePageHero from '@/components/ServicePageHero';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
    title: 'Sungrow Solar Inverters & Batteries | EFS Solar Gold Coast',
    description: 'EFS Solar installs Sungrow solar inverters and battery storage systems on the Gold Coast and Sydney. Smart, reliable Sungrow technology for Australian homes and businesses.',
    keywords: ['Sungrow inverter Gold Coast', 'Sungrow battery Sydney', 'Sungrow solar installation Queensland', 'Sungrow installer Australia'],
    alternates: { canonical: 'https://www.efssolar.com.au/technology/sungrow' },
    openGraph: { title: 'Sungrow Solar — EFS Solar', description: 'EFS Solar installs Sungrow inverters & batteries across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/technology/sungrow' },
};

const QuoteBtn = () => (
    <a href="#" className="btn btn-primary quote-trigger mt-6">
        <span className="btn-text">Get a Quote</span>
        <span className="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                <path fill="none" stroke="currentColor" strokeWidth="2"
                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
            </svg>
        </span>
    </a>
);

export default function SungrowPage() {
    return (
        <>
            <Header />
            <main>
                <ServicePageHero
                    subtitle="Technology"
                    title="Sungrow"
                    bgImage="/assets/Asset-64-1024x873.webp"
                />

                {/* Intro */}
                <section className="section-peace" style={{ background: '#f4f6fa' }}>
                    <div className="section-peace-container">
                        <div className="section-peace-content animate-on-scroll delay-1">
                            <AnimatedHeading tag="h2" className="section-subtitle">CLEAN POWER FOR ALL</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">26+ GW Deployed<br />Across the Globe</AnimatedHeading>
                            <div className="peace-desc">
                                <p>Sungrow is the world&apos;s most bankable inverter brand, with over 26 GW of solar power systems deployed across 50+ countries. Their mission is to provide clean power for all — delivering reliable, high-performance inverter solutions for homes, businesses, and utilities worldwide.</p>
                                <p>With over 30% market share in China and 20% in Germany, Sungrow is a globally recognised leader in solar inverter technology — and a cornerstone of EFS Solar&apos;s premium technology offering.</p>
                            </div>
                            <QuoteBtn />
                        </div>
                        <div className="section-peace-image animate-on-scroll">
                            <img src="/assets/Asset-64-1024x873.webp" alt="Sungrow Inverter" />
                        </div>
                    </div>
                </section>

                {/* Stats row */}
                <section className="section-stop-paying">
                    <div className="section-stop-paying-bg"></div>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle">MARKET LEADER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title">Proven Performance<br />at Scale</AnimatedHeading>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '48px', maxWidth: '700px', width: '100%' }}>
                                    {[
                                        { num: '26+ GW', label: 'Globally Deployed' },
                                        { num: '50+', label: 'Countries' },
                                        { num: '30%+', label: 'Market Share in China' },
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div style={{ fontSize: '40px', fontWeight: '800', color: '#47c7ea', fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{s.num}</div>
                                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '8px' }}>{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="section-switch content-section text-center">
                    <div className="container">
                        <div className="section-text animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">WHY SUNGROW</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">World&apos;s Most Bankable<br />Inverter Brand</AnimatedHeading>
                        </div>
                        <div className="switch-grid">
                            <div className="switch-item animate-on-scroll">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-30-1.svg" alt="Performance" />
                                </div>
                                <h4>HIGH PERFORMANCE</h4>
                                <p>Sungrow inverters consistently deliver industry-leading efficiency ratings, ensuring your solar system generates maximum power output.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-1">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-29-1.svg" alt="Market Leader" />
                                </div>
                                <h4>MARKET LEADERSHIP</h4>
                                <p>With dominant market shares across multiple continents, Sungrow is trusted by homeowners, businesses, and utilities worldwide.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-2">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-28-1.svg" alt="Reliability" />
                                </div>
                                <h4>PROVEN RELIABILITY</h4>
                                <p>26+ GW deployed across 50+ countries is a testament to Sungrow&apos;s engineering quality and durability in all climates and conditions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tier 1 */}
                <div className="sections-bg-wrapper">
                    <div className="sections-circle-overlay" id="sections-circle"></div>
                    <section className="section-tier1 content-section">
                        <div className="container section-container">
                            <div className="section-image animate-on-scroll">
                                <img src="/assets/Asset-64-1024x873.webp" alt="Sungrow System" />
                            </div>
                            <div className="section-text animate-on-scroll delay-1">
                                <AnimatedHeading tag="h2" className="section-subtitle">TRUSTED BY EFS SOLAR</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title">The World&apos;s Best<br />for Your Home</AnimatedHeading>
                                <p className="section-desc">EFS Solar proudly installs Sungrow inverters as part of our commitment to only offering the best technology available. Backed by long manufacturer warranties and Sungrow&apos;s global support network, your investment is protected for years to come.</p>
                                <QuoteBtn />
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Get a Sungrow system installed by EFS Solar today!
                        </h2>
                        <a href="#" className="btn btn-primary quote-trigger hover-dark" style={{ backgroundColor: "#1e2e4f", padding: "16px 36px", color: "#fff", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", border: "none" }}>
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

                <section className="section-reviews content-section bg-light text-center">
                    <div className="container">
                        <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
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
