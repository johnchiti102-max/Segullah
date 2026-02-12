# Quick Deployment Guide

## Before You Deploy - IMPORTANT Setup Steps

### 1. Add Your Video File
- Copy your 45-second video file to: `assets/videos/segulavid.mp4`
- If your video has a different name, update the path in `index.html` (line 282)
- Recommended: Keep video file size under 10MB for faster loading

### 2. Add Your Logo Image
- Replace `assets/images/logo-placeholder.png` with your actual logo
- Recommended size: 300x200px
- Use PNG format for transparency or JPG for smaller file size
- If using a different filename, update `index.html` (line 69)

### 3. Verify All Images Are Present
Make sure these files exist in `assets/images/`:
- ✅ `segu.jpg` - Company logo (for nav and footer)
- ✅ `back.jpg` - Hero background image
- ✅ `branding1.PNG` - Branding solutions showcase
- ✅ `graphic.PNG` - Graphic design showcase
- ⚠️ `logo-placeholder.png` - **REPLACE THIS WITH YOUR LOGO**

## Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `segullah-website` (or any name you prefer)
4. Make it **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Upload Files
You have two options:

#### Option A: Upload via Web (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files and folders from the `static-site/` directory
3. Wait for upload to complete
4. Click "Commit changes"

#### Option B: Use Git Command Line
```bash
# Navigate to static-site folder
cd static-site

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/segullah-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website
Your site will be live at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

For example: `https://johndoe.github.io/segullah-website/`

## Activate Contact Form

After deploying:

1. Visit your live website
2. Go to the Contact page
3. Fill out and submit the form
4. **Check the email: info@segullah.co.za**
5. You'll receive a confirmation email from FormSubmit
6. **Click the confirmation link** in that email
7. The contact form is now active and will send all submissions to that email!

## Testing Before Deploy

Test locally first:

```bash
# Option 1: Python
cd static-site
python -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js
npm install -g http-server
http-server
# Visit: http://localhost:8080
```

## Custom Domain Setup (Optional)

### If you want to use www.segullah.co.za:

1. Create a file named `CNAME` in repository root:
   ```
   www.segullah.co.za
   ```

2. In your domain registrar (where you bought the domain):
   - Add a CNAME record:
     - Name/Host: `www`
     - Value/Points to: `YOUR-USERNAME.github.io`
     - TTL: 3600 (or default)

3. In GitHub repository settings → Pages:
   - Enter your custom domain: `www.segullah.co.za`
   - Wait for DNS check to pass
   - Enable "Enforce HTTPS"

Allow 24-48 hours for DNS propagation.

## Need Help?

Common issues:

**Images not showing:**
- Check that paths use `./` (e.g., `./assets/images/segu.jpg`)
- Verify all files were uploaded to GitHub
- Check browser console for 404 errors

**Video not playing:**
- Ensure file is named exactly: `segulavid.mp4`
- Try a different browser
- Check video file size (should be under 20MB)

**Form not sending emails:**
- Did you click the confirmation link?
- Check spam folder
- Try submitting again

**404 Page Not Found:**
- Use hash URLs: `#/about` not `/about`
- Check that index.html is in repository root

## Updates and Changes

To update the website:
1. Edit files locally
2. Upload to GitHub (or use git push)
3. Changes appear automatically (may take 1-2 minutes)

---

**Support:** info@segullah.co.za
