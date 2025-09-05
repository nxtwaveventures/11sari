# Banarasi Heritage - Custom Bridal Saree Website

## 🌟 Project Overview

A premium, viral-ready website for custom Banarasi bridal sarees featuring authentic weaver connections, heritage storytelling, and modern e-commerce functionality.

## ✨ Key Features

### 🎯 Business Model
- **30% Advance Payment** system
- **60-Day Crafting** timeline
- **Direct Weaver Connection**
- **Heritage Storytelling**
- **Custom Design Process**

### 💻 Technical Features
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Schema markup, meta tags
- **Performance Focused** - Fast loading, optimized images
- **Accessibility** - WCAG compliant
- **Social Media Ready** - Viral content integration

### 🎨 Design Philosophy
- **Minimalist Luxury** - Clean, elegant interface
- **Heritage Touches** - Traditional color palette
- **Modern UX** - Smooth animations, intuitive navigation
- **Emotional Connection** - Storytelling through design

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. **Clone or download** the project files
2. **Open terminal** in project directory
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start development server:**
   ```bash
   npm start
   ```
5. **Open browser** to `http://localhost:3000`

### Quick Setup
```bash
# Navigate to project folder
cd sari

# Start live server
npm start
```

## 📁 Project Structure

```
sari/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   └── animations.css    # Animation styles
│   ├── js/
│   │   ├── main.js          # Core functionality
│   │   └── animations.js    # Advanced animations
│   ├── images/              # Image assets
│   │   ├── gallery-1.jpg    # Gallery images
│   │   ├── weaver-1.jpg     # Weaver profiles
│   │   └── testimonial-1.jpg # Customer photos
│   └── videos/              # Video assets
│       └── weaving-hero.mp4 # Hero background video
├── package.json             # Project configuration
└── README.md               # This file
```

## 🎨 Customization Guide

### Colors & Branding
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #8B0000;    /* Deep red */
    --accent-color: #FFD700;     /* Gold */
    --text-dark: #2C2C2C;        /* Dark gray */
    /* Add your brand colors */
}
```

### Content Updates

#### 1. Hero Section
Update `index.html` line ~45:
```html
<h1 class="hero-title">
    Your Heritage,<br>
    <span class="highlight">Your Story</span>
</h1>
```

#### 2. Contact Information
Update phone number in `assets/js/main.js` line ~380:
```javascript
const phoneNumber = '919876543210'; // Your WhatsApp number
```

#### 3. Weaver Profiles
Update weaver information in `index.html` lines ~180-250:
```html
<div class="weaver-card">
    <!-- Add your weaver details -->
</div>
```

### Adding New Sections
1. **Create HTML structure** in `index.html`
2. **Add styling** in `assets/css/style.css`
3. **Add interactions** in `assets/js/main.js`

## 📱 Mobile Optimization

### Responsive Breakpoints
- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

### Touch Interactions
- Optimized button sizes (minimum 44px)
- Swipe gestures for gallery
- Touch-friendly navigation

## 🔧 Technical Features

### Performance Optimizations
- **Lazy loading** for images
- **CSS/JS minification** ready
- **Optimized fonts** loading
- **Efficient animations** using CSS transforms

### SEO Features
- **Structured data** markup
- **Open Graph** tags
- **Twitter Cards** support
- **Semantic HTML** structure
- **Fast loading** times

### Accessibility
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** ratios
- **Alternative text** for images

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Build project: `npm run build`
2. Drag `dist` folder to Netlify
3. Configure custom domain

### Option 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select source branch

### Option 4: Traditional Hosting
1. Upload files via FTP
2. Configure `.htaccess` for redirects
3. Set up SSL certificate

## 📊 Analytics Integration

### Google Analytics
Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
Add to `index.html`:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🛍️ E-commerce Integration

### Payment Gateways

#### Razorpay (India)
```javascript
// Add to main.js
const razorpayOptions = {
    key: 'your_razorpay_key',
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    name: 'Banarasi Heritage',
    description: 'Custom Saree Advance Payment',
    handler: function(response) {
        // Handle success
    }
};
```

#### Stripe (International)
```javascript
// Add Stripe integration
const stripe = Stripe('your_stripe_key');
const elements = stripe.elements();
```

### Order Management
Create `orders.js` for order tracking:
```javascript
class OrderManager {
    createOrder(orderData) {
        // Save order to database
    }
    
    updateOrderStatus(orderId, status) {
        // Update order progress
    }
    
    sendProgressUpdate(orderId, images) {
        // Send weaver progress photos
    }
}
```

## 📸 Content Creation Guidelines

### Photography Standards
- **Resolution:** Minimum 1920x1080
- **Format:** JPEG for photos, PNG for graphics
- **Optimization:** Compress images (WebP recommended)
- **Aspect Ratios:** 
  - Hero: 16:9
  - Gallery: 3:4
  - Weaver profiles: 4:5

### Video Requirements
- **Format:** MP4, WebM for compatibility
- **Resolution:** 1920x1080 minimum
- **Duration:** 30-60 seconds for hero
- **Size:** Under 10MB for web optimization

### Content Strategy
1. **Behind-the-scenes** weaving process
2. **Customer testimonials** with photos
3. **Weaver stories** and heritage
4. **Before/after** transformations
5. **Cultural significance** content

## 🔒 Security Considerations

### Form Security
- Input validation and sanitization
- CSRF protection
- Rate limiting for submissions
- Spam protection (Captcha)

### Payment Security
- PCI DSS compliance
- SSL/TLS encryption
- Secure payment tokenization
- Regular security audits

## 📞 Support & Maintenance

### Regular Updates
- **Content refresh** monthly
- **Security patches** as needed
- **Performance monitoring** weekly
- **SEO optimization** quarterly

### Backup Strategy
- **Daily backups** of content
- **Weekly database** backups
- **Version control** for code
- **Recovery procedures** documented

## 🎯 Marketing Integration

### Social Media
- **Instagram** feed integration
- **Facebook** shop connection
- **Pinterest** rich pins
- **YouTube** video embedding

### Email Marketing
```javascript
// Newsletter signup
function subscribeNewsletter(email) {
    // Integrate with Mailchimp/ConvertKit
}
```

### SEO Optimization
- **Keyword research** and implementation
- **Local SEO** for Varanasi location
- **Content marketing** blog integration
- **Link building** strategies

## 📈 Conversion Optimization

### A/B Testing
- Hero section variations
- CTA button colors and text
- Form layouts
- Pricing presentations

### User Experience
- **Heat mapping** with Hotjar
- **User session** recordings
- **Conversion funnel** analysis
- **Page speed** optimization

## 🤝 Contributing

### Development Guidelines
1. Follow **semantic HTML** structure
2. Use **BEM methodology** for CSS
3. Write **clean, commented** JavaScript
4. Test on **multiple devices**
5. Optimize for **performance**

### Code Style
- **2 spaces** for indentation
- **camelCase** for JavaScript
- **kebab-case** for CSS classes
- **Meaningful** variable names

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Banarasi weavers** for inspiring the heritage
- **Modern web technologies** for enabling the vision
- **Open source community** for tools and libraries
- **Traditional craftsmanship** meeting digital innovation

---

## 📞 Contact & Support

**Technical Support:** GitHub Issues
**Business Inquiries:** hello@banarasiheritage.com
**WhatsApp:** +91 9876543210

**Built with ❤️ for preserving heritage through technology**
# Trigger rebuild - Fri Sep  5 15:26:08 IST 2025
