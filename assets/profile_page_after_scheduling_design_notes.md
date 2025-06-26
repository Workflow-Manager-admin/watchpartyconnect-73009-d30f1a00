# Profile Page After Scheduling – Design Documentation

## 1. Layout & Structure

### Overall
- **Background:** Very dark gradient or solid color (#0A051A approx.), fills viewport.
- **Two main content columns:**
  - **Left column (Profile & Schedule):** ~60% width.
  - **Right column (Upcoming Event Sidebar):** ~30% width, aligned right, minified on mobile.
- **Spacing:** Large paddings around groups, generous margin between left/right content.

### Header/Navbar
- **Container:** Horizontally full-width, dark background, slightly lighter than overall bg.
- **Logo:** Top-left, white.
- **Nav links:** "Products", "About", "Help" (white/light gray, upper middle).
- **User area:** User icon with greeting, and a magenta "Get Scener" pill-button top-right.
- **Nav height:** ~60px.
- **Spacing:** 24-32px margin between nav links and edges, button is right-aligned.

### Profile Panel (Left)
- **User avatar:** Left, large (round), with purple/magenta background.
- **Username:** Bold, white text under avatar.
- **Tag:** "Profile" with selected tab highlight (magenta underline bar).
- **Followers/following:** Small pills, light borders.
- **Account details:** Button ("Account details"), to right of username line.
- **Actions:** "Edit schedule" (outlined button), "Edit Scener" (ghost/outlined button).
- **Schedule Card:**
  - "Parties I’m hosting:" label with bold/white text.
  - **Party Card:** Gray/blue tile with party image (left), title ("Watch party"), date/time. Outlined soft card with subtle radius.
  - **Button:** "Edit" (small, pill-shaped).
- **"Schedule a watch party" button:** To the right of party card, prominent.
- **Spacing:** 24px between sections, 40px vertically between main blocks.

### Right Sidebar (Upcoming Events)
- **Container:** Rounded rectangle (deep purple), shadowed, fixed width (~340px).
- **Title/Label:** "Copyright © Scener Inc. 2024", upper right, in faint text.
- **No party scheduled:** Empty state with just copyright.

## 2. Typography

- **Font:** "Helvetica Neue, Arial, sans-serif".
- **Main headings:**  
  - Font weight: 700  
  - Font size: 22-28px
- **Body text:**  
  - Weight: 400–500  
  - Size: 16px
- **Labels/tabs:**  
  - Uppercase, letter-spacing ~0.5px, small, with magenta accent for active.

## 3. Colors

| Purpose        | Color (approx)      | CSS Variable       |
|----------------|--------------------|--------------------|
| Background     | #0A051A            | --bg-canvas        |
| Sidebar Bg     | #21144A            | --sidebar-bg       |
| Card Bg        | #18102B            | --card-bg          |
| Text           | #FFFFFF            | --text-primary     |
| Muted Text     | #B6B0CB            | --text-secondary   |
| Accent         | #F82FFE            | --accent           |
| Pill Button    | #AA53F6            | --button-primary   |

## 4. Buttons & Interactions

- **Primary:** Filled magenta gradient, rounded pill, white bold text.
- **Outline:** White/gray border, transparent background, rounded corners.
- **Hover:** Slight brightness increase or subtle drop shadow.

## 5. Spacing

- **Section Margin:** 40px+
- **Element Padding:** 16-24px in cards/buttons
- **Grid gap:** 20-28px

## 6. Responsive

- Stacks to single column at mobile, sidebar becomes collapsible.

## 7. Media

- Avatar: SVG or raster, circular
- Party Card: Party-art SVG/PNG, 48x48px (approx.)

---

# Component Mapping (React)

- `<Navbar />` – Header/navigation as described above.
- `<ProfileSidebar />` – Avatar, username, tab bar.
- `<PartyScheduleList />` – Cards of scheduled parties.
- `<UpcomingEventsSidebar />` – Right side, only shows when events exist.
