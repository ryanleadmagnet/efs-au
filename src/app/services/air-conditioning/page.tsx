import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';
import AnimatedHeading from '@/components/AnimatedHeading';
import TrustIndexWidget from '@/components/TrustIndexWidget';

export const metadata: Metadata = {
    title: 'Air Conditioning Installation Gold Coast & Sydney | EFS Solar',
    description: 'EFS Solar installs energy-efficient air conditioning systems across Gold Coast and Sydney. Pair with solar for maximum savings. Get a free quote today.',
    keywords: ['air conditioning Gold Coast', 'solar air conditioning Sydney', 'ducted air con Queensland', 'split system installation', 'energy efficient air conditioning'],
    alternates: { canonical: 'https://www.efssolar.com.au/services/air-conditioning' },
    openGraph: { title: 'Air Conditioning — EFS Solar', description: 'Energy-efficient air conditioning across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/services/air-conditioning' },
};

const QuoteBtn = () => (
    <a href="#" className="btn btn-primary quote-trigger mt-6" data-iframe-url="https://form-efs.vercel.app/air_con">
        <span className="btn-text">Get a Quote</span>
        <span className="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                <path fill="none" stroke="currentColor" strokeWidth="2"
                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
            </svg>
        </span>
    </a>
);

export default function AirConditioning() {
    return (
        <>
            <Header />

            <main>
                {/* Hero */}
                <ServicePageHero
                    subtitle="Services >"
                    title="Air Conditioning"
                    bgImage="/assets/living-room-with-air-conditioner-2021-08-26-15-32-54-utc.jpg"
                />

                {/* Section 1 – Beat the Heat (white bg, image right) */}
                <section className="section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner mobile-reverse">
                        <div className="section-stop-paying-content">
                            <div className="hero-content-center animate-on-scroll">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>TOO HOT TO HANDLE</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>Beat the heat with a<br />new Air Conditioning system</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>EFS Solar supplies and installs the best Air Conditioning systems for your home in Australia. It&apos;s only getting hotter! So cool down with $0 Upfront and 100% Interest Free!</p>
                                </div>
                                <QuoteBtn />
                            </div>
                        </div>
                        <div className="section-stop-paying-image animate-on-scroll delay-1">
                            <img src="/assets/EFS-Solar-Website-Aircon-Image-01.jpg" alt="Beat the heat with a new Air Conditioning system" style={{ borderRadius: '12px', width: '100%' }} />
                        </div>
                    </div>
                </section>

                {/* Section 2 – $0 Deposit (white bg, image left) */}
                <section className="section-peace section-stop-paying" style={{ backgroundColor: "#ffffff" }}>
                    <div className="section-stop-paying-inner">
                        <div className="section-stop-paying-image animate-on-scroll">
                            <img src="/assets/EFS-Solar-Website-Aircon-Image-1024x1024-1.jpg" alt="$0 Deposit + Interest Free" style={{ borderRadius: '12px', width: '100%' }} />
                        </div>
                        <div className="section-stop-paying-content text-right animate-on-scroll delay-1">
                            <div className="hero-content-center">
                                <AnimatedHeading tag="h2" className="section-subtitle" style={{ color: "var(--primary-color)" }}>BUY NOW, PAY LATER</AnimatedHeading>
                                <AnimatedHeading tag="h3" className="section-title" style={{ color: "var(--primary-color)" }}>$0 Deposit +<br />Interest Free</AnimatedHeading>
                                <div className="section-desc" style={{ color: "var(--text-color)" }}>
                                    <p>Is the rising temperature causing discomfort? Your solution is here. Enjoy a perfect indoor climate with no upfront deposit and zero interest on your A/C installation.</p>
                                    <br />
                                    <p>Experience ultimate comfort in every season. No upfront cost + zero interest A/C installation!</p>
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
                                    <p className="section-desc" style={{ color: "#000000" }}>We don&apos;t settle for anything but the best for the Air Conditioning products we sell &amp; install. Using the best brands such as Mitsubishi Heavy Industries and Fujitsu, we offer a 5-year replacement warranty and 10-year workmanship warranty.</p>
                                    <QuoteBtn />
                                </div>
                            </div>
                            <div className="section-stop-paying-image animate-on-scroll delay-1">
                                <img src="/assets/aircon-brands-1024x1024-1.png" alt="Mitsubishi and Fujitsu logos" style={{ width: '73%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Section 4 – Easy as 1, 2, 3 */}
                <section className="section-switch content-section text-center">
                    <div className="container mx-auto">
                        <div className="section-text animate-on-scroll">
                            <AnimatedHeading tag="h2" className="section-subtitle">SAVE EVEN MORE ON YOUR POWER BILL</AnimatedHeading>
                            <AnimatedHeading tag="h3" className="section-title">it&apos;s as easy as 1, 2, 3</AnimatedHeading>
                        </div>
                        <div className="switch-grid">
                            <div className="switch-item animate-on-scroll">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-31.svg" alt="Site Assessment" />
                                </div>
                                <h4>SITE ASSESSMENT</h4>
                                <p>One of our reps will conduct an on-site assessment of your home or office before designing an Air Conditioning system to suit your needs.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-1">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-34.svg" alt="Install" />
                                </div>
                                <h4>INSTALL</h4>
                                <p>Our fully licensed electricians will come out and install your new Air Conditioning system and educate you on how to get the most out of it.</p>
                            </div>
                            <div className="switch-item animate-on-scroll delay-2">
                                <div className="switch-icon">
                                    <img src="/assets/Asset-36.svg" alt="Keep it Cool" />
                                </div>
                                <h4>KEEP IT COOL</h4>
                                <p>Escape the heat from the moment your new Air Con has been installed. The only question you&apos;ll be asking is why you didn&apos;t do it sooner.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Help your pocket and the planet. Make the switch today!
                        </h2>
                        <a href="#" className="btn btn-primary quote-trigger hover-dark" data-iframe-url="https://form-efs.vercel.app/air_con" style={{ backgroundColor: "#1e2e4f", padding: "16px 36px", color: "#fff", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", border: "none" }}>
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
                            <TrustIndexWidget />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
