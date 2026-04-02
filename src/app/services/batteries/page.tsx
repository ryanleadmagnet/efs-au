import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';
import TrustIndexWidget from '@/components/TrustIndexWidget';

export const metadata: Metadata = {
    title: 'Solar Battery Storage Gold Coast & Sydney | EFS Solar',
    description: 'Store your solar energy and reduce grid reliance with premium battery storage solutions. EFS Solar installs Tesla Powerwall, Energizer and more across Gold Coast & Sydney.',
    keywords: ['solar battery storage Gold Coast', 'home battery Sydney', 'Tesla Powerwall installer', 'Energizer battery', 'solar battery Queensland'],
    alternates: { canonical: 'https://www.efssolar.com.au/services/batteries' },
    openGraph: { title: 'Solar Battery Storage — EFS Solar', description: 'Premium solar battery storage solutions across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/services/batteries' },
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

export default function Batteries() {
    return (
        <>
            <Header />

            <main>
                {/* Hero */}
                <ServicePageHero
                    subtitle="Services >"
                    title="Batteries"
                    bgImage="/assets/solar-panels-2022-11-11-08-53-10-utc.jpg"
                />

                {/* Section 1 – STOP PAYING FOR POWER (white bg, image right) */}
                <section className="section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner mobile-reverse">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>STOP PAYING FOR POWER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>Keep Your Lights on,<br />Even When the Power Is Out.</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>EFS Solar supplies and installs the best Battery systems for your home. With power prices on the rise, why not look at other ways to reduce your power bill. Better yet, you can even do it without paying anything upfront on one of our interest free payment plans.</p>
                                </div>
                                <QuoteBtn />
                            </div>
                        </div>
                        <div className="section-stop-paying-image animate-on-scroll delay-1">
                            <img src="/assets/battery-copy.webp" alt="Battery System Installation" style={{ borderRadius: '12px', width: '100%' }} />
                        </div>
                    </div>
                </section>

                {/* Section 2 – $0 Deposit + Interest Free (white bg, image left) */}
                <section className="section-peace section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-image animate-on-scroll">
                            <img src="/assets/Powerstack-Lifestyle-3-Blackcopy-copy-1024x683.webp" alt="Powerstack Battery Lifestyle" style={{ borderRadius: '12px', width: '100%' }} />
                        </div>
                        <div className="section-stop-paying-content text-right animate-on-scroll delay-1">
                            <div className="hero-content-center">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>BUY NOW, PAY LATER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>$0 Deposit +<br />Interest Free</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>After installing a solar system, adding battery storage will help to offset part or all of your electricity costs. Having battery storage will also help keep the lights on in the event of a blackout. And any extra power that your battery doesn&apos;t need can still also be sold back to the power companies for a guaranteed profit under the state government feed-in tariffs.</p>
                                </div>
                                <QuoteBtn />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 – Tier 1 Products (shared bg wrapper) */}
                <div className="sections-bg-wrapper" style={{ background: "#f5f5f5" }}>
                    <section className="section-tier1 section-stop-paying" style={{ background: "transparent" }}>
                        <div className="section-stop-paying-inner mobile-reverse">
                            <div className="section-stop-paying-content animate-on-scroll">
                                <div className="hero-content-center">
                                    <AnimatedHeading tag="h2" className="section-subtitle">TIER 1 PRODUCTS</AnimatedHeading>
                                    <AnimatedHeading tag="h3" className="section-title" style={{ color: "#000000" }}>We Only Use the Best<br />of the Best</AnimatedHeading>
                                    <p className="section-desc" style={{ color: "#000000" }}>We don&apos;t settle for anything but the best for the Battery products we sell &amp; install. By using the best brands such as Tesla, Energizer and Sungrow, we can offer a 10-year replacement warranty and 10-year workmanship warranty. You can rest easy knowing your system will perform long into the future.</p>
                                    <QuoteBtn />
                                </div>
                            </div>
                            <div className="section-stop-paying-image animate-on-scroll delay-1">
                                <img src="/assets/Asset-262x-80-1.webp" alt="Battery brands – Energizer and Tesla" style={{ width: '73%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Section 4 – Save Even More (dark bg, 3-step) */}
                <section className="section-switch content-section">
                    <div className="container mx-auto">
                        <div className="section-text animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">SAVE EVEN MORE ON YOUR POWER BILL</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">it&apos;s as easy as 1, 2, 3</AnimatedHeading>
                        </div>
                        <div className="switch-grid">
                            <div className="switch-item animate-on-scroll">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-29-1.svg" alt="Site Assessment" />
                                </div>
                                <h4>SITE ASSESSMENT</h4>
                                <p>One of our reps will conduct an on-site assessment of your home before designing a battery system to suit your household needs.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-1">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-34.svg" alt="Install" />
                                </div>
                                <h4>INSTALL</h4>
                                <p>Our fully licensed electricians will come out and install your new battery system and educate you on how to get the most out of it.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-2">
                                <div className="switch-icon">
                                    <img src="https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-33.svg" alt="Enjoy the Saving" />
                                </div>
                                <h4>ENJOY THE SAVING</h4>
                                <p>As soon as your battery system has been installed and connected, you can start enjoying your savings from day 1.</p>
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
