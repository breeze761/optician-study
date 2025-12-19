/**
 * Google Search Ranking Tracker
 *
 * Uses manual HTML parsing for personal use.
 * For production/commercial use, consider SerpAPI ($50/month)
 */

export class GoogleTracker {
  constructor(config, testMode = false) {
    this.config = config;
    this.testMode = testMode;
    this.apiKey = config.apis.serpapi;
  }

  /**
   * Check ranking for a search term
   */
  async checkRanking(searchTerm, site) {
    if (this.testMode) {
      return this.getMockResult(searchTerm, site);
    }

    // If SerpAPI key is available, use it (more reliable)
    if (this.apiKey) {
      return this.checkWithSerpAPI(searchTerm, site);
    }

    // Otherwise, use manual scraping (personal use only)
    return this.checkWithScraping(searchTerm, site);
  }

  /**
   * Manual scraping method (personal use only)
   * Uses a simple fetch with user agent spoofing
   */
  async checkWithScraping(searchTerm, site) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&num=100`;

    try {
      const response = await fetch(searchUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1'
        }
      });

      if (!response.ok) {
        // Google might block or require captcha
        if (response.status === 429) {
          return {
            position: null,
            method: 'scrape',
            error: 'Rate limited. Try again later or use SerpAPI.',
            manualCheckUrl: searchUrl
          };
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const html = await response.text();
      return this.parseGoogleResults(html, site, searchUrl);
    } catch (err) {
      // Fallback to providing manual check URL
      return {
        position: null,
        method: 'scrape',
        error: err.message,
        manualCheckUrl: searchUrl,
        message: 'Automated check failed. Use the URL above to check manually.'
      };
    }
  }

  /**
   * Parse Google search results HTML
   */
  parseGoogleResults(html, site, searchUrl) {
    // Look for links containing our domain
    const domainPattern = new RegExp(
      `https?://([a-z0-9-]+\\.)?${site.domain.replace('.', '\\.')}[^"'\\s]*`,
      'gi'
    );

    // Find all URLs in the HTML
    const allUrls = html.match(/href="(https?:\/\/[^"]+)"/g) || [];

    // Filter out Google's own URLs and extract real results
    const resultUrls = allUrls
      .map(match => match.replace(/^href="/, '').replace(/"$/, ''))
      .filter(url => {
        // Exclude Google's own URLs
        return !url.includes('google.com') &&
               !url.includes('google.co') &&
               !url.includes('googleapis.com') &&
               !url.includes('gstatic.com') &&
               !url.includes('/search?') &&
               !url.startsWith('https://www.google');
      });

    // Find position of our site
    let position = null;
    let foundUrl = null;
    let seenUrls = new Set();

    for (let i = 0; i < resultUrls.length; i++) {
      const url = resultUrls[i];

      // Skip duplicates
      if (seenUrls.has(url)) continue;
      seenUrls.add(url);

      if (url.includes(site.domain)) {
        position = seenUrls.size;
        foundUrl = url;
        break;
      }
    }

    if (position) {
      return {
        position,
        url: foundUrl,
        method: 'scrape',
        totalChecked: seenUrls.size
      };
    }

    return {
      position: null,
      method: 'scrape',
      totalChecked: seenUrls.size,
      manualCheckUrl: searchUrl
    };
  }

  /**
   * Check ranking using SerpAPI (if key provided)
   */
  async checkWithSerpAPI(searchTerm, site) {
    const url = new URL('https://serpapi.com/search');
    url.searchParams.set('engine', 'google');
    url.searchParams.set('q', searchTerm);
    url.searchParams.set('api_key', this.apiKey);
    url.searchParams.set('num', this.config.settings.googleResultsToCheck.toString());

    try {
      const response = await fetch(url.toString());
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const organicResults = data.organic_results || [];

      for (let i = 0; i < organicResults.length; i++) {
        const result = organicResults[i];
        if (result.link && result.link.includes(site.domain)) {
          return {
            position: i + 1,
            url: result.link,
            title: result.title,
            snippet: result.snippet,
            method: 'serpapi'
          };
        }
      }

      return {
        position: null,
        method: 'serpapi',
        totalChecked: organicResults.length
      };
    } catch (err) {
      throw new Error(`SerpAPI error: ${err.message}`);
    }
  }

  /**
   * Mock results for testing
   */
  getMockResult(searchTerm, site) {
    const scenarios = {
      'optician online courses': {
        position: 3,
        url: `https://${site.domain}/courses`,
        title: `${site.name} - Online Optician Certification Courses`,
        snippet: 'Prepare for your ABO and NCLE certifications with our comprehensive online courses...',
        method: 'mock'
      },
      'abo certification study guide': {
        position: 7,
        url: `https://${site.domain}/abo-study-guide`,
        title: 'ABO Certification Study Guide | Optician Study',
        snippet: 'Complete study guide for the ABO certification exam with practice questions...',
        method: 'mock'
      },
      'optician practice tests': {
        position: 2,
        url: `https://${site.domain}/practice-tests`,
        title: 'Free Optician Practice Tests - Optician Study',
        snippet: 'Take free practice tests to prepare for your optician certification...',
        method: 'mock'
      }
    };

    if (scenarios[searchTerm.toLowerCase()]) {
      return scenarios[searchTerm.toLowerCase()];
    }

    // Random result for unknown terms
    const found = Math.random() > 0.3;
    if (found) {
      const position = Math.floor(Math.random() * 50) + 1;
      return {
        position,
        url: `https://${site.domain}`,
        title: `${site.name} - Mock Result`,
        snippet: 'This is a simulated search result for testing purposes...',
        method: 'mock'
      };
    }

    return {
      position: null,
      method: 'mock',
      totalChecked: 100
    };
  }
}
