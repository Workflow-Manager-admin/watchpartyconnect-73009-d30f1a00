# After Scheduling (Watch Party Added Modal) – Design Documentation

## 1. Layout & Structure

### Overall
- **Modal/dialog:** Centered overlay, ~440px wide, rounded corners, drop shadow.
- **Background dim:** Full-screen, semi-transparent black.
- **Modal padding:** 32px top/bottom, 24px sides.
- **Top bar:** "Watch party added to schedule" bold heading.
- **Party Card:** Image on top (banner), details below.
    - Streaming artwork: full width of modal, 16:9 aspect.
    - Party details: title, time (bold, center).
    - "Edit" outlined button beside party title.
- **Invite area:** "Invite to this party" label over input/button row. (input not shown, just "Copy link" and "Share" pill buttons below).
- **Divider:** 1px faint line (gray-pink).
- **Actions row:** At bottom ("Done" primary button).
- **Below:** "Edit event" ghost link, left-justified.

## 2. Typography

- **Font:** "Helvetica Neue, Arial, sans-serif".
- **Heading:** 22-24px, 700.
- **Card title:** 16-18px, 600.
- **Section labels:** Uppercase, small, gray.
- **Button text:** 16px, bold or demi.

## 3. Colors

| Purpose     | Color (approx)      | CSS Variable         |
|-------------|---------------------|----------------------|
| Modal Bg    | #251850             | --modal-bg           |
| Text        | #FFF                | --text-primary       |
| Muted Text  | #B6B0CB             | --text-secondary     |
| Divider     | #38256C             | --divider            |
| Accent      | #F82FFE             | --accent             |
| Primary Btn | #AA53F6             | --button-primary     |

## 4. Buttons

- **Primary ("Done"):** Filled magenta, pill, bold white.
- **Outlined ("Edit"):** White border, transparent, rounded.
- **Ghost ("Edit event"):** Just text, accent color, underline on hover.
- **Copy/Share:** Outlined, small, pill.

## 5. Spacing

- Modal: 24-32px padding
- Elements: 16-24px vertical gap
- Actions row: margin-top 24px

---

# Component Mapping

- `<WatchPartyAddedModal />`
- `<PartyCard />` (inside modal)
- `<InviteControls />` (copy/share)

