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

5. **最高維度的跨裝置響應對策 (Responsive Override Strategies)**
   - 重新定義邊界：傳統的 Tailwind `lg:` (1024px) 會導致 iPad Pro 被判定為桌面佈局而潰敗。請在 `index.css` 的 `@theme` 植入 `--breakpoint-lg: 1025px;` 將其徹底封存於 `md:` 層疊中。
   - 放棄原生的 Object-Fit 服從度：針對背景串流 (Mux) 的視窗縮放若發生 Letterboxing (黑邊漏出)，直接拔升 `minResolution="2160p"` 獲取 4K 源碼，並透過幾何滿版放縮 (如 `scale-[1.31]`) 配合 X 軸精細 `translate`，暴力斬除預設框架帶來的渲染缺陷。
   - 保護巨型文字佈局：當雙欄佈局 (文案 vs 數據) 面臨平板物理空間擠壓時，應立即取消五五分帳的僵化作法 (`flex-1 / flex-1`)，轉換為不對稱比例 (如 `w-[40%] / w-[60%]`) 並調降外層天花板 `padding`，以全力護航數字排版的磅礡張力。
   - 手工防禦：針對 iPad Mini (768px)、Air (820px) 與 Pro (1024px) 這種高度密集的設備區間，傳統斷點會失效。請使用 Tailwind 的動態範圍指令 `min-[768px]:max-[819px]:` 來精確孤立特定設備，進行 20px 等級的手工位移或比例重調，確保「局部微整形」絕不溢出影響到其它裝置。

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
