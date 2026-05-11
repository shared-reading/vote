// ============================================================
// VIDEO DATA & CONFIG
// ============================================================
// Optional: set to 'http://localhost:3001' if running scraper.js backend
const SCRAPER_BACKEND_URL = localStorage.getItem('scraper_url') || '';
const VIDEOS = [
  // YouTube (19)
  { id: 'KaowG0rxDLk', platform: 'youtube', url: 'https://www.youtube.com/watch?v=KaowG0rxDLk' },
  { id: 'RievtDWTeVc', platform: 'youtube', url: 'https://www.youtube.com/watch?v=RievtDWTeVc' },
  { id: 'QZSCH9qJkEA', platform: 'youtube', url: 'https://www.youtube.com/watch?v=QZSCH9qJkEA' },
  { id: 'TKRP9_e8cAk', platform: 'youtube', url: 'https://www.youtube.com/watch?v=TKRP9_e8cAk' },
  { id: 'gHaiFv0CSuk', platform: 'youtube', url: 'https://www.youtube.com/watch?v=gHaiFv0CSuk' },
  { id: '0FWDbK5qXYk', platform: 'youtube', url: 'https://www.youtube.com/watch?v=0FWDbK5qXYk' },
  { id: 'PoJDQcJzlwI', platform: 'youtube', url: 'https://www.youtube.com/watch?v=PoJDQcJzlwI' },
  { id: 'I7Kgz8lZsE4', platform: 'youtube', url: 'https://www.youtube.com/watch?v=I7Kgz8lZsE4' },
  { id: 'g8nme76LXPg', platform: 'youtube', url: 'https://www.youtube.com/watch?v=g8nme76LXPg' },
  { id: 'hGAEOaC2EcE', platform: 'youtube', url: 'https://www.youtube.com/watch?v=hGAEOaC2EcE' },
  { id: 'WYEJkev1Hw4', platform: 'youtube', url: 'https://www.youtube.com/watch?v=WYEJkev1Hw4' },
  { id: '8Fgru_Bk7p8', platform: 'youtube', url: 'https://www.youtube.com/watch?v=8Fgru_Bk7p8' },
  { id: 'gfzFQd2k-B8', platform: 'youtube', url: 'https://www.youtube.com/watch?v=gfzFQd2k-B8' },
  { id: 'a9nerhHHpsI', platform: 'youtube', url: 'https://www.youtube.com/watch?v=a9nerhHHpsI' },
  { id: 'DTlEvpVA3tk', platform: 'youtube', url: 'https://www.youtube.com/watch?v=DTlEvpVA3tk' },
  { id: 'HLKxY81DEjo', platform: 'youtube', url: 'https://www.youtube.com/watch?v=HLKxY81DEjo' },
  { id: 'Mo3Y0VEov90', platform: 'youtube', url: 'https://www.youtube.com/watch?v=Mo3Y0VEov90' },
  { id: 'yTqKF_qVt7M', platform: 'youtube', url: 'https://www.youtube.com/watch?v=yTqKF_qVt7M' },
  { id: '9ntG2XnkqJY', platform: 'youtube', url: 'https://www.youtube.com/watch?v=9ntG2XnkqJY' },
  // Facebook (19)
  { id: '856866830084535',    platform: 'facebook', title: '優勢作品010《早產兒安安的成長日記：愛與希望的奇蹟之旅》', url: 'https://www.facebook.com/watch/?v=856866830084535' },
  { id: '1488953016259244',   platform: 'facebook', title: '優勢作品001《宇我同行. 跨出心視野》', url: 'https://www.facebook.com/watch/?v=1488953016259244' },
  { id: '1285159373275569',   platform: 'facebook', title: '優勢作品002《不放棄的我們》', url: 'https://www.facebook.com/watch/?v=1285159373275569' },
  { id: '1567946188453641',   platform: 'facebook', title: '優勢作品013《以優勢為鑰，啟動特教生學習動機與未來發展》', url: 'https://www.facebook.com/watch/?v=1567946188453641' },
  { id: '1314825210601008',   platform: 'facebook', title: '優勢作品015《恩恩的日常～優勢卡實踐》', url: 'https://www.facebook.com/watch/?v=1314825210601008' },
  { id: '1543762180760794',   platform: 'facebook', title: '優勢作品012《我想自己走向你》', url: 'https://www.facebook.com/watch/?v=1543762180760794' },
  { id: '950131014306965',    platform: 'facebook', title: '優勢作品014《「好力量」我與我的輔具之路-我的優勢卡》', url: 'https://www.facebook.com/watch/?v=950131014306965' },
  { id: '919116667843631',    platform: 'facebook', title: '優勢作品011《2025兒童我的優勢卡與小書共讀兩日親子課程》', url: 'https://www.facebook.com/watch/?v=919116667843631' },
  { id: '815963958258375',    platform: 'facebook', title: '優勢作品007《看見優勢看見可能_勇敢小超人融合參與行動紀錄》', url: 'https://www.facebook.com/watch/?v=815963958258375' },
  { id: '27028009433505681',  platform: 'facebook', title: '優勢作品003《音樂伴我的優勢之路》', url: 'https://www.facebook.com/watch/?v=27028009433505681' },
  { id: '1135913742050244',   platform: 'facebook', title: '優勢作品004《從優勢出發，讓參與發生》', url: 'https://www.facebook.com/watch/?v=1135913742050244' },
  { id: '1518584433267296',   platform: 'facebook', title: '優勢作品005《週四優勢日-優勢卡我與他》', url: 'https://www.facebook.com/watch/?v=1518584433267296' },
  { id: '1671804067274374',   platform: 'facebook', title: '優勢作品016《看見樺樺、看見希望》', url: 'https://www.facebook.com/watch/?v=1671804067274374' },
  { id: '1474589356967682',   platform: 'facebook', title: '優勢作品018《我是小熊，我熊讚》', url: 'https://www.facebook.com/watch/?v=1474589356967682' },
  { id: '2469760090162073',   platform: 'facebook', title: '優勢作品006《Lilting的貓頭鷹畫展》', url: 'https://www.facebook.com/watch/?v=2469760090162073' },
  { id: '2214258169395976',   platform: 'facebook', title: '優勢作品008《一張優勢卡帶來的改變》', url: 'https://www.facebook.com/watch/?v=2214258169395976' },
  { id: '3082125081980378',   platform: 'facebook', title: '優勢作品019《澎湖女孩》', url: 'https://www.facebook.com/watch/?v=3082125081980378' },
  { id: '4259382867659859',   platform: 'facebook', title: '優勢作品009《看見優勢，大人小孩全身都亮晶晶！》', url: 'https://www.facebook.com/watch/?v=4259382867659859' },
  { id: '977662018340035',    platform: 'facebook', title: '優勢作品017《泱泱的優勢故事》', url: 'https://www.facebook.com/watch/?v=977662018340035' }
];

