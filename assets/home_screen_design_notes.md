# Home Screen Design Notes

These notes describe the layout and visual style of the "Home Screen" as seen in the provided reference image.

---

## 1. Layout & Structure

### General Structure
- **Overall Layout:** 
  - Full-width, centered main content, horizontal alignment.
  - Content is visually divided into: navigation bar (top), hero/main section (large center), and a logo row (bottom).
- **Main Section:** 
  - Split into two primary columns:
    - **Left:** Video mockup (large laptop with video player and side chat/interface).
    - **Right:** Headline, subheadline, description, and two prominent CTA buttons.

### Sections
- **Header Navigation (fixed at top, full width)**
  - Left: Logo & text.
  - Center/Right: Horizontal nav links ("Premium", "About", "FAQ"), "Get Started" button at rightmost.
- **Hero/Main area**
  - Left: Centered mockup of a laptop showing a paused scene (media UI), with a chat sidebar.
  - Right: Large call-to-action headline, supporting subhead, description. Two main buttons ("Get Started", "Learn More") stacked side-by-side.
- **Logo Strip (footer area, full width)**
  - Wide horizontal row of brand logos (Netflix, Disney+, Hulu, etc.), spaced equally, dark background.

---

## 2. Color Palette

```css
:root {
  --bg-canvas: #18103a;          /* deep dark blue */
  --nav-bg: #1c174b;             /* nav and main hero background (slightly lighter) */
  --primary-text: #ffffff;       /* white for major headlines/text */
  --secondary-text: #e6e6f7;     /* muted white for subheading and description */
  --button-cta: #e636ea;         /* bright magenta (main CTA/button) */
  --button-cta-hover: #c627c7;   /* deeper variant for hover */
  --decor-accent: #865fff;       /* angular lines, graphics */
  --footer-bg: #24195a;          /* darker footer/logo background */
  --logo-gray: #8c8ca0;          /* logos in low contrast gray */
}
```

---

## 3. Typography

- **Font Family:** `Helvetica Neue, Arial, sans-serif`
- **Header/Nav Links:**
  - Font-size: 1rem (16px)
  - Weight: 400–500 (regular/medium)
  - Color: `var(--primary-text)` (white)
  - Letter spacing: 0.02em
- **Hero Section:**
  - Headline:
    - Font-size: 2.6–3rem (approx 48px)
    - Weight: 700 (bold)
    - Color: `var(--primary-text)`
  - Subheadline/Description:
    - Font-size: 1.2rem (19px)
    - Weight: 400
    - Color: `var(--secondary-text)`
- **Buttons:**
  - All-caps or Title Case
  - Font-size: 1.1rem (17–18px)
  - Weight: 600
- **Logos/Footer:**
  - Brand logo images, accompanying text uses `--logo-gray` if text is present.

---

## 4. Spacing & Sizing

- **Header (Nav bar):**
  - Height: ~64px
  - Lateral padding: 40px left/right
  - Logo size: ~36px height
  - Space between nav links: 32px
  - CTA button margin-left: 40px from last link

- **Hero/Main Section:**
  - Section padding: 56px top & bottom, 72px left/right (approx)
  - Left ‘laptop’ image width: 460px; Height: ~280px
  - Gap between video mockup and text column: 54px
  - Text block width: 410px max
  - Vertical gap between headline, subhead, buttons: 18px headline to sub, 26px sub to button row
  - Button row gap: 20px between buttons

- **Footer/Logo Row:**
  - Section height: ~68px
  - Padding: 20px top/bottom
  - Gap between logos: 48px minimum
  - Container max-width: 1150px, centered

---

## 5. Layout Methods

- **Flexbox** is the primary layout mechanism (horizontal nav bar, hero section columns, logo row).
  - Nav links: flex row, center/right aligned
  - Main content (hero): flex row, left = image, right = text stack
  - Footer/Logo row: flex row, logo items aligned centrally

---

## 6. Navigation

- **Header:** Horizontal bar, left logo, nav links center/right, "Get Started" CTA button rightmost
- **Navigation Elements:**
  - Links: "Premium", "About", "FAQ"
  - CTA: "Get Started" (prominent button, magenta background)
- **Logo:** Top-left, brand icon next to text "scener" (white)

---

## 7. Interactive Elements

- **Buttons:**
  - "Get Started" (header and hero section, magenta gradient, pill-shaped, white bold text)
  - "Learn More" (lighter outline or secondary, white border, transparent bg)
- **Nav Links:** White, hover-color not shown but likely purple/magenta accent
- **Hero CTA:** Primary button (strong magenta) + secondary (outlined/ghost style)
- **Media/Chat Interface:** Not interactive in image but visually mimics a working video UI + sidebar

---

## 8. Imagery

- **Main Visual:** 
  - Graphic of a laptop with video playback (left) and chat/users sidebar
- **Logo Footer:** 
  - Official streaming service logos (Netflix, Disney+, Hulu, etc., likely as grayscale or duotone SVG or PNGs)

---

## 9. Decorative Elements

- **Background:**
  - Angular, geometric abstract graphics crossing the main hero section, using accent purple and pink lines and gradients.
  - Layered effect adds visual depth. Some star/dot elements for space/cosmic feel.

---

## 10. Responsive Hints

- **Likely Responsive (implied, see layout):**
  - Nav and hero stack vertically on small screens (<900px).
  - Logo row collapses into stacked/swiped scroll view on mobile.
  - Padding and x-gaps shrink for tablet/mobile.
  - Text sizes decrease at breakpoints (e.g., headline to 2rem).

---

## 11. Accessibility & Alt Text Suggestions

- **Logo:** `alt="Scener logo"`
- **Main Visual:** `alt="Laptop showing friends watching a video together in Scener app"`
- **Service Logos:** E.g., `alt="Netflix logo"`, etc.

---

## 12. Iconography

- If icons are present in nav or buttons (not shown as such, but may appear), use SVG or font icons at 22–26px.

---

## 13. Visual Summary

This page aims for a futuristic, collaborative, and cinematic feel using deep backgrounds, vivid magenta CTAs, abstract angular shapes, and high-contrast layout. Emphasis is placed on the video co-watching concept with bold, clear call-to-action for onboarding.

---

**End of Home Screen Design Notes**
