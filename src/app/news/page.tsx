import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/ServicePageHero';

export const metadata: Metadata = {
    title: 'Solar News & Insights | EFS Solar Gold Coast & Sydney',
    description: 'Stay up to date with the latest solar energy news, tips, and insights from EFS Solar. Learn about solar systems, energy savings, government rebates, and more.',
    keywords: ['solar news', 'solar energy Australia', 'solar tips', 'solar rebates', 'EFS Solar blog'],
    alternates: { canonical: 'https://www.efssolar.com.au/news' },
    openGraph: {
        title: 'Solar News & Insights | EFS Solar',
        description: 'Latest solar energy news, tips, and insights from EFS Solar.',
        url: 'https://www.efssolar.com.au/news',
    },
};

const articles = [
    {
        slug: 'about-the-national-electricity-market',
        title: 'About The National Electricity Market (NEM)',
        excerpt: 'The National Electricity Market is a unique and complex system that operates across Australia\'s eastern and southern states. Learn how it works and what it means for solar owners.',
        category: 'Energy Market',
        date: '12 Jun 2023',
    },
    {
        slug: 'sleek-6-6kw-solar-system',
        title: 'Sleek 6.6kW Solar System',
        excerpt: 'A cost-effective and eco-friendly solution to power your home. This system harnesses the sun\'s power to deliver reliable and sustainable energy for your household.',
        category: 'Solar Systems',
        date: '12 Jun 2023',
    },
    {
        slug: 'energy-efficient-6-6kw-solar-system',
        title: 'Energy-Efficient 6.6kW Solar System',
        excerpt: 'Reduce your energy bills and carbon footprint with an energy-efficient 6.6kW solar system. Learn about benefits, incentives, and how to choose the right installer.',
        category: 'Solar Systems',
        date: '10 Jun 2023',
    },
    {
        slug: 'long-lasting-6-6kw-solar-system',
        title: 'Long-Lasting 6.6kW Solar System',
        excerpt: 'Save money and the environment with a long-lasting 6.6kW solar system. Discover the benefits, maintenance requirements, and how to choose the right system.',
        category: 'Solar Systems',
        date: '8 Jun 2023',
    },
    {
        slug: 'durable-6-6kw-solar-system',
        title: 'Durable 6.6kW Solar System',
        excerpt: 'Discover the benefits of a durable 6.6kW solar system: reduced energy bills, increased property value, and long-lasting environmental advantages.',
        category: 'Solar Systems',
        date: '6 Jun 2023',
    },
    {
        slug: 'hybrid-6-6kw-solar-system',
        title: 'Hybrid 6.6kW Solar System',
        excerpt: 'How a hybrid 6.6kW solar system works and its benefits — generate your own electricity, lower your bills, and increase your energy security.',
        category: 'Solar Systems',
        date: '4 Jun 2023',
    },
    {
        slug: 'technologically-advanced-6-6kw-solar-system',
        title: 'Advantages of a Technologically-Advanced 6.6kW Solar System',
        excerpt: 'Discover the benefits of partnering advanced solar technology with a 6.6kW system. Reduce energy bills, lower your carbon footprint, and increase property value.',
        category: 'Solar Systems',
        date: '2 Jun 2023',
    },
    {
        slug: 'eco-friendly-6-6kw-solar-system',
        title: 'Eco-Friendly 6.6kW Solar System – Benefits & Cost',
        excerpt: 'Reduce your carbon footprint and save money on electricity bills with an eco-friendly 6.6kW solar system. Learn how to install and enjoy free electricity for decades.',
        category: 'Solar Systems',
        date: '31 May 2023',
    },
    {
        slug: 'high-performing-6-6kw-solar-system',
        title: 'Discover the Benefits of a High-Performing 6.6kW Solar System',
        excerpt: 'A high-performing 6.6kW solar system offers cost-effectiveness and environmental benefits. Reduce electricity bills and increase property value.',
        category: 'Solar Systems',
        date: '29 May 2023',
    },
    {
        slug: 'innovative-6-6kw-solar-system',
        title: 'Innovative 6.6kW Solar System',
        excerpt: 'Discover the benefits of an innovative 6.6kW solar system. Lower your energy bills, reduce your carbon footprint, and get government rebates and incentives today.',
        category: 'Solar Systems',
        date: '27 May 2023',
    },
    {
        slug: 'futuristic-6-6kw-solar-system',
        title: 'Maximize Efficiency with a Futuristic 6.6kW Solar System',
        excerpt: 'A 6.6kW solar system that\'s innovative, efficient, and cost-saving. Learn about the benefits and how it works for your home or business.',
        category: 'Solar Systems',
        date: '25 May 2023',
    },
    {
        slug: 'smart-6-6kw-solar-system',
        title: 'Smart 6.6kW Solar System: An Energy-Efficient Solution',
        excerpt: 'A smart, energy-efficient way to power your home or business. Reduce your energy bill and carbon footprint with a 6.6kW solar system.',
        category: 'Solar Systems',
        date: '23 May 2023',
    },
    {
        slug: 'classic-6-6kw-solar-system',
        title: 'Switch to Renewable Energy with Classic 6.6kW Solar System',
        excerpt: 'Classic 6.6kW solar system components, benefits, and how it works — lower energy bills, increased home value, and environmental friendliness.',
        category: 'Solar Systems',
        date: '21 May 2023',
    },
    {
        slug: 'simple-6-6kw-solar-system',
        title: 'Benefits of a Simple 6.6kW Solar System: Installation, Savings & Incentives',
        excerpt: 'Discover the benefits of a 6.6kW solar system for your home — reduce energy bills, increase home value, and help the environment.',
        category: 'Solar Systems',
        date: '19 May 2023',
    },
    {
        slug: 'modern-6-6kw-solar-system',
        title: 'Efficient & Cost-effective: Benefits of a Modern 6.6kW Solar System',
        excerpt: 'Discover the benefits of a modern 6.6kW solar system — lower bills, renewable energy, increased home value, and reduced carbon footprint.',
        category: 'Solar Systems',
        date: '17 May 2023',
    },
    {
        slug: 'professional-6-6kw-solar-system',
        title: 'Save Money with a Professional 6.6kW Solar System',
        excerpt: 'A reliable, low-maintenance, and eco-friendly solution. Save money and reduce your carbon footprint with a professional 6.6kW solar system.',
        category: 'Solar Systems',
        date: '15 May 2023',
    },
    {
        slug: 'top-rated-6-6kw-solar-system',
        title: 'Discover the Benefits of a Top-Rated 6.6kW Solar System',
        excerpt: 'A top-rated 6.6kW solar system: components, how it works, and its benefits. Reduce energy bills and carbon footprint with government incentives.',
        category: 'Solar Systems',
        date: '13 May 2023',
    },
    {
        slug: 'advanced-6-6kw-solar-system',
        title: 'Advanced 6.6kW Solar System: Features & Benefits',
        excerpt: 'Advanced 6.6kW solar system features, benefits, and installation process. Reduce energy bills and carbon footprint with high-performance solar panels.',
        category: 'Solar Systems',
        date: '11 May 2023',
    },
    {
        slug: 'budget-6-6kw-solar-system',
        title: 'Reduce Energy Costs with a Budget 6.6kW Solar System',
        excerpt: 'Discover the benefits of a budget-friendly 6.6kW solar system — reduce your carbon footprint, save money, and increase your home value.',
        category: 'Solar Systems',
        date: '9 May 2023',
    },
    {
        slug: 'compact-6-6kw-solar-system',
        title: 'Reduce Energy Bills with a Compact 6.6kW Solar System',
        excerpt: 'Generate electricity from the sun and reduce your carbon footprint with a smart investment in your home — a compact 6.6kW solar system.',
        category: 'Solar Systems',
        date: '7 May 2023',
    },
    {
        slug: 'premium-6-6kw-solar-system',
        title: 'Upgrade Your Home with a Premium 6.6kW Solar System',
        excerpt: 'Discover the benefits of a premium 6.6kW solar system: lower energy bills, reduced carbon footprint, increased home value, and low maintenance.',
        category: 'Solar Systems',
        date: '5 May 2023',
    },
    {
        slug: 'large-6-6kw-solar-system',
        title: 'Save Money with a Large 6.6kW Solar System',
        excerpt: 'Benefits of a large 6.6kW solar system installation and how it works. Reduce your carbon footprint and electricity bills with clean, renewable energy.',
        category: 'Solar Systems',
        date: '3 May 2023',
    },
    {
        slug: 'commercial-6-6kw-solar-system',
        title: 'Benefits of a Commercial 6.6kW Solar System for Businesses',
        excerpt: 'Discover the benefits of a commercial 6.6kW solar system — save money, reduce carbon footprint, and become more energy independent today.',
        category: 'Commercial Solar',
        date: '1 May 2023',
    },
    {
        slug: 'residential-6-6kw-solar-system',
        title: 'Save on Bills with a 6.6kW Residential Solar System',
        excerpt: 'Discover the benefits of a 6.6kW residential solar system — save on costs and increase property value with a clean and renewable energy source.',
        category: 'Solar Systems',
        date: '29 Apr 2023',
    },
    {
        slug: 'reliable-6-6kw-solar-system',
        title: 'Reduce Energy Bills with a Reliable 6.6kW Solar System',
        excerpt: 'Reduce your carbon footprint and save money on energy bills with a reliable 6.6kW solar system.',
        category: 'Solar Systems',
        date: '27 Apr 2023',
    },
    {
        slug: 'efficient-6-6kw-solar-system',
        title: 'Maximize Your Savings with an Efficient 6.6kW Solar System',
        excerpt: 'A 6.6kW solar system — benefits, components, and installation. Generate up to 25 units of electricity per day, increase property value, and reduce electricity bills.',
        category: 'Solar Systems',
        date: '25 Apr 2023',
    },
    {
        slug: 'high-quality-6-6kw-solar-system',
        title: 'Discover the Benefits of a High-Quality 6.6kW Solar System',
        excerpt: 'High-quality 6.6kW solar system: benefits, cost savings, environmental advantages, increased property value, and a reliable energy source.',
        category: 'Solar Systems',
        date: '23 Apr 2023',
    },
    {
        slug: 'affordable-6-6kw-solar-system',
        title: 'Affordable 6.6kW Solar System: Benefits & Incentives',
        excerpt: 'An affordable 6.6kW solar system: benefits, costs, and incentives — reduce energy bills, increase home value, and help the environment.',
        category: 'Solar Systems',
        date: '21 Apr 2023',
    },
    {
        slug: 'new-energy-tech-consumer-code-program',
        title: 'New Energy Tech Consumer Code Program',
        excerpt: 'The Approved Solar Retailer program has been replaced by the New Energy Tech Consumer Code (NETCC) program. Learn what this means for solar buyers.',
        category: 'Industry News',
        date: '15 Mar 2023',
    },
    {
        slug: 'why-solar-power-is-the-future-of-energy-in-australia',
        title: 'Why Solar Power is the Future of Energy in Australia',
        excerpt: 'Solar power is rapidly becoming Australia\'s go-to energy source. With abundant sunlight and a growing need to reduce carbon emissions, solar is the future.',
        category: 'Solar Industry',
        date: '10 Mar 2023',
    },
    {
        slug: 'the-maintenance-and-lifespan-of-solar-panels',
        title: 'The Maintenance and Lifespan of Solar Panels',
        excerpt: 'Solar panels require minimal maintenance but it\'s essential to understand what\'s involved. Learn how to keep your system operating at peak efficiency for decades.',
        category: 'Solar Tips',
        date: '5 Mar 2023',
    },
    {
        slug: 'solar-payment-options',
        title: 'Solar Payment Options: Cash Vs. Payment Plan',
        excerpt: 'When it comes to solar payment options you are spoiled for choice with EFS Solar. Learn the pros and cons of paying cash vs. using a payment plan.',
        category: 'Finance',
        date: '1 Mar 2023',
    },
    {
        slug: 'benefits-of-solar-power',
        title: 'Benefits of Solar Power',
        excerpt: 'Solar power is emerging as a critical solution as the world becomes increasingly aware of the need to reduce carbon emissions and combat climate change.',
        category: 'Solar Tips',
        date: '25 Feb 2023',
    },
    {
        slug: 'common-misconceptions-about-solar-power',
        title: 'Common Misconceptions about Solar Power',
        excerpt: 'Solar power is a rapidly growing industry, but many misconceptions exist. We bust the most common myths about solar panels, costs, and reliability.',
        category: 'Solar Tips',
        date: '20 Feb 2023',
    },
    {
        slug: 'dodgy-solar-installers',
        title: 'Dodgy Solar Installers | EFS Solar',
        excerpt: 'Discover the truth about dodgy solar installers or "solar cowboys" and how to spot them from a mile away. Protect yourself before you invest.',
        category: 'Consumer Advice',
        date: '15 Feb 2023',
    },
    {
        slug: 'jobs-of-the-future-in-clean-energy',
        title: 'Jobs of the Future in Clean Energy',
        excerpt: 'Australia\'s clean energy future is looking bright, and with it comes a range of new career opportunities in solar, wind, and grid management.',
        category: 'Industry News',
        date: '10 Feb 2023',
    },
    {
        slug: 'how-are-solar-panels-tested',
        title: 'How Are Solar Panels Tested',
        excerpt: 'As solar panel technology improves, how do you know a panel is reliable? Learn how solar panels are tested for quality, durability, and performance.',
        category: 'Solar Tips',
        date: '5 Feb 2023',
    },
    {
        slug: 'what-is-neo-and-why-its-changing',
        title: 'What is NEO, and Why It\'s Changing',
        excerpt: 'Federal, state, and territory energy ministers have agreed to include emissions reduction goals in the National Electricity Objective (NEO).',
        category: 'Energy Market',
        date: '1 Feb 2023',
    },
    {
        slug: 'micro-inverters-do-i-need-them',
        title: 'What Are Micro Inverters & Do I Need Them?',
        excerpt: 'Deciding between one inverter or several micro-inverters? Here\'s everything you need to know before installing your solar system.',
        category: 'Solar Tips',
        date: '25 Jan 2023',
    },
    {
        slug: 'is-your-roof-solar-ready',
        title: 'How to Tell If Your Roof is Solar Ready',
        excerpt: 'Is your roof solar ready? Across Australia, solar panels are becoming an increasingly popular way to generate electricity. Here\'s how to check.',
        category: 'Solar Tips',
        date: '20 Jan 2023',
    },
    {
        slug: 'feed-in-tariffs-explained',
        title: 'What Are Feed-In Tariffs & What Do They Do?',
        excerpt: 'If you\'re considering solar you need to know everything about Feed-In Tariffs. Here\'s what they are, how they work, and how to maximise your returns.',
        category: 'Finance',
        date: '10 Jan 2023',
    },
    {
        slug: 'businesses-should-consider-solar',
        title: 'Why Businesses Should Consider Solar',
        excerpt: 'Businesses should consider solar systems to reduce overheads, work towards a more sustainable future, and invest in a greener future.',
        category: 'Commercial Solar',
        date: '20 Jul 2022',
    },
    {
        slug: 'australias-energy-supply-crisis',
        title: "Australia's Energy Supply Crisis",
        excerpt: 'Australia is in an energy supply crisis. A lack of investment in renewable energy sources has left the grid vulnerable. Solar is part of the solution.',
        category: 'Energy Market',
        date: '15 Jul 2022',
    },
    {
        slug: '5-biggest-solar-farms-in-the-world',
        title: 'The 5 Biggest Solar Farms In The World',
        excerpt: 'Solar farms are becoming increasingly popular as the world moves towards renewable energy sources. These massive plants generate enormous amounts of electricity.',
        category: 'Solar Industry',
        date: '5 Jul 2022',
    },
    {
        slug: 'household-budgets',
        title: 'How Solar Helps Reduce Household Budgets',
        excerpt: 'Household budgets are tighter than ever. With inflation and rising living costs, solar energy is one of the best tools families have to cut electricity bills.',
        category: 'Finance',
        date: '1 Jul 2022',
    },
    {
        slug: 'vampire-appliances',
        title: 'Vampire Appliances Are Killing Your Energy Bill',
        excerpt: 'Vampire appliances continue to draw electricity from the grid even when turned off. Find out which devices are costing you money and how solar can help.',
        category: 'Energy Tips',
        date: '20 May 2022',
    },
    {
        slug: 'when-to-consider-going-solar',
        title: 'When To Consider Going Solar',
        excerpt: 'Solar energy is becoming more popular across Australia. But when is the right time to make the switch? Here are the key signals to watch for.',
        category: 'Solar Tips',
        date: '15 May 2022',
    },
    {
        slug: 'solar-cowboys',
        title: 'Watch Out For Solar Cowboys',
        excerpt: 'Going solar can be a big deal for Australian home or business owners. There are dodgy operators out there — here\'s how to spot and avoid them.',
        category: 'Consumer Advice',
        date: '10 May 2022',
    },
    {
        slug: 'solar-myths',
        title: 'Solar Myths: 5 Things That Aren\'t True',
        excerpt: "We're sick of solar myths circulating. When it comes to installing solar panels on your roof, some things simply aren't true. We set the record straight.",
        category: 'Solar Tips',
        date: '5 May 2022',
    },
    {
        slug: 'investment-in-clean-energy',
        title: 'A Greater Investment In Clean Energy – The IPCC Demands',
        excerpt: 'A new report from the IPCC urges governments worldwide to make a greater investment in clean energy. Here\'s what it means for Australia and solar.',
        category: 'Industry News',
        date: '10 Apr 2022',
    },
];

