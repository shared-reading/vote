/**
 * Facebook 影片按讚數爬蟲後端
 * 使用 Playwright 模擬瀏覽器取得非自己管理的公開 FB 影片按讚數
 *
 * 使用方式：
 *   1. npm install express playwright cors
 *   2. npx playwright install chromium
 *   3. node scraper.js
 *   4. 開啟 http://localhost:3001 確認運作
 *   5. 在儀表板 app.js 中啟用 SCRAPER_MODE = true
 */

const express = require('express');
const cors    = require('cors');
const { chromium } = require('playwright');
const path = require('path');

const app  = express();
const PORT = 3001;

app.use(cors()); // Allow requests from localhost:3000
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Also serve the dashboard

// ── In-memory cache ──────────────────────────────────────────
const cache     = new Map();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// ── Scrape a single FB video page ────────────────────────────
async function scrapeFbVideo(page, videoId) {
  const url = `https://www.facebook.com/watch/?v=${videoId}`;

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Wait for content to stabilize
    await page.waitForTimeout(3000);

    // Dismiss any login popups / cookie banners
    try {
      await page.click('[data-testid="cookie-policy-manage-dialog-accept-button"]', { timeout: 2000 });
    } catch (_) {}
    try {
      // Close login wall if exists: press Escape
      await page.keyboard.press('Escape');
    } catch (_) {}

    await page.waitForTimeout(1000);

    // ── Strategy 1: aria-label on reaction summary ─────────────
    let likes = null;
    let title = '';

    const reactionLocators = [
      '[aria-label*="reaction"]',
      '[aria-label*="讚"]',
      '[aria-label*="Like"]',
    ];

    for (const sel of reactionLocators) {
      try {
        const el = page.locator(sel).first();
        const label = await el.getAttribute('aria-label', { timeout: 3000 });
        if (label) {
          const match = label.match(/[\d,\.]+[KkMm]?/);
          if (match) {
            likes = parseReactionCount(match[0]);
            break;
          }
        }
      } catch (_) {}
    }

    // ── Strategy 2: Look for reaction count spans near emoji buttons ──
    if (likes === null) {
      try {
        const counts = await page.evaluate(() => {
          const spans = Array.from(document.querySelectorAll('span'));
          const candidates = spans
            .map(el => el.innerText?.trim())
            .filter(t => /^\d{1,3}(,\d{3})*(\.\d+)?[KkMm]?$/.test(t))
            .map(t => {
              const n = parseFloat(t.replace(/,/g, ''));
              return isNaN(n) ? 0 : (t.includes('K') || t.includes('k')) ? n * 1000
                                  : (t.includes('M') || t.includes('m')) ? n * 1000000
                                  : n;
            })
            .filter(n => n >= 0 && n < 10000000);
          return candidates;
        });
        if (counts.length) likes = Math.max(...counts);
      } catch (_) {}
    }

    // ── Get page title ───────────────────────────────────────
    try {
      title = await page.title();
      title = title
        .replace(/\| Facebook$/, '')
        .replace(/\- Facebook$/, '')
        .replace(/Facebook/, '')
        .trim();
      if (!title || title.length < 2) title = '';
    } catch (_) {}

    return { likes: likes ?? 0, title, status: 'live' };

  } catch (err) {
    console.error(`  ✗ Error scraping ${videoId}:`, err.message);
    return { likes: 0, title: '', status: 'error', error: err.message };
  }
}

function parseReactionCount(str) {
  const clean = str.replace(/,/g, '').trim();
  if (/k$/i.test(clean)) return Math.round(parseFloat(clean) * 1000);
  if (/m$/i.test(clean)) return Math.round(parseFloat(clean) * 1000000);
  return parseInt(clean, 10) || 0;
}

// ── API Route ─────────────────────────────────────────────────
// GET /api/fb-scrape?ids=123,456,789
app.get('/api/fb-scrape', async (req, res) => {
  const { ids } = req.query;
  if (!ids) return res.status(400).json({ error: 'Missing ?ids= parameter' });

  const videoIds = ids.split(',').filter(Boolean);
  const results  = {};
  const toFetch  = [];

  // Check cache first
  for (const id of videoIds) {
    const cached = cache.get(id);
    if (cached && Date.now() - cached.time < CACHE_TTL) {
      results[id] = cached.data;
      console.log(`  ✓ Cache hit: ${id} → ${cached.data.likes} likes`);
    } else {
      toFetch.push(id);
    }
  }

  if (toFetch.length === 0) return res.json(results);

  console.log(`\n🔍 Scraping ${toFetch.length} FB videos...`);

  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled',
        '--lang=zh-TW',
      ]
    });

    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'zh-TW',
      viewport: { width: 1366, height: 768 },
    });

    // Process in small batches to avoid detection
    for (let i = 0; i < toFetch.length; i++) {
      const id   = toFetch[i];
      const page = await context.newPage();
      console.log(`  [${i+1}/${toFetch.length}] Scraping ${id}...`);

      const data = await scrapeFbVideo(page, id);
      await page.close();

      results[id] = data;
      cache.set(id, { data, time: Date.now() });
      console.log(`  → ${data.status === 'live' ? '✓' : '✗'} ${data.likes} likes | "${data.title}"`);

      // Polite delay between requests
      if (i < toFetch.length - 1) {
        await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));
      }
    }

    await browser.close();

  } catch (err) {
    console.error('Browser error:', err.message);
    if (browser) await browser.close().catch(() => {});
    // Return partial results with errors for unprocessed IDs
    toFetch.forEach(id => {
      if (!results[id]) results[id] = { likes: 0, title: '', status: 'error', error: err.message };
    });
  }

  res.json(results);
});

// ── Cache status ──────────────────────────────────────────────
app.get('/api/cache', (req, res) => {
  const info = {};
  cache.forEach((v, k) => {
    info[k] = { ...v.data, cached_ago_sec: Math.round((Date.now() - v.time) / 1000) };
  });
  res.json(info);
});

app.delete('/api/cache', (req, res) => {
  cache.clear();
  res.json({ ok: true, message: 'Cache cleared' });
});

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ ok: true, cached: cache.size, port: PORT });
});

app.listen(PORT, () => {
  console.log(`\n🚀 FB 爬蟲後端已啟動`);
  console.log(`   Local:   http://localhost:${PORT}`);
  console.log(`   API:     http://localhost:${PORT}/api/fb-scrape?ids=856866830084535,977662018340035`);
  console.log(`   Health:  http://localhost:${PORT}/api/health`);
  console.log(`\n💡 在 app.js 頂端設定 SCRAPER_BACKEND_URL = 'http://localhost:${PORT}' 即可啟用\n`);
});
