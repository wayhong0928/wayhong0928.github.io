# WayHong 個人作品集與履歷

> 使用 Astro 建構的現代化、內容優先個人作品集與履歷網站，具備多語系支援、型別安全的內容管理。

[🌐 連結](https://wayhong0928.github.io) | [English Documentation](./README.md)

## ✨ 特色功能

- 🌍 **多語系支援** - 繁體中文與英文無縫切換
- 🎨 **現代化設計** - 使用 Tailwind CSS v4 的簡潔響應式設計
- 📝 **內容優先** - 使用 Astro Content Collections 進行型別安全的內容管理
- 🚀 **高效能** - 使用 Astro 建構，載入速度最佳化
- 🌙 **深色模式** - 自動主題切換，支援系統偏好設定
- 📱 **行動優先** - 所有裝置完全響應式設計
- 🔍 **SEO 最佳化** - 完整的 meta 標籤、網站地圖與結構化資料
- 🛠️ **開發者體驗** - TypeScript、ESLint、Prettier 與自動化部署

## 🏗️ 技術

- **框架**: [Astro](https://astro.build) v5.13
- **樣式**: [Tailwind CSS](https://tailwindcss.com) v4.1
- **內容**: [MDX](https://mdxjs.com) 搭配 Content Collections
- **互動元件**: [React](https://react.dev) v19
- **程式語言**: [TypeScript](https://typescriptlang.org)
- **部署**: GitHub Actions → GitHub Pages

## 📁 專案結構

```text
resume/
├── .github/workflows/     # GitHub Actions 部署設定
├── public/                # 靜態資源
├── src/
│   ├── components/       # 可重用元件
│   │   ├── common/       # 版面元件 (Header, Footer, Sidebar)
│   │   ├── ui/           # 基礎 UI 元件 (Button, Card)
│   │   ├── content/      # 內容專用元件 (ProjectCard, PostList)
│   │   └── islands/      # 互動式 React 元件 (ThemeSwitch, LangSwitcher)
│   ├── content/          # 內容集合 (posts, projects, activities)
│   │   ├── posts/        # 部落格文章與筆記
│   │   ├── projects/     # 專案展示
│   │   └── activities/   # 活動與經歷
│   ├── i18n/             # 多語系檔案
│   ├── layouts/          # 頁面版型
│   ├── lib/              # 工具函式 (i18n, SEO, search)
│   ├── pages/            # 路由頁面
│   │   ├── en/           # 英文頁面
│   │   └── zh/           # 中文頁面
│   └── styles/           # 全域樣式與設計變數
├── astro.config.mjs      # Astro 設定
├── tailwind.config.ts    # Tailwind 設定
└── tsconfig.json         # TypeScript 設定
```

## 🚀 快速開始

### 環境需求

- Node 20+
- npm 或 pnpm

### 安裝步驟

```bash
# 複製專案
git clone https://github.com/wayhong0928/wayhong0928.github.io.git
cd wayhong0928.github.io

# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev
```

網站將在 `http://localhost:4321` 可用

### 可用指令

| 指令              | 說明                |
| ----------------- | ------------------- |
| `npm run dev`     | 啟動開發伺服器      |
| `npm run build`   | 建構正式版本        |
| `npm run preview` | 預覽正式版本        |
| `npm run check`   | 執行 Astro 型別檢查 |

## 📝 內容管理

### 新增專案

在 `src/content/projects/[lang]/` 建立新的 `.mdx` 檔案：

```yaml
---
title: "專案標題"
period: { start: "2025-01", end: "2025-06" }
role: "前端工程師"
techStack: ["React", "TypeScript", "Tailwind"]
problem: "解決問題的簡短描述"
actions:
  - "關鍵行動一"
  - "關鍵行動二"
impact:
  - "可量化的影響"
links:
  demo: "https://demo.example.com"
  repo: "https://github.com/username/repo"
type: "work" # work | side | academic
---
詳細專案描述...
```

### 新增文章

在 `src/content/posts/[lang]/` 建立新的 `.mdx` 檔案：

```yaml
---
title: "文章標題"
date: 2025-01-01
summary: "文章簡短摘要"
tags: ["標籤1", "標籤2"]
draft: false
---
文章內容...
```

## 🌍 多語系

網站支援繁體中文（預設）與英文：

- **中文頁面**: `/`（根目錄）、`/zh/projects`、`/zh/notes`
- **英文頁面**: `/en/`、`/en/projects`、`/en/notes`

翻譯字串在 `src/i18n/` 檔案中管理。

## 🎨 設計系統

專案使用自訂設計系統，包含：

- **CSS 變數**: 定義在 `src/styles/tokens.css`
- **Tailwind v4**: 現代化公用程式優先 CSS 框架
- **元件庫**: 可重用的 UI 元件
- **深色/淺色主題**: 自動切換與手動覆蓋

## 🚀 部署

當您推送到 `main` 分支時，網站會透過 GitHub Actions 自動部署到 GitHub Pages。

### 手動部署

```bash
npm run build
# 將 ./dist 資料夾部署到您的託管服務商
```

## 📧 聯絡

**WayHong** - [@wayhong0928](https://github.com/wayhong0928)

專案連結：[https://github.com/wayhong0928/wayhong0928.github.io](https://github.com/wayhong0928/wayhong0928.github.io)

---
