import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.efssolar.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${BASE_URL}/services/residential-solar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/services/commercial-solar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/services/batteries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/services/air-conditioning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/technology/tesla-powerwall`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/technology/energizer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/technology/goodwe`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/reviews/oxenford-solar-system-upgrade`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/reviews/carrara-premium-solar-system-installation`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/reviews/solar-system-battery-replacement-at-nerang`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/career`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${BASE_URL}/terms-of-use`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    ];
}
