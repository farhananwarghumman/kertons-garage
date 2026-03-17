# Complete Customization Guide

This guide will walk you through customizing every aspect of the Kerton Garage website with your actual business information.

## 📱 Quick Customization Priority List

1. ✅ Phone & WhatsApp Numbers (CRITICAL)
2. ✅ Business Address
3. ✅ Social Media Links
4. ✅ Google Maps Location
5. ✅ Business Hours
6. ⚙️ Logo & Images
7. ⚙️ Services & Descriptions
8. ⚙️ Reviews & Testimonials
9. ⚙️ Colors & Branding

---

## 1. Phone & WhatsApp Numbers (CRITICAL - Do First!)

### Files to Update:

#### A. `components/WhatsAppButton.tsx`
**Line 6:** Change the WhatsApp number
```typescript
const phoneNumber = '1234567890'; // ← Change this
```
**Format:** No spaces, dashes, or +. Include country code.
- US: `12345678900`
- UK: `447700900000`

#### B. `components/Hero.tsx`
**Line 7:** Change phone number
```typescript
const phoneNumber = '1234567890'; // ← Change this
```

#### C. `components/Header.tsx`
**Line 37:** Change phone link
```typescript
<a href="tel:+1234567890" // ← Change this
```
**Line 53:** Mobile menu phone link
```typescript
<a href="tel:+1234567890" // ← Change this
```

#### D. `components/Footer.tsx`
**Line 23:** Change phone link
```typescript
<a href="tel:+1234567890" className="text-secondary-200...">
  +1 (234) 567-890 // ← Change display format too
</a>
```

#### E. `components/Contact.tsx`
**Line 6:** Change WhatsApp number
```typescript
const phoneNumber = '1234567890'; // ← Change this
```
**Line 51:** Change phone link
```typescript
<a href="tel:+1234567890" className="text-secondary-700...">
  +1 (234) 567-890
</a>
```
**Line 107:** Call button link
```typescript
<a href="tel:+1234567890" // ← Change this
```

---

## 2. Business Address

### Files to Update:

#### A. `components/Footer.tsx` (Lines 17-21)
```typescript
<div className="flex items-start gap-3">
  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
  <div>
    <p className="text-secondary-200">123 Main Street</p> {/* ← Change */}
    <p className="text-secondary-200">Your City, State 12345</p> {/* ← Change */}
  </div>
</div>
```

#### B. `components/Contact.tsx` (Lines 69-74)
```typescript
<div>
  <h3 className="font-bold text-secondary-900 mb-1">Location</h3>
  <p className="text-secondary-700">
    123 Main Street<br /> {/* ← Change */}
    Your City, State 12345 {/* ← Change */}
  </p>
</div>
```

#### C. `app/layout.tsx` (Lines 50-56) - Schema Markup
```typescript
"address": {
  "@type": "PostalAddress",
  "streetAddress": "123 Main Street", // ← Change
  "addressLocality": "Your City", // ← Change
  "addressRegion": "State", // ← Change
  "postalCode": "12345", // ← Change
  "addressCountry": "US" // ← Change if needed
}
```

---

## 3. Email Address

### Files to Update:

#### A. `components/Footer.tsx` (Line 27)
```typescript
<a href="mailto:info@kertongarage.com" // ← Change email
```

#### B. `components/Contact.tsx` (Line 57)
```typescript
<a href="mailto:info@kertongarage.com" // ← Change email
```

---

## 4. Google Maps Embed

### How to Get Your Maps Embed URL:

1. Go to https://www.google.com/maps
2. Search for your business address
3. Click "Share" button
4. Click "Embed a map" tab
5. Copy the **iframe src URL** (the part inside `src="..."`)
6. Example: `https://www.google.com/maps/embed?pb=!1m18!1m12...`

### File to Update:

#### `components/Contact.tsx` (Line 127)
```typescript
<iframe
  src="PASTE_YOUR_GOOGLE_MAPS_EMBED_URL_HERE" // ← Paste here
  width="100%"
  height="100%"
  ...
```

**Also update coordinates in `app/layout.tsx` (Lines 58-62):**
```typescript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "40.7128", // ← Your latitude
  "longitude": "-74.0060" // ← Your longitude
}
```

**How to find coordinates:**
- Right-click on your location in Google Maps
- First number is latitude, second is longitude

