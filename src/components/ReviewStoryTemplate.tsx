import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface ReviewStoryProps {
    title: string;
    videoUrl: string;
    topContent: React.ReactNode;
    bottomContent: React.ReactNode;
}

export default function ReviewStoryTemplate({ title, videoUrl, topContent, bottomContent }: ReviewStoryProps) {
    return (
        <main>
            <Header alwaysSticky={true} />

            <section className="bg-white" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                        
                        {/* Video Column */}
                        <div className="md:w-2/5 relative mt-4">
                            <div className="relative aspect-[9/16] overflow-hidden rounded-[10px] shadow-lg bg-black">
                                <video 
                                    src={videoUrl} 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    controls 
                                    autoPlay 
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="md:w-3/5 flex flex-col pt-0 md:pt-4">
                            <h2 className="text-[#47c7ea] font-heading font-semibold text-[16px] uppercase tracking-wider" style={{ marginBottom: '12px' }}>
                                <Link href="/reviews" className="hover:text-[#082042] transition-colors">Reviews &gt;</Link>
                            </h2>
                            <h3 className="text-[#082042] font-heading font-bold text-[36px] md:text-[42px] leading-[1.15]" style={{ marginBottom: '32px' }}>
                                {title}
                            </h3>
                            <div className="text-gray-700 font-body text-[17px] leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                {topContent}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white" style={{ paddingBottom: '128px' }}>
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="border-t border-gray-200 w-full" style={{ marginBottom: '64px' }}></div>
                    
                    {/* Constrain width for optimal reading line length */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-gray-700 font-body text-[17px] leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {bottomContent}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
