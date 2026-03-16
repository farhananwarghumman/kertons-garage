# Kerton Garage Website

A modern, mobile-responsive website for Kerton Garage with WhatsApp integration, Google Reviews showcase, and social media links.

## 🚀 Features

- ✅ **WhatsApp Integration** - Direct messaging with pre-filled text
- ✅ **Click-to-Call** - One-tap phone calling
- ✅ **Google Reviews Display** - Customer testimonials showcase
- ✅ **Social Media Links** - Facebook & Instagram integration
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Fast Loading** - Optimized with Next.js 15
- ✅ **SEO Optimized** - Schema markup and meta tags
- ✅ **Smooth Animations** - Framer Motion effects
- ✅ **Modern UI** - Tailwind CSS styling

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18.x or higher installed
- npm or yarn package manager
- A code editor (VS Code recommended)

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd C:\kerton-garage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Update the values with your actual information
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Visit http://localhost:3000
   - The site will auto-reload when you make changes

## 📝 Customization Guide

### 1. Business Information

Update these files with your actual business details:

#### **Phone Numbers & WhatsApp**
- Open `components/WhatsAppButton.tsx`
- Change line 6: `const phoneNumber = 'YOUR_WHATSAPP_NUMBER';`
- Open `components/Hero.tsx`
- Change line 7: `const phoneNumber = 'YOUR_PHONE_NUMBER';`
- Open `components/Header.tsx`, `components/Footer.tsx`, `components/Contact.tsx`
- Update all phone number instances

#### **Email & Address**
- Update in `components/Footer.tsx`
- Update in `components/Contact.tsx`

#### **Business Hours**
- Edit `components/Footer.tsx` (bottom section)
- Edit `components/Contact.tsx` (hours section)

### 2. Social Media Links

#### **Facebook & Instagram**
- Open `components/Footer.tsx`
- Lines 65-80: Update the `href` URLs with your actual social media pages

#### **Google Reviews**
- Get your Google Business Profile review link
- Update in `components/Footer.tsx` (line 83)
- Update in `components/Reviews.tsx` (line 120)

### 3. Google Maps

- Open `components/Contact.tsx`
- Line 127: Replace the `src` URL with your Google Maps embed URL

**How to get your Maps embed URL:**
1. Go to https://www.google.com/maps
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Paste it in the Contact component

### 4. Logo & Images

Currently using placeholder content. To add real images:

1. **Add your logo:**
   - Place logo file in `/public/logo.png`
   - Update `components/Header.tsx` to use image instead of icon

2. **Add garage photos:**
   - Place photos in `/public/images/`
   - Update `components/About.tsx` to use real images

3. **Add favicon:**
   - Replace `/public/favicon.ico` with your icon

### 5. Services

Edit the services list in `components/Services.tsx`:
- Lines 12-67: Modify the `services` array
- Add/remove services as needed
- Change descriptions to match your offerings

### 6. Reviews

Edit dummy reviews in `components/Reviews.tsx`:
- Lines 7-48: Update the `reviews` array
- Add real customer reviews
- Or connect to Google Reviews API for dynamic reviews

### 7. Colors & Branding

Edit `tailwind.config.ts` to change color scheme:
```typescript
colors: {
  primary: {
    // Change these hex values to your brand colors
    500: '#ef4444', // Main color
    600: '#dc2626', // Hover state
    // ... etc
  }
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended - FREE)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site is live

3. **Add custom domain:**
   - In Vercel dashboard, go to Project Settings
   - Click "Domains"
   - Add your domain (e.g., kertongarage.com)
   - Update DNS records as shown by Vercel

### Alternative Deployment Options

#### Netlify
```bash
npm run build
# Drag and drop the .next folder to Netlify
```

#### Cloudflare Pages
```bash
npm run build
# Connect GitHub repo to Cloudflare Pages
```

## 📱 Testing on Mobile

1. **On the same WiFi network:**
   - Find your computer's IP address
   - On mobile, visit: http://YOUR_IP:3000

2. **Test WhatsApp integration:**
   - Click the floating WhatsApp button
   - Verify it opens WhatsApp with pre-filled message

3. **Test click-to-call:**
   - Tap phone number buttons
   - Verify phone dialer opens

## 🔍 SEO Checklist

- ✅ Update meta tags in `app/layout.tsx`
- ✅ Add real business address coordinates
- ✅ Submit sitemap to Google Search Console
- ✅ Set up Google Analytics (optional)
- ✅ Verify Google Business Profile is linked
- ✅ Add Open Graph images

## 📊 Performance Optimization

The site is already optimized with:
- Next.js automatic code splitting
- Image optimization
- CSS purging with Tailwind
- Fast server-side rendering

**To further optimize:**
```bash
npm run build
npm start  # Test production build
```

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use different port
```

### WhatsApp button not working
- Check phone number format: no spaces, include country code
- Format: `1234567890` (US) or `447700900000` (UK)

## 📞 Support

For technical support with this website:
- Email: support@pixelflowtechnologies.com
- Website: https://pixelflowtechnologies.com

## 📄 License

This website is proprietary software developed for Kerton Garage by PixelFlow Technologies.

## 🎉 Next Steps

1. Customize all business information
2. Add real photos and logo
3. Test on multiple devices
4. Deploy to Vercel
5. Connect custom domain
6. Share on social media!

---

**Built with ❤️ by [PixelFlow Technologies](https://pixelflowtechnologies.com)**
