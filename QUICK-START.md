# 🚀 Quick Start Guide

Get your Kerton Garage website running in 5 minutes!

## Step 1: Start the Development Server

Open Command Prompt or PowerShell:

```bash
cd C:\kerton-garage
npm run dev
```

**You should see:**
```
  ▲ Next.js 15.1.6
  - Local:        http://localhost:3000
  - Ready in 2.5s
```

## Step 2: Open in Browser

Click this link or type in browser:
```
http://localhost:3000
```

You should see the Kerton Garage website! 🎉

---

## What You'll See

### Home Page Features:
- ✅ Header with navigation
- ✅ Hero section with big "Expert Auto Repair" heading
- ✅ WhatsApp and Call Now buttons
- ✅ Services grid (8 services)
- ✅ About section
- ✅ Customer reviews
- ✅ Contact section with map
- ✅ Footer with social links
- ✅ Floating WhatsApp button (bottom right)

---

## Test the Key Features

### 1. Navigation
- Click links in header: Home, Services, About, Reviews, Contact
- Page should smoothly scroll to each section

### 2. WhatsApp Button
- Click the green floating button (bottom right)
- Should open WhatsApp with message: "Hi Kerton Garage, I need help with my vehicle."

**Note:** On desktop, opens WhatsApp Web. On mobile, opens WhatsApp app.

### 3. Phone Buttons
- Click "Call Now" buttons
- Should trigger phone dialer (on mobile)
- On desktop, may show "Open with..." dialog

### 4. Responsive Design
- Resize browser window
- Menu should become hamburger (☰) on mobile size
- All content should stack nicely

---

## Next Steps: Customize Your Website

### Priority 1: Update Contact Information

**Must change these immediately:**

1. **WhatsApp Number**
   - File: `components/WhatsAppButton.tsx` - Line 6
   - File: `components/Hero.tsx` - Line 7
   - File: `components/Contact.tsx` - Line 6

2. **Phone Number**
   - Search all files for `+1234567890` and replace
   - Files: Header, Footer, Contact components

3. **Business Address**
   - File: `components/Footer.tsx`
   - File: `components/Contact.tsx`

4. **Email**
   - File: `components/Footer.tsx`
   - File: `components/Contact.tsx`

**📖 Full customization guide: See `CUSTOMIZATION.md`**

---

## Deploy Your Website (When Ready)

### Option 1: Vercel (Recommended - FREE)

1. **Create GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Install Git** (if needed)
   - Download from https://git-scm.com/downloads

3. **Push code to GitHub:**
   ```bash
   cd C:\kerton-garage
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

4. **Deploy to Vercel:**
   - Go to https://vercel.com/signup
   - Sign up with GitHub
   - Click "New Project"
   - Import `kerton-garage` repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - **Your site is LIVE!** 🎉

**📖 Full deployment guide: See `DEPLOYMENT.md`**

---

## Folder Structure

```
C:\kerton-garage\
├── app/                    # Main application
│   ├── layout.tsx         # Page layout & SEO
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Top navigation
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services grid
│   ├── About.tsx          # About section
│   ├── Reviews.tsx        # Reviews section
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── WhatsAppButton.tsx # Floating button
├── public/               # Static files (images, favicon)
├── README.md             # Project overview
├── CUSTOMIZATION.md      # How to customize
├── DEPLOYMENT.md         # How to deploy
└── package.json          # Dependencies
```

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint

# Install new package
npm install package-name
```

---

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
# Then open: http://localhost:3001
```

### Changes not showing?
1. Stop server (Ctrl + C)
2. Restart: `npm run dev`
3. Hard refresh browser: Ctrl + Shift + R

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Still having issues?
- Check for syntax errors in terminal output
- Make sure you saved the file after editing
- Restart dev server

---

## Testing Checklist

Before deploying, test these:

- [ ] All navigation links work
- [ ] WhatsApp button works (test on mobile)
- [ ] Phone buttons work (test on mobile)
- [ ] All social media links work
- [ ] Google Maps shows correctly
- [ ] Site looks good on mobile
- [ ] Site looks good on desktop
- [ ] All text is updated (no "Kerton Garage" dummy text)

---

## Support & Help

### Documentation
- 📖 **README.md** - Project overview
- 🎨 **CUSTOMIZATION.md** - How to customize everything
- 🚀 **DEPLOYMENT.md** - How to deploy & go live

### External Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

### Get Help
- PixelFlow Technologies: support@pixelflowtechnologies.com

---

## What's Included?

### Features
✅ Fully responsive (mobile, tablet, desktop)
✅ WhatsApp direct messaging
✅ Click-to-call buttons
✅ Google Maps integration
✅ Social media links
✅ Customer reviews showcase
✅ Services grid with icons
✅ Smooth scroll navigation
✅ Animated components
✅ SEO optimized
✅ Fast loading (<3 seconds)
✅ Modern design
✅ Easy to customize

### Technologies
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

## Ready to Launch? 🚀

1. ✅ Customize business info (see CUSTOMIZATION.md)
2. ✅ Test locally (http://localhost:3000)
3. ✅ Deploy to Vercel (see DEPLOYMENT.md)
4. ✅ Add custom domain
5. ✅ Share with customers!

---

**Questions?** Read the full guides:
- 📖 CUSTOMIZATION.md
- 🚀 DEPLOYMENT.md
- 📘 README.md

**Built by PixelFlow Technologies** 🎨
