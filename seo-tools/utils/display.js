/**
 * Display utilities for CLI output
 */

import chalk from 'chalk';

/**
 * Print the banner
 */
export function printBanner() {
  console.log(chalk.cyan(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║      SEO RANK TRACKER                                     ║
║      Track your rankings across Google & AI Search        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`));
}

/**
 * Print help information
 */
export function printHelp() {
  console.log(chalk.white(`
USAGE:
  node index.js                              Interactive mode (all sites)
  node index.js --test                       Test mode (mock data)
  node index.js --site lasik-atlanta         Check specific site only
  node index.js --sites                      List all configured sites
  node index.js --history                    View ranking history & trends
  node index.js --history lasik-atlanta      History for specific site
  node index.js "search term"                Quick check for specific term
  node index.js --help                       Show this help

SITE-SPECIFIC EXAMPLES:
  node index.js --site lasik-atlanta "lasik surgery atlanta"
  node index.js --site gazal-eyecare --test
  node index.js --site optician-study "ABO certification"

CONFIGURATION:
  Edit config.js to:
  - Add your sites to track
  - Configure default search terms
  - Add API keys (optional)

API KEYS (optional, for enhanced functionality):
  - OPENAI_API_KEY     ChatGPT tracking (~$0.01/query)
  - SERPAPI_KEY        Reliable Google rankings ($50/month)
  - PERPLEXITY_API_KEY AI search tracking (~$0.005/query)

TRACKING & TRENDS:
  All results are automatically saved to ranking-history.json
  Use --history to view trends and see what's working!

`));
}

/**
 * Format and display results summary
 */
export function formatResults(results) {
  console.log(chalk.cyan('\n📊 RANKING SUMMARY'));
  console.log(chalk.cyan(`   Search Term: "${results.searchTerm}"`));
  console.log(chalk.gray(`   Checked: ${new Date(results.timestamp).toLocaleString()}\n`));

  for (const [domain, data] of Object.entries(results.sites)) {
    console.log(chalk.white(`\n🌐 ${data.name} (${domain})`));
    console.log('─'.repeat(50));

    // Google
    const googleResult = data.google;
    if (googleResult?.position) {
      const color = googleResult.position <= 10 ? chalk.green :
                   googleResult.position <= 30 ? chalk.yellow : chalk.red;
      console.log(`   Google:     ${color('#' + googleResult.position)} ${getPositionEmoji(googleResult.position)}`);
      if (googleResult.url) {
        console.log(chalk.gray(`               ${googleResult.url}`));
      }
    } else if (googleResult?.error) {
      console.log(`   Google:     ${chalk.red('Error')} - ${googleResult.error}`);
      if (googleResult.manualCheckUrl) {
        console.log(chalk.gray(`               Check manually: ${googleResult.manualCheckUrl}`));
      }
    } else {
      console.log(`   Google:     ${chalk.gray('Not found in top 100')}`);
    }

    // ChatGPT
    const chatgptResult = data.chatgpt;
    if (chatgptResult?.mentioned) {
      const color = chatgptResult.position && chatgptResult.position <= 3 ? chalk.green :
                   chatgptResult.position && chatgptResult.position <= 5 ? chalk.yellow : chalk.blue;
      const posText = chatgptResult.position ? `#${chatgptResult.position}` : 'mentioned';
      console.log(`   ChatGPT:    ${color(posText)} ${chatgptResult.confidence === 'high' ? '✓' : '~'}`);
      if (chatgptResult.totalCompetitors) {
        console.log(chalk.gray(`               vs ${chatgptResult.totalCompetitors} competitors`));
      }
    } else if (chatgptResult?.error) {
      console.log(`   ChatGPT:    ${chalk.yellow('Not configured')} - Add OPENAI_API_KEY`);
    } else {
      console.log(`   ChatGPT:    ${chalk.gray('Not mentioned')}`);
    }

    // Perplexity
    const perplexityResult = data.perplexity;
    if (perplexityResult?.mentioned) {
      const color = perplexityResult.position && perplexityResult.position <= 3 ? chalk.green :
                   perplexityResult.position && perplexityResult.position <= 5 ? chalk.yellow : chalk.blue;
      const posText = perplexityResult.position ? `#${perplexityResult.position}` : 'cited';
      console.log(`   Perplexity: ${color(posText)} ${perplexityResult.inCitations ? '(in sources)' : '(in text)'}`);
      if (perplexityResult.totalSources) {
        console.log(chalk.gray(`               ${perplexityResult.totalSources} sources cited`));
      }
    } else if (perplexityResult?.error) {
      console.log(`   Perplexity: ${chalk.yellow('Not configured')} - Add PERPLEXITY_API_KEY`);
    } else {
      console.log(`   Perplexity: ${chalk.gray('Not cited')}`);
    }

    // Show competitors if available
    const competitors = chatgptResult?.competitors || perplexityResult?.sources;
    if (competitors && competitors.length > 0) {
      console.log(chalk.white('\n   Top Competitors:'));
      competitors.slice(0, 5).forEach((comp, i) => {
        const isUs = comp.domain === domain;
        const prefix = isUs ? chalk.green('→') : ' ';
        const name = comp.name || comp.domain;
        console.log(`   ${prefix} ${i + 1}. ${isUs ? chalk.green(name) : chalk.gray(name)}`);
      });
    }
  }

  console.log('\n' + '═'.repeat(50));
}

