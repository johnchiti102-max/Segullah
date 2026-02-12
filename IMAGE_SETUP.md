# Image Setup Guide for Segullah Projects & Designs Website

## Overview
This website uses local images stored in the `public/` folder. To customize your website with your own images, follow this guide.

## Required Image Files

Add the following images to your `public/` folder:

### 1. **segu.jpg** (Already Added)
- **Location**: `public/segu.jpg`
- **Usage**: Logo displayed in navigation bar and footer
- **Recommended Size**: 200x200px (square)
- **Format**: JPG, PNG, or any image format

### 2. **hero-bg.jpg** (For Home Page)
- **Location**: `public/hero-bg.jpg`
- **Usage**: Background image for the hero section
- **Recommended Size**: 1600x900px or larger
- **Format**: JPG for better performance
- **Purpose**: Main banner background on homepage

### 3. **about-image.jpg** (For About Page)
- **Location**: `public/about-image.jpg`
- **Usage**: Main image displayed on About page
- **Recommended Size**: 600x600px (square)
- **Format**: JPG or PNG
- **Purpose**: Shows alongside company information

### 4. **branding-image.jpg** (For Services Page)
- **Location**: `public/branding-image.jpg`
- **Usage**: Branding solutions showcase image
- **Recommended Size**: 600x600px
- **Format**: JPG or PNG
- **Purpose**: Visual example of branding work

### 5. **graphic-design-image.jpg** (For Services Page)
- **Location**: `public/graphic-design-image.jpg`
- **Usage**: Graphic design showcase image
- **Recommended Size**: 600x600px
- **Format**: JPG or PNG
- **Purpose**: Visual example of graphic design work

## How to Add Your Images

### Step 1: Prepare Your Images
- Ensure your images are in the recommended sizes above
- Use JPG format for backgrounds (better file size)
- Use PNG format for images with transparency

### Step 2: Add Images to Public Folder
- Navigate to the `public/` folder in your project
- Drag and drop your images or copy them into this folder
- Name them exactly as specified above

### Step 3: Verify the Website
- Run `npm run dev` to start the development server
- Navigate through each page to verify images display correctly
- If an image doesn't appear, check the file name spelling

## How to Customize Image Locations

If you want to use different file names or organize images differently:

1. Open the relevant page file in `src/pages/`
2. Find the `<img>` tag with the image source
3. Change the `src` attribute to your desired path
4. Save the file

**Example**: Changing the hero background image
```jsx
// Original:
style={{
  backgroundImage: `url('/hero-bg.jpg')`,
}}

// New custom path:
style={{
  backgroundImage: `url('/images/my-custom-hero.jpg')`,
}}
```

## File Locations in Code

### HomePage (Home Page)
- File: `src/pages/HomePage.tsx`
- Background Image: Line 16 - `/hero-bg.jpg`

### AboutPage (About Page)
- File: `src/pages/AboutPage.tsx`
- Image: Line 69 - `/about-image.jpg`

### ServicesPage (Services Page)
- File: `src/pages/ServicesPage.tsx`
- Branding Image: Line 101 - `/branding-image.jpg`
- Graphic Design Image: Line 168 - `/graphic-design-image.jpg`

### Footer (All Pages)
- File: `src/components/Footer.tsx`
- Logo: Line 15 - `/segu.jpg`
- Logo: Line 73 - `/segu.jpg`

## Image Format Recommendations

**For Best Performance:**
- Use JPG for photographs and backgrounds
- Use PNG for logos and graphics with transparency
- Optimize images before uploading (use tools like TinyPNG)
- Recommended max file size: 500KB per image

**Naming Convention:**
- Use lowercase letters only
- Use hyphens instead of spaces: `my-image.jpg`
- Keep names descriptive and concise

## Troubleshooting

### Images Not Displaying
1. Check file names match exactly (case-sensitive)
2. Verify files are in `public/` folder
3. Restart the dev server: `npm run dev`
4. Clear browser cache (Ctrl+Shift+Delete)

### Images Look Blurry
1. Use larger source images (at least 1.5x the display size)
2. Export as JPG with 80-90% quality instead of maximum
3. Ensure dimensions match aspect ratios shown above

### Build Size Too Large
1. Compress images using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (for Mac)
   - FileOptimizer (for Windows)
2. Consider using WebP format for better compression

## Adding More Images

To add additional images for future sections:

1. Create the image file and save to `public/`
2. Update the relevant page component
3. Add the `<img>` tag with the correct path
4. Save and test

Example:
```jsx
<img
  src="/my-new-image.jpg"
  alt="Description of image"
  className="w-full rounded-lg"
/>
```

## Questions?

Refer to the React and Vite documentation:
- React: https://react.dev
- Vite: https://vitejs.dev

Happy branding!
