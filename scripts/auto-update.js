const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const FB_IDS = [
  '856866830084535', '1488953016259244', '1285159373275569', '1567946188453641',
  '1314825210601008', '1543762180760794', '950131014306965', '919116667843631',
  '815963958258375', '27028009433505681', '1135913742050244', '1518584433267296',
  '1671804067274374', '1474589356967682', '2469760090162073', '2214258169395976',
  '3082125081980378', '4259382867659859', '977662018340035'
];

async function scrapeFbVideo(page, videoId) {
  const url = `https://www.facebook.com/watch/?v=${videoId}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(3000);

    // Dismiss any login popups / cookie banners
    try { await page.click('[data-testid="cookie-policy-manage-dialog-accept-button"]', { timeout: 2000 }); } catch (_) {}
    try { await page.keyboard.press('Escape'); } catch (_) {}
    await page.waitForTimeout(1000);

    let likes = null;
    const reactionLocators = [ '[aria-label*="reaction"]', '[aria-label*="讚"]', '[aria-label*="Like"]' ];

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

    if (likes === null) {
      try {
        const counts = await page.evaluate(() => {
          const spans = Array.from(document.querySelectorAll('span'));
          return spans
            .map(el => el.innerText?.trim())
            .filter(t => /^\d{1,3}(,\d{3})*(\.\d+)?[KkMm]?$/.test(t))
            .map(t => {
              const n = parseFloat(t.replace(/,/g, ''));
              return isNaN(n) ? 0 : (t.includes('K') || t.includes('k')) ? n * 1000 : (t.includes('M') || t.includes('m')) ? n * 1000000 : n;
            })
            .filter(n => n >= 0 && n < 10000000);
        });
        if (counts.length) likes = Math.max(...counts);
      } catch (_) {}
    }

    return likes ?? 0;
  } catch (err) {
    console.error(`  ✗ Error scraping ${videoId}:`, err.message);
    return 0; // Return 0 on error, or we could return null to preserve previous?
  }
}

function parseReactionCount(str) {
  const clean = str.replace(/,/g, '').trim();
  if (/k$/i.test(clean)) return Math.round(parseFloat(clean) * 1000);
  if (/m$/i.test(clean)) return Math.round(parseFloat(clean) * 1000000);
  return parseInt(clean, 10) || 0;
}

async function main() {
  console.log(`🔍 準備開始爬取 ${FB_IDS.length} 支影片...`);
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=zh-TW']
  });
  
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    locale: 'zh-TW',
    viewport: { width: 1366, height: 768 },
  });

  const likesArray = [];
  // Use previous data as fallback if scraping fails (read from app.js)
  const appJsPath = path.join(__dirname, '..', 'app.js');
  let appJsContent = fs.readFileSync(appJsPath, 'utf8');
  const prevDataMatch = appJsContent.match(/const demoFB = \[([\d, \.]+)\];/);
  const fallbackLikes = prevDataMatch ? prevDataMatch[1].split(',').map(s => parseInt(s.trim(), 10)) : Array(19).fill(0);

  for (let i = 0; i < FB_IDS.length; i++) {
    const id = FB_IDS[i];
    console.log(`[${i+1}/${FB_IDS.length}] 正在讀取 ${id}...`);
    const page = await context.newPage();
    const likes = await scrapeFbVideo(page, id);
    await page.close();

    // Fallback if likes is 0 to avoid wiping out data if blocked
    const finalLikes = (likes > 0) ? likes : fallbackLikes[i];
    likesArray.push(finalLikes);
    console.log(`  → 獲得按讚數：${finalLikes}`);

    if (i < FB_IDS.length - 1) {
      await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));
    }
  }

  await browser.close();
  
  console.log(`✅ 爬蟲完成！最新數據：${JSON.stringify(likesArray)}`);

  // Update app.js
  const newDataString = `const demoFB = [${likesArray.join(', ')}];`;
  appJsContent = appJsContent.replace(/const demoFB = \[[^\]]+\];/, newDataString);
  fs.writeFileSync(appJsPath, appJsContent, 'utf8');
  console.log(`✅ 已成功更新 app.js 中的 demoFB 陣列。`);
}

main().catch(console.error);