---

## 5. Social Media Links

### Files to Update:

#### A. Facebook

**`components/Footer.tsx` (Line 66)**
```typescript
<a
  href="https://facebook.com/kertongarage" // ← Change to your page
```

#### B. Instagram

**`components/Footer.tsx` (Line 75)**
```typescript
<a
  href="https://instagram.com/kertongarage" // ← Change to your profile
```

#### C. Google Reviews Link

Get your Google Business Profile review link:
1. Go to https://business.google.com
2. Select your business
3. Click "Get more reviews"
4. Copy the short link

**Update in:**
- `components/Footer.tsx` (Line 83)
- `components/Reviews.tsx` (Line 120)

```typescript
href="https://g.page/r/YOUR_GOOGLE_BUSINESS_REVIEW_LINK" // ← Paste link
```

---

## 6. Business Hours

### Files to Update:

#### A. `components/Footer.tsx` (Lines 42-46)
```typescript
<p><span className="font-medium text-white">Mon - Fri:</span> 8:00 AM - 6:00 PM</p>
<p><span className="font-medium text-white">Saturday:</span> 9:00 AM - 3:00 PM</p>
<p><span className="font-medium text-white">Sunday:</span> Closed</p>
```

#### B. `components/Contact.tsx` (Lines 89-93)
```typescript
<p><span className="font-medium">Mon - Fri:</span> 8:00 AM - 6:00 PM</p>
<p><span className="font-medium">Saturday:</span> 9:00 AM - 3:00 PM</p>
<p><span className="font-medium">Sunday:</span> Closed</p>
```

#### C. `app/layout.tsx` (Line 64) - Schema Markup
```typescript
"openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00", // ← Update format
```

---

## 7. Logo & Brand Name

### Current Setup:
- Using a wrench icon placeholder
- Name: "Kerton Garage"

### To Add Real Logo:

1. **Prepare your logo:**
   - PNG format with transparent background
   - Recommended size: 200x200 pixels
   - Save as: `/public/logo.png`

2. **Update `components/Header.tsx` (Lines 29-34):**

**Replace this:**
```typescript
<Wrench className="w-8 h-8 text-primary-600" />
<span className="text-2xl font-bold text-secondary-900">
  Kerton Garage
</span>
```

**With this:**
```typescript
<Image
  src="/logo.png"
  alt="Kerton Garage Logo"
  width={40}
  height={40}
  className="object-contain"
/>
<span className="text-2xl font-bold text-secondary-900">
  Your Garage Name {/* ← Change business name */}
</span>
```

**Don't forget to import Image at the top:**
```typescript
import Image from 'next/image';
```

---

## 8. Services Customization

### File: `components/Services.tsx`

**Lines 12-67:** Edit the `services` array

```typescript
const services = [
  {
    icon: Wrench, // Icon (see below for options)
    title: 'Engine Repair', // ← Service name
    description: 'Complete engine diagnostics...', // ← Description
    features: ['Diagnostics', 'Tune-ups', 'Overhauls'] // ← Features list
  },
  // ... add more services
];
```

**Available Icons** (imported from lucide-react):
- `Wrench` - General repairs
- `Gauge` - Diagnostics/Transmission
- `Droplet` - Fluids/Oil
- `Battery` - Electrical/Battery
- `Wind` - AC/Climate
- `Car` - General automotive
- `CircleSlash` - Brakes
- `Zap` - Electrical
- `Settings` - Maintenance
- `Shield` - Protection/Warranty

**To add more icons:**
1. Go to https://lucide.dev/icons
2. Find icon you want
3. Import at top: `import { IconName } from 'lucide-react';`
4. Use in services array

---

## 9. Reviews & Testimonials

### File: `components/Reviews.tsx`

**Lines 7-48:** Edit the `reviews` array

```typescript
const reviews = [
  {
    name: 'John Smith', // ← Customer name
    rating: 5, // ← Star rating (1-5)
    text: 'Excellent service! They diagnosed...', // ← Review text
    date: '2 weeks ago' // ← Time posted
  },
  // ... add more reviews
];
```

**Tips:**
- Get real reviews from Google Business Profile
- Keep reviews authentic and specific
- Mix review lengths (some short, some detailed)
- Include recent dates for credibility

---

## 10. About Section

### File: `components/About.tsx`

