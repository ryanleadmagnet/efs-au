import type { Metadata } from 'next';
import ReviewStoryTemplate from '@/components/ReviewStoryTemplate';

export const metadata: Metadata = {
    title: 'Oxenford Solar System Upgrade Case Study | EFS Solar',
    description: 'How EFS Solar helped an Oxenford homeowner replace aging solar panels and restore maximum energy savings. Read the full case study.',
    keywords: ['solar upgrade Oxenford', 'solar system replacement Gold Coast', 'old solar upgrade Queensland'],
    alternates: { canonical: 'https://www.efssolar.com.au/reviews/oxenford-solar-system-upgrade' },
    openGraph: { title: 'Oxenford Solar Upgrade — EFS Solar', description: 'Case study: EFS Solar replaced an aging system to restore full energy savings in Oxenford, QLD.', url: 'https://www.efssolar.com.au/reviews/oxenford-solar-system-upgrade' },
};

export default function OxenfordReview() {
    const topContent = (
        <>
            <p>
                We recently worked with a client in Oxenford who was experiencing this exact problem. He was frustrated because his system was no longer producing the savings it once did, making him question the investment. He knew his system was aging, and he recognized the need for an efficient overhaul.
            </p>
            <p>
                Instead of waiting for a complete failure or continuing to pay unnecessarily high bills, he wisely decided to get in touch with <strong>EFS Solar</strong>.
            </p>
            <p>
                The client&rsquo;s older panels and inverter couldn&rsquo;t keep up with modern solar efficiency standards. He was losing valuable energy output every single day.
            </p>
            <p>
                We assessed his setup and recommended a high-efficiency solar system upgrade focused on reliability and maximum generation.
            </p>
            <p>
                The result? Our Oxenford client is now enjoying significantly higher production and getting his energy savings back on track.
            </p>
        </>
    );

    const bottomContent = (
        <>
            <h3 className="text-[#082042] font-heading font-bold text-3xl" style={{ marginBottom: '24px' }}>Are You Getting the Savings You Deserve?</h3>
            <p>
                When you first installed your solar panels, you probably enjoyed significantly lower power bills. But if your system is getting older, you might be noticing those savings starting to shrink and your power bills creeping back up.
            </p>
            <p>
                The fact is, solar systems are not meant to last forever at peak performance. If your system is approaching the 10-year mark or older, it&rsquo;s operating on outdated technology and is likely underperforming solar systems installed today. Don&rsquo;t settle for less than optimal energy production&mdash;it might be time for a change!
            </p>

            <h3 className="text-[#082042] font-heading font-bold text-3xl" style={{ marginTop: '48px', marginBottom: '24px' }}>The 3 Major Signs Your Solar System Needs an Upgrade</h3>
            <p>If you&rsquo;re unsure whether your aging system is worth saving or replacing, look for these three clear indicators:</p>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>System Age is Over 10 Years:</strong> Solar technology advances rapidly. Systems installed a decade ago simply cannot compete with the efficiency, durability, and smart technology of today&rsquo;s panels and inverters.</li>
                <li><strong>Higher Than Expected Power Bills:</strong> This is the clearest sign. If your usage hasn&rsquo;t changed but your grid consumption is increasing, your panels are producing less power than they should be.</li>
                <li><strong>Frequent Faults or Inverter Issues:</strong> Older components are more prone to failure. If you&rsquo;ve had to call for repairs multiple times in the past year, investing that money into a solar system upgrade is often a smarter, long-term choice.</li>
            </ul>
            <h3 className="text-[#082042] font-heading font-bold text-3xl" style={{ marginTop: '48px', marginBottom: '24px' }}>Why Choose an Upgrade Over a Repair?</h3>
            <p>While replacing a broken inverter might fix an immediate issue, an underperforming solar system often has hidden problems across all components. An upgrade allows you to:</p>
            <ul className="list-disc" style={{ paddingLeft: '24px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong>Boost Energy Output:</strong> Get a significantly higher return on your roof space investment.</li>
                <li><strong>Access Modern Monitoring:</strong> Enjoy better control and transparency over your system&rsquo;s performance.</li>
                <li><strong>Restore Confidence:</strong> Sleep well knowing you have a reliable, warrantied, high-efficiency system installed by experts.</li>
            </ul>

            <h3 className="text-[#082042] font-heading font-bold text-3xl" style={{ marginTop: '48px', marginBottom: '24px' }}>Don&rsquo;t Let Old Technology Dim Your Savings</h3>
            <p>If your system isn&rsquo;t working like it once did, it&rsquo;s not truly saving you money. Like our successful client in Oxenford, the solution is often a strategic and cost-effective solar system upgrade.</p>
            <p className="font-bold text-[#47c7ea] text-xl" style={{ marginTop: '24px' }}>
                Ready to stop wondering and start maximizing your savings?
            </p>
            <p className="font-semibold">
                Get in touch with the experts at EFS Solar today for a comprehensive system health check and find out how much a modern upgrade could save you!
            </p>
        </>
    );

    return (
        <ReviewStoryTemplate 
            title="How We Helped Our Oxenford Client Maximize His Savings"
            videoUrl="/assets/AQNgOLaFoyqSXoyDLcwmw7da78camL8qsSUw-x6wN7PZ6ruHHEg0tLZQAtWkLEPRIHAXVsXHD0oU92Lxzld5cnxqDHfGb17_FoefNdI.mp4"
            topContent={topContent}
            bottomContent={bottomContent}
        />
    );
}
