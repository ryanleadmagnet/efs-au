import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServicePageHero from '@/components/ServicePageHero';


export const metadata: Metadata = {
    title: 'Contact EFS Solar — Get a Free Solar Quote Today',
    description: 'Contact EFS Solar for a free quote on solar panels, battery storage or commercial solar. Serving Gold Coast, Sydney and surrounding areas.',
    alternates: { canonical: 'https://www.efssolar.com.au/contact' },
    openGraph: { title: 'Contact EFS Solar', description: 'Get a free solar quote from Gold Coast & Sydney certified installers.', url: 'https://www.efssolar.com.au/contact' },
};

export default function ContactPage() {
    return (
        <main>
            <Header />

            <ServicePageHero
                title="CONTACT US"
                subtitle=""
                bgImage="/modern-office.jpg"
            />

            {/* Content Section */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f4f6fa', position: 'relative', zIndex: 10 }}>
                <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
                    <div className="contact-content-column" style={{ flex: '1 1 480px' }}>
                        <h3 style={{ color: '#47c7ea', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', textTransform: 'uppercase', marginBottom: '12px' }}>
                            WE WOULD LOVE TO HEAR FROM YOU!
                        </h3>
                        <h2 className="contact-page-title" style={{ fontSize: '48px', lineHeight: '1.1em', color: '#082042', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '30px' }}>
                            How can we help?
                        </h2>
                        <p style={{ color: '#3f4f65', fontSize: '18px', lineHeight: '1.7', marginBottom: '24px' }}>
                            Prefer to speak with us instead? Contact our friendly team and we will be able to assist you with your enquiry.
                        </p>
                        <div style={{ marginBottom: '20px' }}>
                            <a href="tel:1300911735" className="contact-phone-number" style={{ fontSize: '36px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#082042', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                <i className="fas fa-phone-alt" style={{ marginRight: '16px', fontSize: '24px', color: '#082042' }}></i>
                                1300 911 735
                            </a>
                        </div>
                        <p style={{ color: '#3f4f65', fontSize: '18px', marginBottom: '32px' }}>
                            <a href="mailto:support@efssolar.com.au" style={{ color: '#082042', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                <i className="fas fa-paper-plane" style={{ marginRight: '12px', fontSize: '24px', color: '#082042' }}></i>
                                support@efssolar.com.au
                            </a>
                        </p>
                        <a href="#" className="btn btn-primary quote-trigger">
                            ENQUIRIES <i className="fas fa-chevron-right" style={{ marginLeft: '8px', fontSize: '14px' }}></i>
                        </a>
                    </div>
                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                        <img src="/support-staff.jpg" alt="EFS Support Staff" style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'cover', display: 'block' }} />
                    </div>
                </div>
            </section>

            {/* Connect With Us Section */}
            <section style={{ backgroundColor: '#082042', padding: '80px 20px', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '4px', fontFamily: 'var(--font-heading)', marginBottom: '40px' }}>
                        CONNECT WITH US
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <a href="https://www.facebook.com/EFSSolar/" target="_blank" rel="noreferrer" className="social-icon-circle">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/efs_solar/" target="_blank" rel="noreferrer" className="social-icon-circle">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/efs-solar/" target="_blank" rel="noreferrer" className="social-icon-circle">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.youtube.com/@efssolar" target="_blank" rel="noreferrer" className="social-icon-circle">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.tiktok.com/@efssolar" target="_blank" rel="noreferrer" className="social-icon-circle">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
