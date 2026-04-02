interface ServiceIntroProps {
    subtitle: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function ServiceIntro({ subtitle, title, description, imageSrc, imageAlt }: ServiceIntroProps) {
    return (
        <section className="flex flex-wrap px-[5%] py-16 items-center container mx-auto pt-[140px]">
            <div className="flex-1 min-w-[300px]">
                <p className="text-[var(--secondary-color)] font-bold mb-4 uppercase tracking-wider">{subtitle}</p>
                <h1 className="font-heading text-6xl text-[var(--primary-color)] uppercase leading-[1.1] mb-4 font-normal">
                    {title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{description}</p>
                <button className="btn btn-primary quote-trigger">
                    <span className="btn-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                            <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                        </svg>
                    </span>
                    <span className="btn-text">Get a Quote</span>
                </button>
            </div>
            <div className="flex-1 min-w-[300px] text-right">
                <img src={imageSrc} className="max-w-full h-auto rounded-lg" alt={imageAlt} />
            </div>
        </section>
    );
}
