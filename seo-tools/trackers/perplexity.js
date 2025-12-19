/**
 * Perplexity AI Search Tracker
 *
 * Perplexity is an AI-powered search engine that provides sources.
 * This is the best proxy for "AI search ranking" as it actually
 * searches the web and cites sources.
 *
 * API: https://docs.perplexity.ai/
 * Pricing: ~$0.005 per query (very cheap)
 */

export class PerplexityTracker {
  constructor(config, testMode = false) {
    this.config = config;
    this.testMode = testMode;
    this.apiKey = config.apis.perplexity;
  }

  /**
   * Check if our site is mentioned in Perplexity search results
   */
  async checkMention(searchTerm, site) {
    if (this.testMode) {
      return this.getMockResult(searchTerm, site);
    }

    if (!this.apiKey) {
      return {
        mentioned: false,
        error: 'No Perplexity API key configured. Add PERPLEXITY_API_KEY to config.',
        message: 'Get API key at https://www.perplexity.ai/settings/api'
      };
    }

    try {
      const response = await this.queryPerplexity(searchTerm);
      return this.analyzeResponse(response, site);
    } catch (err) {
      return {
        mentioned: false,
        error: err.message
      };
    }
  }

  /**
   * Query Perplexity API
   */
  async queryPerplexity(searchTerm) {
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online', // Online model with web search
        messages: [
          {
            role: 'system',
            content: 'You are a helpful search assistant. Provide specific recommendations with website names and URLs when relevant.'
          },
          {
            role: 'user',
            content: `I'm looking for: ${searchTerm}. Please recommend the best websites, resources, or services for this. Include specific website names and URLs.`
          }
        ],
        max_tokens: 1000,
        temperature: 0.2,
        return_citations: true
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Perplexity API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  /**
   * Analyze Perplexity response for mentions and citations
   */
  analyzeResponse(response, site) {
    const content = response.choices?.[0]?.message?.content || '';
    const citations = response.citations || [];

    // Check if our site is in the citations (most reliable)
    let citationPosition = null;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i].includes(site.domain)) {
        citationPosition = i + 1;
        break;
      }
    }

    // Check for mentions in the text
    const contentLower = content.toLowerCase();
    const sitePatterns = [
      site.domain,
      site.domain.replace('.', ' '),
      site.name.toLowerCase()
    ];

    let textMentioned = false;
    let mentionContext = null;

    for (const pattern of sitePatterns) {
      const idx = contentLower.indexOf(pattern.toLowerCase());
      if (idx !== -1) {
        textMentioned = true;
        const start = Math.max(0, idx - 50);
        const end = Math.min(content.length, idx + pattern.length + 100);
        mentionContext = content.substring(start, end);
        break;
      }
    }

    // Extract all cited sources for competitor analysis
    const allSources = citations.map((url, idx) => {
      try {
        const urlObj = new URL(url);
        return {
          domain: urlObj.hostname.replace('www.', ''),
          url: url,
          position: idx + 1
        };
      } catch {
        return { url, position: idx + 1 };
      }
    });

    return {
      mentioned: citationPosition !== null || textMentioned,
      position: citationPosition,
      inCitations: citationPosition !== null,
      inText: textMentioned,
      context: mentionContext,
      totalSources: citations.length,
      sources: allSources,
      fullResponse: content,
      method: 'perplexity'
    };
  }

  /**
   * Mock results for testing
   */
  getMockResult(searchTerm, site) {
    const scenarios = {
      'optician online courses': {
        mentioned: true,
        position: 3,
        inCitations: true,
        inText: true,
        context: `...comprehensive study resources at ${site.domain}...`,
        totalSources: 6,
        sources: [
          { domain: 'abo-ncle.org', url: 'https://abo-ncle.org', position: 1 },
          { domain: 'opticianworks.com', url: 'https://opticianworks.com', position: 2 },
          { domain: site.domain, url: site.url, position: 3 },
          { domain: 'laramyk.com', url: 'https://laramyk.com', position: 4 },
          { domain: 'reddit.com', url: 'https://reddit.com/r/optician', position: 5 },
          { domain: 'indeed.com', url: 'https://indeed.com', position: 6 }
        ],
        fullResponse: `Here are the best resources for optician online courses:

1. **ABO-NCLE Official** - The certifying body offers study resources and exam information.
2. **OpticianWorks** - Popular video-based courses for certification prep.
3. **${site.name}** (${site.domain}) - Comprehensive study materials and practice tests.
4. **Laramy-K Optical** - Continuing education courses.

These platforms offer various learning formats from video courses to practice exams.`,
        method: 'mock'
      },
      'abo certification study guide': {
        mentioned: true,
        position: 2,
        inCitations: true,
        inText: true,
        context: `${site.name} offers excellent ABO study materials...`,
        totalSources: 4,
        sources: [
          { domain: 'abo-ncle.org', url: 'https://abo-ncle.org', position: 1 },
          { domain: site.domain, url: site.url, position: 2 },
          { domain: 'opticianworks.com', url: 'https://opticianworks.com', position: 3 },
          { domain: 'quizlet.com', url: 'https://quizlet.com', position: 4 }
        ],
        method: 'mock'
      },
      'optician practice tests': {
        mentioned: false,
        position: null,
        inCitations: false,
        inText: false,
        context: null,
        totalSources: 4,
        sources: [
          { domain: 'opticianworks.com', url: 'https://opticianworks.com', position: 1 },
          { domain: 'pocketprep.com', url: 'https://pocketprep.com', position: 2 },
          { domain: 'quizlet.com', url: 'https://quizlet.com', position: 3 },
          { domain: 'abo-ncle.org', url: 'https://abo-ncle.org', position: 4 }
        ],
        fullResponse: 'For optician practice tests, OpticianWorks and Pocket Prep are popular choices...',
        method: 'mock'
      }
    };

    if (scenarios[searchTerm.toLowerCase()]) {
      return scenarios[searchTerm.toLowerCase()];
    }

    // Random result for unknown terms
    const mentioned = Math.random() > 0.4;
    return {
      mentioned,
      position: mentioned ? Math.floor(Math.random() * 5) + 1 : null,
      inCitations: mentioned,
      inText: mentioned && Math.random() > 0.5,
      context: mentioned ? `...Check out ${site.domain} for more...` : null,
      totalSources: 5,
      sources: [
        { domain: 'competitor1.com', position: 1 },
        { domain: 'competitor2.com', position: 2 }
      ],
      method: 'mock'
    };
  }
}
