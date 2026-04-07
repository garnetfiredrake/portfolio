---
description: 零從頭打造 Aiden 級距的高端個人作品集架構 (Engineering + Aesthetics)
---

# Premium Portfolio Kickstart

這份工作流完美融合了「自動化工程架構」與「高端視覺心法」。當你需要重新開啟一個頂級作品集專案時，直接調用本工作流，AI 助理將嚴格遵循下列美學並為你執行基礎工程。

## 第一部分：核心美學與設計規範 (Design Skill)
在產出任何排版或元件前，AI 必須將以下規則奉為圭臬：

1. **頂規字體系統 (Typography)**
   - 全局採用 `clamp()` 來達成流體排版 (Fluid Typography)，禁止寫死 `px` 或單一 `vw`。
   - 內文與無襯線：Google Fonts `Barlow` (現代質感)。
   - 大標題與強調語：`Instrument Serif` (斜體) 與 `Playfair Display` (數據)。
2. **Glassmorphism 玻璃擬物風格**
   - 禁用死板的純色背景。所有透明元件需依賴 `bg-white/10 backdrop-blur-md border border-white/20` 來建立。
   - 陰影需帶有質感光澤，如：`shadow-[0_8px_30px_rgba(215,135,150,0.4)]`。
3. **頂級流暢互動 (Framer Motion)**
   - 進場動畫一律具備物理阻尼感，參數參考：`transition={{ type: "spring", stiffness: 220, damping: 15 }}`。
   - 所有 Hover 特效必須限制觸發範圍（針對字元或按鈕實體），且色階漸變需有 300ms~500ms 的緩動。
4. **極簡留白比例**
   - 模組與模組之間的 margin 必須具備宏大感 (例如 `py-24 md:py-40`)，文字與標籤若要產生視覺群聚心理，就必須縮至 `8px-16px`。

---

## 第二部分：自動化工程基準 (Engineering Workflow)
啟動本腳本後，請依序為使用者執行下列工程建置：

// turbo
1. 初始化現代 React 開發環境：
   `npm create vite@latest . -- --template react`

// turbo
2. 安裝 Tailwind CSS v4 核心與 Vite Plugin：
   `npm install dev tailwindcss@4 @tailwindcss/vite`

// turbo
3. 匯入頂配動態函式庫與串流引擎：
   `npm install framer-motion @mux/mux-player-react`

4. **配置安全打包策略 `vite.config.js`**：
   - 設定 `chunkSizeWarningLimit: 1500`。
   - 將龐大的第三方庫 (`react`, `framer-motion`, `@mux`) 使用 `manualChunks` 拆分為 vendor 獨立包，避免 Vercel 報錯與前端載入過慢。

5. **建置基礎 SEO 與社群標籤 `index.html`**：
   - 為首頁注入 Open Graph Meta Tags (`og:title`, `og:description`)。
   - 引入上述提到的三大 Google 字體庫。

6. **撰寫全局指令碼 `index.css`**：
   - 設定支援流體排版與深色模式。
   - 保留全域的背景控制能力（例如後續 Mux 串流所需覆蓋的變數 `--media-object-fit: cover`）。

7. 進入元件撰寫迴圈，由使用者指定第一個實作用的元件...