const FB_IDS = []; // Array to be populated if needed

// ONE TIME MIGRATION: Clear old manual likes so the real fetched data from demoFB will show up
if (!localStorage.getItem('cleared_fb_once_v3')) {
  localStorage.removeItem('manual_fb_likes');
  localStorage.setItem('cleared_fb_once_v3', 'true');
}

// State
let videoData = VIDEOS.map(v => ({ ...v, likes: null, title: v.title || '', thumb: '', status: 'pending' }));
let ytApiKey = localStorage.getItem('yt_api_key') || '';
let fbToken  = localStorage.getItem('fb_page_token') || '';
let rankChart = null;
let platformChart = null;
let currentFilter = 'all';
let sortAsc = false;
let fetchCount = 0;
let fbLiveCount = 0;
let editMode = false;

// Load any manually saved FB likes from localStorage
const manualLikes = JSON.parse(localStorage.getItem('manual_fb_likes') || '{}');
// Load manual titles saved for FB videos
const manualTitles = JSON.parse(localStorage.getItem('manual_fb_titles') || '{}');

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCharts();

  // Apply any manually saved FB likes before first render
  videoData.forEach(v => {
    if (v.platform === 'facebook') {
      if (manualLikes[v.id] != null) {
        v.likes  = manualLikes[v.id];
        v.status = 'manual';
      }
      if (manualTitles[v.id]) v.title = manualTitles[v.id];
      // Use YT-style thumb placeholder for FB
      if (!v.thumb) v.thumb = '';
    }
  });

  renderTable();
  updateStats();

  if (ytApiKey) document.getElementById('apiKeyInput').value = ytApiKey;
  if (fbToken)  document.getElementById('fbTokenInput').value = fbToken;

  if (ytApiKey || fbToken) {
    showToast('已載入儲存的 API 憑證，開始更新資料…', 'info');
    fetchAllData();
  } else {
    showDemoData();
  }

  // Auto-refresh every 5 minutes
  setInterval(() => {
    if (ytApiKey || fbToken) fetchAllData();
  }, 5 * 60 * 1000);
});

