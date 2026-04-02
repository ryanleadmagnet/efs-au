import type { Metadata } from 'next';
import ReviewStoryTemplate from '@/components/ReviewStoryTemplate';

export const metadata: Metadata = {
    title: 'Carrara Premium Solar System Installation | EFS Solar',
    description: 'EFS Solar installed a premium Energizer 8.8KW solar system for a Carrara homeowner on the Gold Coast. See the full installation story and results.',
    keywords: ['solar installation Carrara', 'Energizer solar Gold Coast', 'premium solar system QLD', 'solar system Carrara'],
    alternates: { canonical: 'https://www.efssolar.com.au/reviews/carrara-premium-solar-system-installation' },
    openGraph: { title: 'Carrara Solar Installation — EFS Solar', description: 'Premium Energizer 8.8KW solar installation in Carrara, Gold Coast.', url: 'https://www.efssolar.com.au/reviews/carrara-premium-solar-system-installation' },
};

export default function CarraraReview() {
    const topContent = (
        <>
            <p className="font-bold text-[#082042]">Hey Carrara neighbours!</p>
            <p>
                We recently had a great job right here on the Gold Coast, helping a client who was seriously frustrated with their solar power.
            </p>
            <p>
                Their problem was the same one we hear a lot: <strong>their existing system just wasn&rsquo;t pulling its weight anymore.</strong>
            </p>
            <p>
                They were noticing those power bills creeping back up and started questioning if their original investment was even worth it. They knew their old system was aging, and they needed a proper overhaul.
            </p>
            <p>
                Instead of just waiting for the whole thing to fail or paying unnecessary high bills, this smart Carrara homeowner called <strong>EFS Solar</strong>.
            </p>
            <p>
                Their older panels and inverter simply couldn&rsquo;t keep up. Let&rsquo;s face it, living in Carrara means running the A/C, heating the pool, and using a lot of energy. Their old setup was undersized and inefficient, meaning they were losing valuable energy output every single day.
            </p>
            <p>
                We looked at their setup and knew exactly what was needed: a powerful, reliable upgrade. We chose to install the robust <strong>Energizer 8.8KW</strong> system.
            </p>
            <p>
                This upgrade means a massive jump in generation, finally allowing them to offset all that high Gold Coast energy usage. The best part? Our Carrara client is now enjoying <em>much</em> higher power production and finally getting those energy savings back on track&mdash;all thanks to the trusted <strong>Energizer</strong> system.
            </p>
        </>
    );

    const bottomContent = (
        <>
            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginBottom: '24px' }}>When you first got solar, those low bills felt great! But if your system is getting older, you might be seeing those savings shrink.</h3>
            <p>
                Honestly, solar systems don&rsquo;t stay at peak performance forever. If your system is approaching 10 years old, it&rsquo;s running on yesterday&rsquo;s tech. It just can&rsquo;t compete with the efficiency of the modern <strong>8.8KW</strong> systems we install today. Don&rsquo;t settle for less!
            </p>

            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginTop: '48px', marginBottom: '24px' }}>If you live in Carrara and aren&rsquo;t sure if your system is worth saving, look for these three clear signs:</h3>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>It&rsquo;s Over 10 Years Old:</strong> Technology moves fast. Systems installed a decade ago are nowhere near the durability and smart tech of today&rsquo;s panels and inverters.</li>
                <li><strong>Higher Power Bills (With the Same Use):</strong> This is the biggest hint! If your usage hasn&rsquo;t changed, but your grid consumption is increasing, your panels are struggling.</li>
                <li><strong>Frequent Faults:</strong> If you&rsquo;re constantly calling for repairs, that money is better spent on a long-term upgrade, like the <strong>Energizer 8.8KW</strong>, that comes with a full warranty.</li>
            </ul>

            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginTop: '48px', marginBottom: '24px' }}>Patching up a broken inverter is a quick fix, but an old system usually has hidden issues everywhere. An upgrade lets you:</h3>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>Get More Power:</strong> Seriously boost the energy you get from your roof space.</li>
                <li><strong>Use Smart Monitoring:</strong> Get full control and see exactly what your system is doing on your phone.</li>
                <li><strong>Sleep Easy:</strong> Know you have a reliable, warrantied system installed by local experts right here near Carrara.</li>
            </ul>

            <p style={{ marginTop: '32px' }}>
                If your solar isn&rsquo;t working like it should, it&rsquo;s costing you money. Just like our happy client in Carrara, the solution is often a smart, cost-effective upgrade.
            </p>
            <p className="font-bold text-[#47c7ea] text-xl" style={{ marginTop: '24px' }}>
                Ready to maximize your savings?
            </p>
            <p className="font-semibold">
                Give the team at EFS Solar a call today for a quick health check of your existing system and find out how much a modern upgrade could save you!
            </p>
        </>
    );

    return (
        <ReviewStoryTemplate 
            title="Carrara Premium Solar System Installation"
            videoUrl="/assets/AQOQIiGT6I2VJxaP2qZoRJEduwEwj0uDaAF0z0TX4lM09DjqXepPRdmRRroxltjGFkqbfPV6B3MhXZsb98pE95v8ZHxdVoRGfGpJuqk.mp4"
            topContent={topContent}
            bottomContent={bottomContent}
        />
    );
}
