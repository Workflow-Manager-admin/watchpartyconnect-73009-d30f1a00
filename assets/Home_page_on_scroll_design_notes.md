# Home Page (on Scroll) - Developer-Ready Design Notes

---

## 1. Overall Layout & Structure

### Header (Navigation Bar)
- **Position**: Fixed, spans full width of viewport.
- **Background**: Solid dark navy (`#171437`).
- **Height**: ~70px.
- **Logo** (left): Icon + "scener" text, all lowercase, bold, white.
- **Navigation Links** (center/right, inline):
    - "Premium", "About", "FAQ", "Go to Host", and a standout "Sign Up" button.
    - Even horizontal spacing (~18–28px).
- **CTA Button** ("Sign Up"): Pill-shaped, bright pink (`#e100ff`), rightmost (aligned or floating right).

### Hero/Banner Section
- **Position**: Immediately below header, full width.
- **Height**: ~220–250px
- **Background**: Gradient/patterned (purple, blue, geometric/space motif).
- **Content Alignment**: 
    - **Left**: Large "scener PREMIUM" text (white/"PREMIUM" in gold). 
    - **Right**: Vertical stack:
        - Feature highlights: "Video Chat", "Audio Chat", "No Ads", each with a yellow icon and label.
        - "LEARN MORE" button: Gold background, rectangular, bold/uppercase, centered within the section.
- **Accent**: Angled/yellow geometric shapes overlay (prominent).

### Main Content (Below Banner)
- **Tile/Card Grid**: Horizontal row (2 columns shown, more may be present in final design):
    - **Left Card**: Image or dark video thumbnail (black/#22203a background), white highlight/accent, mild border radius, shadow.
    - **Right Card**: White background, blue graphics or illustration, center-aligned button below content, moderate border radius, prominent drop shadow.
- **Spacing**:
    - Tile horizontal gap: 32px.
    - Card padding: ~20px.

---

## 2. Color Palette

- **Primary Background**: `#171437` (very dark navy)
- **Banner/Accent Gradient**: `linear-gradient(90deg, #2f285d 0%, #6d42c7 100%)`
- **Accent Yellow/Gold**: `#ffd542` (buttons, icons, highlights)
- **CTA Pink**: `#e100ff` (Sign Up button)
- **White**: `#ffffff` (text, headings, logo, card backgrounds)
- **Card Background**: `#22203a`
- **Banner Shadow/Overlay**: `#433f5c`
- **Text/Subtle Gray**: Slightly off-white or light gray for less important text

### CSS Variable Suggestions
```css
:root {
  --bg-primary: #171437;
  --bg-banner: linear-gradient(90deg, #2f285d 0%, #6d42c7 100%);
  --accent-yellow: #ffd542;
  --cta-pink: #e100ff;
  --text-main: #ffffff;
  --card-bg: #22203a;
  --card-shadow: 0 5px 20px rgba(67,63,92,0.20);
}
```

---

## 3. Typography

- **Font Family**: "Helvetica Neue", Arial, sans-serif
- **Logo/Header**: 
    - Style: All lowercase, bold
    - Size: 1.4–1.6rem, white
- **Nav Links**: 
    - Style: Uppercase or Title Case
    - Weight: Medium
    - Size: 1rem
    - Letter Spacing: 0.06em
- **Hero/Banner Headline**:
    - Large, bold "scener" in white + "PREMIUM" in gold/yellow
    - Size: 2.2–2.6rem for "scener", 2rem for "PREMIUM"
- **Feature Descriptions**: 
    - Weight: Medium
    - Size: 1.1rem
    - Color: Gold/yellow (`#ffd542`)
- **Buttons** ("Learn More", "Sign Up"):
    - Weight: Semi-bold
    - Case: Uppercase
    - Letter Spacing: 0.07em
    - Size: 1rem

---

## 4. Spacing & Sizing

- **Header Height**: 70px
- **Banner Height**: 220–250px
- **Banner Horizontal Padding**: 32–40px
- **Banner Vertical Padding**: 20–28px
- **Nav Link Gap**: 18–28px
- **CTA Button Padding ("Sign Up")**: 12px 28px (pill)
- **Learn More Button Padding**: 12px 28px, rounded corners
- **Card Tile Gap**: 32px horizontally
- **Card Padding**: 20px (all sides)
- **Border Radius**: 
  - Cards: 10–16px
  - Buttons: 24px (pill) or 8px (banner button)
- **Grid Outer Margin**: 32px (left/right)

---

## 5. Layout Methods

- **Nav/Header**: Flexbox row, align-items: center, justify-content: space-between (logo left, links center/right)
- **Banner**: 
    - Flex row on desktop (logo/hero left, features/buttons right)
    - Overlay elements with angled geometric shape(s), use z-index if necessary
- **Main Content Grid**: 
    - CSS Grid (2 columns, gap 32px) or horizontal flex
    - Responsive stacking on narrow screens (<760px): 1 column, stack vertically
- **Box Shadow**: 
    - Cards: `0 5px 20px rgba(67,63,92,0.20)`
    - Buttons: slight shadow on hover
- **Responsiveness**: 
    - Nav collapses to hamburger or vertical stack on mobile
    - Cards stack vertically at small screen sizes
    - Banner content stacks ("scener PREMIUM" on top, features below) on mobile

---

## 6. Navigation Structure

- **Top Nav:** Horizontal, logo left, menu right, CTA at far right.
- **CTA ("Sign Up")**: Pill-shaped, draws primary attention, pink with white text.
- **Link Style**: White/off-white, bold/medium, underline or color change on hover.

---

## 7. Interactive Elements

- **Buttons**:
    - "Learn More": Gold/yellow, rectangular, centered in banner section, medium-bold.
    - "Sign Up": Pill/fully rounded, bright pink, box-shadow, hover effect (darken or elevate).
- **Cards**: Clickable, elevate/scale slightly on hover.
- **Feature Icons**: Inline SVG/font; flat, gold/yellow, clear & readable.

---

## 8. Media & Icons

- **Logo**: SVG (preferred) or PNG image.
- **Icons**: Minimalistic, inline with label (chat bubble, audio, no ads), gold/yellow (#ffd542).
- **Card Images/Thumbnails**: Main graphic (left: dark theme, right: light/blue), aspect ratio 16:9 or square.

---

## 9. Responsiveness Hints

- **Header**: Hamburger menu appears below 900px; menu links stack/slide out.
- **Main Content**: Grid becomes stacked cards at <760px.
- **Banner**: 
    - Text and feature highlights stack.
    - Button sits under feature list on mobile.

---

### Developer Tips

- Prioritize contrast and visual clarity for accessibility.
- Use CSS variables for theming.
- Sizing and spacing should be consistent, scalable (rem/em units).
- All icons and images should have informative alt text for accessibility.

---

## SHORT SUMMARY

Scener’s Home page uses a dark, modern theme with bold accent colors (yellow/pink), clean sans-serif typography, and floating card UI. The layout is highly responsive with a strong banner/hero section and a visually distinct header. All elements are spaced generously for a premium feel.

