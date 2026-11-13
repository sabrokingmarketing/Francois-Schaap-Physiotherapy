# DESIGN.md: Francois Schaap Physiotherapy

The structure of this look follows a calm, document-like marketing style: "a well-organised
desk in good daylight". It is adapted to this practice's own brand. No other company's name,
logo, images or text are used.

## Feel
Professional, caring, calm. A clean treatment room: plenty of light, nothing loud.

## Colour
- **Canvas:** paper white `#f7f9f8`; pure white `#ffffff` for cards.
- **Soft panels:** `#ebf0ee` (surface) and `#f0f6f5` (tint).
- **Text:** near-black teal `#0f2a2e`; muted `#4a5f63` for supporting copy.
- **Primary (actions only):** deep teal `#06525c`, hover `#043f47`. Buttons and links only.
- **Night band:** `#06353c`, used **once per page** for one dark section.
- **Accent:** `#0d7480`, small highlights only (dots, the statement's key word).
- Every text colour passes WCAG AA. All values live in `app/globals.css` under BRAND COLOURS.

## Type
- One family: **Albert Sans** (Google Fonts), weights 400, 500 and 600.
- Headings at weight 400 with tight negative letter-spacing that tightens as size grows.
- Body 17px, line height 1.6. Buttons 500. Small labels 500.
- Headings, section titles and card titles are typed in Title Case. All other text is sentence case.

## Layout and spacing
- 8px base unit. Content sits on a 1280px container with 80px side margins at desktop.
- A 12-column grid; left and right content edges stay equal down the page.
- Whitespace, not rules, separates sections. Hairline rules only inside lists.
- Breakpoints: phone (390), tablet (768), desktop (1024+, checked at 1440).

## Shape and depth
- Mostly flat: hairline borders, very faint shadows.
- Radii: 8px (small), 12px (medium), 20px (cards and panels), full pills for buttons.

## Components
- **Primary button:** teal pill, white text. **Quiet button:** white pill, hairline border.
- **Cards:** white, hairline border, 20px radius. Linked cards lift 2px on hover.
- **Lists:** hairline-separated rows with a teal check or dot.
- **Footer:** white band with four columns.
- **Floating WhatsApp button:** bottom right, static (no pulse).

## Motion (Design Motion Principles: Jakub Krehel first, Emil Kowalski second)
- The hero enters once on load: fade, 12px rise and de-blur, 520ms, 70ms apart.
- Buttons change colour on hover (160ms) and press to 0.97 on click.
- Linked cards lift 2px; text links draw their underline; arrows nudge 3px.
- Mobile menu fades and slides in (260ms) and leaves faster (160ms).
- One page moment: the home page statement lights up word by word as it scrolls past.
- Nothing pulses, loops or fades in on scroll. Under reduced motion everything rests.

## Do and don't
- Keep teal for actions and links. Never a second accent colour, never violet.
- No invented reviews, prices, awards or figures.
- Use the night band only once per page.