/**
 * Get emoji for position
 */
function getPositionEmoji(position) {
  if (position === 1) return '🥇';
  if (position === 2) return '🥈';
  if (position === 3) return '🥉';
  if (position <= 10) return '⭐';
  if (position <= 30) return '📊';
  return '📉';
}

/**
 * Create a simple ASCII chart for trends
 * Lower position = better, so we invert the chart
 */
export function createTrendChart(data, label, domain) {
  const width = 50;
  const height = 8;

  // Filter valid values
  const values = data.filter(v => v !== null && v !== undefined);
  if (values.length === 0) {
    return chalk.gray(`  ${label}: No data yet\n`);
  }

  if (values.length === 1) {
    return chalk.gray(`  ${label}: Position #${values[0]} (need more data for trend)\n`);
  }

  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  // Calculate trend
  const firstHalf = values.slice(0, Math.floor(values.length / 2));
  const secondHalf = values.slice(Math.floor(values.length / 2));
  const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  const trend = secondAvg < firstAvg ? '↑ Improving' : secondAvg > firstAvg ? '↓ Declining' : '→ Stable';
  const trendColor = secondAvg < firstAvg ? chalk.green : secondAvg > firstAvg ? chalk.red : chalk.yellow;

  let output = '';
  output += chalk.white(`\n  ${label} ${trendColor(`(${trend})`)}\n`);
  output += chalk.gray(`  Best: #${min} | Worst: #${max} | Current: #${values[values.length - 1]}\n\n`);

  // Build ASCII chart (inverted - lower position = higher on chart)
  output += chalk.gray('  #' + min.toString().padStart(2) + ' ');
  output += '┌' + '─'.repeat(width) + '┐\n';

  for (let row = 0; row < height; row++) {
    const threshold = min + (row / (height - 1)) * range;
    let line = chalk.gray('      │');

    for (let col = 0; col < width; col++) {
      const dataIdx = Math.floor((col / width) * values.length);
      const value = values[dataIdx];

      if (value !== null && value !== undefined && value <= threshold) {
        // Color based on position quality
        if (value <= 10) {
          line += chalk.green('█');
        } else if (value <= 30) {
          line += chalk.yellow('█');
        } else {
          line += chalk.red('█');
        }
      } else {
        line += ' ';
      }
    }

    line += chalk.gray('│');
    output += line + '\n';
  }

  output += chalk.gray('  #' + max.toString().padStart(2) + ' ');
  output += '└' + '─'.repeat(width) + '┘\n';
  output += chalk.gray(`      ${values.length} checks │ Oldest → Newest\n`);

  return output;
}

/**
 * Format trend summary for a site
 */
export function formatTrendSummary(entries, domain) {
  if (entries.length === 0) {
    return chalk.gray('No history data for this site.\n');
  }

  let output = '';

  // Group by search term
  const byTerm = {};
  for (const entry of entries) {
    if (!entry.sites[domain]) continue;
    if (!byTerm[entry.searchTerm]) {
      byTerm[entry.searchTerm] = [];
    }
    byTerm[entry.searchTerm].push({
      timestamp: entry.timestamp,
      google: entry.sites[domain]?.google?.position,
      chatgpt: entry.sites[domain]?.chatgpt?.position,
      perplexity: entry.sites[domain]?.perplexity?.position
    });
  }

  for (const [term, data] of Object.entries(byTerm)) {
    output += chalk.cyan(`\n  🔍 "${term}"\n`);
    output += chalk.gray('  ' + '─'.repeat(55) + '\n');

    // Google trend
    const googleData = data.map(d => d.google).filter(v => v !== null && v !== undefined);
    if (googleData.length > 0) {
      output += createTrendChart(googleData, 'Google', domain);
    }

    // ChatGPT trend
    const chatgptData = data.map(d => d.chatgpt).filter(v => v !== null && v !== undefined);
    if (chatgptData.length > 0) {
      output += createTrendChart(chatgptData, 'ChatGPT', domain);
    }

    // Perplexity trend
    const perplexityData = data.map(d => d.perplexity).filter(v => v !== null && v !== undefined);
    if (perplexityData.length > 0) {
      output += createTrendChart(perplexityData, 'Perplexity', domain);
    }
  }

  return output;
}
