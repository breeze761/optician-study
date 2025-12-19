#!/usr/bin/env node

/**
 * SEO Rank Tracker
 * Track your site rankings across Google, ChatGPT, and AI search engines
 *
 * Usage:
 *   node index.js                         - Interactive mode (all sites)
 *   node index.js --test                  - Test mode with mock data
 *   node index.js --site lasik-atlanta    - Check specific site only
 *   node index.js --sites                 - List all configured sites
 *   node index.js --history               - View ranking history
 *   node index.js "search term"           - Quick check for a specific term
 */

import { config } from './config.js';
import { GoogleTracker } from './trackers/google.js';
import { ChatGPTTracker } from './trackers/chatgpt.js';
import { PerplexityTracker } from './trackers/perplexity.js';
import { HistoryManager } from './utils/history.js';
import { formatResults, printBanner, printHelp } from './utils/display.js';
import chalk from 'chalk';
import readlineSync from 'readline-sync';

const args = process.argv.slice(2);
const isTestMode = args.includes('--test');
const isHistoryMode = args.includes('--history');
const isHelpMode = args.includes('--help') || args.includes('-h');
const isListSitesMode = args.includes('--sites');

// Parse --site flag
const siteArgIndex = args.indexOf('--site');
const selectedSiteId = siteArgIndex !== -1 ? args[siteArgIndex + 1] : null;

// Check for direct search term argument (not a flag or flag value)
const searchTermArg = args.find((arg, idx) => {
  if (arg.startsWith('--') || arg.startsWith('-')) return false;
  // Skip if this is the value for --site
  if (idx > 0 && args[idx - 1] === '--site') return false;
  return true;
});

