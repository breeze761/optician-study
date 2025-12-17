#!/usr/bin/env node

/**
 * SEO Crawler for OpticianStudy
 * Crawls the site and ranks SEO strength of each page
 *
 * Usage: node scripts/seo-crawler.js [--live]
 *   --live: Crawl the live site (default: uses static analysis)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://www.opticianstudy.com';
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

// SEO scoring weights
const WEIGHTS = {
  title: 15,
  description: 15,
  h1: 10,
  keywords: 5,
  canonical: 10,
  schema: 10,
  contentLength: 10,
  internalLinks: 10,
  images: 5,
  headingStructure: 10,
};

// Color codes for terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`;
}

function getScoreColor(score) {
  if (score >= 80) return 'green';
  if (score >= 60) return 'yellow';
  return 'red';
}

function getScoreEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 80) return '🟡';
  if (score >= 60) return '🟠';
  return '🔴';
}

// Find all page.tsx files in the app directory
function findAllPages(dir, pages = [], basePath = '') {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip special Next.js directories
      if (!item.startsWith('_') && !item.startsWith('.') && item !== 'api' && item !== 'components') {
        const newBasePath = basePath + '/' + item;
        findAllPages(fullPath, pages, newBasePath);
      }
    } else if (item === 'page.tsx') {
      pages.push({
        filePath: fullPath,
        route: basePath || '/',
        url: BASE_URL + (basePath || '/'),
      });
    }
  }

  return pages;
}

// Analyze a single page file
function analyzePage(page) {
  const content = fs.readFileSync(page.filePath, 'utf8');
  const issues = [];
  const successes = [];
  let score = 0;

  // Check for metadata export
  const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');

  // Extract title
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : null;

  if (title) {
    successes.push(`Title: "${title.substring(0, 50)}${title.length > 50 ? '...' : ''}"`);
    if (title.length >= 30 && title.length <= 60) {
      score += WEIGHTS.title;
    } else if (title.length > 0) {
      score += WEIGHTS.title * 0.6;
      issues.push(`Title length (${title.length}) - ideal is 30-60 chars`);
    }
  } else {
    issues.push('Missing meta title');
  }

  // Extract description
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const description = descMatch ? descMatch[1] : null;

  if (description) {
    successes.push(`Description: ${description.length} chars`);
    if (description.length >= 120 && description.length <= 160) {
      score += WEIGHTS.description;
    } else if (description.length > 0) {
      score += WEIGHTS.description * 0.6;
      issues.push(`Description length (${description.length}) - ideal is 120-160 chars`);
    }
  } else {
    issues.push('Missing meta description');
  }

  // Check for keywords
  const hasKeywords = content.includes('keywords:');
  if (hasKeywords) {
    score += WEIGHTS.keywords;
    successes.push('Has keywords meta');
  } else {
    issues.push('Missing keywords meta');
  }

  // Check for canonical URL
  const hasCanonical = content.includes('canonical:') || content.includes('alternates:');
  if (hasCanonical) {
    score += WEIGHTS.canonical;
    successes.push('Has canonical URL');
  } else {
    issues.push('Missing canonical URL');
  }

  // Check for schema/structured data
  const hasSchema = content.includes('@context') || content.includes('application/ld+json');
  if (hasSchema) {
    score += WEIGHTS.schema;
    successes.push('Has structured data (schema.org)');
  } else {
    issues.push('Missing structured data');
  }

  // Check for H1
  const hasH1 = content.includes('<h1') || content.includes('text-4xl') || content.includes('text-5xl');
  if (hasH1) {
    score += WEIGHTS.h1;
    successes.push('Has H1 heading');
  } else {
    issues.push('Missing H1 heading');
  }

  // Check heading structure (h2, h3)
  const hasH2 = content.includes('<h2');
  const hasH3 = content.includes('<h3');
  if (hasH2 && hasH3) {
    score += WEIGHTS.headingStructure;
    successes.push('Good heading structure (H2, H3)');
  } else if (hasH2 || hasH3) {
    score += WEIGHTS.headingStructure * 0.5;
    issues.push('Incomplete heading hierarchy');
  } else {
    issues.push('Missing subheadings (H2, H3)');
  }

  // Check content length (rough estimate based on text content)
  const textContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
  const wordCount = textContent.split(' ').length;
  if (wordCount > 500) {
    score += WEIGHTS.contentLength;
    successes.push(`Content length: ~${wordCount} words`);
  } else if (wordCount > 200) {
    score += WEIGHTS.contentLength * 0.5;
    issues.push(`Low content (~${wordCount} words) - aim for 500+`);
  } else {
    issues.push(`Very low content (~${wordCount} words)`);
  }

  // Check for internal links
  const linkMatches = content.match(/href=["'][^"']*["']/g) || [];
  const internalLinks = linkMatches.filter(l => l.includes('href="/') || l.includes('href="/')).length;
  if (internalLinks >= 3) {
    score += WEIGHTS.internalLinks;
    successes.push(`${internalLinks} internal links`);
  } else if (internalLinks > 0) {
    score += WEIGHTS.internalLinks * 0.5;
    issues.push(`Only ${internalLinks} internal links - add more`);
  } else {
    issues.push('No internal links');
  }

  // Check for images with alt text
  const imgMatches = content.match(/<img[^>]*>/g) || [];
  const hasAltText = imgMatches.every(img => img.includes('alt='));
  if (imgMatches.length > 0) {
    if (hasAltText) {
      score += WEIGHTS.images;
      successes.push(`${imgMatches.length} images with alt text`);
    } else {
      score += WEIGHTS.images * 0.3;
      issues.push('Some images missing alt text');
    }
  } else {
    // No images is neutral for most pages
    score += WEIGHTS.images * 0.5;
  }

  return {
    ...page,
    score: Math.round(score),
    maxScore: 100,
    issues,
    successes,
    hasMetadata,
  };
}

// Generate report
function generateReport(results) {
  console.log('\n' + colorize('═'.repeat(70), 'cyan'));
  console.log(colorize('  SEO CRAWLER REPORT - OpticianStudy', 'bold'));
  console.log(colorize('═'.repeat(70), 'cyan'));
  console.log(`  Crawled: ${results.length} pages`);
  console.log(`  Date: ${new Date().toLocaleString()}`);
  console.log(colorize('═'.repeat(70), 'cyan') + '\n');

  // Sort by score
  const sorted = [...results].sort((a, b) => b.score - a.score);

  // Summary stats
  const avgScore = Math.round(sorted.reduce((sum, r) => sum + r.score, 0) / sorted.length);
  const excellent = sorted.filter(r => r.score >= 80).length;
  const good = sorted.filter(r => r.score >= 60 && r.score < 80).length;
  const needsWork = sorted.filter(r => r.score < 60).length;

  console.log(colorize('📊 SUMMARY', 'bold'));
  console.log('─'.repeat(40));
  console.log(`  Average Score: ${colorize(avgScore + '/100', getScoreColor(avgScore))}`);
  console.log(`  🟢 Excellent (80+): ${excellent} pages`);
  console.log(`  🟡 Good (60-79): ${good} pages`);
  console.log(`  🔴 Needs Work (<60): ${needsWork} pages`);
  console.log();

  // Rankings
  console.log(colorize('📈 PAGE RANKINGS', 'bold'));
  console.log('─'.repeat(70));

  sorted.forEach((result, index) => {
    const emoji = getScoreEmoji(result.score);
    const scoreStr = colorize(`${result.score}`.padStart(3), getScoreColor(result.score));
    const route = result.route.padEnd(45);
    console.log(`  ${(index + 1).toString().padStart(2)}. ${emoji} ${scoreStr}/100  ${route}`);
  });

  console.log();

  // Top issues
  console.log(colorize('⚠️  TOP ISSUES TO FIX', 'bold'));
  console.log('─'.repeat(70));

  const issueCount = {};
  sorted.forEach(result => {
    result.issues.forEach(issue => {
      issueCount[issue] = (issueCount[issue] || 0) + 1;
    });
  });

  const topIssues = Object.entries(issueCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  topIssues.forEach(([issue, count]) => {
    console.log(`  ${colorize('•', 'yellow')} ${issue} (${count} pages)`);
  });

  console.log();

  // Pages needing attention
  const lowScorePages = sorted.filter(r => r.score < 60);
  if (lowScorePages.length > 0) {
    console.log(colorize('🔴 PAGES NEEDING ATTENTION', 'bold'));
    console.log('─'.repeat(70));

    lowScorePages.forEach(page => {
      console.log(`\n  ${colorize(page.route, 'red')} (${page.score}/100)`);
      page.issues.slice(0, 5).forEach(issue => {
        console.log(`    ${colorize('→', 'yellow')} ${issue}`);
      });
    });
  }

  console.log('\n' + colorize('═'.repeat(70), 'cyan'));
  console.log(colorize('  TIP: Run with --verbose for detailed per-page breakdown', 'blue'));
  console.log(colorize('═'.repeat(70), 'cyan') + '\n');

  return {
    totalPages: results.length,
    avgScore,
    excellent,
    good,
    needsWork,
    results: sorted,
  };
}

// Detailed report for verbose mode
function generateVerboseReport(results) {
  const sorted = [...results].sort((a, b) => b.score - a.score);

  console.log('\n' + colorize('DETAILED PAGE ANALYSIS', 'bold'));
  console.log('═'.repeat(70) + '\n');

  sorted.forEach(result => {
    const emoji = getScoreEmoji(result.score);
    console.log(`${emoji} ${colorize(result.route, 'bold')} - ${colorize(result.score + '/100', getScoreColor(result.score))}`);
    console.log(`   URL: ${result.url}`);
    console.log('   ' + '─'.repeat(50));

    if (result.successes.length > 0) {
      console.log(colorize('   ✓ Successes:', 'green'));
      result.successes.forEach(s => console.log(`     • ${s}`));
    }

    if (result.issues.length > 0) {
      console.log(colorize('   ✗ Issues:', 'red'));
      result.issues.forEach(i => console.log(`     • ${i}`));
    }

    console.log();
  });
}

// Export results as JSON
function exportJSON(results, filename) {
  const data = {
    crawlDate: new Date().toISOString(),
    baseUrl: BASE_URL,
    summary: {
      totalPages: results.length,
      avgScore: Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length),
    },
    pages: results.map(r => ({
      route: r.route,
      url: r.url,
      score: r.score,
      issues: r.issues,
      successes: r.successes,
    })),
  };

  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`\n📄 Results exported to ${filename}\n`);
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes('--verbose') || args.includes('-v');
  const exportJson = args.includes('--json');

  console.log(colorize('\n🔍 Starting SEO Crawler...', 'cyan'));
  console.log(`   Scanning: ${APP_DIR}\n`);

  // Find all pages
  const pages = findAllPages(APP_DIR);
  console.log(`   Found ${pages.length} pages to analyze\n`);

  // Analyze each page
  const results = pages.map(page => {
    process.stdout.write(`   Analyzing: ${page.route}...`);
    const result = analyzePage(page);
    console.log(` ${getScoreEmoji(result.score)} ${result.score}/100`);
    return result;
  });

  // Generate report
  const report = generateReport(results);

  if (verbose) {
    generateVerboseReport(results);
  }

  if (exportJson) {
    exportJSON(results, 'seo-report.json');
  }

  // Return exit code based on average score
  process.exit(report.avgScore >= 60 ? 0 : 1);
}

main().catch(console.error);
