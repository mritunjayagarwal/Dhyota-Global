# Image Assets - Organized by Page

This folder contains images organized by page/component for better management.

## 📁 Folder Structure:

```
assets/img/
├── home/          # 🏠 Home page specific images
│   └── features/  # 🎯 Feature section images
├── about/         # ℹ️ About page specific images  
├── contact/       # 📞 Contact page specific images
├── shared/        # 🔗 Images used across multiple pages
└── README.md      # 📖 This file
```

## 🏠 Home Page Images (`/home/`):
- `hero-image.png` - Main hero section image
- `defi-illustration.png` - DeFi space illustration

### 🎯 Features Section (`/home/features/`):
- `f-1.png` - Authenticated Data icon
- `f-2.png` - Secure Transactions icon  
- `f-3.png` - Real-time Analytics icon
- `f-4.png` - Smart Contracts icon

## ℹ️ About Page Images (`/about/`):
- `team-photo.png` - Team or company photo
- `company-logo.png` - Company logo
- `about-hero.png` - About page hero image

## 📞 Contact Page Images (`/contact/`):
- `contact-hero.png` - Contact page hero image
- `office-photo.png` - Office or location photo
- `contact-icon.png` - Contact form icon

## 🔗 Shared Images (`/shared/`):
- `logo.png` - Main logo used across all pages
- `favicon.ico` - Website favicon
- `background-pattern.png` - Common background patterns
- `social-icons/` - Social media icons

## 📱 Image Guidelines:

### **Recommended Sizes:**
- **Hero images**: 1200x600px or larger
- **Feature icons**: 128x128px (square)
- **Icons**: 64x64px to 128x128px
- **Cards**: 400x300px
- **Logos**: 200x100px (main), 64x32px (small)

### **Supported Formats:**
- PNG, JPG, JPEG, SVG, WebP
- SVG recommended for icons and logos
- WebP for photos (with PNG fallback)

### **Performance Tips:**
- Keep hero images under 500KB
- Feature icons under 50KB
- Use WebP with PNG fallbacks
- Optimize all images before adding

## 🚀 How to Use:

### **In Components:**
```jsx
// Home page images
<img src="/assets/img/home/hero-image.png" alt="Hero" />

// Feature images
<img src="/assets/img/home/features/f-1.png" alt="Feature" />

// About page images  
<img src="/assets/img/about/team-photo.png" alt="Team" />

// Shared images
<img src="/assets/img/shared/logo.png" alt="Logo" />
```

### **Adding New Images:**
1. Choose the appropriate folder based on usage
2. Use descriptive filenames (e.g., `hero-section-image.png`)
3. Optimize the image for web use
4. Update this README if adding new categories

## 🔄 Migration from Old Structure:
- Move existing `1.png` to `/home/hero-image.png`
- Move existing `2.png` to `/home/features/f-1.png`
- Update component references to use new paths

## 📊 JSON Data Structure:

The features are now managed through `src/data/features.json`:

```json
{
  "features": [
    {
      "id": 1,
      "title": "Authenticated Data",
      "description": "Description text...",
      "image": "/assets/img/home/features/f-1.png",
      "alt": "Authenticated Data Icon"
    }
  ]
}
```

This makes it easy to:
- Add/remove features without touching JSX
- Update content without code changes
- Maintain consistent structure
- Scale to more features easily
