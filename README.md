# WayHong's Portfolio & Resume

> A modern, content-first personal portfolio and resume website built with Astro, featuring multilingual support and type-safe content management.

[🌐 Live Site](https://wayhong0928.github.io) | [繁體中文](./README.zh.md)

## ✨ Features

- 🌍 **Multilingual Support** - Seamless switching between Traditional Chinese and English
- 🎨 **Modern Design** - Clean, responsive design with Tailwind CSS v4
- � **Content-First** - Type-safe content management with Astro Content Collections
- 🚀 **High Performance** - Built with Astro for optimal loading speeds
- 🌙 **Dark Mode** - Automatic theme switching with system preference detection
- 📱 **Mobile-First** - Fully responsive design across all devices
- 🔍 **SEO Optimized** - Complete meta tags, sitemap, and structured data
- 🛠️ **Developer Experience** - TypeScript, ESLint, Prettier, and automated deployment

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.13
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1
- **Content**: [MDX](https://mdxjs.com) with Content Collections
- **Interactive Components**: [React](https://react.dev) v19
- **Language**: [TypeScript](https://typescriptlang.org)
- **Deployment**: GitHub Actions → GitHub Pages

## 📁 Project Structure

```text
resume/
├── .github/workflows/     # GitHub Actions for deployment
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── common/       # Layout components (Header, Footer, Sidebar)
│   │   ├── ui/          # Basic UI components (Button, Card)
│   │   ├── content/     # Content-specific components (ProjectCard, PostList)
│   │   └── islands/     # Interactive React components (ThemeSwitch, LangSwitcher)
│   ├── content/         # Content collections (posts, projects, activities)
│   │   ├── posts/       # Blog posts and notes
│   │   ├── projects/    # Project showcases
│   │   └── activities/  # Activities and experiences
│   ├── i18n/           # Multilingual files
│   ├── layouts/        # Page layouts
│   ├── lib/            # Utility functions (i18n, SEO, search)
│   ├── pages/          # Route pages
│   │   ├── en/         # English pages
│   │   └── zh/         # Chinese pages
│   └── styles/         # Global styles and design tokens
├── astro.config.mjs    # Astro configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/wayhong0928/wayhong0928.github.io.git
cd wayhong0928.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

| Command            | Description               |
| ------------------ | ------------------------- |
| `npm run dev`      | Start development server  |
| `npm run build`    | Build for production      |
| `npm run preview`  | Preview production build  |
| `npm run check`    | Run Astro type checking   |
| `npm run lint`     | Run ESLint code analysis  |
| `npm run lint:fix` | Run ESLint with auto-fix  |
| `npm run format`   | Format code with Prettier |
| `npm run ci:check` | Run all quality checks    |

## 📝 Content Management

### Adding a New Project

Create a new `.mdx` file in `src/content/projects/[lang]/`:

```yaml
---
title: 'Project Title'
period: { start: '2025-01', end: '2025-06' }
role: 'Frontend Developer'
techStack: ['React', 'TypeScript', 'Tailwind']
problem: 'Brief description of the problem solved'
actions:
  - 'Key action taken'
  - 'Another important action'
impact:
  - 'Measurable impact achieved'
links:
  demo: 'https://demo.example.com'
  repo: 'https://github.com/username/repo'
type: 'work' # work | side | academic
---
Detailed project description goes here...
```

### Adding a Blog Post

Create a new `.mdx` file in `src/content/posts/[lang]/`:

```yaml
---
title: 'Post Title'
date: 2025-01-01
summary: 'Brief summary of the post'
tags: ['tag1', 'tag2']
draft: false
---
Your post content here...
```

## 🌍 Multilingual Support

The site supports Traditional Chinese (default) and English:

- **Chinese pages**: `/` (root), `/zh/projects`, `/zh/notes`
- **English pages**: `/en/`, `/en/projects`, `/en/notes`

Translation strings are managed in `src/i18n/` files.

## 🎨 Design System

The project uses a custom design system with:

- **CSS Variables**: Defined in `src/styles/tokens.css`
- **Tailwind v4**: Modern utility-first CSS framework
- **Component Library**: Reusable UI components
- **Dark/Light Themes**: Automatic switching with manual override

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
# Deploy the ./dist folder to your hosting provider
```

## 📧 Contact

**WayHong** - [@wayhong0928](https://github.com/wayhong0928)

Project Link: [https://github.com/wayhong0928/wayhong0928.github.io](https://github.com/wayhong0928/wayhong0928.github.io)

---
