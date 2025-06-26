# Scener — Post-login Screen Design Notes

## 1. Page Layout & Structure

- **Background Layer**
  - Entire viewport covered with a dark, blurred overlay.
  - Displays a faint preview of the dashboard/marketing page in the background.
  - Visual hierarchy: all focus is drawn to the centered login modal.

- **Central Modal/Card**
  - **Placement:** Perfectly centered (both vertical and horizontal, using flex/grid).
  - **Width:** 480–540px (desktop); 90% width for mobile/small screens.
  - **Height:** ~600–700px (approximate, fits content).
  - **Background:** Linear gradient (135deg, #2A0757 0%, #1B0042 100%).
  - **Border Radius:** 16px
  - **Box Shadow:** 0 8px 32px rgba(0,0,0,0.4)
  - **Internal Padding:** 32px (desktop), 16px (mobile)
  - **Display:** Flex, direction column; align-items: center.

## 2. Navigation Reference

- **Background Navigation Bar (not interactive while modal is open)**
  - **Logo:** Top left, "scener", white, bold, sans-serif.
  - **Menu Links:** "Premium", "About" etc., regular white text, horizontal alignment.
  - **Action Button:** "Get Started", top right, rounded, neon magenta.

## 3. Modal/Card Content

### Header
- **Text:** `Log In`
- **Font:** Bold, sans-serif (`Helvetica Neue, Arial, sans-serif`)
- **Size:** 2rem–2.5rem (32–40px)
- **Color:** #FFFFFF (white)
- **Margin-Bottom:** 24px

### Form

- **Input Fields**
  - 1. `username or email`
  - 2. `password`
- **Input Style:**
  - Background: #22094D (deep purple, filled)
  - Border: None, rounded corners (radius 12px)
  - Padding: 16px (horizontal), 12px (vertical)
  - Font: Regular, 1rem (16px), color #FFFFFF
  - Placeholder: #B99FE0 (lavender)
  - Margin-Bottom: 18–24px between fields
  - Focused: Subtle border or shadow using accent color (#D000FF)

- **Forgot Password Link**
  - Right-aligned below password field
  - Font: Small (0.95rem), #B99FE0
  - Hover: `#D000FF`, underline

- **Primary Button**
  - `Log In`
  - Width: 100%
  - Height: 48px
  - Background: #D000FF (neon magenta)
  - Color: #FFFFFF, bold, uppercase, letter-spacing: 1px
  - Border: None, border-radius 16px
  - Font: 1.125rem (18px), font-weight: 600–700
  - Margin-Top: 24px
  - Shadow: Prominent, matches modal
  - Hover: Slightly lighter magenta or glowing effect

### Below Form

- **Secondary Prompt**
  - Text: `No account? Sign Up for free`
  - Font: 1rem (16px), #FFFFFF, regular
  - `Sign Up for free` is a clickable link; color: #D000FF; font-weight: 600; hover: underline/magenta intensity

## 4. Color Palette

| Usage                   | Color        | CSS Variable            |
|-------------------------|-------------|-------------------------|
| Primary BG/Overlay      | #1B0042     | --bg-canvas             |
| Modal/Card BG           | #2A0757     | --card-bg               |
| Accent/Primary Button   | #D000FF     | --accent                |
| Input BG                | #22094D     | --input-bg              |
| Text (Default)          | #FFFFFF     | --text-primary          |
| Text (Secondary)        | #B99FE0     | --text-secondary        |

## 5. Typography

- **Font Family:** `Helvetica Neue`, Arial, sans-serif
- **Headings:** 2–2.5rem, 700 weight, white
- **Inputs/Body:** 1rem, 400–500 weight, white
- **Button:** 1.125rem, 600–700 weight, white, uppercase
- **Links:** Same as body, accented color for actions

## 6. Spacing

- **Card Internal Padding:** 32px (desktop), 16px (mobile)
- **Vertical Gaps:** 18–24px between major elements
- **Button Margin-Top:** 24px
- **Input Margin-Bottom:** 18–24px

## 7. Layout Implementation

- **Suggested Container:** 
  - Use `display: flex`/`grid`, `align-items: center`, `justify-content: center`, `min-height: 100vh`
- **Modal/Card:** 
  - Flex column, align-items: stretch

## 8. Responsive Notes

- On screens < 600px:
  - Card/modal width: 90% of viewport
  - Card padding: 16px
  - Font sizes scale down 10–20%
  - Primary button height: 40px

## 9. Interactivity/Effects

- **Button:**
  - Hover/focus: Glow or lighter magenta + intensified box-shadow
- **Inputs:** 
  - Focus: Magenta border/shadow
- **Links:**
  - Hover: Underline or color change to magenta

## 10. Miscellaneous

- **Background Elements:** 
  - Streaming service logos (Netflix, hulu, etc.) are present but subdued.
  - Visual content preview (e.g. video thumbnail) is blurred/darkened in the background.
  - Interactions are locked to modal/card until completion.

---

## Summarized File Structure

```plaintext
<PageWrapper>
  <BlurredBackground>
    <AppNavBar /> <!-- not interactive in modal state -->
    <MainContentPreview />
    <ServiceLogosRow />
  </BlurredBackground>
  <ModalCard>
    <Header>Log In</Header>
    <Form>
      <Input placeholder="username or email" />
      <Input placeholder="password" type="password" />
      <Link href="#" align="right">Forgot password?</Link>
      <PrimaryButton>Log In</PrimaryButton>
    </Form>
    <TextPrompt>
      No account?
      <AccentLink href="#">Sign Up for free</AccentLink>
    </TextPrompt>
  </ModalCard>
</PageWrapper>
```

---

**These notes should be used to build a perfectly faithful React component/page for the Scener post-login modal as per the provided reference.**
