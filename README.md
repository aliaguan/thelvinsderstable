# The LV Insiders Table - Website Deployment Guide

## 📦 Package Contents

This archive contains the complete website for The LV Insiders Table:

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - Interactive features and animations

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up for free**: <a href="https://www.netlify.com" target="_blank">https://www.netlify.com</a>
2. **Deploy**: Drag and drop the extracted files directly into Netlify's deployment zone
3. **Custom Domain** (optional):
   - Purchase a domain from Namecheap, GoDaddy, or Google Domains
   - Add custom domain in Netlify settings
   - Update DNS records as instructed by Netlify
4. **Done!** Your site is live with free HTTPS and global CDN

**Pros**: Free, automatic HTTPS, global CDN, easy domain setup

### Option 2: Vercel

1. **Sign up**: <a href="https://vercel.com" target="_blank">https://vercel.com</a>
2. **Import Project**: Drag the extracted folder or connect via GitHub
3. **Deploy**: Automatic deployment with each update
4. **Custom Domain**: Similar to Netlify, add in project settings

**Pros**: Free, excellent performance, developer-friendly

### Option 3: GitHub Pages

1. **Create GitHub account**: <a href="https://github.com" target="_blank">https://github.com</a>
2. **Create repository**: Name it `lvinsiderstable.github.io`
3. **Upload files**: Upload all three files to the repository
4. **Enable Pages**: Go to Settings → Pages → Select main branch
5. **Access**: Your site will be at `https://yourusername.github.io/lvinsiderstable`
6. **Custom Domain**: Add a CNAME file with your domain name

**Pros**: Free, version control included, good for open source

### Option 4: Traditional Web Hosting

If you purchase shared hosting (Bluehost, HostGator, SiteGround):

1. **Connect via FTP** or use cPanel File Manager
2. **Upload files** to `public_html` or `www` directory
3. **Access** via your domain (if configured) or hosting provider's temporary URL

## 🌐 Custom Domain Setup

After deploying to any platform above:

1. **Purchase a domain** ($10-15/year):
   - Namecheap: <a href="https://www.namecheap.com" target="_blank">https://www.namecheap.com</a>
   - Google Domains: <a href="https://domains.google" target="_blank">https://domains.google</a>
   - Cloudflare: <a href="https://www.cloudflare.com/products/registrar/" target="_blank">https://www.cloudflare.com/products/registrar/</a>

2. **Suggested domain names**:
   - lvinsiderstable.com
   - thelvinsiderstable.com
   - insiderstableLV.com
   - lvinsiders.com

3. **Configure DNS** (in your domain registrar):
   ```
   Type    Name    Value
   A       @       [Your hosting IP or as instructed by hosting provider]
   CNAME   www     [Your deployment URL]
   ```

4. **Wait for propagation** (usually 5 minutes to 24 hours)

## 📱 Website Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations and interactions
✅ Instagram integration (@lvinsiderstable)
✅ Modern dark theme with gold accents
✅ Optimized performance
✅ Cross-browser compatible

## 🎨 Customization Tips

### Update Content
- Open `index.html` in any text editor
- Search for text you want to change
- Save and re-upload

### Add Real Photos
- Replace Gallery section placeholders with actual images
- Update Instagram feed integration if needed

### Change Colors
- Open `styles.css`
- Modify CSS variables at the top:
  ```css
  --primary-color: #1a1a1a;
  --accent-color: #d4af37;
  ```

### Update Contact Info
- Edit the Contact section in `index.html`
- Add email, phone number, or contact form

## 🔧 Technical Requirements

- **Hosting**: Any static file hosting (no server-side code required)
- **HTTPS**: Recommended (free with Netlify/Vercel)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📞 Support

For questions about The LV Insiders Table community:
- Instagram: <a href="https://www.instagram.com/lvinsiderstable/" target="_blank">@lvinsiderstable</a>

## 📄 License

© 2025 The LV Insiders Table. All rights reserved.

---

**Need help?** The easiest path is:
1. Extract this archive
2. Sign up for Netlify
3. Drag the folder into Netlify
4. Your site is live in 30 seconds!