// ============================================================
// API KEY & TOKEN
// ============================================================
function saveApiKey() {
  const val = document.getElementById('apiKeyInput').value.trim();
  if (!val.startsWith('AIza')) {
    showToast('YouTube API 金鑰格式不正確，應以 AIza 開頭', 'error');
    return;
  }
  ytApiKey = val;
  localStorage.setItem('yt_api_key', val);
  showToast('YouTube API 金鑰已儲存，開始載入資料…', 'success');
  fetchAllData();
}

function saveFbToken() {
  const val = document.getElementById('fbTokenInput').value.trim();
  if (!val || val.length < 20) {
    showToast('Facebook Token 格式不正確，請確認已複製完整 Token', 'error');
    return;
  }
  fbToken = val;
  localStorage.setItem('fb_page_token', val);
  showToast('Facebook Page Token 已儲存，開始載入 FB 資料…', 'success');
  fetchAllData();
}

function closeBanner() {
  document.getElementById('apiBanner').style.display = 'none';
}

// ============================================================
// DEMO DATA (when no API key)
// ============================================================
function showDemoData() {
  // Realistic simulated like counts
  const demoYT = [1842, 763, 2105, 448, 1337, 892, 2891, 614, 1123, 1755, 338, 2240, 977, 1481, 604, 2018, 835, 1266, 540];
  const demoFB = [25, 29, 30, 20, 27, 10, 21, 73, 299, 79, 76, 20, 93, 339, 24, 61, 253, 212, 29];
  const ytTitles = [
    '親子共讀：每一頁都是愛', '共讀時光｜讓孩子愛上書本', '閱讀的力量｜親子同行',
    '打開書本，打開世界', '與孩子共讀的美好時光', '閱讀起跑線｜0歲開始',
    '故事的魔力｜親子共讀分享', '書香家庭｜從共讀開始', '陪伴閱讀｜最美的親子活動',
    '共讀100天挑戰｜家長分享', '繪本的世界｜孩子的想像力', '讀本給孩子聽｜親子互動技巧',
    '圖書館親子日｜活動紀錄', '愛閱讀的孩子｜成長故事', '共讀活動花絮｜溫馨回顧',
    '書本是最好的禮物', '親子閱讀工作坊', '建立閱讀習慣｜從小開始', '閱讀推廣活動總回顧'
  ];
  const fbTitles = [
    'FB親子共讀活動直播', 'FB閱讀推廣講座', 'FB故事時光現場', 'FB書展活動精華',
    'FB親子互動分享', 'FB共讀成果發表', 'FB閱讀馬拉松花絮', 'FB圖書館特輯',
    'FB親子同讀示範', 'FB兒童讀書會', 'FB閱讀大使分享', 'FB共讀志工培訓',
    'FB書本教你愛閱讀', 'FB閱讀習慣養成', 'FB閱讀節活動', 'FB書香社區推廣',
    'FB共讀計畫成果', 'FB親子閱讀節', 'FB年度閱讀大獎'
  ];

  videoData.forEach((v, i) => {
    if (v.platform === 'youtube') {
      const idx = i;
      v.likes = demoYT[idx];
      v.title = ytTitles[idx];
      v.thumb = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;
      v.status = 'demo';
    } else {
      const idx = i - 19;
      if (v.status !== 'manual') {
        v.likes = demoFB[idx];
        v.title = v.title || fbTitles[idx];
        v.thumb = '';
        v.status = 'demo';
      }
    }
  });

  document.getElementById('loadingOverlay').style.display = 'none';
  renderTable();
  updateStats();
  updateCharts();
  document.getElementById('lastUpdateTime').textContent = new Date().toLocaleTimeString('zh-TW');
  showToast('顯示示範資料｜請輸入 YouTube API 金鑰取得真實資料', 'info');
}

