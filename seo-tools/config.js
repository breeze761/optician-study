// SEO Rank Tracker Configuration
// Add your API keys here or use environment variables

export const config = {
  // Your sites to track (query individually with --site flag)
  sites: [
    {
      id: 'optician-study',
      name: 'Optician Study',
      domain: 'optician.study',
      url: 'https://optician.study',
      keywords: ['optician courses', 'ABO certification', 'optician practice tests']
    },
    {
      id: 'optician-study-com',
      name: 'Optician Study (.com)',
      domain: 'opticianstudy.com',
      url: 'https://opticianstudy.com',
      keywords: ['optician training', 'optician certification']
    },
    {
      id: 'view-eyewear',
      name: 'View Eyewear',
      domain: 'vieweyewear.com',
      url: 'https://vieweyewear.com',
      keywords: ['eyewear', 'glasses', 'optical frames', 'eyeglasses near me']
    },
    {
      id: 'lasik-atlanta',
      name: 'LASIK Surgeons Atlanta',
      domain: 'lasiksurgeonsatlanta.com',
      url: 'https://lasiksurgeonsatlanta.com',
      keywords: ['lasik atlanta', 'lasik surgery atlanta', 'laser eye surgery atlanta', 'lasik surgeon near me']
    },
    {
      id: 'gazal-shop',
      name: 'Gazal Eye Care Shop',
      domain: 'shop.gazaleyecare.com',
      url: 'https://shop.gazaleyecare.com',
      keywords: ['eye care products', 'contact lenses', 'eyewear shop']
    },
    {
      id: 'gazal-eyecare',
      name: 'Gazal Eye Care',
      domain: 'gazaleyecare.com',
      url: 'https://gazaleyecare.com',
      keywords: ['eye doctor atlanta', 'optometrist atlanta', 'eye exam atlanta', 'gazal eye care']
    }
  ],

  // Default search terms to track
  defaultSearchTerms: [
    // Optician Study terms
    'optician online courses',
    'ABO certification study guide',
    'optician practice tests',
    'how to become an optician',
    'optician certification prep',
    // LASIK terms
    'lasik surgery atlanta',
    'best lasik surgeon atlanta',
    'laser eye surgery georgia',
    // Eyewear terms
    'eyeglasses near me',
    'optical frames wholesale',
    // Eye care terms
    'eye doctor atlanta',
    'optometrist near me atlanta',
    'eye exam atlanta'
  ],

  // API Keys (set via environment variables or directly here)
  // ============================================================
  // HOW TO GET API KEYS:
  //
  // 1. OpenAI (for ChatGPT tracking):
  //    - Go to: https://platform.openai.com/api-keys
  //    - Click "Create new secret key"
  //    - Cost: ~$0.01-0.03 per query
  //
  // 2. Perplexity (for AI search tracking):
  //    - Go to: https://www.perplexity.ai/settings/api
  //    - Generate API key
  //    - Cost: ~$0.005 per query
  //
  // 3. SerpAPI (for reliable Google rankings - optional):
  //    - Go to: https://serpapi.com/
  //    - Sign up for account
  //    - Cost: $50/month
  // ============================================================
  apis: {
    // OpenAI API for ChatGPT search simulation
    openai: process.env.OPENAI_API_KEY || '',

    // SerpAPI for Google search results (optional, paid)
    serpapi: process.env.SERPAPI_KEY || '',

    // Perplexity API for AI search (optional)
    perplexity: process.env.PERPLEXITY_API_KEY || ''
  },

  // Settings
  settings: {
    // How many Google results to check (1-100)
    googleResultsToCheck: 100,

    // Save results history
    saveHistory: true,

    // History file location
    historyFile: './ranking-history.json'
  }
};
