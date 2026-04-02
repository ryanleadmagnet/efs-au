import type { Metadata } from 'next';
import ReviewStoryTemplate from '@/components/ReviewStoryTemplate';

export const metadata: Metadata = {
    title: 'Solar Battery Addition at Nerang, Gold Coast | EFS Solar',
    description: 'How EFS Solar installed an Energizer 11.6kWh battery system for a Nerang homeowner, achieving near-total energy independence. Read the full story.',
    keywords: ['solar battery Nerang', 'Energizer battery Gold Coast', 'battery storage Queensland', 'home battery storage Nerang'],
    alternates: { canonical: 'https://www.efssolar.com.au/reviews/solar-system-battery-replacement-at-nerang' },
    openGraph: { title: 'Nerang Battery Storage — EFS Solar', description: '11.6kWh Energizer battery installation in Nerang, Gold Coast turning excess solar into true energy independence.', url: 'https://www.efssolar.com.au/reviews/solar-system-battery-replacement-at-nerang' },
};

export default function NerangReview() {
    const topContent = (
        <>
            <p className="font-bold text-[#082042]">Hey Nerang neighbours!</p>
            <p>
                We recently helped a local homeowner, Cassandra, right here on <strong>Crusader Way, Nerang</strong>, take control of her power bills and achieve genuine energy independence. She already had solar, but like many on the Gold Coast, she was frustrated because she was <strong>still paying high evening bills</strong> and sending all her valuable daytime energy back to the grid for pennies.
            </p>
            <p>
                Cassandra knew it was time to stop relying on the retailers and start capturing and keeping that clean energy for herself, so she called <strong>EFS Solar</strong> for a powerful storage solution.
            </p>
        </>
    );

    const bottomContent = (
        <>
            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginBottom: '24px' }}>Cassandra&rsquo;s existing solar setup was generating clean power during the day, but that energy was being wasted in two ways that were costing her money:</h3>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>Zero Storage:</strong> Every evening, the second the sun set, she was forced to start buying expensive power from the grid to run her home.</li>
                <li><strong>Missing Out:</strong> She wasn&rsquo;t getting the full benefit of her own solar system because she couldn&rsquo;t use it 24/7.</li>
            </ul>

            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginTop: '48px', marginBottom: '24px' }}>To solve this, we designed a cutting-edge system focused entirely on storage:</h3>
            <p><strong>11.6 kWh Energizer Battery:</strong> We installed the huge, high-voltage <strong>Energizer Solar EnergiStack HV</strong>. This system provides 11.6kWh of usable, stored energy&mdash;easily enough power to run all of her essential home appliances and lighting overnight.</p>
            <p className="" style={{ marginTop: '16px' }}>
                The result? Cassandra is now a self-consumption champion. She is running her home almost entirely on her own clean, stored energy, day and night, drastically cutting down her power bills and achieving the independence she was looking for.
            </p>

            <h3 className="text-[#082042] font-heading font-bold text-2xl md:text-3xl leading-tight" style={{ marginTop: '48px', marginBottom: '24px' }}>If you live in Nerang and already have solar panels, adding battery storage is the logical next step to maximize your investment.</h3>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>Maximize Your Savings:</strong> You stop selling your clean power cheaply in the day and start <em>using</em> it when power is most expensive (in the evenings).</li>
                <li><strong>True Energy Independence:</strong> A battery ensures you use nearly 100% of the energy your roof produces, rather than letting the grid dictate your usage.</li>
                <li><strong>Peace of Mind:</strong> When the power grid inevitably goes down during a big Gold Coast storm, the battery automatically switches on to keep your lights and fridge running.</li>
            </ul>

            <p style={{ marginTop: '32px' }}>
                We chose the modular and reliable Energizer system for Cassandra because it provides a heavy-duty, scalable storage solution. The huge <strong>11.6kWh</strong> capacity gives her total confidence, knowing she has a powerful, sophisticated setup that will keep her home comfortable and bills low for many years.
            </p>
            <p style={{ marginTop: '16px' }}>
                If you live in <strong>Nerang</strong> or the surrounding suburbs and are tired of sending your power away, an <strong>Energizer</strong> battery upgrade is the smartest move you can make. Just like Cassandra on <strong>Crusader Way</strong>, you can stop relying on the grid and start running your home on your own stored energy.
            </p>
            
            <p className="font-bold text-[#47c7ea] text-xl" style={{ marginTop: '24px' }}>
                Ready to maximize your solar savings and achieve true energy independence?
            </p>
            <p className="font-semibold">
                Contact the friendly, local experts at EFS Solar today for a no-obligation quote on an <strong>Energizer Battery</strong> solution for your home!
            </p>
        </>
    );

    return (
        <ReviewStoryTemplate 
            title="Solar Battery Replacement in Nerang"
            videoUrl="/assets/AQOk2PQZAO9U0iG07d3EhWwcAmGAEGRayXa-rGLpS5rYxjuLRdKuy0FAJyW0203cxZkDcZV8nU3vIYVzHErTPSUai7lJn5FYuZ659sg.mp4"
            topContent={topContent}
            bottomContent={bottomContent}
        />
    );
}
