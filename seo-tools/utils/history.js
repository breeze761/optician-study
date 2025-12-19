/**
 * History Manager
 * Saves and displays ranking history over time with trend charts
 */

import fs from 'fs';
import chalk from 'chalk';
import { createTrendChart } from './display.js';

export class HistoryManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.history = this.load();
  }

  /**
   * Load history from file
   */
  load() {
    try {
      if (fs.existsSync(this.filePath)) {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
      }
    } catch (err) {
      console.warn(chalk.yellow(`Warning: Could not load history: ${err.message}`));
    }
    return { entries: [] };
  }

  /**
   * Save results to history
   */
  save(results) {
    this.history.entries.push(results);

    // Keep last 500 entries
    if (this.history.entries.length > 500) {
      this.history.entries = this.history.entries.slice(-500);
    }

    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.history, null, 2));
    } catch (err) {
      console.warn(chalk.yellow(`Warning: Could not save history: ${err.message}`));
    }
  }

  /**
   * Display history with optional site filter
   */
  displayHistory(siteFilter = null) {
    if (this.history.entries.length === 0) {
      console.log(chalk.yellow('\nNo ranking history found.'));
      console.log(chalk.gray('Run a ranking check first to start tracking.\n'));
      return;
    }

    console.log(chalk.cyan('\n📈 RANKING HISTORY & TRENDS\n'));
    console.log('═'.repeat(70));

    // Get all sites from history
    const allSites = new Set();
    this.history.entries.forEach(e => {
      Object.keys(e.sites || {}).forEach(s => allSites.add(s));
    });

    // Filter to specific site if requested
    const sitesToShow = siteFilter
      ? Array.from(allSites).filter(s => s.includes(siteFilter))
      : Array.from(allSites);

    if (sitesToShow.length === 0) {
      console.log(chalk.yellow(`\nNo history found for site matching "${siteFilter}"`));
      console.log(chalk.gray('Available sites in history:'));
      allSites.forEach(s => console.log(chalk.gray(`  - ${s}`)));
      return;
    }

    for (const domain of sitesToShow) {
      // Get site name from first entry that has it
      const sampleEntry = this.history.entries.find(e => e.sites[domain]);
      const siteName = sampleEntry?.sites[domain]?.name || domain;

      console.log(chalk.white(`\n🌐 ${siteName} (${domain})`));
      console.log(chalk.gray('─'.repeat(60)));

      // Group by search term
      const byTerm = {};
      for (const entry of this.history.entries) {
        if (!entry.sites[domain]) continue;
        if (!byTerm[entry.searchTerm]) {
          byTerm[entry.searchTerm] = [];
        }
        byTerm[entry.searchTerm].push({
          date: new Date(entry.timestamp),
          google: entry.sites[domain]?.google?.position,
          chatgpt: entry.sites[domain]?.chatgpt?.position,
          perplexity: entry.sites[domain]?.perplexity?.position
        });
      }

      if (Object.keys(byTerm).length === 0) {
        console.log(chalk.gray('  No data for this site yet.\n'));
        continue;
      }

      for (const [term, data] of Object.entries(byTerm)) {
        console.log(chalk.cyan(`\n  🔍 "${term}"`));
        console.log(chalk.gray('  ' + '─'.repeat(55)));

        // Show recent checks table
        console.log(chalk.gray('\n  Recent Checks:'));
        console.log(chalk.gray('  Date         │ Google │ ChatGPT │ Perplexity │ Trend'));
        console.log(chalk.gray('  ─────────────┼────────┼─────────┼────────────┼──────'));

        const recentData = data.slice(-10);
        for (let i = 0; i < recentData.length; i++) {
          const d = recentData[i];
          const dateStr = d.date.toLocaleDateString().padEnd(12);

          // Format positions
          const google = d.google ? `#${d.google}`.padEnd(6) : 'N/A   ';
          const chatgpt = d.chatgpt ? `#${d.chatgpt}`.padEnd(7) : 'N/A    ';
          const perplexity = d.perplexity ? `#${d.perplexity}`.padEnd(10) : 'N/A       ';

          // Calculate trend from previous
          let trend = '   ';
          if (i > 0) {
            const prevGoogle = recentData[i - 1].google;
            if (d.google && prevGoogle) {
              if (d.google < prevGoogle) trend = chalk.green('↑');
              else if (d.google > prevGoogle) trend = chalk.red('↓');
              else trend = chalk.yellow('→');
            }
          }

          // Color code based on position
          const googleColor = d.google && d.google <= 10 ? chalk.green :
                             d.google && d.google <= 30 ? chalk.yellow :
                             d.google ? chalk.red : chalk.gray;
          const chatgptColor = d.chatgpt && d.chatgpt <= 3 ? chalk.green :
                              d.chatgpt && d.chatgpt <= 5 ? chalk.yellow :
                              d.chatgpt ? chalk.blue : chalk.gray;
          const perplexityColor = d.perplexity && d.perplexity <= 3 ? chalk.green :
                                 d.perplexity && d.perplexity <= 5 ? chalk.yellow :
                                 d.perplexity ? chalk.blue : chalk.gray;

          console.log(
            `  ${dateStr} │ ` +
            `${googleColor(google)} │ ` +
            `${chatgptColor(chatgpt)} │ ` +
            `${perplexityColor(perplexity)} │ ${trend}`
          );
        }

        // Show trend charts if we have enough data
        if (data.length >= 2) {
          console.log(chalk.white('\n  Trend Charts:'));

          const googleData = data.map(d => d.google);
          const validGoogleData = googleData.filter(v => v !== null && v !== undefined);
          if (validGoogleData.length >= 2) {
            console.log(createTrendChart(googleData, 'Google', domain));
          }

          const chatgptData = data.map(d => d.chatgpt);
          const validChatgptData = chatgptData.filter(v => v !== null && v !== undefined);
          if (validChatgptData.length >= 2) {
            console.log(createTrendChart(chatgptData, 'ChatGPT', domain));
          }

          const perplexityData = data.map(d => d.perplexity);
          const validPerplexityData = perplexityData.filter(v => v !== null && v !== undefined);
          if (validPerplexityData.length >= 2) {
            console.log(createTrendChart(perplexityData, 'Perplexity', domain));
          }
        }
      }
    }

    console.log('\n' + '═'.repeat(70));
    console.log(chalk.gray(`\nTotal entries: ${this.history.entries.length}`));
    console.log(chalk.gray('Legend: 🟢 Top 10 │ 🟡 11-30 │ 🔴 31+ │ ↑ Improved │ ↓ Declined\n'));
  }

  /**
   * Get summary statistics
   */
  getSummary() {
    const terms = new Set(this.history.entries.map(e => e.searchTerm));
    const sites = new Set();
    this.history.entries.forEach(e => {
      Object.keys(e.sites || {}).forEach(s => sites.add(s));
    });

    return {
      totalChecks: this.history.entries.length,
      uniqueTerms: terms.size,
      uniqueSites: sites.size,
      dateRange: {
        first: this.history.entries[0]?.timestamp,
        last: this.history.entries[this.history.entries.length - 1]?.timestamp
      }
    };
  }

  /**
   * Export history to CSV
   */
  exportToCSV(filename) {
    const rows = ['Date,Site,Search Term,Google Position,ChatGPT Position,Perplexity Position'];

    for (const entry of this.history.entries) {
      const date = new Date(entry.timestamp).toISOString();
      for (const [domain, data] of Object.entries(entry.sites)) {
        rows.push([
          date,
          domain,
          `"${entry.searchTerm}"`,
          data.google?.position || '',
          data.chatgpt?.position || '',
          data.perplexity?.position || ''
        ].join(','));
      }
    }

    fs.writeFileSync(filename, rows.join('\n'));
    return filename;
  }
}
