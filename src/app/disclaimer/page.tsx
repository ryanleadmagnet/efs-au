import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header alwaysSticky={true} />
            <main className="flex-grow pt-[150px] pb-20">
                <div className="container max-w-[900px]">
                    <h1 className="text-4xl font-bold mb-10 text-[#002e6e]">Disclaimer</h1>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">No warranties</h2>
                            <p className="mb-4">
                                This information and content of the website is made without any representations or warranties, express or implied.
                            </p>
                            <p className="mb-4">EFS Solar does not warrant that:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>this website will be constantly available, or available at all; or</li>
                                <li>the information on this website is complete, true, accurate or non-misleading.</li>
                            </ul>
                            <p className="mb-4 font-semibold">
                                Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any matter (including but not limited to financial or legal advice) you should consult an appropriate professional.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Limitations of liability</h2>
                            <p className="mb-4">
                                EFS Solar is not liable (whether under the law of contract, the law of torts or otherwise) in relation to the contents of or use of or otherwise in connection with this website.
                            </p>
                            <p className="mb-4">EFS Solar is not liable:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>to the extent that the website is provided free-of-charge, for any direct loss;</li>
                                <li>for any indirect, special or consequential loss; or</li>
                                <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
                            </ul>
                            <p className="mb-4">
                                These limitations of liability apply even if EFS Solar has been expressly advised of the potential loss.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Exceptions</h2>
                            <p className="mb-4">
                                Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit and nothing in this website disclaimer will exclude or limit EFS Solar' liability in respect of any:
                            </p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>death or personal injury caused by EFS Solar negligence; and/or</li>
                                <li>any loss incurred due to the fraud or fraudulent misrepresentation on the part EFS Solar.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Reasonableness</h2>
                            <p className="mb-4">
                                By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.
                                If you do not think they are reasonable, you must not use this website or any content or information you obtain from the website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Other parties</h2>
                            <p className="mb-4">
                                You agree that you will not bring any claim personally against EFS Solar officers or employees in respect of any losses you suffer in connection with the website, content of the website or any information contained on the website.
                                You agree that the limitations of warranties and liability set out in this website disclaimer will protect EFS Solar officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as EFS Solar.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#002e6e]">Unenforceable provisions</h2>
                            <p className="mb-4">
                                If any provision of this website disclaimer is or is found to be unenforceable under applicable law that will not affect the enforceability of the other provisions contained in this disclaimer.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}