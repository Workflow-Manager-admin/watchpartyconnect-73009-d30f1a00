# Streaming Service Selection Modal – Design Documentation

## 1. Layout & Structure

### Overall
- **Modal/dialog:** Centered, ~400px wide, dark purple rounded card.
- **Title:** "Which streaming service?" at top, bold.
- **Dropdown select:** Full width, with label ("Streaming on:") above, and dropdown input below.
  - Dropdown contains options displayed with logos and service names (Netflix, Hulu, Max, Disney+, Prime Video).
  - Dropdown panel: slightly lighter but still dark purple, shadow, rounded.
- **Below dropdown:** "Add to schedule" pill-button (primary), full width.
- **Bottom left:** "Cancel" ghost link, flush left.

## 2. Typography

- **Font:** "Helvetica Neue, Arial, sans-serif".
- **Heading:** 22px, 700.
- **Dropdown label:** 14px, semi-bold, uppercase.
- **List text:** 16px, white.
- **Button:** 16px, bold, uppercase, pill.

## 3. Colors

| Purpose        | Color (approx)      | CSS Variable         |
|----------------|--------------------|----------------------|
| Modal Bg       | #251850            | --modal-bg           |
| Dropdown Bg    | #322362            | --dropdown-bg        |
| Text           | #FFF               | --text-primary       |
| Muted Text     | #B6B0CB            | --text-secondary     |
| Accent         | #F82FFE            | --accent             |
| Primary Btn    | #AA53F6            | --button-primary     |

## 4. Buttons

- **Add to schedule:** Filled magenta/purple, pill, white bold, full width.
- **Cancel:** Underline/ghost, accent color, left-aligned.

## 5. Spacing

- Modal: 24px padding
- Dropdown: margin 16px top/bottom
- List items: 12px vertical gap

---

# Component Mapping

- `<StreamingServiceModal />`
- `<DropdownServiceSelector />`
