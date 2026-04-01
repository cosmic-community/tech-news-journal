# Tech News Journal
![App Preview](https://imgix.cosmicjs.com/d7a8bd50-2db0-11f1-97ce-2958135cd52d-photo-1506794778202-cad84cf45f1d-1775037295780.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive editorial blog powered by [Cosmic](https://www.cosmicjs.com) that showcases posts, authors, and categories with a clean, magazine-inspired layout.

## Features
- Dynamic homepage with featured and latest posts
- Author and category hubs with filtered content
- Markdown-rendered articles with rich typography
- Responsive, accessible layout for all devices
- Built-in Cosmic relationships for connected content

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69cceb036bcd4c00f1a670cc&clone_repository=69ccfbc46bcd4c00f1a671f3)

## Original Prompt
> Based on the content model I created for "A blog with posts, authors, and categories", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A blog with posts, authors, and categories"

### Code Generation Prompt

> Based on the content model I created for "A blog with posts, authors, and categories", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK
- Marked (Markdown rendering)

## Getting Started

### Prerequisites
- Bun (recommended) or Node.js 20+

### Installation
```bash
// terminal.sh
bun install
```

```bash
// terminal.sh
bun run dev
```

## Cosmic SDK Examples
```ts
// lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})
```

## Cosmic CMS Integration
Content is pulled from your Cosmic bucket using server-side data fetching in Next.js. Posts are connected to authors and categories via object metafields, and depth=1 ensures related objects are available in a single query.

## Deployment Options
- **Vercel**: Ideal for Next.js deployments
- **Netlify**: Great for static builds
- **Environment Variables**: Configure `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting dashboard

<!-- README_END -->