const categoryColors: Record<string, string> = {
    'Energy Market': '#1e3a5f',
    'Solar Systems': '#1a8a6f',
    'Commercial Solar': '#2d6a9f',
    'Finance': '#7b4fa6',
    'Solar Tips': '#c07b2a',
    'Industry News': '#b03a2e',
    'Consumer Advice': '#2e7d52',
    'Energy Tips': '#3a6fa8',
    'Solar Industry': '#0e6655',
};

export default function NewsIndex() {
    return (
        <>
            <Header />
            <main>
                <ServicePageHero
                    subtitle="EFS Solar >"
                    title="News & Insights"
                    bgImage="/assets/solar-panels-2022-11-11-08-53-10-utc.jpg"
                />

                <section style={{ background: '#f5f7fa', padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: 'var(--primary-color)', textTransform: 'uppercase', marginBottom: '12px' }}>
                                SOLAR KNOWLEDGE HUB
                            </p>
                            <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#0f1e3c', lineHeight: 1.2, marginBottom: '16px' }}>
                                Solar News & Insights
                            </h1>
                            <p style={{ fontSize: '17px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                                Stay up to date with the latest solar energy news, tips, and industry insights from the EFS Solar team.
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '28px',
                        }}>
                            {articles.map((article) => {
                                const catColor = categoryColors[article.category] || '#1a3a6f';
                                return (
                                    <a
                                        key={article.slug}
                                        href={`/news/${article.slug}`}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            background: '#fff',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                                            overflow: 'hidden',
                                            textDecoration: 'none',
                                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                            border: '1px solid #e8eaf0',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.13)';
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
                                        }}
                                    >
                                        <div style={{ height: '6px', background: catColor }} />
                                        <div style={{ padding: '28px 28px 24px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                                <span style={{
                                                    display: 'inline-block',
                                                    background: catColor + '18',
                                                    color: catColor,
                                                    fontSize: '11px',
                                                    fontWeight: 700,
                                                    letterSpacing: '1px',
                                                    textTransform: 'uppercase',
                                                    padding: '4px 10px',
                                                    borderRadius: '20px',
                                                    border: `1px solid ${catColor}30`,
                                                }}>
                                                    {article.category}
                                                </span>
                                                <span style={{ color: '#aaa', fontSize: '12px', marginLeft: 'auto' }}>{article.date}</span>
                                            </div>
                                            <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f1e3c', margin: '0 0 12px', lineHeight: 1.4 }}>
                                                {article.title}
                                            </h2>
                                            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                                                {article.excerpt}
                                            </p>
                                        </div>
                                        <div style={{ padding: '0 28px 24px', marginTop: 'auto' }}>
                                            <span style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: catColor,
                                                fontWeight: 600,
                                                fontSize: '13px',
                                            }}>
                                                Read more
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="8" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
                                                </svg>
                                            </span>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="cta-banner">
                    <div className="cta-banner-container">
                        <h2 className="cta-banner-title">
                            Ready to make the switch to solar?<br />
                            Get a free, no-obligation quote today.
                        </h2>
                        <a href="#" className="btn btn-primary hover-dark quote-trigger" style={{ backgroundColor: '#1e2e4f', padding: '16px 36px', color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', border: 'none' }}>
                            <span className="btn-text">Get a Quote</span>
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67" />
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
