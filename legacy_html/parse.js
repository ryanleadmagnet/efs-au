const fs = require('fs');
const cheerio = require('cheerio');

const files = [
    'residential-solar.html',
    'commercial-solar.html',
    'batteries.html',
    'air-conditioning.html'
];

files.forEach(file => {
    console.log(`\n\n=== Parsing ${file} ===\n`);
    const html = fs.readFileSync(`./scraped_html/${file}`, 'utf-8');
    const $ = cheerio.load(html);
    
    // Extract main sections
    const sections = $('section.elementor-section');
    sections.each((i, section) => {
        const text = $(section).text().replace(/\s+/g, ' ').trim();
        if (text.length > 20) {
            console.log(`-- Section ${i} --\n${text.substring(0, 500)}...\n`);
        }
        
        // Find background images
        const bgStyle = $(section).attr('style') || '';
        if (bgStyle.includes('background-image')) {
            console.log(`    BG Style: ${bgStyle}`);
        }
        
        // Find explicit images
        $(section).find('img').each((j, img) => {
            const src = $(img).attr('src');
            if (src && !src.includes('data:image')) {
                console.log(`    IMG: ${src}`);
            }
        });
    });
});
