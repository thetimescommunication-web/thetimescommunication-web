# Video Production Website - React + Vite + Tailwind CSS

A modern, responsive website for a video production company built with React, Vite, and Tailwind CSS. This project closely matches the layout and functionality of professional video production websites.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components using hooks
- **Fast Development**: Powered by Vite for lightning-fast development and builds
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **React Router**: Client-side routing for seamless navigation
- **Professional UI/UX**: Modern design with smooth animations and transitions
- **Accessible**: Semantic HTML structure with ARIA labels
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Footer.jsx       # Site footer with contact info
│   ├── HeroSection.jsx  # Homepage hero with video background
│   ├── AboutSection.jsx # About us section
│   ├── ServicesSection.jsx # Services showcase
│   ├── PortfolioSection.jsx # Portfolio grid
│   ├── TestimonialsSection.jsx # Client testimonials
│   └── ScrollToTop.jsx  # Scroll to top utility
├── pages/               # Page components
│   ├── HomePage.jsx     # Main landing page
│   ├── AboutPage.jsx    # About us page
│   ├── ServicesPage.jsx # Services detail page
│   ├── PortfolioPage.jsx # Portfolio showcase
│   └── ContactPage.jsx  # Contact form and info
├── App.jsx             # Main app component with routing
├── main.jsx           # React app entry point
└── index.css          # Global styles and Tailwind imports
```

## 🛠️ Installation & Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Customization Guide

### Replace Placeholder Content

#### Images and Videos

- Replace `/api/placeholder/` URLs with your actual images
- Add your hero video in `src/components/HeroSection.jsx`
- Update portfolio thumbnails and service images

#### Content Updates

- **About Section**: Update company story
- **Services**: Modify services list and pricing
- **Portfolio**: Replace portfolio items with your work
- **Contact Info**: Update addresses, phone, email

### Styling

- Update colors in `tailwind.config.js`
- Modify fonts and animations in `src/index.css`
- Customize component styles

## 📱 Responsive Design

Built mobile-first with Tailwind CSS breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Features Included

- Sticky navigation with scroll effects
- Fullscreen hero video with controls
- Interactive service cards
- Filterable portfolio grid
- Testimonial carousel
- Contact form with validation
- Smooth animations and transitions
- Social media integration

## 🚀 Next Steps

1. Replace all placeholder content
2. Add your images and videos
3. Connect contact form to backend
4. Add analytics tracking
5. Deploy to hosting platform

---

This template provides a complete foundation for a professional video production website.
