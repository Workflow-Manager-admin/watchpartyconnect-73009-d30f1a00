# "Schedule a Watch Party" Modal – Design Notes

## General Layout

- **Modal Structure:** Centered modal panel, overlaying a dimmed, blurred app background.
- **Dimensions:** Modal is vertically oriented; estimated `width: 400px`, `min-height: 520px`.
- **Alignment:** All modal content is center-aligned horizontally.
- **Background:** Deep violet #23145b to #2f185b linear-gradient.
- **Modal Border Radius:** ~18px (noticeable rounding).
- **Padding:** `32px` all around inside modal.

---

## Step 1: What will you be watching?

### Modal Header
- **Text:** "What will you be watching?"
- **Font:** Helvetica Neue, Arial, sans-serif
- **Font Weight:** 700 (Bold)
- **Font Size:** 22px
- **Text Color:** White `#fff`
- **Alignment:** Centered at top with approx. `margin-bottom: 32px`.

### Input Fields
Three stacked, single-line input fields with dropdown or manual input cues:
1. "Search for show or movie"
2. "OR enter URL (YouTube, Vimeo)"
3. "OR manually enter details"

- **Field Type:** Each is a styled input with a right-aligned dropdown arrow icon (SVG/Font).
- **Field Height:** 44px
- **Width:** 100% (approx. 336px inside modal).
- **Font:** Regular, 16px, color #fff
- **Placeholder/Text color:** Soft gray #ccc
- **Background:** Slightly lighter purple, #30205e
- **Border:** None, just border-radius (`8px`)
- **Spacing:** `gap: 18px` between fields.

### Divider/Spacing
- `margin-top: 32px` before button row

### Action Buttons
- **Primary:** "I don't know yet"
    - Button style: pill/rounded, filled
    - Height: 40px, width: 220px
    - Background: Magenta-pink `#c800e3`
    - Text color: #fff, font-weight 600
- **Secondary:** "Go back"
    - Simple text link, under button, font size 15px, color #fff, underline on hover

---

## Step 2: When is your watch party?

### Modal Header
- **Text:** "When is your watch party?"
- **Style:** Identical to Step 1 header
- **Close icon**: Top right 'X' (SVG or FontAwesome), white on transparent; touch target at least 32x32px.

### Input Fields
- **Two stacked fields:**
    - "Date (required)"
    - "Time (required)"
- **Field Style:** Identical to Step 1; both show calendar/time icons right-aligned.
- **Validation:** If empty, subtle border glow or error hint under field.
- **Helper:** Small copy below "Time" - "You can only schedule between 5pm-10pm" (Font: 14px, color: #a089f7, margin-top: 5px)

### Actions:
- **Primary:** "Next" (same button style as before, enabled when required fields filled)
- **Secondary:** "Go back" (identical to Step 1)

---

## Step 3: Watch party privacy

### Modal Header
- **Text:** "[User]'s watch party"
- **Subtext:** "Change title" pencil icon to right (inline)
- **Font:** Same as previous headers/subtitles
- **Editable Title:** Inline pencil/Edit, appears as icon button aligned with title baseline

### Privacy Toggle
- **Section Header:** "Privacy"
  - Font size: 17px, font-weight: 600, color: #fff

- **Option Tiles:** Two large pill radio buttons:
    - **Private party**: "People I invite only"
    - **Public Party**: "Anyone can join"
  - **Tile Style:** Rounded rectangles, 100% width, height 56px
  - **Active/Selected Style:** Background #8d4ded, border 2px solid #e55aff; unselected: #30205e background, no border.
  - **Text Style:** 16px/regular, description in smaller, lighter font below main label.
  - **Icon:** Radio/check icon left-aligned.

- **Spacing:** 20px gap between privacy options.

### Actions:
- **Primary:** "Next" (style as prior)
- **Secondary:** "Go back" (style as prior)

---

## Colors

- `--bg-modal`: #2f185b
- `--bg-modal-gradient`: linear-gradient(180deg, #23145b, #2f185b)
- `--primary-button`: #c800e3
- `--input-bg`: #30205e
- `--primary-text`: #ffffff
- `--secondary-text`: #a089f7
- `--inactive-text`: #ccc
- `--active-tile`: #8d4ded
- `--active-border`: #e55aff

---

## Typography

- **Primary Font:** "Helvetica Neue", Arial, sans-serif
- **Header:** 22px bold
- **Input/Text:** 16px regular (#fff)
- **Helper/Meta:** 14px regular (#a089f7)
- **Buttons:** 17px bold, uppercase for primary, sentence case for others

---

## Spacing

- Modal Padding: 32px
- Header-Below spacing: 32px
- Between fields: 18px
- Between form and actions: 32px
- Privacy Tiles: 20px
- Buttons: 24px margin-top from last field

---

## Layout/Responsiveness

- Modal centered with overlay
- On mobile (<500px): Modal width: 94vw, padding: 18px, buttons stack vertically.

---

## Navigation/Interactions

- All Next buttons advance modal to next step (keep state)
- "Go back" link returns to prior modal step
- Modal overlay click does NOT dismiss; only explicit 'X'
- Inputs must show focus and error states (border or glow)
- Privacy toggle: animated selection with radio/check icon
- Pencil/Change title invokes inline edit (input replaces title, save/cancel controls)

---

## Images/Icons

- Watch party avatar (step 1–3), left in modal, size 72x72px, circular, on purple bg
- Input fields: Chevron-down, calendar, clock, pencil [SVG or FontAwesome]
- Logo in background, top-left (10vw from left edge, always visible)

---

# End of Design Notes
