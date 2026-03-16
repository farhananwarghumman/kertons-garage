# Deployment Guide for Kerton Garage Website

## Quick Start - Local Development

```bash
# Navigate to project
cd C:\kerton-garage

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Open in browser
# Visit: http://localhost:3000
```

## Pre-Deployment Checklist

### 1. Update Business Information

- [ ] WhatsApp number in all components
- [ ] Phone number in all components
- [ ] Email address
- [ ] Physical address
- [ ] Business hours
- [ ] Social media links (Facebook, Instagram)
- [ ] Google Maps embed URL
- [ ] Google Reviews link

### 2. Content Updates

- [ ] Replace placeholder text with real content
- [ ] Add real customer reviews
- [ ] Add business logo (`/public/logo.png`)
- [ ] Add photos of garage/team
- [ ] Update service descriptions
- [ ] Customize color scheme if needed

### 3. SEO Configuration

- [ ] Update meta description in `app/layout.tsx`
- [ ] Add business coordinates in schema markup
- [ ] Verify all meta tags
- [ ] Add Open Graph image

## Deployment Options

### Option 1: Vercel (Recommended - FREE & Easiest)

**Step 1: Prepare Git Repository**
```bash
cd C:\kerton-garage

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Kerton Garage website"

# Create GitHub repository at: https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/kerton-garage.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy to Vercel**
1. Go to https://vercel.com/signup
2. Sign up with GitHub account
3. Click "New Project"
4. Import `kerton-garage` repository
5. Leave all settings as default
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your site is live! 🎉

**Step 3: Add Custom Domain**
1. In Vercel dashboard, click on your project
2. Go to "Settings" → "Domains"
3. Enter your domain (e.g., `kertongarage.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5 minutes - 24 hours)

**DNS Records for Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### Option 2: Netlify (Also FREE)

**Step 1: Build the project**
```bash
cd C:\kerton-garage
npm run build
```

**Step 2: Deploy**
1. Go to https://netlify.com
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

**Custom Domain:**
- Settings → Domain management → Add custom domain

---

### Option 3: Cloudflare Pages (FREE + Fast)

**Step 1: Prepare**
```bash
cd C:\kerton-garage
npm run build
```

**Step 2: Deploy**
1. Go to https://pages.cloudflare.com
2. Connect GitHub repository
3. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
4. Deploy

**Benefits:**
- Fastest CDN globally
- Unlimited bandwidth
- DDoS protection

---

### Option 4: Traditional Hosting (Shared Hosting)

If you have existing web hosting (cPanel, etc.):

**Step 1: Build for production**
```bash
cd C:\kerton-garage
npm run build
npm run export  # Creates static HTML
```

**Step 2: Upload files**
- Upload contents of `out/` folder via FTP
- Point domain to this directory

**Limitation:** Some Next.js features won't work (API routes, ISR)

---

## Domain Setup

### Where to Buy Domain

**Recommended Registrars:**
1. **Cloudflare** - $10/year - Best price & features
2. **Namecheap** - $12/year - User-friendly
3. **Google Domains** - $12/year - Simple interface
4. **GoDaddy** - $15/year - Popular but pricier

### DNS Configuration

After buying domain, configure DNS:

**For Vercel:**
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

**For Netlify:**
```
A Record: @ → [IP from Netlify]
CNAME: www → [provided by Netlify]
```

**For Cloudflare:**
- Cloudflare handles DNS automatically

---

## SSL/HTTPS Certificate

All recommended platforms (Vercel, Netlify, Cloudflare) provide **FREE automatic SSL certificates**.

No manual setup needed! ✅

---

## Post-Deployment Tasks

### 1. Google Search Console
1. Go to https://search.google.com/search-console
2. Add your website
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Google Analytics (Optional)
1. Create account at https://analytics.google.com
2. Get tracking ID (G-XXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXX
   ```

### 3. Google Business Profile
1. Claim/verify at https://business.google.com
2. Add website URL
3. Add photos
4. Enable messaging if available

### 4. Social Media
- Share website on Facebook page
- Add link to Instagram bio
- Update all social profiles with new URL

---

## Environment Variables (Production)

If using environment variables:

**Vercel:**
- Settings → Environment Variables
- Add each variable from `.env.local`
- Redeploy

**Netlify:**
- Site settings → Environment
- Add variables
- Redeploy

---

## Testing Checklist After Deployment

- [ ] Homepage loads correctly
- [ ] All links work (services, about, contact)
- [ ] WhatsApp button opens with message
- [ ] Click-to-call opens phone dialer
- [ ] Google Maps shows correct location
- [ ] Social media links work
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check page load speed (should be <3 seconds)
- [ ] Verify SSL certificate (https:// works)

---

## Troubleshooting

### Site not loading
- Check DNS records (use https://dnschecker.org)
- DNS can take up to 48 hours to propagate
- Clear browser cache (Ctrl+F5)

### WhatsApp not opening
- Verify phone number format (no spaces, dashes)
- Test on actual mobile device, not desktop
- Check if WhatsApp is installed

### Images not showing
- Verify images are in `/public` folder
- Check file names match code references
- Clear cache and rebuild

---

## Costs Summary

### Minimum Cost Option (Year 1)
- Domain: $10-15/year (Cloudflare)
- Hosting: $0 (Vercel/Netlify/Cloudflare Pages)
- SSL: $0 (included)
- **Total: $10-15/year**

### With Email Hosting
- Domain: $10-15/year
- Hosting: $0
- Email: $6/month (Google Workspace)
- **Total: ~$80/year**

---

## Support

### Quick Fixes
```bash
# Reinstall dependencies
cd C:\kerton-garage
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build

# Check for errors
npm run build
```

### Get Help
- PixelFlow Technologies: support@pixelflowtechnologies.com
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

---

## Maintenance

### Regular Updates
```bash
# Update dependencies (monthly)
cd C:\kerton-garage
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Content Updates
- Edit components in `/components` folder
- Make changes
- Commit to Git
- Push to GitHub
- Vercel/Netlify auto-deploys! 🚀

---

**Ready to Launch? 🚀**

1. ✅ Customize content
2. ✅ Test locally
3. ✅ Deploy to Vercel
4. ✅ Add custom domain
5. ✅ Share with the world!

---

*Developed by PixelFlow Technologies*
