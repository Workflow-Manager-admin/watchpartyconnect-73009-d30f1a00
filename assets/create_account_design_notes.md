# Create Account Screen – Developer Design Notes

## 1. Layout & Structure

- **Backdrop:**  
  - Full-screen, dark overlay (semi-transparent to dim background).  
  - The modal is centered both vertically and horizontally on the page.  
  - Everything in the background is visually deemphasized.

- **Modal Container:**  
  - Fixed width (approx. 360px), responsive vertical stacking.
  - Background: Dark purple (`--modal-bg`, see color palette below), subtle drop shadow for elevation.
  - Rounded corners: `border-radius: 16px`
  - Padding: `32px` top/bottom, `28px` left/right
  - Display: Flex column, aligned center.

- **Section Order:**  
  1. Header (Title: "Create Account")
  2. Form Fields (3 input fields: Email, Password, Confirm Password)
  3. Legal agreement text
  4. Primary CTA (Sign Up button)
  5. Secondary text/button ("Have an account? Log in")

---

## 2. Components

### A. Modal Header
- Text: “Create Account”
- Style:  
  - Font: Bold, 20px  
  - Color: White  
  - Letter-spacing: 0.3px  
  - Margin-bottom: 24px  
  - Alignment: Centered

### B. Input Fields
- Count: 3 (Email, Password, Confirm Password)
- Stack: Vertical with spacing of `16px` between fields  
- Style:  
  - Field container: `height: 48px`, width `100%`
  - Background: `#1A1033`  
  - Border: `1px solid #6341EF` (soft purple border)  
  - Border-radius: `8px`
  - Text: White (`--input-text`), font size `16px`
  - Placeholder color: `#9C8DD9` (lavender, semi-transparent)
  - Padding: `0 16px`
  - No icons/illustrations in the field
  - Label: Hidden, uses placeholder instead

### C. Legal Agreement Text
- Text:  
  *By continuing you agree to Scener’s Terms of Service and Privacy Policy*
- Style:  
  - Font: Regular, 13px  
  - Color: `#B4A4FF` (light lavender)  
  - Margin: 20px top, 20px bottom  
  - Alignment: Center  
  - Key terms ("Terms of Service" and "Privacy Policy") as links, underlined, accent color `#A387FF`
  - Line height: 1.5

### D. Primary CTA Button
- Text: “Sign Up”
- Style:  
  - Width: 100%
  - Height: 48px  
  - Font: 16px, bold, all uppercase (text-transform: uppercase)
  - Color: White  
  - Background: Gradient from `#A887FF` (left) to `#6341EF` (right)  
  - Border: None  
  - Border-radius: `8px`
  - Transition on hover: slightly brighter gradient
  - Shadow: Subtle soft shadow for elevation  
  - Margin-bottom: 18px

### E. Secondary Link
- Text: “Have an account? Log in”
- Style:  
  - Font: Regular 15px  
  - Text color: `#A887FF` (accent lavender)  
  - Link ("Log in"): Underline; bold  
  - Alignment: Center  
  - Margin-top: 8px

---

## 3. Color Palette

| Color Name           | Usage                           | CSS Variable         | Hex       |
|----------------------|---------------------------------|----------------------|-----------|
| Modal BG             | Modal container                 | --modal-bg           | #2D1C54   |
| Main Accent          | Button, links, border           | --accent             | #A887FF   |
| Accent Gradient      | Button left to right            | --accent-gradient    | #A887FF to #6341EF |
| Input BG             | Input fields background         | --input-bg           | #1A1033   |
| Input Border         | Input fields border             | --input-border       | #6341EF   |
| Light Lavender       | Agreement + placeholder text    | --lavender-light     | #B4A4FF   |
| Off-white            | Input/text, modal header        | --modal-fg           | #FFFFFF   |
| Muted Text           | Background/question body        | --muted-text         | #9C8DD9   |

---

## 4. Typography

- **Primary Font**: Helvetica Neue, Arial, sans-serif
- **Weights**: Regular (400), Medium (500), Bold (700)
- **Sizes**:  
  - Modal header: 20px, bold
  - Inputs: 16px, regular
  - Button: 16px, bold, uppercase
  - Agreement: 13px, regular
  - Secondary text: 15px, regular

---

## 5. Spacing

| Element                           | Margin/Padding                |
|------------------------------------|------------------------------|
| Modal padding                     | 32px top/bottom, 28px sides  |
| Between input fields               | 16px vertical                |
| Inputs to agreement                | 20px                         |
| Agreement to button                | 20px                         |
| Button to secondary link           | 18px                         |
| Secondary link margin-top          | 8px                          |

---

## 6. Interaction

- **Button hover:** Slight increase in gradient brightness and shadow.
- **Inputs focus:** Border color stays accent purple (`#6341EF`), shadow slightly increases.
- **Links:** Underline on hover, color stays accent.
- **Inputs**: Show “eye” icon for password toggle (if implemented, currently not visible).

---

## 7. Accessibility

- Button and interactive elements have sufficient contrast.
- Input fields labeled via placeholders.
- Modal traps keyboard focus.

---

## 8. Responsive

- Modal remains centered.
- At widths <400px: modal gets 100vw with min padding 16px for mobile.

---

## 9. Assets
- No illustrations, icons, or imagery visible.
- Logo in app bar/background is deemphasized (not modal).

---

## 10. Sample CSS Variables

```css
:root {
  --modal-bg: #2D1C54;
  --modal-fg: #FFFFFF;
  --input-bg: #1A1033;
  --input-border: #6341EF;
  --accent: #A887FF;
  --accent-gradient-left: #A887FF;
  --accent-gradient-right: #6341EF;
  --lavender-light: #B4A4FF;
  --muted-text: #9C8DD9;
}
```

---

## 11. Notes

- Do not use drop shadow on modal for mobile under 400px (only border).
- All elements aligned to modal center.
- Ensure adequate touch targets (>= 44px).

---

**End of Hand-off Doc**
