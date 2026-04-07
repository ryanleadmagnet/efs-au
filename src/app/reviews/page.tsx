import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServicePageHero from '@/components/ServicePageHero';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import ReviewsGallery from '@/components/ReviewsGallery';


export const metadata: Metadata = {
    title: 'Solar Reviews & Customer Stories | EFS Solar Gold Coast',
    description: 'Real reviews and case studies from EFS Solar customers across Gold Coast and Sydney. See how we have helped Australians cut energy costs with solar and batteries.',
    keywords: ['EFS Solar reviews', 'solar customer reviews Gold Coast', 'solar installation reviews', 'solar case studies Queensland'],
    alternates: { canonical: 'https://www.efssolar.com.au/reviews' },
    openGraph: { title: 'Customer Reviews — EFS Solar', description: 'Real reviews from satisfied solar customers across Gold Coast & Sydney.', url: 'https://www.efssolar.com.au/reviews' },
};

export default function ReviewsPage() {
    return (
        <main>
            <Header />

            <ServicePageHero
                title="REVIEWS"
                subtitle=""
                bgImage="/assets/DJI_20250612122357_0110_D-copy-2.webp"
            />

            {/* Intro Content Section */}
            <section className="bg-[#f4f6fa] relative z-10" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container max-w-[1140px] mx-auto animate-on-scroll px-4">
                    <div className="max-w-[800px]" style={{ textAlign: 'left' }}>
                        <AnimatedHeading tag="h3" className="text-[#47c7ea] font-heading font-semibold text-[18px] uppercase tracking-wide block" style={{ marginBottom: '16px', textAlign: 'inherit' }}>
                            Our Happy Solar Families
                        </AnimatedHeading>
                        <AnimatedHeading tag="h2" delay={200} className="text-[40px] md:text-[48px] font-heading font-bold text-[#082042] leading-tight" style={{ marginBottom: '24px', textAlign: 'inherit' }}>
                            Real Stories. Real Results.
                        </AnimatedHeading>
                        <div className="text-lg text-[#3f4f65] leading-relaxed" style={{ textAlign: 'inherit' }}>
                            From seamless installations to real customer experiences — explore how our solar and battery solutions are helping Australians cut energy costs and take control of their power.
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Grid */}
            <section className="bg-[#f4f6fa]" style={{ paddingBottom: '100px' }}>
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: 'SYSTEM UPGRADED @Oxenford, QLD', date: 'October 23, 2024', text: 'An aging system replaced for better solar production.', img: '/assets/Artboard-17-copy1110-copy.webp', href: '/reviews/oxenford-solar-system-upgrade' },
                            { title: 'PREMIUM SOLAR SYSTEM @Carrara, QLD', date: 'September 15, 2024', text: 'A premium system installation delivering max ROI.', img: '/assets/549828072_1411249897669720_19761742452404572_n-copy.webp', href: '/reviews/carrara-premium-solar-system-installation' },
                            { title: 'BATTERY ADDITION @Nerang, QLD', date: 'August 12, 2024', text: 'Reducing high evening bills with battery storage.', img: '/assets/Artboard-17-copy0808-copy.webp', href: '/reviews/solar-system-battery-replacement-at-nerang' }
                        ].map((story, i) => (
                            <div key={i} className="group animate-on-scroll transition-all duration-300">
                                <a href={story.href} className="block relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-black" style={{ marginBottom: '24px' }}>
                                    <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                                </a>
                                <div className="review-card-info text-center md:text-left">
                                    <div className="text-sm font-bold text-[#47c7ea] uppercase tracking-wider py-2" style={{ textAlign: 'inherit' }}>{story.date}</div>
                                    <h4 className="text-2xl font-heading font-bold text-[#082042] leading-snug group-hover:text-[#47c7ea] transition-colors mb-3" style={{ textAlign: 'inherit' }}>{story.title}</h4>
                                    <p className="text-[#3f4f65] leading-relaxed line-clamp-3 text-[15px] mb-5" style={{ textAlign: 'inherit' }}>{story.text}</p>
                                    <a href={story.href} className="font-bold text-[#082042] hover:text-[#47c7ea] transition-colors uppercase tracking-wide text-sm inline-flex items-center gap-2">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Reviews ───────────────────────────────────── */}
            <section className="section-reviews content-section bg-light">
                <div className="container">
                    <AnimatedHeading tag="h3" className="section-title">How customers rate their experience with us</AnimatedHeading>
                    <div className="animate-on-scroll visible">
                        <GoogleReviewsWidget />
                    </div>
                </div>
            </section>

            {/* Videos Carousel section */}
            <ReviewsGallery />

            <Footer />
        </main>
    );
}
