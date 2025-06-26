# Create Account Modal — Developer Design Notes

## Layout & Structure

- Modal overlay, centered on screen.
- Width: 380–420px (max-width: 90vw on small screens)
- Padding: 32–40px (all sides, reduced to 16px on mobile)
- Border-radius: 16–20px
- Shadow: 0 8px 32px 0 rgba(0,0,0,0.5)
- Z-index: Above all content, dims underlying screen.

### Content Structure (top to bottom)
1. **Title:** "Create Account" (centered, bold)
2. **Input fields:**  
   - Email (`placeholder="Email"`)
   - Password (`placeholder="Password"`)
   - Confirm Password (`placeholder="Confirm"`)
   - Invite code (`placeholder="Invite code"`, optional)
   - Vertical stack, 12px gap.
3. **Terms Agreement:**
   - Inline checkbox, left.
   - Statement: “By continuing, you agree to Scener’s Terms of Service and Privacy Policy.”
   - "Terms of Service and Privacy Policy" as clickable links (purple).
4. **Primary Button:**  
   - Label: "Sign up"
   - Full width, gradient background, white bold text.
   - Margin-top: 24px
5. **Secondary Action:**  
   - "Have an account? Log in" — inline link/button, lighter purple, margin-top: 16px.

---

## Colors

```css
:root {
  --bg-modal: #2d006d;
  --input-bg: #381C6C;
  --input-placeholder: #d0cce2;
  --primary-btn-gradient: linear-gradient(90deg, #bb4ae5 0%, #7000ff 100%);
  --primary-btn-text: #fff;
  --modal-title: #fff;
  --modal-shadow: 0 8px 32px 0 rgba(0,0,0,0.5);
  --link: #b18fff;
  --text-muted: #d0cce2;
}
```

---

## Typography

- **Font:** "Helvetica Neue", Arial, sans-serif
- **Title:** 1.4–1.6rem (22–24px), bold/600, centered, white.
- **Input & Checkbox label:** 1rem (16px), 400/500, #d0cce2.
- **Primary Button:** 1.125rem (18px), bold/700, white, uppercase.
- **Links:** #b18fff, underline on hover.

---

## Spacing & Sizing

- Modal padding: 32-40px (16px mobile)
- Modal border-radius: 16–20px
- Input height: 48px
- Inputs vertical gap: 12px
- Primary button margin-top: 24px; secondary: 16px

---

## Layout Details

- Modal: display: flex; flex-direction: column; align-items: center;
- Centering: justify-content: center; align-items: center; min-height: 100vh;
- Inputs: width: 100%; padding: 0 16px;
- Button: width: 100%; height: 48px; border-radius: 8px; gradient bg.

---

## Interactivity

- Checkbox controls enabled/disabled of Sign Up.
- Links styled, open Terms/Policy in new tab.
- "Log in" link for secondary action.
- Button disabled when form invalid.

---

## Responsiveness

- Modal max-width: 90vw on <500px screens
- Modal padding: 16px mobile
- Font sizes reduce slightly on mobile (e.g., title: 1.2rem)

---

## Images/Icons

- No custom icons in inputs
- Checkbox: square, standard size.

---

## Accessibility

- All controls keyboard navigable
- Sufficient color contrast
- Focus outline on all actionable elements

