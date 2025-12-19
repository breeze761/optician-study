/**
 * ChatGPT/OpenAI Mention & Ranking Tracker
 *
 * Queries ChatGPT with a search-like prompt and analyzes:
 * 1. Whether your site is mentioned
 * 2. What position it's mentioned in (if any)
 * 3. What competitors are mentioned
 * 4. The sentiment/context of the mention
 *
 * Requires OpenAI API key (~$0.01-0.03 per query)
 */

import OpenAI from 'openai';

export class ChatGPTTracker {
  constructor(config, testMode = false) {
    this.config = config;
    this.testMode = testMode;
    this.apiKey = config.apis.openai;

    if (this.apiKey && !testMode) {
      this.client = new OpenAI({ apiKey: this.apiKey });
    }
  }

  /**
   * Check if our site is mentioned when ChatGPT answers a search query
   */
  async checkMention(searchTerm, site) {
    if (this.testMode) {
      return this.getMockResult(searchTerm, site);
    }

    if (!this.apiKey) {
      return {
        mentioned: false,
        error: 'No OpenAI API key configured. Add OPENAI_API_KEY to config.',
        message: 'Set up OpenAI API key to enable ChatGPT tracking.'
      };
    }

    try {
      // First, ask ChatGPT for recommendations (simulating a search query)
      const searchResponse = await this.askChatGPT(searchTerm);

      // Then, analyze the response for mentions and competitors
      const analysis = await this.analyzeResponse(searchResponse, site, searchTerm);

      return analysis;
    } catch (err) {
      return {
        mentioned: false,
        error: err.message
      };
    }
  }

