const https = require('https');

const BASE_URL = 'https://www.opticianstudy.com';

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/subscribe', name: 'Subscribe' },
  { path: '/learn', name: 'Learn' },
  { path: '/practice', name: 'Practice' },
  { path: '/about', name: 'About' },
  { path: '/faq', name: 'FAQ' },
  { path: '/blog', name: 'Blog Index' },
  { path: '/blog/abo-study-guide', name: 'ABO Study Guide' },
  { path: '/blog/ncle-study-guide', name: 'NCLE Study Guide' },
  { path: '/abo-exam-prep', name: 'ABO Exam Prep' },
  { path: '/ncle-exam-prep', name: 'NCLE Exam Prep' },
  { path: '/optician-career-guide', name: 'Career Guide' },
  { path: '/calculators', name: 'Calculators' },
  { path: '/equipment', name: 'Equipment' },
];

const results = [];
let sitemapExists = false;
let robotsExists = false;

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false));
  });
}

function countWords(html) {
  // Remove scripts, styles, and HTML tags
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.split(' ').filter(w => w.length > 0).length;
}

function analyzeSEO(html, path, name) {
  const issues = [];
  const good = [];
  const warnings = [];

  // 1. Title (30-60 chars)
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : null;
  if (!title) {
    issues.push('Missing title');
  } else if (title.length < 30) {
    issues.push('Title too short (' + title.length + ' chars)');
  } else if (title.length > 60) {
    issues.push('Title too long (' + title.length + ' chars)');
  } else {
    good.push('Title (' + title.length + ' chars)');
  }

  // 2. Meta description (120-160 chars)
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
                   html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const desc = descMatch ? descMatch[1] : null;
  if (!desc) {
    issues.push('Missing meta description');
  } else if (desc.length < 120) {
    issues.push('Description too short (' + desc.length + ' chars)');
  } else if (desc.length > 160) {
    issues.push('Description too long (' + desc.length + ' chars)');
  } else {
    good.push('Meta description (' + desc.length + ' chars)');
  }

  // 3. H1 tag
  const h1Match = html.match(/<h1[^>]*>/i);
  if (h1Match) {
    good.push('H1 tag');
  } else {
    issues.push('Missing H1 tag');
  }

  // 4. Canonical URL
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["']/i);
  if (canonicalMatch) {
    good.push('Canonical URL');
  } else {
    issues.push('Missing canonical URL');
  }

  // 5. OG Title
  const ogTitleMatch = html.match(/<meta[^>]+property=["']og:title["']/i);
  if (ogTitleMatch) {
    good.push('og:title');
  } else {
    issues.push('Missing og:title');
  }

  // 6. OG Description
  const ogDescMatch = html.match(/<meta[^>]+property=["']og:description["']/i);
  if (ogDescMatch) {
    good.push('og:description');
  } else {
    issues.push('Missing og:description');
  }

  // 7. OG Image
  const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["']/i);
  if (ogImageMatch) {
    good.push('og:image');
  } else {
    issues.push('Missing og:image');
  }

  // 8. Twitter Card
  const twitterCardMatch = html.match(/<meta[^>]+name=["']twitter:card["']/i);
  if (twitterCardMatch) {
    good.push('Twitter card');
  } else {
    issues.push('Missing twitter:card');
  }

  // 9. JSON-LD Schema
  const schemaMatch = html.match(/<script[^>]+type=["']application\/ld\+json["']/i);
  if (schemaMatch) {
    good.push('JSON-LD schema');
  } else {
    issues.push('Missing JSON-LD schema');
  }

  // 10. Viewport meta (mobile)
  const viewportMatch = html.match(/<meta[^>]+name=["']viewport["']/i);
  if (viewportMatch) {
    good.push('Viewport meta');
  } else {
    issues.push('Missing viewport meta');
  }

  // 11. Lang attribute
  const langMatch = html.match(/<html[^>]+lang=["'][a-z]{2}/i);
  if (langMatch) {
    good.push('Lang attribute');
  } else {
    issues.push('Missing lang attribute');
  }

  // 12. Robots meta (check not blocking)
  const robotsNoindex = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i);
  if (robotsNoindex) {
    issues.push('Page blocked by noindex');
  } else {
    good.push('Robots allowed');
  }

  // 13. Image alt text check
  const images = html.match(/<img[^>]+>/gi) || [];
  const imagesWithoutAlt = images.filter(img => !img.match(/alt=["'][^"']+["']/i));
  if (images.length > 0) {
    if (imagesWithoutAlt.length === 0) {
      good.push('All images have alt (' + images.length + ')');
    } else {
      warnings.push(imagesWithoutAlt.length + '/' + images.length + ' images missing alt');
    }
  } else {
    good.push('No images to check');
  }

  // 14. Internal links count
  const internalLinks = (html.match(/href=["']\//g) || []).length;
  if (internalLinks >= 3) {
    good.push('Internal links (' + internalLinks + ')');
  } else {
    warnings.push('Low internal links (' + internalLinks + ')');
  }

  // 15. Content word count (min 300)
  const wordCount = countWords(html);
  if (wordCount >= 300) {
    good.push('Word count (' + wordCount + ')');
  } else {
    warnings.push('Low word count (' + wordCount + ')');
  }

  // 16. Heading hierarchy (H1 before H2)
  const h1Pos = html.search(/<h1/i);
  const h2Pos = html.search(/<h2/i);
  if (h1Pos > 0 && (h2Pos < 0 || h1Pos < h2Pos)) {
    good.push('Heading hierarchy');
  } else if (h2Pos > 0 && h1Pos < 0) {
    warnings.push('H2 without H1');
  } else {
    good.push('Heading hierarchy');
  }

  // 17. HTTPS (we're already fetching via HTTPS, so pass)
  good.push('HTTPS');

  return { path, name, issues, good, warnings, totalChecks: 17 };
}

async function runAudit() {
  console.log('');
  console.log('==================================================');
  console.log('  COMPREHENSIVE SEO AUDIT - OpticianStudy.com');
  console.log('==================================================');
  console.log('');

  // Check sitemap and robots.txt first
  console.log('Checking site-wide files...');
  sitemapExists = await checkUrl(BASE_URL + '/sitemap.xml');
  robotsExists = await checkUrl(BASE_URL + '/robots.txt');
  console.log('  Sitemap.xml: ' + (sitemapExists ? 'FOUND' : 'MISSING'));
  console.log('  Robots.txt: ' + (robotsExists ? 'FOUND' : 'MISSING'));
  console.log('');

  console.log('Checking 17 factors per page:');
  console.log('  1. Title (30-60 chars)');
  console.log('  2. Meta description (120-160 chars)');
  console.log('  3. H1 tag');
  console.log('  4. Canonical URL');
  console.log('  5. og:title');
  console.log('  6. og:description');
  console.log('  7. og:image');
  console.log('  8. Twitter card');
  console.log('  9. JSON-LD schema');
  console.log('  10. Viewport meta');
  console.log('  11. Lang attribute');
  console.log('  12. Robots allowed');
  console.log('  13. Image alt text');
  console.log('  14. Internal links (3+)');
  console.log('  15. Word count (300+)');
  console.log('  16. Heading hierarchy');
  console.log('  17. HTTPS');
  console.log('');
  console.log('--------------------------------------------------');
  console.log('');

  for (const page of pages) {
    const url = BASE_URL + page.path;
    try {
      const { html } = await fetchPage(url);
      const result = analyzeSEO(html, page.path, page.name);
      results.push(result);

      const score = Math.round((result.good.length / 17) * 100);
      const status = result.issues.length === 0 && result.warnings.length === 0 ? 'PASS' :
                    result.issues.length === 0 ? 'WARN' : 'FAIL';
      console.log('[' + status + '] ' + page.name + ' (' + score + '%)');
      if (result.issues.length > 0) {
        result.issues.forEach(i => console.log('       X ' + i));
      }
      if (result.warnings.length > 0) {
        result.warnings.forEach(w => console.log('       ! ' + w));
      }
    } catch (err) {
      console.log('[ERR] ' + page.name + ' - ' + err.message);
    }
  }

  // Calculate scores
  const totalChecks = results.length * 17;
  const totalPassed = results.reduce((sum, r) => sum + r.good.length, 0);
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  const percentage = Math.round((totalPassed / totalChecks) * 100);

  // Add site-wide checks
  const siteWideScore = (sitemapExists ? 1 : 0) + (robotsExists ? 1 : 0);
  const adjustedTotal = totalChecks + 2;
  const adjustedPassed = totalPassed + siteWideScore;
  const finalPercentage = Math.round((adjustedPassed / adjustedTotal) * 100);

  console.log('');
  console.log('==================================================');
  console.log('  OVERALL SCORE: ' + finalPercentage + '% (' + adjustedPassed + '/' + adjustedTotal + ')');
  console.log('==================================================');
  console.log('');
  console.log('  Site-wide checks:');
  console.log('    ' + (sitemapExists ? '[PASS]' : '[FAIL]') + ' Sitemap.xml');
  console.log('    ' + (robotsExists ? '[PASS]' : '[FAIL]') + ' Robots.txt');
  console.log('');
  console.log('  Page checks:');
  console.log('    Passed: ' + totalPassed + '/' + totalChecks);
  console.log('    Issues: ' + totalIssues);
  console.log('    Warnings: ' + totalWarnings);
  console.log('');

  // Issue breakdown
  const issueCategories = {};
  const warningCategories = {};

  results.forEach(r => {
    r.issues.forEach(issue => {
      const key = issue.replace(/\(\d+.*\)/, '').trim();
      if (!issueCategories[key]) issueCategories[key] = 0;
      issueCategories[key]++;
    });
    r.warnings.forEach(warning => {
      const key = warning.replace(/\(\d+.*\)/, '').trim();
      if (!warningCategories[key]) warningCategories[key] = 0;
      warningCategories[key]++;
    });
  });

  if (Object.keys(issueCategories).length > 0) {
    console.log('  Issues by type:');
    Object.keys(issueCategories).sort((a, b) => issueCategories[b] - issueCategories[a]).forEach(cat => {
      console.log('    - ' + cat + ': ' + issueCategories[cat] + ' page(s)');
    });
    console.log('');
  }

  if (Object.keys(warningCategories).length > 0) {
    console.log('  Warnings by type:');
    Object.keys(warningCategories).sort((a, b) => warningCategories[b] - warningCategories[a]).forEach(cat => {
      console.log('    - ' + cat + ': ' + warningCategories[cat] + ' page(s)');
    });
    console.log('');
  }

  // Rating
  console.log('--------------------------------------------------');
  if (finalPercentage >= 95) console.log('  Rating: EXCELLENT (95%+)');
  else if (finalPercentage >= 85) console.log('  Rating: VERY GOOD (85-94%)');
  else if (finalPercentage >= 75) console.log('  Rating: GOOD (75-84%)');
  else if (finalPercentage >= 60) console.log('  Rating: NEEDS IMPROVEMENT (60-74%)');
  else console.log('  Rating: POOR (<60%)');
  console.log('==================================================');
}

runAudit();