// ============================================================
// FETCH DATA
// ============================================================
async function fetchAllData() {
  const btn = document.getElementById('refreshBtn');
  btn.classList.add('spinning');
  fetchCount = 0;
  fbLiveCount = 0;

  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';
  updateProgress();

  const ytVideos = videoData.filter(v => v.platform === 'youtube');
  const fbVideos = videoData.filter(v => v.platform === 'facebook');

  const promises = [];

  // ── YouTube ──
  if (ytApiKey) {
    const ytIds = ytVideos.map(v => v.id).join(',');
    promises.push(fetchYouTubeBatch(ytIds));
  } else {
    // Use existing data or demo
    ytVideos.forEach(v => {
      if (v.status === 'pending') v.status = 'no-key';
      fetchCount++;
    });
    updateProgress();
  }

  // ── Facebook ──
  if (SCRAPER_BACKEND_URL) {
    // Use local Playwright scraper backend
    promises.push(fetchFacebookScraper(fbVideos));
  } else if (fbToken) {
    // Use Graph API with Page Access Token
    promises.push(fetchFacebookBatch(fbVideos));
  } else {
    // Keep manual data or use demo
    fbVideos.forEach(v => {
      if (v.status === 'pending') {
        v.likes = v.likes || Math.floor(Math.random() * 4000) + 200;
        v.title = v.title || `Facebook 影片 ${v.id.slice(-6)}`;
        v.status = 'demo';
      }
      fetchCount++;
    });
    updateProgress();
  }

  await Promise.all(promises);

  overlay.style.display = 'none';
  btn.classList.remove('spinning');
  renderTable();
  updateStats();
  updateCharts();
  updateFbNotice();
  document.getElementById('lastUpdateTime').textContent = new Date().toLocaleTimeString('zh-TW');
  showToast('資料更新完成！', 'success');
}

async function fetchYouTubeBatch(idsStr) {
  const ids = idsStr.split(',');
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50).join(',');
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${chunk}&key=${ytApiKey}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.json();
        showToast(`YouTube API 錯誤：${err?.error?.message || '請檢查 API 金鑰'}`, 'error');
        chunk.split(',').forEach(id => {
          const v = videoData.find(v => v.id === id);
          if (v) { v.status = 'error'; fetchCount++; updateProgress(); }
        });
        continue;
      }
      const data = await res.json();
      data.items.forEach(item => {
        const v = videoData.find(v => v.id === item.id);
        if (!v) return;
        v.likes = parseInt(item.statistics?.likeCount || '0', 10);
        v.title = item.snippet?.title || `YouTube ${item.id}`;
        v.thumb = item.snippet?.thumbnails?.medium?.url ||
                  item.snippet?.thumbnails?.default?.url ||
                  `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`;
        v.status = 'live';
        fetchCount++;
        updateProgress();
      });
    } catch (e) {
      console.error('YT fetch error:', e);
      showToast('YouTube 網路錯誤，請檢查連線', 'error');
    }
  }
}

