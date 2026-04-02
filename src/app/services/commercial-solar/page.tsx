import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';
import TrustIndexWidget from '@/components/TrustIndexWidget';

export const metadata: Metadata = {
    title: 'Commercial Solar Panels Gold Coast & Sydney | EFS Solar',
    description: 'Cut business energy costs with EFS Solar commercial solar systems. Trusted by businesses across Gold Coast and Sydney. CEC-certified commercial solar installers.',
    keywords: ['commercial solar Gold Coast', 'business solar panels Sydney', 'commercial solar installation', 'solar for business Queensland'],
    alternates: { canonical: 'https://www.efssolar.com.au/services/commercial-solar' },
    openGraph: { title: 'Commercial Solar — EFS Solar', description: 'Commercial solar installations across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/services/commercial-solar' },
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

export default function CommercialSolar() {
    return (
        <>
            <Header />

            <main>
                {/* Hero */}
                <ServicePageHero
                    subtitle="Services >"
                    title="Commercial Solar"
                    bgImage="/assets/solar-panels-in-city-2022-12-15-19-58-21-utc.jpg"
                />

                {/* Section 1 – Stop Paying For Power (dark photo bg) */}
                <section className="section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>STOP PAYING FOR POWER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>Solar, a Smart Move<br />for Your Business</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>Switching to solar is one of the best decisions any business owner could make. Reduce your commercial electricity costs, and put money back into your business with our quality solar systems. Best of all you can get solar without paying anything upfront and never have to pay for power again!</p>
                                </div>
                                <QuoteBtn />
                            </div>
                        </div>
                        <div className="section-stop-paying-image animate-on-scroll delay-1">
                            <img src="/assets/EFS-Solar-Website-Stats-Second-01-01.jpg" alt="Commercial Solar Stats" style={{ borderRadius: '12px', width: '100%' }} />
                        </div>
                    </div>
                </section>

                {/* Section 2 – You've Got the Power (white bg, image right) */}
                <section className="section-peace section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-image animate-on-scroll">
                            <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <source src="/assets/Commercial-Solar-Install.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="section-stop-paying-content text-right animate-on-scroll delay-1">
                            <div className="hero-content-center">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>SWITCH &amp; SAVE</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>You&apos;ve Got<br />the Power</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>You have the choice to generate any amount of clean energy that you want. Whether you want to offset part or all of your electricity costs, our solar panels can do it in a clean and green way. In fact, any extra power that you generate can also be sold back to the power companies for a guaranteed profit under the state government feed in tariffs.</p>
                                </div>
                                <QuoteBtn />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 – Tier 1 Products (shared bg wrapper) */}
                <div className="sections-bg-wrapper" style={{ background: "#f5f5f5" }}>
                    <div className="sections-circle-overlay" id="sections-circle"></div>
                    <section className="section-tier1 section-stop-paying" style={{ background: "transparent" }}>
                        <div className="section-stop-paying-inner">
                            <div className="section-stop-paying-content animate-on-scroll">
                                <div className="hero-content-center">
                                    <AnimatedHeading tag="h2" className="section-subtitle">TIER 1 PRODUCTS</AnimatedHeading>
                                    <AnimatedHeading tag="h3" className="section-title" style={{ color: "#000000" }}>We Only Use the Best<br />of the Best</AnimatedHeading>
                                    <p className="section-desc" style={{ color: "#000000" }}>We don&apos;t settle for anything but the best when it comes to the solar products we sell &amp; install. With long manufacture warranties of up to 30 years, you can rest easy knowing your system will perform long into the future.</p>
                                    <QuoteBtn />
                                </div>
                            </div>
                            <div className="section-stop-paying-image animate-on-scroll delay-1">
                                <img src="https://www.efssolar.com.au/wp-content/uploads/2025/08/Asset-64-1024x873.webp" alt="Solar Installation Tier 1" style={{ width: '73%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Section 4 – Make the Switch (steps) */}
                <section className="section-switch content-section">
                    <div className="container mx-auto">
                        <div className="section-text animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">MAKE THE SWITCH</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">it&apos;s as easy as 1, 2, 3</AnimatedHeading>
                        </div>
                        <div className="switch-grid">
                            <div className="switch-item animate-on-scroll">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-30-1.svg" alt="Site Assessment" />
                                </div>
                                <h4>SITE ASSESSMENT</h4>
                                <p>One of our reps will conduct an on-site assessment of your business before designing a system to suit your commercial energy needs.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-1">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-29-1.svg" alt="Install" />
                                </div>
                                <h4>INSTALL</h4>
                                <p>Our fully licenced solar technicians will come out and install your new system on your roof and educate you on how to get the most out of it.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-2">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-32.svg" alt="Enjoy the Saving" />
                                </div>
                                <h4>ENJOY THE SAVING</h4>
                                <p>As soon as your solar system has been installed and connected, you can start enjoying your savings from day 1.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Help your pocket and the planet.<br />Make the switch to solar, today!
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
