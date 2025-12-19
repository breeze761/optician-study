const https = require('https');
const http = require('http');

// Sites to compare
const sites = [
  {
    name: 'OpticianStudy (Us)',
    url: 'https://www.opticianstudy.com',
    pages: ['/', '/subscribe', '/learn', '/practice', '/calculators', '/equipment', '/blog', '/abo-exam-prep', '/ncle-exam-prep']
  },
  {
    name: 'Optical Training Institute',
    url: 'https://opticaltraining.com',
    pages: ['/', '/exam-prep/', '/continuing-education/', '/optician/']
  },
  {
    name: 'OpticianWorks',
    url: 'https://opticianworks.com',
    pages: ['/']
  },
  {
    name: 'Optician Certification',
    url: 'https://opticiancertification.org',
    pages: ['/']
  }
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit/1.0)'
      },
      timeout: 15000
    }, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchPage(res.headers.location).then(resolve).catch(reject);
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data, headers: res.headers }));
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function analyzeSEO(html, url) {
  const results = {
    url,
    checks: {},
    score: 0,
    maxScore: 0
  };

  // 1. Title tag (30-60 chars optimal)
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  results.checks.title = {
    value: title,
    length: title ? title.length : 0,
    status: !title ? 'missing' : (title.length >= 30 && title.length <= 60) ? 'good' : (title.length < 30 ? 'short' : 'long'),
    score: !title ? 0 : (title.length >= 30 && title.length <= 60) ? 10 : 5
  };
  results.score += results.checks.title.score;
  results.maxScore += 10;

  // 2. Meta description (120-160 chars optimal)
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) ||
                   html.match(/<meta[^>]+content=["']([^"']*)[^>]+name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : null;
  results.checks.metaDescription = {
    value: desc ? (desc.length > 80 ? desc.substring(0, 80) + '...' : desc) : null,
    length: desc ? desc.length : 0,
    status: !desc ? 'missing' : (desc.length >= 120 && desc.length <= 160) ? 'good' : (desc.length < 120 ? 'short' : 'long'),
    score: !desc ? 0 : (desc.length >= 120 && desc.length <= 160) ? 10 : 5
  };
  results.score += results.checks.metaDescription.score;
  results.maxScore += 10;

  // 3. H1 tag
  const h1Match = html.match(/<h1[^>]*>([^<]*)/i);
  const h1 = h1Match ? h1Match[1].trim() : null;
  const h1Count = (html.match(/<h1/gi) || []).length;
  results.checks.h1 = {
    value: h1,
    count: h1Count,
    status: h1Count === 1 ? 'good' : h1Count === 0 ? 'missing' : 'multiple',
    score: h1Count === 1 ? 10 : h1Count === 0 ? 0 : 5
  };
  results.score += results.checks.h1.score;
  results.maxScore += 10;

  // 4. Canonical URL
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)/i);
  results.checks.canonical = {
    value: canonicalMatch ? canonicalMatch[1] : null,
    status: canonicalMatch ? 'good' : 'missing',
    score: canonicalMatch ? 10 : 0
  };
  results.score += results.checks.canonical.score;
  results.maxScore += 10;

  // 5. Open Graph tags
  const ogTitle = html.match(/<meta[^>]+property=["']og:title["']/i);
  const ogDesc = html.match(/<meta[^>]+property=["']og:description["']/i);
  const ogImage = html.match(/<meta[^>]+property=["']og:image["']/i);
  const ogCount = (ogTitle ? 1 : 0) + (ogDesc ? 1 : 0) + (ogImage ? 1 : 0);
  results.checks.openGraph = {
    hasTitle: !!ogTitle,
    hasDescription: !!ogDesc,
    hasImage: !!ogImage,
    status: ogCount === 3 ? 'good' : ogCount > 0 ? 'partial' : 'missing',
    score: ogCount === 3 ? 10 : ogCount * 3
  };
  results.score += results.checks.openGraph.score;
  results.maxScore += 10;

  // 6. Twitter Card
  const twitterCard = html.match(/<meta[^>]+name=["']twitter:card["']/i);
  results.checks.twitterCard = {
    status: twitterCard ? 'good' : 'missing',
    score: twitterCard ? 5 : 0
  };
  results.score += results.checks.twitterCard.score;
  results.maxScore += 5;

  // 7. JSON-LD Schema
  const schemaCount = (html.match(/<script[^>]+type=["']application\/ld\+json["']/gi) || []).length;
  results.checks.schema = {
    count: schemaCount,
    status: schemaCount > 0 ? 'good' : 'missing',
    score: schemaCount > 0 ? 10 : 0
  };
  results.score += results.checks.schema.score;
  results.maxScore += 10;

  // 8. Viewport meta (mobile-friendly)
  const viewport = html.match(/<meta[^>]+name=["']viewport["']/i);
  results.checks.viewport = {
    status: viewport ? 'good' : 'missing',
    score: viewport ? 5 : 0
  };
  results.score += results.checks.viewport.score;
  results.maxScore += 5;

  // 9. Lang attribute
  const langMatch = html.match(/<html[^>]+lang=["']([a-z]{2})/i);
  results.checks.lang = {
    value: langMatch ? langMatch[1] : null,
    status: langMatch ? 'good' : 'missing',
    score: langMatch ? 5 : 0
  };
  results.score += results.checks.lang.score;
  results.maxScore += 5;

  // 10. Internal links count
  const internalLinks = (html.match(/href=["']\//g) || []).length;
  results.checks.internalLinks = {
    count: internalLinks,
    status: internalLinks >= 10 ? 'good' : internalLinks >= 5 ? 'moderate' : 'low',
    score: internalLinks >= 10 ? 10 : internalLinks >= 5 ? 7 : 3
  };
  results.score += results.checks.internalLinks.score;
  results.maxScore += 10;

  // 11. Content word count
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = textContent.split(' ').filter(w => w.length > 0).length;
  results.checks.wordCount = {
    count: wordCount,
    status: wordCount >= 1000 ? 'excellent' : wordCount >= 500 ? 'good' : wordCount >= 300 ? 'moderate' : 'thin',
    score: wordCount >= 1000 ? 10 : wordCount >= 500 ? 8 : wordCount >= 300 ? 5 : 2
  };
  results.score += results.checks.wordCount.score;
  results.maxScore += 10;

  // 12. Image alt text
  const images = (html.match(/<img[^>]+>/gi) || []);
  const imagesWithAlt = images.filter(img => /alt=["'][^"']+["']/i.test(img)).length;
  results.checks.imageAlt = {
    total: images.length,
    withAlt: imagesWithAlt,
    percentage: images.length > 0 ? Math.round((imagesWithAlt / images.length) * 100) : 100,
    status: images.length === 0 ? 'n/a' : (imagesWithAlt === images.length) ? 'good' : (imagesWithAlt / images.length >= 0.8) ? 'mostly' : 'poor',
    score: images.length === 0 ? 5 : (imagesWithAlt === images.length) ? 5 : Math.round((imagesWithAlt / images.length) * 5)
  };
  results.score += results.checks.imageAlt.score;
  results.maxScore += 5;

  // Calculate percentage
  results.percentage = Math.round((results.score / results.maxScore) * 100);

  return results;
}

async function analyzeSite(site) {
  console.log(`\n  Analyzing ${site.name}...`);
  const results = {
    name: site.name,
    baseUrl: site.url,
    pages: [],
    avgScore: 0,
    totalScore: 0
  };

  for (const pagePath of site.pages) {
    const url = site.url + pagePath;
    try {
      const { html, status } = await fetchPage(url);
      if (status === 200) {
        const pageResult = analyzeSEO(html, url);
        results.pages.push(pageResult);
        results.totalScore += pageResult.percentage;
        console.log(`    [${pageResult.percentage}%] ${pagePath}`);
      } else {
        console.log(`    [ERR] ${pagePath} - Status ${status}`);
      }
    } catch (err) {
      console.log(`    [ERR] ${pagePath} - ${err.message}`);
    }
  }

  results.avgScore = results.pages.length > 0 ? Math.round(results.totalScore / results.pages.length) : 0;
  return results;
}

function printComparisonTable(allResults) {
  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║                        COMPETITOR SEO COMPARISON                                   ║');
  console.log('╠════════════════════════════════════════════════════════════════════════════════════╣');

  // Sort by average score
  allResults.sort((a, b) => b.avgScore - a.avgScore);

  allResults.forEach((site, idx) => {
    const rank = idx + 1;
    const bar = '█'.repeat(Math.round(site.avgScore / 5)) + '░'.repeat(20 - Math.round(site.avgScore / 5));
    const name = site.name.padEnd(28);
    console.log(`║  #${rank} ${name} ${bar} ${site.avgScore}%  ║`);
  });

  console.log('╚════════════════════════════════════════════════════════════════════════════════════╝');
}

function printDetailedComparison(allResults) {
  console.log('\n');
  console.log('==================== DETAILED SEO FACTOR COMPARISON ====================\n');

  // Get homepage results for each site
  const homepages = allResults.map(site => ({
    name: site.name,
    data: site.pages.find(p => p.url.endsWith('/') || p.url.endsWith('.com') || p.url.endsWith('.org'))
  })).filter(h => h.data);

  const factors = [
    { key: 'title', label: 'Title Tag' },
    { key: 'metaDescription', label: 'Meta Description' },
    { key: 'h1', label: 'H1 Tag' },
    { key: 'canonical', label: 'Canonical URL' },
    { key: 'openGraph', label: 'Open Graph' },
    { key: 'twitterCard', label: 'Twitter Card' },
    { key: 'schema', label: 'JSON-LD Schema' },
    { key: 'internalLinks', label: 'Internal Links' },
    { key: 'wordCount', label: 'Content Length' }
  ];

  factors.forEach(factor => {
    console.log(`${factor.label}:`);
    homepages.forEach(hp => {
      const check = hp.data.checks[factor.key];
      const status = check.status.toUpperCase().padEnd(10);
      const icon = check.status === 'good' ? '✓' : check.status === 'missing' ? '✗' : '~';
      let detail = '';

      if (factor.key === 'title' && check.value) {
        detail = `(${check.length} chars)`;
      } else if (factor.key === 'metaDescription' && check.value) {
        detail = `(${check.length} chars)`;
      } else if (factor.key === 'internalLinks') {
        detail = `(${check.count} links)`;
      } else if (factor.key === 'wordCount') {
        detail = `(${check.count} words)`;
      } else if (factor.key === 'schema') {
        detail = `(${check.count} schemas)`;
      }

      console.log(`  ${icon} ${hp.name.padEnd(25)} ${status} ${detail}`);
    });
    console.log('');
  });
}

function printRecommendations(allResults) {
  const us = allResults.find(s => s.name.includes('OpticianStudy'));
  const competitors = allResults.filter(s => !s.name.includes('OpticianStudy'));

  if (!us || !us.pages[0]) return;

  const ourData = us.pages[0].checks;

  console.log('\n==================== RECOMMENDATIONS TO BEAT COMPETITORS ====================\n');

  const recommendations = [];

  // Check each factor against best competitor
  competitors.forEach(comp => {
    if (!comp.pages[0]) return;
    const theirData = comp.pages[0].checks;

    if (theirData.wordCount.count > ourData.wordCount.count * 1.5) {
      recommendations.push({
        priority: 'HIGH',
        issue: `${comp.name} has ${theirData.wordCount.count} words vs our ${ourData.wordCount.count}`,
        action: 'Add more comprehensive content to homepage - aim for 1500+ words'
      });
    }

    if (theirData.internalLinks.count > ourData.internalLinks.count * 1.5) {
      recommendations.push({
        priority: 'HIGH',
        issue: `${comp.name} has ${theirData.internalLinks.count} internal links vs our ${ourData.internalLinks.count}`,
        action: 'Add more internal links throughout content to improve site structure'
      });
    }

    if (theirData.schema.count > ourData.schema.count) {
      recommendations.push({
        priority: 'MEDIUM',
        issue: `${comp.name} has ${theirData.schema.count} schema types vs our ${ourData.schema.count}`,
        action: 'Add more structured data: Course, FAQPage, HowTo, Review schemas'
      });
    }
  });

  // General recommendations
  if (ourData.twitterCard.status !== 'good') {
    recommendations.push({
      priority: 'LOW',
      issue: 'Missing Twitter Card meta tags',
      action: 'Add twitter:card, twitter:title, twitter:description meta tags'
    });
  }

  // Print recommendations
  const priorityOrder = { HIGH: 1, MEDIUM: 2, LOW: 3 };
  recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const seen = new Set();
  recommendations.forEach(rec => {
    const key = rec.action;
    if (seen.has(key)) return;
    seen.add(key);

    const icon = rec.priority === 'HIGH' ? '🔴' : rec.priority === 'MEDIUM' ? '🟡' : '🟢';
    console.log(`${icon} [${rec.priority}] ${rec.issue}`);
    console.log(`   → ${rec.action}\n`);
  });

  console.log('\n==================== KEY STRATEGIES FROM TOP COMPETITOR ====================\n');
  console.log('Based on Optical Training Institute (highest ranking):\n');
  console.log('1. 📝 CONTENT DEPTH');
  console.log('   - They have 2000+ words on homepage with detailed program descriptions');
  console.log('   - Multiple clear CTAs and value propositions');
  console.log('   → Add more detailed content about our courses, features, and benefits\n');

  console.log('2. 🎯 KEYWORD TARGETING');
  console.log('   - They target: "optician training", "ABO exam prep", "NCLE certification"');
  console.log('   - Multiple landing pages for each certification type');
  console.log('   → Create dedicated /abo-certification and /ncle-certification pages\n');

  console.log('3. 🏆 TRUST SIGNALS');
  console.log('   - "94% exam pass rate" prominently displayed');
  console.log('   - Press mentions and testimonials');
  console.log('   - Accreditation badges (ABO, NCLE, COPE, AOA)');
  console.log('   → Add pass rate stats, testimonials, and trust badges to our site\n');

  console.log('4. 📊 STATE-SPECIFIC CONTENT (from OpticiancCertification.org)');
  console.log('   - They rank for "optician certification [state]" with 50+ pages');
  console.log('   - Zip code search for local programs');
  console.log('   → Consider creating state-specific licensing requirement pages\n');

  console.log('5. 🔧 UNIQUE VALUE (Our Advantage)');
  console.log('   - Our free calculators are UNIQUE - competitors don\'t have them!');
  console.log('   - Equipment guides are also unique differentiators');
  console.log('   → Promote calculators more prominently, add more tools, target "optician calculator" keywords\n');
}

async function runFullAnalysis() {
  console.log('');
  console.log('╔════════════════════════════════════════════════════════════════════════════════════╗');
  console.log('║                    SEO COMPETITOR ANALYSIS TOOL                                    ║');
  console.log('║                         OpticianStudy.com                                          ║');
  console.log('╚════════════════════════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('Analyzing sites...');

  const allResults = [];

  for (const site of sites) {
    const result = await analyzeSite(site);
    allResults.push(result);
  }

  printComparisonTable(allResults);
  printDetailedComparison(allResults);
  printRecommendations(allResults);

  console.log('\n==================== QUICK WINS TO IMPLEMENT ====================\n');
  console.log('1. Add more homepage content (target 1500+ words)');
  console.log('2. Add FAQ schema to FAQ page');
  console.log('3. Add Course schema to course pages');
  console.log('4. Create state licensing requirement pages');
  console.log('5. Add testimonials with Review schema');
  console.log('6. Promote calculators more - unique competitive advantage!');
  console.log('7. Add pass rate statistics (if available)');
  console.log('8. Create comparison pages (vs competitors)');
  console.log('');
}

runFullAnalysis();
