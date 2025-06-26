# Account Profile Page - Developer Design Notes

---

## 1. Page Structure & Layout

- **General Layout:**  
  - Centered card-style layout within a dark full-width background.
  - Two primary horizontal regions:
    - **Main profile card** (left, main content focus)
    - **Secondary panel** (right, likely for details, currently placeholder)
  - **Flexbox** design for main alignment; max-width (about 900-1000px) content wrapper, centered horizontally  
  - Padding around inner content for breathing space, substantial margin-top separating from header.

### Structure
- **Header (Top Navigation):**
  - Logo left-aligned (Scener logo)
  - Horizontal navigation links: "Premium", "About", "Help", "Buy a Gift"
  - Rightmost prominent button: "Get Scener" (accent highlight)
- **Profile Card:**
  - Left section: User info panel
    - Circular avatar (120x120px est.)
    - Banner/cover graphic background (purple abstract, ~220px tall)
    - Display name and username/handle below avatar
    - Visible "Account Details" button (pill-style)
  - Profile Tabs: "Profile", "Watch Parties", "Following"
    - Underline highlight shows active tab ("Profile")
  - Center Profile Body:
    - Message: "You have no scheduled watch parties"
    - Action buttons: "Schedule a watch party" (accent), "Get Scener" (secondary outline)
- **Secondary Panel (Right):**
  - Card-like with subtle separation (darker bg), copyright
  - Sparse content in screenshot—structure only

---

## 2. Color Palette

(Use as CSS variables in project)
- `--bg-canvas`: #18162b (primary background)
- `--surface-1`: #221e3a (card background / elevated panels)
- `--surface-2`: #19162d (secondary panel/card bg)
- `--primary-text`: #ffffff
- `--secondary-text`: #b3aadb
- `--accent`: #a259ff (main purple accent for buttons, underline, logo highlight)
- `--accent-light`: #ede3ff (hover, outline, and highlight shades)
- `--divider`: #272347
- `--avatar-bg`: #6d5dac (user icon bg for empty/placeholder avatar)
- `--disabled`: #403a61

---

## 3. Typography

- **Font Family:**  
  "Helvetica Neue", Arial, sans-serif (system fallback)
- **Header/Logo:** `font-weight: 700; font-size: 22px;`
- **Navigation/Tab:** `font-weight: 500; font-size: 15px; letter-spacing: 0.3px; text-transform: none;`
- **Main Username:** `font-weight: 700; font-size: 20px;`
- **Secondary Username/Handle:** `font-weight: 400; font-size: 16px; color: var(--secondary-text);`
- **Body Text:** `font-size: 15px; font-weight: 400;`
- **Button:**  
    - Primary: `font-weight: 600; font-size: 16px;`
    - Secondary: `font-size: 16px; font-weight: 500; color: var(--accent);`

---

## 4. Spacing/System

- **Global padding:**  
  - Content card: 32-40px all around
  - Inner spacing (between avatar/profile and tabs): 16-24px
  - Margin-top of content wrapper from navbar: 48px
  - Gaps between tab items: 24px
  - Button margin (vertical stack): 12px gap
- **Card border-radius:** 18px (applies to all card panels, avatar edges)
- **Tab underline:** 3px height, rounded ends

---

## 5. Layout & Positioning

- **Header:**  
  - Flex row, items center-aligned, spaced with flex-grow: 1 between logo/nav and button.
- **Content Main:**  
  - Flex row (main card left, secondary right); 72px horizontal gap approx.
  - Both cards same height; main wider than secondary panel.
- **Avatar:**  
  - Centered in profile card over background banner.
  - Drop shadow/subtle border (white or --bg-canvas)
- **Tabs:**  
  - Horizontally aligned, with bottom active-underline.
- **Buttons:**  
  - Rounded: border-radius 20px
  - Primary accent ("Schedule a watch party"), secondary outlined ("Get Scener")

---

## 6. Navigation & Interaction

- **Header:**  
  - Navigation links highlight (accent underline or color) on hover.
  - "Get Scener" is a primary action button, with hover transition (slightly lighter accent or shadow).
- **Tabs:**  
  - Clickable, active tab uses accent underline.
- **Buttons:**  
  - Elevated and hover with accent shadow or slight scale.
  - "Schedule a watch party" = filled accent; "Get Scener" = outline with accent text.
- **Avatar:**  
  - Could be editable on hover (not shown, describe for devs to investigate).

---

## 7. Components & Details

### AppBar / Header
- Logo
- Menu links
- CTA button

### Profile Card
- Banner background (abstract, purple, SVG or raster asset)
- User avatar (120x120, with fallback icon and bg)
- Display name, @handle, "Account Details" pill button

### Profile Tabs
- Navigation: "Profile", "Watch Parties", "Following"
- Active tab underline

### Profile Content Area
- Message string (condition: empty state)
- Two buttons (stacked or row for larger screens)
- All within surface/canvas card with radius, shadow

### Right Panel (Secondary Card)
- Slightly darker, card style, minimal content
- Reserved for future widgets or info

---

## 8. Accessibility
- Sufficient color contrast (light text on dark bg, accent buttons)
- Keyboard tab order: logo → menu → CTA → profile → tabs → body actions
- Avatar and button have accessible labels

---

## 9. Responsive Behavior

- **Above 900px:**  
  - Layout is split, profile main card and right panel side by side.
- **Below 900px:**  
  - Right panel drops below main card or collapses/minimized.
  - Padding/margins reduce.
  - Buttons become stacked vertically instead of row.
  - Tab bar scrollable if width overflows.

---

## 10. Asset Notes

- **Assets:**
    - Logo: SVG preferred (scener logo)
    - Avatar: User-uploaded or system placeholder.
    - Banner Graphic: Provided SVG or PNG asset (abstract, purple).
- **Icons:**  
  - "Account Details" could include icon (optional, not shown).

---

# END DESIGN NOTES