async function main() {
  printBanner();

  if (isHelpMode) {
    printHelp();
    return;
  }

  if (isListSitesMode) {
    console.log(chalk.cyan('\n📋 Configured Sites:\n'));
    config.sites.forEach((site, i) => {
      console.log(chalk.white(`  ${i + 1}. ${site.name}`));
      console.log(chalk.gray(`     ID: ${site.id}`));
      console.log(chalk.gray(`     Domain: ${site.domain}`));
      console.log(chalk.gray(`     Keywords: ${site.keywords?.join(', ') || 'none'}`));
      console.log();
    });
    console.log(chalk.gray('Use --site <id> to check a specific site'));
    console.log(chalk.gray('Example: node index.js --site lasik-atlanta "lasik surgery atlanta"'));
    return;
  }

  if (isHistoryMode) {
    const history = new HistoryManager(config.settings.historyFile);
    history.displayHistory();
    return;
  }

  // Determine which sites to check
  let sitesToCheck = config.sites;

  if (selectedSiteId) {
    const site = config.sites.find(s => s.id === selectedSiteId || s.domain.includes(selectedSiteId));
    if (!site) {
      console.log(chalk.red(`\n❌ Site "${selectedSiteId}" not found.\n`));
      console.log(chalk.gray('Available sites:'));
      config.sites.forEach(s => console.log(chalk.gray(`  - ${s.id} (${s.domain})`)));
      return;
    }
    sitesToCheck = [site];
    console.log(chalk.green(`\n✓ Checking only: ${site.name} (${site.domain})\n`));
  }

  // Initialize trackers
  const googleTracker = new GoogleTracker(config, isTestMode);
  const chatgptTracker = new ChatGPTTracker(config, isTestMode);
  const perplexityTracker = new PerplexityTracker(config, isTestMode);

  if (isTestMode) {
    console.log(chalk.yellow('🧪 TEST MODE - Using simulated data\n'));
  }

  // Get search term
  let searchTerm;
  if (searchTermArg) {
    searchTerm = searchTermArg;
  } else {
    // Show site-specific keywords if single site selected
    const relevantKeywords = selectedSiteId && sitesToCheck.length === 1
      ? sitesToCheck[0].keywords || config.defaultSearchTerms
      : config.defaultSearchTerms;

    console.log(chalk.cyan('Suggested search terms:'));
    relevantKeywords.forEach((term, i) => {
      console.log(chalk.gray(`  ${i + 1}. ${term}`));
    });
    console.log();

    const input = readlineSync.question(
      chalk.white('Enter search term (or number, or press Enter for first): ')
    );

    if (!input) {
      searchTerm = relevantKeywords[0];
    } else if (/^\d+$/.test(input)) {
      const idx = parseInt(input) - 1;
      searchTerm = relevantKeywords[idx] || relevantKeywords[0];
    } else {
      searchTerm = input;
    }
  }

  console.log(chalk.green(`\n📊 Checking rankings for: "${searchTerm}"\n`));

  // Show sites being checked
  if (sitesToCheck.length > 1) {
    console.log(chalk.cyan('Sites to check:'));
    sitesToCheck.forEach((site, i) => {
      console.log(chalk.gray(`  ${i + 1}. ${site.name} (${site.domain})`));
    });
    console.log();
  }

  const results = {
    searchTerm,
    timestamp: new Date().toISOString(),
    sites: {}
  };

  // Run checks for each site
  for (const site of sitesToCheck) {
    console.log(chalk.blue(`\n🔍 Checking ${site.name} (${site.domain})...\n`));

    results.sites[site.domain] = {
      name: site.name,
      google: null,
      chatgpt: null,
      perplexity: null
    };

    // Google Search Check
    console.log(chalk.gray('  → Checking Google Search...'));
    try {
      const googleResult = await googleTracker.checkRanking(searchTerm, site);
      results.sites[site.domain].google = googleResult;

      if (googleResult.position) {
        console.log(chalk.green(`    ✓ Google: Position #${googleResult.position}`));
        if (googleResult.snippet) {
          console.log(chalk.gray(`      "${googleResult.snippet.substring(0, 80)}..."`));
        }
      } else if (googleResult.error) {
        console.log(chalk.yellow(`    ○ Google: ${googleResult.error}`));
        if (googleResult.manualCheckUrl) {
          console.log(chalk.gray(`      Manual check: ${googleResult.manualCheckUrl}`));
        }
      } else {
        console.log(chalk.yellow(`    ○ Google: Not found in top ${config.settings.googleResultsToCheck}`));
      }
    } catch (err) {
      console.log(chalk.red(`    ✗ Google: Error - ${err.message}`));
      results.sites[site.domain].google = { error: err.message };
    }

    // ChatGPT Check
    console.log(chalk.gray('  → Checking ChatGPT mentions...'));
    try {
      const chatgptResult = await chatgptTracker.checkMention(searchTerm, site);
      results.sites[site.domain].chatgpt = chatgptResult;

      if (chatgptResult.mentioned) {
        console.log(chalk.green(`    ✓ ChatGPT: Site mentioned! (confidence: ${chatgptResult.confidence})`));
        if (chatgptResult.context) {
          console.log(chalk.gray(`      "${chatgptResult.context.substring(0, 80)}..."`));
        }
      } else if (chatgptResult.error) {
        console.log(chalk.yellow(`    ○ ChatGPT: ${chatgptResult.error}`));
      } else {
        console.log(chalk.yellow('    ○ ChatGPT: Not mentioned in response'));
      }
    } catch (err) {
      console.log(chalk.red(`    ✗ ChatGPT: Error - ${err.message}`));
      results.sites[site.domain].chatgpt = { error: err.message };
    }

    // Perplexity Check
    console.log(chalk.gray('  → Checking Perplexity AI...'));
    try {
      const perplexityResult = await perplexityTracker.checkMention(searchTerm, site);
      results.sites[site.domain].perplexity = perplexityResult;

      if (perplexityResult.mentioned) {
        console.log(chalk.green(`    ✓ Perplexity: Site mentioned! (position: ${perplexityResult.position || 'referenced'})`));
      } else if (perplexityResult.error) {
        console.log(chalk.yellow(`    ○ Perplexity: ${perplexityResult.error}`));
      } else {
        console.log(chalk.yellow('    ○ Perplexity: Not mentioned in response'));
      }
    } catch (err) {
      console.log(chalk.red(`    ✗ Perplexity: Error - ${err.message}`));
      results.sites[site.domain].perplexity = { error: err.message };
    }
  }

  // Display summary
  console.log('\n' + '═'.repeat(60));
  formatResults(results);

  // Save to history
  if (config.settings.saveHistory) {
    const history = new HistoryManager(config.settings.historyFile);
    history.save(results);
    console.log(chalk.gray(`\n💾 Results saved to ${config.settings.historyFile}`));
  }

  console.log(chalk.gray('\nRun with --history to view ranking trends over time'));
  console.log(chalk.gray('Run with --sites to see all configured sites'));
}

main().catch(err => {
  console.error(chalk.red('Error:'), err.message);
  process.exit(1);
});
