# Segullah Projects & Designs - Static Website

This is a pure static website for Segullah Projects & Designs, ready for deployment on GitHub Pages without any build process.

## 📁 Folder Structure

```
static-site/
├── index.html          # Main HTML file with all page templates
├── css/
│   └── styles.css      # All compiled CSS styles
├── js/
│   ├── router.js       # Client-side routing
│   └── main.js         # Interactive functionality
└── assets/
    ├── images/         # All image files
    │   ├── segu.jpg
    │   ├── back.jpg
    │   ├── branding1.PNG
    │   ├── graphic.PNG
    │   └── logo-placeholder.png (ADD YOUR LOGO HERE)
    └── videos/         # Video files
        └── segulavid.mp4 (ADD YOUR VIDEO HERE)
```

## 🚀 How to Deploy to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `segullah-website`)
2. Upload all files from the `static-site/` folder to the repository root
3. Go to repository Settings → Pages
4. Under "Source", select the branch (usually `main`) and folder (root `/`)
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/segullah-website/`

### Method 2: Using Git Command Line

```bash
# Navigate to the static-site folder
cd static-site

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/segullah-website.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 📝 Important Setup Steps

### 1. Add Your Logo Image

Replace `./assets/images/logo-placeholder.png` with your actual logo file:
- Recommended size: 300x200px or similar aspect ratio
- Format: PNG (for transparency) or JPG
- If you use a different filename, update the path in `index.html` (search for "logo-placeholder.png")

### 2. Add Your Video

Add your video file to `./assets/videos/segulavid.mp4`:
- Duration: 45 seconds (as specified)
- Format: MP4 (best browser compatibility)
- Recommended: Compress the video for web (keep file size under 10MB if possible)
- The video will auto-play, loop continuously, and be muted by default

If your video has a different filename, update the path in `index.html` (search for "segulavid.mp4")

### 3. Add All Images

Make sure these image files are in `./assets/images/`:
- `segu.jpg` - Logo image
- `back.jpg` - Hero background image
- `branding1.PNG` - Branding solutions showcase
- `graphic.PNG` - Graphic design showcase

## ✨ Features

### ✅ Contact Form (Email Sending)
The contact form is configured to send emails directly to `info@segullah.co.za` using FormSubmit service. No backend needed!

**How it works:**
1. When a visitor submits the form, FormSubmit sends the data to the configured email
2. A success message is shown to the visitor
3. The form resets after 3 seconds

**Note:** On the first submission, FormSubmit will send a confirmation email to `info@segullah.co.za`. You must click the confirmation link to activate the form.

### ✅ Clickable Contact Information
- All phone numbers are clickable (will open phone dialer on mobile)
- Email addresses are clickable (will open email client)

### ✅ Client-Side Routing
The site uses hash-based routing (`#/about`, `#/services`, etc.) to navigate between pages without page reloads.

### ✅ Responsive Design
The website is fully responsive and works on all devices (mobile, tablet, desktop).

### ✅ Animations
All animations from the original React site are preserved using CSS animations.

## 🔧 Customization

### Changing Colors
Edit `css/styles.css` and replace:
- `#f97316` - Primary orange color
- `#ea580c` - Darker orange (hover states)
- `#000` - Black backgrounds
- `#1f2937` - Dark gray backgrounds

### Modifying Content
Edit `index.html` and find the template you want to modify:
- `#home-template` - Home page
- `#about-template` - About page
- `#services-template` - Services page
- `#process-template` - Process page
- `#contact-template` - Contact page

### Adding New Pages
1. Create a new template in `index.html`:
   ```html
   <template id="newpage-template">
       <!-- Your content here -->
   </template>
   ```

2. Add the route in `js/router.js`:
   ```javascript
   this.routes = {
       // ... existing routes
       '/newpage': 'newpage'
   };
   ```

3. Add navigation link in the nav section

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a file named `CNAME` to the repository root with your domain:
   ```
   www.segullah.co.za
   ```

2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `yourusername.github.io`

3. See [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📱 Testing Locally

To test the website locally, you need a local web server (double-clicking index.html won't work due to security restrictions).

**Option 1: Using Python**
```bash
# Python 3
cd static-site
python -m http.server 8000

# Visit http://localhost:8000
```

**Option 2: Using Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run
cd static-site
http-server

# Visit http://localhost:8080
```

**Option 3: Using VS Code**
Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

## 🐛 Troubleshooting

### Images not showing
- Check that all image files are in `assets/images/`
- Verify file names match exactly (case-sensitive)
- Make sure paths start with `./` (e.g., `./assets/images/segu.jpg`)

### Video not playing
- Ensure the video file is in `assets/videos/segulavid.mp4`
- Try compressing the video if it's too large
- Check browser console for errors
- Make sure the video codec is H.264 (MP4)

### Contact form not working
- On first use, check the confirmation email sent to `info@segullah.co.za`
- Click the confirmation link in that email
- Test the form again

### Routing not working on GitHub Pages
- Make sure you're using hash-based URLs (`#/about` not `/about`)
- Check that all links use `href="#/page"` format

## 📄 License

© 2024 Segullah Projects & Designs. All rights reserved.

## 📞 Support

For questions or issues:
- Email: info@segullah.co.za
- Phone (Pretoria): 066 222 2656
- Phone (Johannesburg): 060 456 3045
