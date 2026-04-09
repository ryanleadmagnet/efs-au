export default function Footer() {
    return (
        <footer className="main-footer bg-[#222]">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src="/assets/logo-white.svg"
                        alt="EFS Solar Logo White" className="footer-logo" />
                    <div className="footer-contact">
                        <p><a href="mailto:support@efssolar.com.au"><i className="fas fa-paper-plane text-sm"></i>
                            support@efssolar.com.au</a></p>
                        <p><a href="tel:1300911736"><i className="fas fa-phone-alt text-sm"></i> 1300 911 736</a></p>
                    </div>
                    <a href="/contact" className="btn btn-outline-white btn-sm">
                        <span className="btn-text">Contact Us</span>
                        <span className="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.75 18.37" width="10">
                                <path fill="none" stroke="currentColor" strokeWidth="2"
                                    d="m.71.71l6.03,6.03c1.35,1.35,1.35,3.55,0,4.9L.71,17.67"></path>
                            </svg>
                        </span>
                    </a>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/EFSSolar/"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/efs_solar/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@efssolar"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.tiktok.com/@efssolar"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Links</h4>
                    <ul className="footer-links">
                        <li><a href="/services/residential-solar">Residential Solar</a></li>
                        <li><a href="/services/commercial-solar">Commercial Solar</a></li>
                        <li><a href="/services/batteries">Batteries</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/get-started">After Installation</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/career">Work with Us</a></li>
                        <li><a href="/news">News</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">Referral Program</h4>
                    <ul className="footer-links">
                        <li><a href="#" className="quote-trigger" data-iframe-url="https://form-efs.vercel.app/referral"><i className="fas fa-gift"></i> Make $250 for every friend or family member</a></li>
                    </ul>
                    <p><br /></p>
                    <h4 className="footer-heading">Addresses</h4>

                    <ul className="footer-links text-[14px]">
                        <li className="mb-[5px]"><a href="https://maps.app.goo.gl/76J4tQ9T2NsGjJGF7" target="_blank" rel="noopener noreferrer">15 Lawrence Dr, Nerang QLD 4211</a></li>
                        <li><a href="https://maps.app.goo.gl/XPXwmDN36UeYAMEj8" target="_blank" rel="noopener noreferrer">147 Smeaton Grange Rd, Smeaton Grange NSW 2567</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-heading">License No.</h4>
                    <ul className="footer-links text-white text-[14px] m-0">
                        <li className="mb-[10px]">QLD Electrical Licence No.: 87161</li>
                        <li className="mb-[10px]">NSW Electrical Licence No.: 372946C</li>
                        <li className="mb-[10px]">NT Electrical Licence No.: C4246</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <div className="mb-16">
                        <img src="/netcc-logo-approved-seller.webp" alt="NETCC Approved Seller" className="w-full max-w-[150px] !mb-[20px]" />
                    </div>
                    <ul className="footer-links text-[14px]">
                        <li className="mb-[10px]">
                            <a href="https://www.newenergytech.org.au/consumer-guides" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <i className="fas fa-book mr-[10px]"></i> NETCC Consumer Guides
                            </a>
                        </li>
                        <li>
                            <a href="https://www.newenergytech.org.au/netcc-standards" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <i className="fas fa-gavel mr-[10px]"></i> Code of Conduct
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-black text-[#999] !p-[50px_20px] text-[12px]"> {/* Increased vertical padding to 50px */}
                <div className="container max-w-[1200px] mx-auto">
                    <p className="mb-5 leading-[1.6]">
                        *Solar savings assume full year-round utilisation of generated electricity, and will change based on usage and feed-in tariffs. ** Outcome is not guaranteed and would be dependent upon a variety of factors such as system design, energy production and customer usage patterns.
                    </p>
                    <hr className="border-[#333] !my-5" />
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="mb-[10px]">© Copyright 2026 EFS Solar. All Rights Reserved</div>
                        <div className="flex gap-[15px]">
                            <a href="/privacy-policy" className="text-[#aaa] no-underline">Privacy Policy</a>
                            <span className="text-[#555]">|</span>
                            <a href="/disclaimer" className="text-[#aaa] no-underline">Disclaimer</a>
                            <span className="text-[#555]">|</span>
                            <a href="/terms-of-use" className="text-[#aaa] no-underline">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
