# 🎬 我的專屬私人番號庫 (AV Manager)

這是一套基於 **Vue 3 + Tailwind CSS + Dexie.js (IndexedDB)** 開發的純前端私人影音管理系統。專為喜愛各類影音內容的使用者設計，支援一鍵智慧抓取、本地端高效存儲與多裝置同步備份。

---

## ✨ 核心功能

* **🚀 一鍵智慧抓取 (Bookmarklets)**：搭配專屬書籤，在 Jable、MissAV、123av 瀏覽時一鍵抓取網頁標題、封面圖、反白演員及來源網址。
* **💾 本地高效儲存**：使用瀏覽器的 IndexedDB（透過 Dexie.js 驅動），資料完全保存在本地端，安全、私密且不佔伺服器空間。
* **🙈 NSFW 隱私防護**：一鍵開啟毛玻璃模糊效果，保護個人隱私，滑鼠懸停即可暫時檢視。
* **🔍 即時搜尋與狀態篩選**：支援以「番號/標題」或「演員」即時過濾，並可切換「待看」、「已看」、「喜愛」等狀態。
* **👆 點擊演員快速搜尋**：點擊卡片或表格中的演員名字，瞬間過濾該演員的所有作品。
* **⭐ 多重排序與檢視模式**：
  * 支援「最新加入」、「評價高低」、「番號字母」排序。
  * 支援 **卡片瀑布流 (Card View)** 與 **精簡表格模式 (Table View)** 自由切換。
* **🎲 🎲 隨機選片機**：有選擇障礙時的救星！隨機從待看清單中抽選一部作品帶你開箱。
* **📤 完整備份還原**：支援一鍵匯出與匯入 JSON 格式的備份檔案，方便跨裝置轉移資料。

---

## 🛠️ 技術堆疊

* **前端框架**：[Vue 3 (CDN)](https://vuejs.org/)
* **樣式框架**：[Tailwind CSS](https://tailwindcss.com/)
* **本地資料庫**：[Dexie.js (IndexedDB Wrapper)](https://dexie.org/)

---

## 🚀 快速開始 (本地端執行)

1. 將本專案複製或下載到你的電腦中，確保資料夾內包含 `index.html`。
2. 使用 VS Code 打開專案，並透過 **Live Server** 擴充功能啟動本地伺服器（通常預設為 `http://127.0.0.1:5500/index.html`）。
3. 或直接在瀏覽器中雙擊開啟 `index.html` 即可使用。

---

## 📌 瀏覽器書籤抓取工具 (Bookmarklets)

在瀏覽器建立書籤，並將下列對應的網址貼入（請記得將程式碼中的 `myUrl` 替換為你的實際網址，例如 GitHub Pages 網址或本機網址）：

### 1. ⚡ 抓取 Jable

javascript:(function(){
  let t = document.title;
  let img = document.querySelector('meta[property="og:image"]');
  let cover = img ? img.content : '';
  let code = t.split(/[-|_]?\s*Jable\.TV/i)[0].trim();
  let act = window.getSelection().toString().trim();
  let myUrl = '[http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)'; /* 替換為你的網址 */
  let finalUrl = myUrl + '?code=' + encodeURIComponent(code) + '&cover=' + encodeURIComponent(cover) + '&actress=' + encodeURIComponent(act) + '&url=' + encodeURIComponent(window.location.href);
  let a = document.createElement('a'); a.href = finalUrl; a.target = '_blank';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
})();

### 2. ⚡ 抓取 MissAV

javascript:(function(){
  try {
    let t = document.title || '';
    let img = document.querySelector('meta[property="og:image"]');
    let cover = img ? img.content : '';
    let code = t.split(/[-|_]?\s*MissAV/i)[0].trim();
    let act = window.getSelection().toString().trim();
    let myUrl = '[http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)'; /* 替換為你的網址 */
    let finalUrl = myUrl + '?code=' + encodeURIComponent(code) + '&cover=' + encodeURIComponent(cover) + '&actress=' + encodeURIComponent(act) + '&url=' + encodeURIComponent(window.location.href);
    let a = document.createElement('a'); a.href = finalUrl; a.target = '_blank';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function() { if (!document.hidden) { window.location.href = finalUrl; } }, 800);
  } catch(e) {}
})();

### 3. ⚡ 抓取 123AV

javascript:(function(){
  try {
    let t = document.title || '';
    let imgUrl = '';
    let v = document.querySelector('video');
    if (v && v.getAttribute('poster')) { imgUrl = v.getAttribute('poster'); }
    if (!imgUrl) {
        let posterDiv = document.querySelector('[style*="background-image"]');
        if (posterDiv) {
            let match = posterDiv.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
            if (match) imgUrl = match[1];
        }
    }
    let code = t.split(/[-|_]?\s*123AV/i)[0].trim();
    let act = window.getSelection().toString().trim();
    let myUrl = '[http://127.0.0.1:5500/index.html](http://127.0.0.1:5500/index.html)'; /* 替換為你的網址 */
    let finalUrl = myUrl + '?code=' + encodeURIComponent(code) + '&cover=' + encodeURIComponent(imgUrl) + '&actress=' + encodeURIComponent(act) + '&url=' + encodeURIComponent(window.location.href);
    let a = document.createElement('a'); a.href = finalUrl; a.target = '_blank';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function() { if (!document.hidden) { window.location.href = finalUrl; } }, 800);
  } catch(e) {}
})();