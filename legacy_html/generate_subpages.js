const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf-8');

// Extract header and footer blocks
// Assuming main content is between </header> and <section class="section-reviews animate-on-scroll"> (or footer)
// Let's use string splitting.
const headerEnd = indexHtml.indexOf('</header>') + '</header>'.length;
const footerStart = indexHtml.indexOf('<section class="section-reviews animate-on-scroll">');

const headerPart = indexHtml.substring(0, headerEnd)
    .replace(/href="style\.css"/g, 'href="../style.css"')
    .replace(/href="services\//g, 'href="')
    .replace(/href="\/"/g, 'href="../index.html"');

const footerPart = indexHtml.substring(footerStart)
    .replace(/src="script\.js"/g, 'src="../script.js"')
    .replace(/src="image-/g, 'src="../image-')
    .replace(/src="hero-bg/g, 'src="../hero-bg')
    .replace(/href="services\//g, 'href="');

// Generate specific content for each service
const subpages = [
    {
        filename: 'services/residential-solar.html',
        title: 'Residential Solar',
        breadcrumb: 'Services > Residential Solar',
        heroTitle: 'START SAVING FROM DAY ONE',
        heroSub: 'Cut your power bill down to size with a Residential Solar system',
        heroImg: 'https://www.efssolar.com.au/wp-content/uploads/2023/10/Group-135-1.webp'
    },
    {
        filename: 'services/commercial-solar.html',
        title: 'Commercial Solar',
        breadcrumb: 'Services > Commercial Solar',
        heroTitle: 'GO 100% OFF-GRID',
        heroSub: 'EFS Solar supplies and installs the best Commercial Solar panels for your business',
        heroImg: 'https://www.efssolar.com.au/wp-content/uploads/2023/07/Asset-41.png'
    },
    {
        filename: 'services/batteries.html',
        title: 'Batteries',
        breadcrumb: 'Services > Batteries',
        heroTitle: 'STORE YOUR SUNLIGHT',
        heroSub: 'EFS Solar supplies and installs the best Battery storage systems for your home',
        heroImg: 'https://www.efssolar.com.au/wp-content/uploads/2026/02/battery-copy.webp'
    },
    {
        filename: 'services/air-conditioning.html',
        title: 'Air-Conditioning',
        breadcrumb: 'Services > Air-Conditioning',
        heroTitle: 'TOO HOT TO HANDLE',
        heroSub: 'Beat the heat with a new Air Conditioning system',
        heroImg: 'https://www.efssolar.com.au/wp-content/uploads/2023/07/EFS-Solar-Website-Aircon-Image-01.jpg'
    }
];

subpages.forEach(page => {
    // Modify <title>
    let header = headerPart.replace('<title>EFS Solar</title>', `<title>${page.title} - EFS Solar</title>`);
    
    // Quick hero section (basic replication using existing classes)
    const content = `
    <!-- Top Padding for sticky header -->
    <div style="height: 100px;"></div>
    
    <section style="display: flex; flex-wrap: wrap; padding: 4rem 5%; align-items: center;">
        <div style="flex: 1; min-width: 300px;">
            <p style="color: var(--secondary); font-weight: bold; margin-bottom: 1rem;">${page.breadcrumb}</p>
            <h1 style="font-family: var(--font-rajdhani); font-size: 4rem; color: var(--primary); text-transform: uppercase; line-height: 1.1; margin-bottom: 1rem;">${page.heroTitle}</h1>
            <p style="font-size: 1.2rem; color: #555; margin-bottom: 2rem;">${page.heroSub}</p>
            <button class="btn btn-primary get-quote-btn">Get a Quote</button>
        </div>
        <div style="flex: 1; min-width: 300px; text-align: right;">
            <img src="${page.heroImg}" style="max-width: 100%; height: auto; border-radius: 10px;" alt="${page.title}">
        </div>
    </section>

    <section style="background-color: var(--primary); color: white; padding: 5rem 5%; text-align: center;">
        <h2 style="font-family: var(--font-rajdhani); font-size: 3rem; text-transform: uppercase; margin-bottom: 1rem;">TIER 1 PRODUCTS</h2>
        <h3 style="font-size: 2rem; margin-bottom: 2rem;">We Only Use the Best of the Best</h3>
        <p style="max-width: 800px; margin: 0 auto 2rem; font-size: 1.1rem; line-height: 1.6;">
            We don’t settle for anything but the best for the products we sell & install. 
            By using the best brands, we can offer premium replacement warranties and workmanship guarantees. 
            You can rest easy knowing your system will perform long into the future.
        </p>
        <button class="btn btn-secondary get-quote-btn">Get a Quote</button>
    </section>
    
    <section style="padding: 5rem 5%; text-align: center; background-color: #f9f9f9;">
        <h2 style="font-family: var(--font-rajdhani); font-size: 3rem; color: var(--primary); text-transform: uppercase;">SAVE EVEN MORE ON YOUR POWER BILL</h2>
        <h3 style="font-size: 2rem; color: #555; margin-bottom: 3rem;">it's as easy as 1, 2, 3</h3>
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 250px; padding: 2rem; background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-radius: 10px;">
                <h4 style="color: var(--secondary); margin-bottom: 1rem;">1. SITE ASSESSMENT</h4>
                <p>One of our reps will conduct an on-site assessment of your home before designing a system to suit your household needs.</p>
            </div>
            <div style="flex: 1; min-width: 250px; padding: 2rem; background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-radius: 10px;">
                <h4 style="color: var(--secondary); margin-bottom: 1rem;">2. INSTALLATION</h4>
                <p>Our experienced CEC accredited tradesmen will seamlessly install your brand new system with care and precision.</p>
            </div>
            <div style="flex: 1; min-width: 250px; padding: 2rem; background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-radius: 10px;">
                <h4 style="color: var(--secondary); margin-bottom: 1rem;">3. ENJOY THE SAVING</h4>
                <p>Once your solar system has been installed and set up, you can start enjoying your savings from day 1.</p>
            </div>
        </div>
    </section>
    `;

    const html = header + content + footerPart;
    fs.writeFileSync(page.filename, html, 'utf-8');
});
console.log('Successfully created services subpages.');
