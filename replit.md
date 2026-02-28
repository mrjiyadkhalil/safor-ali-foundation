# Safar Ali Foundation Website

## Overview
A front-end-only NGO website for the Safar Ali Foundation built with Next.js 14 (App Router) + TailwindCSS.

## Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Runtime**: Node.js 20
- **Port**: 5000

## Project Structure
```
├── content/           # Local JSON data files (no database)
│   ├── site.json      # Foundation info, highlights, contact, socials
│   ├── committee.json # Executive committee members
│   ├── activity.json  # Single activity details
│   ├── gallery.json   # Gallery image references
│   ├── announcements.json # Announcements list
│   └── donation.json  # Donation methods and instructions
├── public/images/     # Static images
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About + committee
│   │   ├── activity/page.tsx  # Single activity
│   │   ├── gallery/page.tsx   # Gallery with lightbox
│   │   ├── donate/page.tsx    # Donation info
│   │   ├── announcements/page.tsx # Announcements list
│   │   └── contact/page.tsx   # Contact form (demo)
│   └── components/    # Shared UI components
│       ├── Navbar.tsx
│       └── Footer.tsx
```

## Pages
1. `/` - Home (hero, highlights, previews)
2. `/about` - Foundation overview + executive committee
3. `/activity` - Education Support Program details
4. `/gallery` - Image gallery with lightbox modal
5. `/donate` - Payment methods (bKash, Nagad, Bank)
6. `/announcements` - Sorted announcement list
7. `/contact` - Contact info + demo form

## Key Features
- Mobile-first responsive design
- Hamburger menu on mobile
- Gallery lightbox with keyboard navigation
- Contact form with validation (demo only, no backend)
- SEO metadata on all pages
- Content stored in JSON files for easy updates

## Running
```bash
npm run dev    # Development server on port 5000
npm run build  # Production build
npm start      # Production server on port 5000
```
