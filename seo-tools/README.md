# SEO Rank Tracker

A personal SEO tool to track your website rankings across **Google Search**, **ChatGPT**, and **AI search engines** (Perplexity).

## Your Configured Sites

| ID | Site | Domain |
|----|------|--------|
| optician-study | Optician Study | optician.study |
| optician-study-com | Optician Study (.com) | opticianstudy.com |
| view-eyewear | View Eyewear | vieweyewear.com |
| lasik-atlanta | LASIK Surgeons Atlanta | lasiksurgeonsatlanta.com |
| gazal-shop | Gazal Eye Care Shop | shop.gazaleyecare.com |
| gazal-eyecare | Gazal Eye Care | gazaleyecare.com |

## Quick Start

```bash
cd seo-tools

# List all your sites
node index.js --sites

# Test mode (no API keys needed)
node index.js --test --site lasik-atlanta "lasik surgery atlanta"

# View ranking history & trends
node index.js --history
```

## Usage Examples

```bash
# Check specific site
node index.js --site lasik-atlanta "lasik surgery atlanta"
node index.js --site gazal-eyecare "eye doctor atlanta"
node index.js --site optician-study "optician online courses"

# Check all sites for a term
node index.js "eye care atlanta"

# Test mode (mock data)
node index.js --test --site view-eyewear "eyeglasses near me"

# View history for specific site
node index.js --history lasik
```

---

## How to Get API Keys

### 1. OpenAI API Key (for ChatGPT tracking)

**Cost:** ~$0.01-0.03 per query

1. Go to: https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click **"Create new secret key"**
4. Copy the key (starts with `sk-...`)
5. Add to `config.js`:
   ```javascript
   openai: 'sk-your-key-here',
   ```

### 2. Perplexity API Key (for AI search tracking)

**Cost:** ~$0.005 per query (very cheap!)

1. Go to: https://www.perplexity.ai/settings/api
2. Sign in or create an account
3. Click **"Generate"** to create a new API key
4. Copy the key (starts with `pplx-...`)
5. Add to `config.js`:
   ```javascript
   perplexity: 'pplx-your-key-here',
   ```

### 3. SerpAPI Key (for reliable Google rankings - OPTIONAL)

**Cost:** $50/month

Only needed if the free Google scraping doesn't work well.

1. Go to: https://serpapi.com/
2. Sign up for an account
3. Get your API key from the dashboard
4. Add to `config.js`:
   ```javascript
   serpapi: 'your-key-here',
   ```

---

## Estimated Monthly Costs

| Usage | OpenAI | Perplexity | Total |
|-------|--------|------------|-------|
| 10 queries/day | ~$3-9/mo | ~$1.50/mo | ~$5-10/mo |
| 5 queries/day | ~$1.50-4/mo | ~$0.75/mo | ~$2-5/mo |
| Weekly checks only | ~$1/mo | ~$0.20/mo | ~$1-2/mo |

**Without API keys:** Google scraping still works (may be rate-limited)

---

## Features

### Ranking Tracking
- **Google Search** - Position in search results (1-100)
- **ChatGPT** - Whether AI recommends your site
- **Perplexity** - AI search citations

### Competitor Analysis
- See who ranks above/below you
- Track your position vs competitors over time

### History & Trends
- Automatic saving of all checks
- ASCII trend charts showing improvement/decline
- CSV export for spreadsheets

### Multi-Site Support
- Track all 6 of your sites independently
- Site-specific keywords configured

---

## File Structure

```
seo-tools/
├── index.js              # Main entry point
├── config.js             # Sites, keywords, API keys
├── package.json          # Dependencies
├── README.md             # This file
├── ranking-history.json  # Saved results (auto-generated)
├── trackers/
│   ├── google.js         # Google search tracker
│   ├── chatgpt.js        # ChatGPT mention tracker
│   └── perplexity.js     # Perplexity AI tracker
└── utils/
    ├── history.js        # History & trends
    └── display.js        # CLI formatting & charts
```

---

## Improvement Ideas

### Short Term
- [ ] Add scheduled daily/weekly checks
- [ ] Email alerts when rankings change significantly
- [ ] Add Bing search tracking

### Medium Term
- [ ] Web dashboard to visualize trends
- [ ] Compare multiple sites side-by-side in charts
- [ ] Track specific pages, not just domains

### Long Term
- [ ] AI-powered recommendations for improving rankings
- [ ] Integration with Google Search Console API
- [ ] Competitor discovery (find who ranks for your keywords)

---

## Troubleshooting

### "Rate limited" from Google
The free scraping may get blocked. Solutions:
1. Wait and try again later
2. Add a SerpAPI key for reliable results
3. Use the manual check URL provided

### API errors
1. Check your API key is correct in `config.js`
2. Ensure you have credits/balance on the API account
3. Try `--test` mode to verify the tool works

### "Module not found" errors
```bash
cd seo-tools
npm install
```
