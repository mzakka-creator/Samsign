# SAM SIGN Website Structure

## Overview
Professional website for SAM SIGN built with Next.js 16, React 19, and Tailwind CSS 4.

## Project Structure

```
sam.sa/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Fixed navigation with scroll effects
│   │   ├── Hero.tsx           # Full-viewport hero section
│   │   ├── WorkPhilosophy.tsx # Core principles section
│   │   ├── Partners.tsx        # Partner/client logos grid
│   │   ├── VisionValues.tsx   # Vision & values section
│   │   └── Footer.tsx         # Footer with contact info
│   ├── layout.tsx             # Root layout with fonts & metadata
│   ├── page.tsx               # Main page integrating all sections
│   └── globals.css            # Global styles & brand colors
├── BRAND_IDENTITY.md          # Complete brand guide
├── BRAND_QUICK_REFERENCE.md   # Quick reference guide
└── brand-colors.css           # Standalone color variables
```

## Components Overview

### 1. Navigation
- Fixed top navigation
- Transparent on hero, white with backdrop blur when scrolled
- Smooth scroll to sections
- Responsive design

### 2. Hero Section
- Full viewport height
- Bold typography with brand tagline
- Animated fade-in effects
- CTA button with hover effects
- Scroll indicator

### 3. Work Philosophy
- Three core principles displayed in grid
- Icon-based visual representation
- Hover animations and transitions
- Intersection Observer animations

### 4. Partners Section
- Logo grid (2 columns mobile, 4 columns desktop)
- Grayscale to color hover effect
- Placeholder ready for actual client logos
- Smooth animations

### 5. Vision & Values
- Two-column layout (Vision | Values)
- Four core values with icons
- Hover effects on value items
- Intersection Observer animations

### 6. Footer
- Contact information
- Quick navigation links
- Social media icons
- Copyright information

## Brand Colors Used

- **Yellow/Gold**: `#F4C430` - Primary brand color
- **Black**: `#000000` - Text and strong elements
- **White**: `#FFFFFF` - Backgrounds
- **Light Grey**: `#F5F5F5` - Section backgrounds
- **Medium Grey**: `#808080` - Secondary text
- **Dark Grey**: `#333333` - Subtle accents

## Typography

- **Headings**: Montserrat (Bold, 700-800 weight)
- **Body**: Inter (Regular, 400-600 weight)
- Font variables configured in `globals.css`

## Features

✅ Responsive design (mobile-first)
✅ Smooth scroll navigation
✅ Intersection Observer animations
✅ Hover effects and micro-interactions
✅ Brand-aligned color scheme
✅ Professional typography hierarchy
✅ Optimized performance
✅ SEO-friendly metadata

## Next Steps

1. Replace placeholder partner logos with actual client logos
2. Add actual contact information (phone, email, address)
3. Add real social media links
4. Add professional photography/images
5. Consider adding a portfolio/gallery section
6. Add contact form functionality
7. Optimize images and assets
8. Add analytics tracking

## Running the Project

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Production server
```

## Design Principles Applied

- ✅ Bold but not loud
- ✅ Simple but not basic
- ✅ Professional but not corporate
- ✅ Modern but not trendy
- ✅ Generous whitespace
- ✅ Premium typography
- ✅ High-quality imagery ready
- ✅ Micro-interactions
- ✅ Performance optimization

---

*Website built following SAM SIGN brand identity guidelines*