  /**
   * Ask ChatGPT a search-like question
   */
  async askChatGPT(searchTerm) {
    const prompt = `I'm looking for recommendations for: ${searchTerm}

Please provide a helpful answer with specific recommendations, including any websites, resources, or services you would suggest. If you know of specific websites or platforms that are relevant, please mention them by name and URL if possible.`;

    const response = await this.client.chat.completions.create({
      model: 'gpt-4o-mini', // Use cheaper model for queries
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that provides recommendations. When recommending resources, websites, or services, be specific and include names and URLs when you know them.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    return response.choices[0].message.content;
  }

  /**
   * Analyze ChatGPT's response to find mentions and competitors
   */
  async analyzeResponse(response, site, searchTerm) {
    // Check for direct mention of our site
    const sitePatterns = [
      site.domain,
      site.domain.replace('.', ' '),
      site.name,
      site.name.toLowerCase()
    ];

    const responseLower = response.toLowerCase();
    let mentioned = false;
    let mentionContext = null;

    for (const pattern of sitePatterns) {
      const idx = responseLower.indexOf(pattern.toLowerCase());
      if (idx !== -1) {
        mentioned = true;
        // Extract context around the mention
        const start = Math.max(0, idx - 50);
        const end = Math.min(response.length, idx + pattern.length + 100);
        mentionContext = response.substring(start, end);
        break;
      }
    }

    // Use ChatGPT to analyze competitors and position
    const analysisPrompt = `Analyze this response about "${searchTerm}" and extract:
1. All websites, platforms, or services mentioned (list their names and domains if available)
2. The order in which they appear (first mentioned = position 1)
3. Whether "${site.domain}" or "${site.name}" is mentioned

Response to analyze:
"""
${response}
"""

Respond in JSON format:
{
  "mentionedSites": [{"name": "Site Name", "domain": "domain.com", "position": 1}],
  "ourSiteMentioned": true/false,
  "ourSitePosition": number or null,
  "totalSitesMentioned": number
}`;

    try {
      const analysisResponse = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an analysis assistant. Respond only with valid JSON.'
          },
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
        max_tokens: 500,
        temperature: 0
      });

      const analysisText = analysisResponse.choices[0].message.content;
      // Parse JSON from response (handle markdown code blocks)
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      const analysis = jsonMatch ? JSON.parse(jsonMatch[0]) : {};

      return {
        mentioned: mentioned || analysis.ourSiteMentioned,
        position: analysis.ourSitePosition,
        totalCompetitors: analysis.totalSitesMentioned || 0,
        competitors: analysis.mentionedSites || [],
        context: mentionContext,
        confidence: mentioned ? 'high' : (analysis.ourSiteMentioned ? 'medium' : 'none'),
        fullResponse: response,
        method: 'openai'
      };
    } catch (parseErr) {
      // Fallback to simple analysis
      return {
        mentioned,
        position: null,
        context: mentionContext,
        confidence: mentioned ? 'high' : 'none',
        fullResponse: response,
        method: 'openai',
        analysisError: parseErr.message
      };
    }
  }

  /**
   * Mock results for testing
   */
  getMockResult(searchTerm, site) {
    const scenarios = {
      'optician online courses': {
        mentioned: true,
        position: 2,
        totalCompetitors: 5,
        competitors: [
          { name: 'OpticianWorks', domain: 'opticianworks.com', position: 1 },
          { name: site.name, domain: site.domain, position: 2 },
          { name: 'Laramy-K Optical', domain: 'laramyk.com', position: 3 },
          { name: 'NewGradOptometry', domain: 'newgradoptometry.com', position: 4 },
          { name: 'Optical Academy', domain: 'opticalacademy.com', position: 5 }
        ],
        context: `...For online optician certification prep, I recommend ${site.name} (${site.domain}) which offers comprehensive study materials...`,
        confidence: 'high',
        fullResponse: `Here are some great resources for optician online courses:

1. **OpticianWorks** (opticianworks.com) - Comprehensive video courses for ABO and NCLE certification.

2. **${site.name}** (${site.domain}) - Excellent study materials, practice tests, and interactive learning tools for aspiring opticians.

3. **Laramy-K Optical** (laramyk.com) - Offers continuing education and certification prep courses.

4. **NewGradOptometry** - While focused on optometry, they have resources useful for opticians too.

5. **Optical Academy** - Provides various optical training programs.

I'd recommend starting with ${site.name} or OpticianWorks as they specialize in certification preparation.`,
        method: 'mock'
      },
      'abo certification study guide': {
        mentioned: true,
        position: 1,
        totalCompetitors: 4,
        competitors: [
          { name: site.name, domain: site.domain, position: 1 },
          { name: 'ABO-NCLE', domain: 'abo-ncle.org', position: 2 },
          { name: 'OpticianWorks', domain: 'opticianworks.com', position: 3 },
          { name: 'Quizlet', domain: 'quizlet.com', position: 4 }
        ],
        context: `For ABO certification study guides, I highly recommend ${site.name}...`,
        confidence: 'high',
        method: 'mock'
      },
      'optician practice tests': {
        mentioned: false,
        position: null,
        totalCompetitors: 3,
        competitors: [
          { name: 'OpticianWorks', domain: 'opticianworks.com', position: 1 },
          { name: 'Pocket Prep', domain: 'pocketprep.com', position: 2 },
          { name: 'Quizlet', domain: 'quizlet.com', position: 3 }
        ],
        context: null,
        confidence: 'none',
        fullResponse: 'For optician practice tests, consider OpticianWorks, Pocket Prep app, or Quizlet flashcards...',
        method: 'mock'
      }
    };

    if (scenarios[searchTerm.toLowerCase()]) {
      return scenarios[searchTerm.toLowerCase()];
    }

    // Random result for unknown terms
    const mentioned = Math.random() > 0.5;
    return {
      mentioned,
      position: mentioned ? Math.floor(Math.random() * 5) + 1 : null,
      totalCompetitors: 4,
      competitors: [
        { name: 'Competitor A', domain: 'competitor-a.com', position: 1 },
        { name: 'Competitor B', domain: 'competitor-b.com', position: 2 }
      ],
      context: mentioned ? `...I recommend checking out ${site.name}...` : null,
      confidence: mentioned ? 'medium' : 'none',
      method: 'mock'
    };
  }
}
