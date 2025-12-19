/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.opticianstudy.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: false,
  outDir: 'public',
  exclude: [
    '/api/*',
    '/auth/*',
    '/dashboard',
    '/dashboard/*',
    '/subscribe/success',
    '/subscribe/cancel',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for important pages
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/subscribe' || path === '/learn' || path === '/practice') {
      priority = 0.9;
    } else if (path.startsWith('/blog/') || path.startsWith('/calculators/') || path.startsWith('/equipment/')) {
      priority = 0.8;
    } else if (path === '/about' || path === '/faq') {
      priority = 0.6;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
