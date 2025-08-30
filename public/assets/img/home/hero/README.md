# Hero Carousel Images

This folder contains images for the hero carousel section on the home page.

## 📁 Required Images:

### **Hero Slides:**
- `hero-1.png` - First slide (DeFi space theme)
- `hero-2.png` - Second slide (Men's health diagnostics)
- `hero-3.png` - Third slide (Expert care theme)

## 🎯 Image Specifications:

### **Recommended Dimensions:**
- **Width**: 800px - 1200px
- **Height**: 600px - 800px
- **Aspect Ratio**: 4:3 or 16:9
- **Format**: PNG, JPG, or WebP

### **Content Guidelines:**
- **hero-1.png**: DeFi/blockchain related imagery
- **hero-2.png**: Medical/healthcare related imagery
- **hero-3.png**: Professional/trustworthy imagery

## 🚀 How the Carousel Works:

The hero carousel automatically cycles through 3 slides with:
- **Auto-play**: Changes every 5 seconds
- **Navigation**: Left/right arrow buttons
- **Dots**: Bottom indicator dots
- **Responsive**: Adapts to all screen sizes
- **Touch-friendly**: Swipe gestures on mobile
- **Keyboard navigation**: Arrow keys for accessibility

## 📱 Responsive Behavior:

- **Desktop**: Full-size images with navigation
- **Tablet**: Scaled images with smaller navigation
- **Mobile**: Optimized for small screens with touch support

## 🔧 Customization:

To add more slides or modify existing ones:
1. Add new image to this folder
2. Update `src/components/home/data.js`
3. Add new slide object to the `hero.slides` array
4. Carousel automatically includes the new slide

## 💡 Tips:

- Use high-quality, optimized images
- Keep file sizes under 500KB for performance
- Ensure images work well with white text overlay
- Test on different screen sizes
- Images should be consistent in style and quality

## 🛠️ Technical Details:

- **Library**: Bootstrap 5 Carousel (built-in, no dependencies)
- **Auto-play**: 5 second intervals
- **Pause on hover**: Yes
- **Infinite loop**: Yes
- **Touch support**: Yes
- **Keyboard navigation**: Yes
- **Accessibility**: ARIA labels and screen reader support
