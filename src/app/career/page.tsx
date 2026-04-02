import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServicePageHero from '@/components/ServicePageHero';


export const metadata: Metadata = {
    title: 'Solar Careers — Join the EFS Solar Team | Gold Coast & Sydney',
    description: 'Explore career opportunities at EFS Solar. We are hiring solar installers, sales consultants and support staff across Gold Coast and Sydney.',
    alternates: { canonical: 'https://www.efssolar.com.au/career' },
    openGraph: { title: 'Careers at EFS Solar', description: 'Join our growing solar team in Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/career' },
};

export default function CareerPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <ServicePageHero
                    subtitle="Join Our Team"
                    title="Work With Us"
                    bgImage="/careers-hero.jpg"
                />
                <section className="content-section" style={{ background: '#fff', padding: '80px 20px 80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                            {/* Sales Card */}
                            <div className="animate-on-scroll" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                                <img
                                    src="/careers-sales.jpg"
                                    alt="Sales and Appointment Setting"
                                    style={{
                                        width: '80%', height: 'auto', objectFit: 'contain'
                                    }}
                                />
                                < div style={{ padding: '40px' }}>
                                    <div style={{ color: '#47c7ea', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>We&apos;re Hiring</div>
                                    <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '28px', fontWeight: 700, color: '#082042', marginBottom: '16px', lineHeight: 1.2 }}>Sales &amp; Appointment Setter</h3>
                                    <p style={{ color: '#3f4f65', lineHeight: 1.7, marginBottom: '28px' }}>
                                        Join our dynamic sales team, focused on client outreach and initial consultations. You&apos;ll be the first point of contact for thousands of Australians looking to make the switch to solar. No experience required — full training provided.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
                                        {['Competitive base + uncapped commissions', 'Full training provided', 'Supportive team culture', 'Career growth opportunities'].map((item, i) => (
                                            <li key={i} style={{ color: '#3f4f65', marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                                                <span style={{ position: 'absolute', left: 0, color: '#47c7ea', fontWeight: 700 }}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="btn btn-primary quote-trigger" data-iframe-url="https://form-efs.vercel.app/sales" style={{ marginBottom: '16px' }}>
                                        <span className="btn-text">Apply for Sales</span>
                                        <span className="btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                                <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-primary quote-trigger" data-iframe-url="https://form-efs.vercel.app/aptm_setter">
                                        <span className="btn-text">Apply for Appointment Setter</span>
                                        <span className="btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                                <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Electrical Card */}
                            <div className="animate-on-scroll delay-1" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
                                <img
                                    src="/careers-installer.jpg"
                                    alt="Electrical and Installation"
                                    style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                                />
                                <div style={{ padding: '40px' }}>
                                    <div style={{ color: '#47c7ea', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>We&apos;re Hiring</div>
                                    <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '28px', fontWeight: 700, color: '#082042', marginBottom: '16px', lineHeight: 1.2 }}>Electrical &amp; Installation</h3>
                                    <p style={{ color: '#3f4f65', lineHeight: 1.7, marginBottom: '28px' }}>
                                        Be part of our dedicated field team installing solar and battery systems across Australia. Our in-house installation team is the backbone of EFS Solar — if you&apos;re a qualified electrician or solar installer, we want to hear from you.
                                    </p>
                                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
                                        {['Competitive salary packages', 'Work with premium Tier 1 products', 'Ongoing training & certification support', 'Stable, long-term full-time work'].map((item, i) => (
                                            <li key={i} style={{ color: '#3f4f65', marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                                                <span style={{ position: 'absolute', left: 0, color: '#47c7ea', fontWeight: 700 }}>✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="btn btn-primary quote-trigger" data-iframe-url="https://form-efs.vercel.app/electrician">
                                        <span className="btn-text">Apply for electrician</span>
                                        <span className="btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                                <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
}