**Lines 69-80:** Edit business story

```typescript
<div className="space-y-4 text-secondary-700 text-lg">
  <p>
    With over 15 years of experience... {/* ← Edit your story */}
  </p>
  <p>
    We take pride in providing... {/* ← Edit values */}
  </p>
  <p>
    From routine maintenance... {/* ← Edit approach */}
  </p>
</div>
```

**Lines 85-106:** Edit feature badges

```typescript
const features = [
  {
    icon: Award,
    title: 'Certified Technicians', // ← Edit title
    description: 'ASE-certified mechanics...' // ← Edit description
  },
  // ... customize all 4 features
];
```

---

## 11. Hero Section Stats

### File: `components/Hero.tsx`

**Lines 55-62:** Edit trust indicators

```typescript
{[
  { number: '30+', label: 'Years Experience' }, // ← Edit
  { number: '1000+', label: 'Happy Customers' }, // ← Edit
  { number: '5000+', label: 'Repairs Done' }, // ← Edit
  { number: '4.9/5', label: 'Google Rating' }, // ← Edit
].map((stat, index) => (
```

---

## 12. Colors & Branding

### File: `tailwind.config.ts`

**Lines 11-27:** Edit color palette

```typescript
colors: {
  primary: { // ← Your main brand color (currently red)
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // ← Main shade
    600: '#dc2626', // ← Hover/Dark shade
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
}
```

**How to change colors:**
1. Choose your brand color
2. Go to https://uicolors.app/create
3. Enter your color
4. Copy the palette
5. Paste into tailwind.config.ts

---

## 13. SEO & Meta Tags

### File: `app/layout.tsx`

**Lines 5-9:** Edit meta information

```typescript
export const metadata: Metadata = {
  title: "Kerton Garage | Expert Auto Repair Services", // ← Change
  description: "Professional auto repair and maintenance...", // ← Change
  keywords: ["auto repair", "car service", ...], // ← Add your keywords
  authors: [{ name: "Kerton Garage" }], // ← Change
```

---

## 14. Footer Credit

### File: `components/Footer.tsx`

**Lines 96-103:** Update attribution

```typescript
<p>&copy; {currentYear} Kerton Garage. All rights reserved.</p> {/* ← Change name */}
<p className="mt-2 text-sm">
  Website by{' '}
  <a
    href="https://pixelflowtechnologies.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-400 hover:text-primary-300 transition-colors"
  >
    PixelFlow Technologies
  </a>
</p>
```

---

## 15. WhatsApp Pre-filled Message

Customize what text appears when customers click WhatsApp button:

### Files to Update:

**`components/WhatsAppButton.tsx` (Line 7)**
```typescript
const message = encodeURIComponent('Hi Kerton Garage, I need help with my vehicle.');
// ← Change message
```

**`components/Hero.tsx` (Line 8)**
```typescript
const whatsappMessage = encodeURIComponent('Hi Kerton Garage, I need help with my vehicle.');
// ← Change message
```

**`components/Contact.tsx` (Line 7)**
```typescript
const whatsappMessage = encodeURIComponent('Hi Kerton Garage, I would like to schedule a service.');
// ← Change message
```

---

## Quick Test After Customization

```bash
# Start development server
cd C:\kerton-garage
npm run dev

# Open browser to http://localhost:3000

# Test checklist:
# ✅ Click WhatsApp button - opens with correct number
# ✅ Click phone numbers - opens dialer with correct number
# ✅ Check all text is updated
# ✅ Verify links work (social media, maps)
# ✅ Test on mobile (WhatsApp, click-to-call)
```

---

## Need Help?

**Common Issues:**

1. **WhatsApp opens but number is wrong**
   - Double-check number format (no spaces, +, or dashes)
   - Include country code

2. **Map not showing**
   - Verify iframe src URL is complete
   - Check if wrapped in quotes correctly

3. **Changes not showing**
   - Stop dev server (Ctrl+C)
   - Restart: `npm run dev`
   - Hard refresh browser (Ctrl+Shift+R)

4. **Broken layout after editing**
   - Check for syntax errors in terminal
   - Ensure all quotes/brackets match
   - Undo last change and try again

---

**Pro Tip:** Make changes one section at a time and test after each change!

---

*Need more help? Contact PixelFlow Technologies support.*
