import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';
import TrustIndexWidget from '@/components/TrustIndexWidget';


export const metadata: Metadata = {
    title: 'Residential Solar Panels Gold Coast & Sydney | EFS Solar',
    description: 'EFS Solar installs premium residential solar panel systems on the Gold Coast and Sydney. Reduce your power bills with CEC-certified solar experts. Get a free quote.',
    keywords: ['residential solar Gold Coast', 'home solar panels Sydney', 'solar installation Queensland', 'solar power home', 'solar rebate 2024'],
    alternates: { canonical: 'https://www.efssolar.com.au/services/residential-solar' },
    openGraph: { title: 'Residential Solar — EFS Solar', description: 'Premium home solar installations across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/services/residential-solar' },
};

export default function ResidentialSolar() {
    return (
        <>
            <Header />

            <main>
                <ServicePageHero
                    subtitle="Services >"
                    title="Residential Solar"
                    bgImage="/assets/solar-panels-2022-11-11-08-53-10-utc.jpg"
                />

                <section className="section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner mobile-reverse">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle">STOP PAYING FOR POWER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>A Smart Move<br />for Your Home</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>Making the decision to go solar for your electricity needs is one of the brightest you'll ever make. Solar power can reduce your home electricity bill, earn you money for extra electricity generated, and help reduce greenhouse gas emissions.</p>
                                    <br />
                                    <p>By choosing EFS as your solar energy system supplier, you also get the peace of mind that comes from using an experienced and fully licensed installer.</p>
                                </div>
                                <a href="#" className="btn btn-primary quote-trigger mt-6">
                                    <span className="btn-text">Get a Quote</span>
                                    <span className="btn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                            <path fill="none" stroke="currentColor" strokeWidth="2"
                                                d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="section-stop-paying-image animate-on-scroll delay-1">
                            <img src="/assets/placement-1024x1024.gif" alt="A Smart Move for Your Home" />
                        </div>
                    </div>
                </section>

                <section className="section-peace section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-image animate-on-scroll">
                            <video autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                <source src="/assets/Commercial-Solar-Install.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="section-stop-paying-content text-right animate-on-scroll delay-1">
                            <div className="hero-content-center">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>PEACE OF MIND</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>High Quality Service</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>Our range of home solar power systems are designed to power you, whatever your needs may be. With only the best quality products being used in our solar arrays, you can rest easy knowing that each system we install is also backed by a 25 year warranty.</p>
                                    <p>Give us a call today and let's design a system to suit your individual needs, there has truly never been a better time to go solar!</p>
                                </div>
                                <div className="mt-8">
                                    <a href="#" className="btn btn-primary quote-trigger">
                                        <span className="btn-text">Get a Quote</span>
                                        <span className="btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                                <path fill="none" stroke="currentColor" strokeWidth="2"
                                                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                <p>One of our reps will conduct an on-site assessment of your home before designing a system to suit your household needs.</p>
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
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-28-1.svg" alt="Enjoy the Saving" />
                                </div>
                                <h4>ENJOY THE SAVING</h4>
                                <p>As soon as your solar system has been installed and connected, you can start enjoying your savings from day 1.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 – Tier 1 Products (moved) */}
                <div className="sections-bg-wrapper" style={{ background: "#f5f5f5" }}>
                    <div className="sections-circle-overlay" id="sections-circle"></div>
                    <section className="section-tier1 section-stop-paying" style={{ background: "transparent" }}>
                        <div className="section-stop-paying-inner">
                            <div className="section-stop-paying-content animate-on-scroll">
                                <div className="hero-content-center">
                                    <AnimatedHeading tag="h2" className="section-subtitle">TIER 1 PRODUCTS</AnimatedHeading>
                                    <AnimatedHeading tag="h3" className="section-title" style={{ color: "#000000" }}>We Only Use the Best<br />of the Best</AnimatedHeading>
                                    <p className="section-desc" style={{ color: "#000000" }}>We don&apos;t settle for anything but the best when it comes to the solar products we sell &amp; install. With long manufacture warranties of up to 30 years, you can rest easy knowing your system will perform long into the future.</p>
                                    <div className="mt-8">
                                        <a href="#" className="btn btn-primary quote-trigger">
                                            <span className="btn-text">Get a Quote</span>
                                            <span className="btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                                    <path fill="none" stroke="currentColor" strokeWidth="2"
                                                        d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="section-stop-paying-image animate-on-scroll delay-1">
                                <img src="https://www.efssolar.com.au/wp-content/uploads/2025/08/Asset-64-1024x873.webp" alt="Solar Installation Tier 1" style={{ width: '73%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Custom CTA matching the design */}


                <section className="section-reviews content-section bg-light">
                    <div className="container">
                        <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
                        <div className="animate-on-scroll visible">
                            <TrustIndexWidget />
                        </div>
                    </div>
                </section>

                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Help your pocket and the planet.<br />
                            Make the switch to solar, today!
                        </h2>
                        <a href="#" className="btn btn-primary hover-dark quote-trigger" style={{ backgroundColor: "#1e2e4f", padding: "16px 36px", color: "#fff", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", border: "none" }}>
                            <span className="btn-text">Enquire Now</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