async function fetchFacebookBatch(fbVideos) {
  // Facebook Graph API v19.0
  // Fetch each video's reactions (likes) using Page Access Token
  // Endpoint: GET /{video-id}?fields=title,description,reactions.type(LIKE).limit(0).summary(true)&access_token=...
  const FB_API = 'https://graph.facebook.com/v19.0';

  const batchSize = 5; // Be respectful with rate limits
  for (let i = 0; i < fbVideos.length; i += batchSize) {
    const slice = fbVideos.slice(i, i + batchSize);
    await Promise.all(slice.map(async (v) => {
      const fields = 'title,description,reactions.type(LIKE).limit(0).summary(true)';
      const url = `${FB_API}/${v.id}?fields=${fields}&access_token=${fbToken}`;
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
          console.warn(`FB error for ${v.id}:`, data.error.message);
          // If token is bad globally, warn once
          if (data.error.code === 190) {
            showToast('Facebook Token 已過期或無效，請重新取得', 'error');
          }
          v.status = 'error';
        } else {
          v.likes  = data.reactions?.summary?.total_count ?? 0;
          v.title  = data.title || data.description?.slice(0, 60) || `Facebook 影片 ${v.id.slice(-6)}`;
          v.status = 'live';
          fbLiveCount++;
        }
      } catch (e) {
        console.error('FB fetch error:', e);
        v.status = 'error';
      }
      fetchCount++;
      updateProgress();
    }));
    // Small delay between batches to avoid rate limit
    if (i + batchSize < fbVideos.length) await sleep(300);
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchFacebookScraper(fbVideos) {
  // Call local scraper.js backend (Node.js + Playwright)
  const ids = fbVideos.map(v => v.id).join(',');
  try {
    const res  = await fetch(`${SCRAPER_BACKEND_URL}/api/fb-scrape?ids=${ids}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    fbVideos.forEach(v => {
      const result = data[v.id];
      if (result) {
        v.likes  = result.likes ?? 0;
        v.title  = result.title || v.title || `Facebook 影片 ${v.id.slice(-6)}`;
        v.status = result.status === 'live' ? 'live' : 'error';
        if (result.status === 'live') fbLiveCount++;
      }
      fetchCount++;
      updateProgress();
    });
  } catch (e) {
    console.error('Scraper backend error:', e);
    showToast(`爬蟲後端連線失敗：${e.message}`, 'error');
    // Fall back to keeping existing data
    fbVideos.forEach(v => { fetchCount++; updateProgress(); });
  }
}

function updateFbNotice() {
  const el = document.getElementById('fbNoticeText');
  const countEl = document.getElementById('fbLiveCount');
  const iconEl  = document.getElementById('fbNoticeIcon');
  if (countEl) countEl.textContent = fbLiveCount;
  if (fbLiveCount === 19 && el && iconEl) {
    iconEl.textContent = '✅';
    el.innerHTML = `<strong>Facebook 真實數據載入完成</strong>：所有 19 支影片按讚數已透過 Page Access Token 成功取得。`;
    document.getElementById('fbNotice').style.background = 'rgba(16,185,129,0.07)';
    document.getElementById('fbNotice').style.borderTopColor = 'rgba(16,185,129,0.2)';
  } else if (fbLiveCount > 0 && el) {
    iconEl.textContent = '⚠️';
    el.innerHTML = `<strong>Facebook 部分取得</strong>：${fbLiveCount} / 19 支已取得真實按讚數，其餘顯示 <span class="demo-badge">模擬</span>。`;
  }
}

function updateProgress() {
  document.getElementById('loadingProgress').textContent = `${fetchCount} / ${VIDEOS.length}`;
}

// ============================================================
// MANUAL EDIT MODE
// ============================================================
function toggleEditMode() {
  editMode = !editMode;
  const btn = document.getElementById('editModeBtn');
  const colHeader = document.getElementById('editColHeader');
  if (editMode) {
    btn.classList.add('active');
    btn.textContent = '✅ 完成編輯';
    if (colHeader) colHeader.style.display = 'table-cell';
    showToast('手動編輯模式開啟：點按讚數可直接輸入', 'info');
  } else {
    btn.classList.remove('active');
    btn.textContent = '✏️ 編輯讚數';
    if (colHeader) colHeader.style.display = 'none';
    showToast('手動編輯模式已關閉，數據已儲存', 'success');
  }
  renderTable();
}

function saveManualLike(id, value, titleValue) {
  const num = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
  if (isNaN(num) || num < 0) { showToast('請輸入有效的數字', 'error'); return; }
  const v = videoData.find(v => v.id === id);
  if (!v) return;
  v.likes  = num;
  v.status = 'manual';
  if (titleValue && titleValue.trim()) v.title = titleValue.trim();
  // Persist
  manualLikes[id]  = num;
  if (titleValue && titleValue.trim()) manualTitles[id] = titleValue.trim();
  localStorage.setItem('manual_fb_likes',  JSON.stringify(manualLikes));
  localStorage.setItem('manual_fb_titles', JSON.stringify(manualTitles));
  renderTable();
  updateStats();
  updateCharts();
  showToast(`已儲存：👍 ${num.toLocaleString()} 個讚`, 'success');
}

function clearAllManual() {
  if (!confirm('確定要清除所有手動輸入的 Facebook 讚數嗎？')) return;
  videoData.forEach(v => {
    if (v.platform === 'facebook' && v.status === 'manual') {
      v.likes = null; v.status = 'pending'; v.title = '';
    }
  });
  localStorage.removeItem('manual_fb_likes');
  localStorage.removeItem('manual_fb_titles');
  Object.keys(manualLikes).forEach(k => delete manualLikes[k]);
  Object.keys(manualTitles).forEach(k => delete manualTitles[k]);
  renderTable(); updateStats(); updateCharts();
  showToast('已清除所有手動數據', 'info');
}

// ============================================================
// TABLE RENDERING
// ============================================================
function renderTable() {
  const sorted = getSortedFiltered();
  const totalLikes = videoData.filter(v => v.likes != null).reduce((sum, v) => sum + v.likes, 0) || 1;
  const tbody = document.getElementById('videoTableBody');
  tbody.innerHTML = '';

  sorted.forEach((v, idx) => {
    const globalRank = videoData.filter(x => x.likes != null).sort((a,b) => b.likes - a.likes).findIndex(x => x.id === v.id) + 1;
    const row = createTableRow(v, globalRank || (idx + 1), totalLikes, idx);
    tbody.appendChild(row);
  });
}

function renderTableRow(video) {
  // Live update a single row if it exists
  const existing = document.getElementById(`row-${video.id}`);
  const totalLikes = videoData.filter(v => v.likes != null).reduce((sum, v) => sum + v.likes, 0) || 1;
  const sorted = getSortedFiltered();
  const globalRank = videoData.filter(x => x.likes != null).sort((a,b) => b.likes - a.likes).findIndex(x => x.id === video.id) + 1;

  if (existing) {
    const idx = sorted.findIndex(v => v.id === video.id);
    const newRow = createTableRow(video, globalRank, totalLikes, idx);
    existing.replaceWith(newRow);
  }
}

function createTableRow(v, rank, totalLikes, animIdx) {
  const tr = document.createElement('tr');
  tr.id = `row-${v.id}`;
  tr.style.animationDelay = `${animIdx * 30}ms`;

  const isYT = v.platform === 'youtube';
  const likes = v.likes ?? '—';
  const likesNum = v.likes ?? 0;
  const barPct = totalLikes > 0 ? (likesNum / totalLikes * 100).toFixed(1) : 0;

  const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-other';

  const thumbHTML = v.thumb
    ? `<img src="${v.thumb}" alt="縮圖" onerror="this.style.display='none';this.nextSibling.style.display='flex'" /><div class="thumb-placeholder" style="display:none">${isYT ? '▶' : 'f'}</div>`
    : `<div class="thumb-placeholder">${isYT ? '▶' : 'f'}</div>`;

  let statusTag = '';
  if (v.status === 'demo')   statusTag = `<span class="demo-tag">模擬</span>`;
  if (v.status === 'error')  statusTag = `<span class="error-tag">錯誤</span>`;
  if (v.status === 'manual') statusTag = `<span class="manual-tag">手動</span>`;

  const platformIcon = isYT
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>`;

  // Edit cell (only for FB videos in edit mode)
  const showEditCell = editMode;
  const editCell = showEditCell && !isYT ? `
    <td class="edit-cell">
      <div class="edit-inline">
        <input type="number" class="edit-input" id="edit-likes-${v.id}"
          value="${v.likes ?? ''}" placeholder="輸入讚數" min="0" />
        <input type="text" class="edit-input title-input" id="edit-title-${v.id}"
          value="${v.title || ''}" placeholder="影片標題（可選）" />
        <button class="edit-save-btn" onclick="saveManualLike('${v.id}', document.getElementById('edit-likes-${v.id}').value, document.getElementById('edit-title-${v.id}').value)">✓</button>
      </div>
    </td>` : showEditCell ? `<td></td>` : '';

  tr.innerHTML = `
    <td><span class="rank-badge ${rankClass}">${rank}</span></td>
    <td><div class="thumb-wrap">${thumbHTML}</div></td>
    <td class="title-cell">
      <a href="${v.url}" target="_blank" class="title-link">
        <div class="video-title">${v.title || (isYT ? `YouTube 影片` : `Facebook 影片`)}</div>
      </a>
      <div class="video-id">${v.id}</div>
    </td>
    <td>
      <span class="platform-badge ${isYT ? 'yt' : 'fb'}">
        ${platformIcon}
        ${isYT ? 'YouTube' : 'Facebook'}
      </span>
    </td>
    <td>
      <div class="likes-cell">
        <span class="likes-icon">👍</span>
        <span class="likes-value">${typeof likes === 'number' ? formatNum(likes) : likes}</span>
        ${statusTag}
      </div>
    </td>
    <td>
      <div class="likes-bar-wrap">
        <div class="likes-bar-fill ${isYT ? 'yt' : 'fb'}" style="width:${barPct}%"></div>
      </div>
    </td>
    <td>
      <a href="${v.url}" target="_blank" class="link-btn" title="開啟影片">
        <svg viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg>
      </a>
    </td>
    ${editCell}
  `;
  return tr;
}

function getSortedFiltered() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const platform = document.getElementById('platformFilter').value;
  const sort = document.getElementById('sortSelect').value;

  let list = videoData.filter(v => {
    if (platform !== 'all' && v.platform !== platform) return false;
    if (search && !v.title.toLowerCase().includes(search) && !v.id.includes(search)) return false;
    return true;
  });

  list.sort((a, b) => {
    const la = a.likes ?? -1, lb = b.likes ?? -1;
    switch (sort) {
      case 'likes-desc': return lb - la;
      case 'likes-asc':  return la - lb;
      case 'platform':   return a.platform.localeCompare(b.platform);
      default:           return lb - la;
    }
  });

  return list;
}

function filterTable() { renderTable(); }

function sortTable() { renderTable(); }

function toggleSort() {
  sortAsc = !sortAsc;
  document.getElementById('sortSelect').value = sortAsc ? 'likes-asc' : 'likes-desc';
  document.getElementById('sortArrow').textContent = sortAsc ? '↑' : '↓';
  renderTable();
}

// ============================================================
// STATS
// ============================================================
function updateStats() {
  const withLikes = videoData.filter(v => v.likes != null);
  const ytLikes = videoData.filter(v => v.platform === 'youtube' && v.likes != null);
  const fbLikes = videoData.filter(v => v.platform === 'facebook' && v.likes != null);

  const total = withLikes.reduce((s, v) => s + v.likes, 0);
  const top   = withLikes.length ? Math.max(...withLikes.map(v => v.likes)) : 0;
  const avg   = withLikes.length ? Math.round(total / withLikes.length) : 0;
  const ytSum = ytLikes.reduce((s, v) => s + v.likes, 0);
  const fbSum = fbLikes.reduce((s, v) => s + v.likes, 0);

  animateValue('totalLikes', total);
  animateValue('topLikes', top);
  animateValue('avgLikes', avg);
  animateValue('ytTotal', ytSum);
  animateValue('fbTotal', fbSum);
}

function animateValue(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = parseInt(el.textContent.replace(/,/g, '')) || 0;
  const duration = 800;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    el.textContent = formatNum(current);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ============================================================
// CHARTS
// ============================================================
function initCharts() {
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.font.family = 'Inter, Noto Sans TC, sans-serif';

  // Rank chart
  const rankCtx = document.getElementById('rankChart').getContext('2d');
  rankChart = new Chart(rankCtx, {
    type: 'bar',
    data: { labels: [], datasets: [] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` 👍 ${formatNum(ctx.raw)} 個讚`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { callback: v => formatNum(v) }
        },
        y: {
          grid: { display: false },
          ticks: { font: { size: 11 } }
        }
      },
      animation: { duration: 600, easing: 'easeOutQuart' }
    }
  });

  // Platform donut chart
  const platCtx = document.getElementById('platformChart').getContext('2d');
  platformChart = new Chart(platCtx, {
    type: 'doughnut',
    data: {
      labels: ['YouTube', 'Facebook'],
      datasets: [{
        data: [0, 0],
        backgroundColor: ['rgba(255,68,68,0.8)', 'rgba(24,119,242,0.8)'],
        borderColor: ['rgba(255,68,68,1)', 'rgba(24,119,242,1)'],
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${formatNum(ctx.raw)} 讚`
          }
        }
      },
      animation: { duration: 800, easing: 'easeOutQuart' }
    }
  });
}

function setChartFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.chart-controls .chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  updateCharts();
}

function updateCharts() {
  // Rank chart: top 15 by current filter
  let list = videoData.filter(v => v.likes != null);
  if (currentFilter === 'youtube') list = list.filter(v => v.platform === 'youtube');
  if (currentFilter === 'facebook') list = list.filter(v => v.platform === 'facebook');

  list.sort((a, b) => b.likes - a.likes);
  const top15 = list.slice(0, 15);

  const labels = top15.map(v => {
    const prefix = v.platform === 'youtube' ? '▶ ' : 'f ';
    const title = v.title || v.id;
    return prefix + (title.length > 22 ? title.slice(0, 22) + '…' : title);
  });

  const colors = top15.map(v =>
    v.platform === 'youtube'
      ? `rgba(255,${50 + Math.random()*30|0},${50 + Math.random()*30|0},0.85)`
      : `rgba(24,${100 + Math.random()*30|0},242,0.85)`
  );
  // Stable colors
  const stableColors = top15.map(v =>
    v.platform === 'youtube' ? 'rgba(255,68,68,0.8)' : 'rgba(24,119,242,0.8)'
  );

  rankChart.data.labels = labels;
  rankChart.data.datasets = [{
    data: top15.map(v => v.likes),
    backgroundColor: stableColors,
    borderRadius: 6,
    borderSkipped: false,
  }];
  rankChart.update();

  // Platform chart
  const ytSum = videoData.filter(v => v.platform === 'youtube' && v.likes).reduce((s,v) => s+v.likes, 0);
  const fbSum = videoData.filter(v => v.platform === 'facebook' && v.likes).reduce((s,v) => s+v.likes, 0);
  platformChart.data.datasets[0].data = [ytSum, fbSum];
  platformChart.update();

  // Legend
  const total = ytSum + fbSum || 1;
  document.getElementById('platformLegend').innerHTML = `
    <div class="legend-item">
      <div class="legend-dot" style="background:#ff4444"></div>
      <div class="legend-info">
        <span class="legend-name">YouTube (19 支)</span>
        <span>
          <span class="legend-val">${formatNum(ytSum)}</span>
          <span class="legend-pct"> ${(ytSum/total*100).toFixed(1)}%</span>
        </span>
      </div>
    </div>
    <div class="legend-item">
      <div class="legend-dot" style="background:#1877f2"></div>
      <div class="legend-info">
        <span class="legend-name">Facebook (19 支)</span>
        <span>
          <span class="legend-val">${formatNum(fbSum)}</span>
          <span class="legend-pct"> ${(fbSum/total*100).toFixed(1)}%</span>
        </span>
      </div>
    </div>
  `;
}

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const container = document.getElementById('bgParticles');
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const dur = Math.random() * 20 + 15;
    const delay = Math.random() * 20;
    const isAccent = Math.random() > 0.5;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}%;
      animation-duration:${dur}s;
      animation-delay:-${delay}s;
      background:${isAccent ? '#6366f1' : '#8b5cf6'};
      box-shadow:0 0 ${size*3}px ${isAccent ? '#6366f1' : '#8b5cf6'};
    `;
    container.appendChild(p);
  }
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type}`;
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => {
    t.classList.remove('show');
  }, 3500);
}

// ============================================================
// UTILS
// ============================================================
function formatNum(n) {
  if (n === null || n === undefined) return '—';
  if (n >= 10000) return (n / 10000).toFixed(1) + '萬';
  return n.toLocaleString('zh-TW');
}
