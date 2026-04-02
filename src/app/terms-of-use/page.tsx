import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header alwaysSticky={true} />
            <main className="flex-grow pt-[150px] pb-20">
                <div className="container max-w-[900px]">
                    <h1 className="text-4xl font-bold mb-10 text-[#002e6e]">Terms of Use</h1>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="mb-6">
                            Our website available at: <a href="https://www.efssolar.com.au" className="text-blue-600 hover:underline">www.efssolar.com.au</a> (Site) and may be available through other addresses or channels.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Consent</h2>
                            <p className="mb-4">
                                By accessing and/or using our Site, you agree to these Terms of Use and our Privacy Policy (Terms). Please read these Terms carefully and immediately cease using our Site if you do not agree to them.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Variations</h2>
                            <p className="mb-4">
                                We may, at any time and at our discretion, vary these Terms by publishing the varied terms on our Site. We recommend you check our Site regularly to ensure you are aware of our current terms. Materials and information on this Site (Content) are subject to change without notice. We are not liable for any Content that is inaccurate or out of date after the time of publication.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Licence to use our Site</h2>
                            <p className="mb-4">
                                We grant you a non-exclusive, royalty-free, revocable, worldwide, non-transferable licence to use our Site in accordance with these Terms. All other uses are prohibited without our prior written consent.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Prohibited conduct</h2>
                            <p className="mb-4">
                                You must not do or attempt to do anything that is unlawful, prohibited by any laws applicable to our Site, which we would consider inappropriate, or which might bring us or our Site into disrepute.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Exclusion of competitors</h2>
                            <p className="mb-4">
                                You are prohibited from using our Site, including the Content, in any way that competes with our business.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Information</h2>
                            <p className="mb-4">
                                The Content is not comprehensive and is for general information purposes only. It does not take into account your specific needs, objectives or circumstances, and it is not advice. While we use reasonable attempts to ensure the accuracy and completeness of the Content, we make no representation or warranty in relation to it, to the maximum extent permitted by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Intellectual Property rights</h2>
                            <p className="mb-4">
                                Your use of our Site and your use of and access to any Content does not grant or transfer to you any rights, title or interest in relation to our Site or the Content. You must not:
                            </p>
                            <ul className="list-alpha pl-6 mb-4">
                                <li>(a) copy or use, in whole or in part, any Content;</li>
                                <li>(b) reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or circulate any Content to any third party; or</li>
                                <li>(c) breach any intellectual property rights connected with our Site or the Content, including (without limitation) altering or modifying any of the Content, causing any of the Content to be framed or embedded in another website or platform, or creating derivative works from the Content.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Third party sites</h2>
                            <p className="mb-4">
                                Our Site may contain links to websites operated by third parties. Unless expressly stated otherwise, we do not control, endorse or approve, and are not responsible for, the content on those websites. You should make your own investigations with respect to the suitability of those websites.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Discontinuance</h2>
                            <p className="mb-4">
                                We may, at any time and without notice to you, discontinue our Site, in whole or in part or make substantial changes to our website. We may also exclude any person from using our Site at any time and at our sole discretion. We are not responsible for any Liability you may suffer arising from or in connection with any such discontinuance or exclusion.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Warranties and disclaimers</h2>
                            <p className="mb-4">
                                To the maximum extent permitted by law, we make no representations or warranties about our Site or the Content, including (without limitation) that:
                            </p>
                            <ul className="list-alpha pl-6 mb-4">
                                <li>(a) they are complete, accurate, reliable, up-to-date and suitable for any particular purpose;</li>
                                <li>(b) access will be uninterrupted, error-free or free from viruses; or</li>
                                <li>(c) our Site will be secure.</li>
                            </ul>
                            <p className="mb-4 italic">
                                You read, use and act on our Site and the Content at your own risk.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Limitation of Liability</h2>
                            <p className="mb-4">
                                To the maximum extent permitted by law, we are not responsible for any loss, damage or expense whether direct or indirect and/or whether present, unascertained, future or contingent (Liability) suffered by you or any third party, arising from or in connection with your use of our Site and/or the Content and/or any inaccessibility of, interruption to or outage of our Site and/or any loss or corruption of data and/or the fact that the Content is inaccurate, incomplete or out of date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Indemnity</h2>
                            <p className="mb-4">
                                To the maximum extent permitted by law, you must indemnify us, and hold us harmless, against any Liability suffered or incurred by us arising from or in connection with your use of our Site or any breach of these Terms or any applicable laws by you. This indemnity is a continuing obligation, independent from the other obligations under these Terms, and continues after these Terms end.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Disputes</h2>
                            <p className="mb-4">
                                In the event of any dispute arising from, or in connection with, these Terms (Dispute), the party claiming there is a Dispute must give written notice to the other party setting out the details of the Dispute and proposing a resolution.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Jurisdiction</h2>
                            <p className="mb-4">
                                Your use of our Site and these Terms are governed by the laws of Queensland, Australia. You irrevocably and unconditionally submit to the exclusive jurisdiction of the courts operating in Queensland, Australia.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <p className="mb-2">For any questions and notices, please contact us at:</p>
                            <p className="font-bold">Email: <a href="mailto:privacy@efssolar.com.au" className="text-blue-600">privacy@efssolar.com.au</a></p>
                            <p className="font-bold">Phone: 1300 911 736</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}