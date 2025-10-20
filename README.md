# Taiwo Mojisola Ogunpaimo - Professional Portfolio

A world-class, visually stunning portfolio website for an award-winning Marketing & Brand Communications Strategist.

## Overview

This portfolio showcases 9+ years of marketing excellence across telecom and FMCG sectors, featuring:

- Interactive hero section with video introduction placeholder
- Comprehensive about section with personal brand story
- Detailed expertise showcase with 8 core competency areas
- 4 major case studies with full campaign breakdowns
- Impact metrics and industry recognition
- Professional contact form

## Design Philosophy

**Visual Concept**: "Bold Clarity" - A sophisticated fusion of corporate elegance and dynamic energy

**Color Palette**:
- Deep Teal (#0A4D5C) - Trust, innovation, telecom heritage
- Vibrant Coral (#FF6B6B) - Energy, consumer engagement
- Gold (#D4AF37) - Excellence, awards, premium positioning
- Clean neutrals for readability and sophistication

**Key Features**:
- Smooth parallax scrolling effects
- Micro-interactions and hover animations
- Responsive design for all devices
- Progress bar tracking scroll position
- Staggered content animations
- Professional color scheme aligned with marketing industry

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and optimized builds
- Tailwind CSS for styling
- Lucide React for icons
- Custom animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts to complete deployment

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Static Hosting

Simply upload the contents of the `dist` folder (after running `npm run build`) to any static hosting service:
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- DigitalOcean App Platform

## Customization

### Adding Real Video

Replace the video placeholder in `src/components/Hero.tsx`:

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/path-to-video.mp4" type="video/mp4" />
</video>
```

### Enabling CV Download

1. Add CV file to `public` folder as `cv-taiwo-ogunpaimo.pdf`
2. The download button in navigation will automatically work

### Contact Form Integration

To make the contact form functional, integrate with:
- Formspree
- EmailJS
- Custom backend API
- Supabase Edge Functions (already available in this project)

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Fixed navbar with CV download
│   ├── Hero.tsx           # Hero section with video placeholder
│   ├── About.tsx          # Personal story and values
│   ├── Expertise.tsx      # Skills and competencies
│   ├── CaseStudies.tsx    # Portfolio projects
│   ├── Impact.tsx         # Metrics and awards
│   ├── Contact.tsx        # Contact form and info
│   └── ScrollProgress.tsx # Progress indicator
├── App.tsx                # Main app component
├── index.css             # Global styles and animations
└── main.tsx              # App entry point
```

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Fade-in, slide-up, parallax, and hover effects
- **Interactive Elements**: Tabbed case studies, hover cards, animated progress bars
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **SEO Ready**: Semantic HTML and meta tags
- **Accessible**: WCAG compliant with keyboard navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Taiwo Mojisola Ogunpaimo. All rights reserved.

## Contact

For inquiries about this portfolio:
- Email: ogunpaimotaiwo@gmail.com
- Phone: +234-703-865-3060
- LinkedIn: [taiwo-mojisola-ogunpaimo](https://www.linkedin.com/in/taiwo-mojisola-ogunpaimo)
