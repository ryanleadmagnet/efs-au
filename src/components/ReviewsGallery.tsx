"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const videoData = [
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.57.40-pm-copy.webp',
        video: '/assets/AQNgOLaFoyqSXoyDLcwmw7da78camL8qsSUw-x6wN7PZ6ruHHEg0tLZQAtWkLEPRIHAXVsXHD0oU92Lxzld5cnxqDHfGb17_FoefNdI.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.57.55-pm-copy.webp',
        video: '/assets/AQOQIiGT6I2VJxaP2qZoRJEduwEwj0uDaAF0z0TX4lM09DjqXepPRdmRRroxltjGFkqbfPV6B3MhXZsb98pE95v8ZHxdVoRGfGpJuqk.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.58.04-pm-copy.webp',
        video: '/assets/AQOk2PQZAO9U0iG07d3EhWwcAmGAEGRayXa-rGLpS5rYxjuLRdKuy0FAJyW0203cxZkDcZV8nU3vIYVzHErTPSUai7lJn5FYuZ659sg.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.58.14-pm-copy.webp',
        video: '/assets/AQOnHKeUL0WzO5fWh0DLul7FkhwmQ-7xBtZfq9cPE6s7Cw9Cv6FOOmAhDJzG10oCez1qNMmisq6MAlKgQ-FpnyzrbPzY-i3RRXrkALo.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.58.27-pm-copy.webp',
        video: '/assets/AQOr_Ke_1e_eZA5Uh8vae89FeQUKyvnbiebPIAEeJbeB1ryZbkdGwSzwxvSZdLEfgSBJfkV1nRF_yE8xPWcVSqXUCjNrd45xlu0Kmtw.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.58.43-pm-copy.webp',
        video: '/assets/AQOtvftXwLXDbF7Oo-34T0-qeiUSuZK6MAUxrFwR7uoLevWdbItbTYYKJMCKTUhBJyntBYQON0hyFOAfnPlAE9m0pycN7o6x5nvXnTQ.mp4'
    },
    {
        thumb: '/assets/Screenshot-2025-11-04-at-3.59.03-pm-copy.webp',
        video: '/assets/AQP5hrDc0icYcdopa4PVWa9J-_3xzYEYCL47-bHoELkY74WWV1-DmsrHia5PFOuwMSUsLt0Tdpg-4IQE2RiGBsUzSnuKOjHXGtCp4u0.mp4'
    }
];

export default function ReviewsGallery() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
            <section className="bg-[#082042] text-white text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="container max-w-[1200px] mx-auto animate-on-scroll px-4">
                    <h2 className="text-[40px] font-heading font-bold uppercase tracking-wide" style={{ marginBottom: '24px' }}>
                        More Installation Videos
                    </h2>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={28}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 3 },
                        }}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="px-4"
                        style={{ paddingBottom: '20px' }}
                    >
                        {videoData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="aspect-[9/16] bg-black/50 rounded-[20px] relative overflow-hidden group cursor-pointer border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                    onClick={() => setActiveVideo(item.video)}
                                >
                                    <img src={item.thumb} alt={`Video thumbnail ${i + 1}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-300">
                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Video Modal Popup */}
            {activeVideo && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300" onClick={() => setActiveVideo(null)}>
                    <div
                        className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-[10000] w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <video
                            src={activeVideo}
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            playsInline
                        />
                    </div>
                </div>
            )}
        </>
    );
}
