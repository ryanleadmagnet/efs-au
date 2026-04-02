import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header alwaysSticky={true} />
            <main className="flex-grow pt-[150px] pb-20">
                <div className="container max-w-[900px]">
                    <h1 className="text-4xl font-bold mb-10 text-[#002e6e]">Privacy Policy</h1>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p className="mb-6">
                            EFS Solar is committed to providing quality services to you and this privacy policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
                        </p>
                        <p className="mb-6">
                            We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The Australian Privacy Principles (APPs) govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
                        </p>
                        <p className="mb-6">
                            A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" className="text-blue-600 hover:underline">www.oaic.gov.au</a>
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">What is Personal Information and why do we collect it?</h2>
                        <p className="mb-6">
                            Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes but is not limited to: names, addresses, email addresses, phone and facsimile numbers.
                        </p>
                        <p className="mb-6">
                            This Personal Information is obtained in many ways including interviews, correspondence, by telephone and facsimile, by email, via our website www.efssolar.com.au, from your website, from media and publications, from other publicly available sources, from cookies and from third parties.
                        </p>
                        <p className="mb-6">
                            We do not guarantee that your information is safe if you enter your information into any links on our website. We do not guarantee the Privacy Policy or security of any third parties or their websites that we are authorised to release your information to.
                        </p>
                        <p className="mb-6">
                            We collect your Personal Information for the primary purpose of providing our services to you, providing information to you on our services and providing marketing information to you in the future. We may also use your Personal Information for secondary purposes closely related to the primary purpose in circumstances where you would reasonably expect such use or disclosure.
                        </p>
                        <p className="mb-6">
                            You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing. When we collect Personal Information we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Third Parties</h2>
                        <p className="mb-6">
                            Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Disclosure of Personal Information</h2>
                        <p className="mb-6">
                            Your Personal Information may be disclosed by us to third parties in a number of circumstances which includes the following:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Third parties where you consent to the use or disclosure of your Personal Information; and</li>
                            <li>Where required or authorised by law.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Security of Personal Information</h2>
                        <p className="mb-6">
                            Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorised access, modification or disclosure. All websites, our own and 3rd party, have 256bit Encryption and can only be accessed by authorised users using 2FA (2 Factor Authentication) where possible.
                        </p>
                        <p className="mb-6">
                            The websites we use are as follows: Our website efssolars.com.au, <a href="https://www.typeform.com" className="text-blue-600 hover:underline">typeform.com</a>, <a href="https://www.pipedrive.com" className="text-blue-600 hover:underline">pipedrive.com</a> and <a href="https://www.pandadoc.com" className="text-blue-600 hover:underline">pandadoc.com</a>.
                        </p>
                        <p className="mb-6">
                            When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.
                        </p>
                        <p className="mb-6">
                            We will keep electronic records for the 7 year period and once this period has expired we will ensure secure destruction of all information. If you request that we delete your Personal Information we will do so and delete all information from our systems and servers within 7 days of the date you request the deletion.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Access to your Personal Information</h2>
                        <p className="mb-6">
                            You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing. EFS Solar will not charge any fee for your access request. In order to protect your Personal Information we may require identification from you before releasing the requested information.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Maintaining the Quality of your Personal Information</h2>
                        <p className="mb-6">
                            It is an important to us that your Personal Information is up to date. You should take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Policy Updates</h2>
                        <p className="mb-6">
                            This Policy may change from time to time and is available on our website.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#002e6e]">Privacy Policy Complaints and Enquiries</h2>
                        <p className="mb-6">
                            If you have any queries or complaints about our Privacy Policy please contact us at: <a href="mailto:privacy@efssolar.com.au" className="text-blue-600 hover:underline">privacy@efssolar.com.au</a> or on 1300 911 736.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}