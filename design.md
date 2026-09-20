# DESIGN.md — Hoety Berkah Solusindo

## 1. Design Reference

### Source

* **Reference:** Mastercare Framer Website
* **URL:** https://mastercare.framer.website/
* **Reference type:** Visual inspiration / design reference
* **Target:** Hoety Berkah Solusindo
* **Target stack:** Next.js + TypeScript + Tailwind CSS

The Mastercare website is used as a visual reference for overall layout quality, spacing, typography, component patterns, interaction, and visual hierarchy.

The Hoety website should **not be a direct copy** of Mastercare. The design should adapt the reference style to Hoety Berkah Solusindo's industrial, technical, and B2B-oriented business.

---

# 2. Design Direction

### Overall Feel

The website should feel:

* Professional
* Industrial
* Reliable
* Clean
* Modern
* Technical but approachable
* B2B-oriented

The visual language should combine the clean and spacious composition of the Mastercare reference with Hoety's **navy blue + yellow** brand direction.

Avoid:

* Playful visual styles
* Excessive gradients
* Overly decorative elements
* Excessive glassmorphism
* Cartoon-like illustrations
* Overly futuristic "tech" aesthetics
* Excessive animation that reduces usability

The website should communicate that Hoety works with real industrial equipment and professional refrigeration systems.

---

# 3. Color System

Navy blue is the dominant brand color, while yellow is used as the primary accent and CTA color.

### Core Colors

| Token           | Role                                        |
| --------------- | ------------------------------------------- |
| `primary`       | Navy blue — primary brand color             |
| `accent`        | Yellow — CTA, highlights, active states     |
| `background`    | White — primary page background             |
| `surface`       | Light neutral background for cards/sections |
| `textPrimary`   | Dark navy — headings and primary text       |
| `textSecondary` | Muted dark gray/navy — supporting text      |
| `border`        | Light neutral gray — borders/dividers       |
| `white`         | White — text on dark backgrounds            |

Exact color values should follow the finalized Hoety brand palette.

### Color Usage

* Navy should establish brand identity.
* Yellow should attract attention and indicate important actions.
* Yellow should primarily be used for CTA buttons and important highlights.
* Avoid using yellow for large amounts of body text.
* Maintain sufficient contrast between text and backgrounds.

---

# 4. Typography

Typography should follow the clean, modern approach of the Mastercare reference.

### Font

**Inter**

Inter should be used consistently across:

* Headings
* Body text
* Buttons
* Navigation
* Labels
* Product information

### Type Scale

| Role            |    Size |  Weight |
| --------------- | ------: | ------: |
| H1 / Display    | 64–68px |     700 |
| H2              | 48–58px |     700 |
| H3              | 30–40px | 600–700 |
| H4 / Card Title | 20–24px | 600–700 |
| Body            |    16px | 400–500 |
| Small / Caption | 12–14px | 500–600 |

Typography should scale responsively on smaller screens.

### Heading Treatment

* Bold.
* Strong visual hierarchy.
* Tight but readable line-height.
* Dark navy.
* Avoid excessively long heading lines.

### Body Text

* Regular weight.
* Comfortable line-height.
* Short paragraphs.
* Easy to scan on both desktop and mobile.

---

# 5. Layout System

The overall layout should follow the spacious composition of the Mastercare reference.

### Container

* Centered content container.
* Maximum width approximately 1200px.
* Full-width sections may extend beyond the container when appropriate.
* Consistent horizontal padding across sections.

### Section Spacing

Use generous vertical spacing:

* Desktop: approximately 80–120px.
* Tablet/mobile: reduced proportionally while maintaining visual breathing room.

### Grid

Default grid gap:

* 24–32px.

Cards should have enough spacing to remain visually distinct.

### Page Density

The page should feel spacious rather than information-heavy.

Prioritize:

1. Clear heading.
2. Short supporting copy.
3. Strong visual.
4. Clear CTA.

Avoid large blocks of uninterrupted text.

---

# 6. Border Radius

Use a clean rounded visual language inspired by Mastercare.

### Buttons

Buttons should use a rounded/pill treatment where appropriate.

### Cards

Cards should use moderate rounding:

* Approximately 12–16px.

### Images

Product and content images should generally use:

* Clean rectangular proportions.
* Moderate rounding where appropriate.

Avoid excessive rounding that makes industrial equipment feel overly playful.

---

# 7. Navigation

### Desktop

Navbar structure:

```text
[Logo]          Beranda  Layanan  Produk  Tentang  Klien  Kontak       [Hubungi Kami]
```

Characteristics:

* Clean horizontal layout.
* Sticky on scroll.
* White or light background.
* Strong contrast between navigation and page content.
* Primary CTA positioned on the right.

### Mobile

Navigation collapses into a hamburger menu.

The WhatsApp CTA should remain easily accessible without making the header feel crowded.

### Active State

The current section may use:

* Navy text.
* Yellow indicator.
* Subtle underline/highlight.

---

# 8. Hero Section

The Hero is the primary visual statement of the website.

### Layout

Use a large, image-heavy hero inspired by the Mastercare reference.

The hero should feature:

* Strong H1.
* Short supporting copy.
* Primary CTA.
* Secondary CTA where appropriate.
* Large refrigeration/industrial imagery.

### Hero Content

H1:

> Jasa Service Cold Storage, Chiller & Compressor di Jabodetabek

Supporting copy should briefly explain Hoety's core services.

### CTA

Primary:

> Hubungi Kami

Secondary:

> Lihat Layanan

### Hero Imagery

Use a carousel/slider featuring relevant Hoety imagery:

* Cold storage rooms.
* Compressor.
* Evaporator.
* Spare parts.
* Installation/service activities.

Images should be high-quality and visually consistent.

### Image Treatment

Use clean rectangular imagery rather than highly stylized shapes.

The imagery should feel authentic and industrial.

Avoid generic stock imagery when actual Hoety assets are available.

---

# 9. Informational Section — Cold Storage & ABF

This section follows the educational requirement from the PRD while maintaining the clean visual hierarchy of the reference.

### Layout

Two content blocks/cards:

```text
[ Apa itu Cold Storage? ]    [ Apa itu ABF? ]
```

Each block contains:

* H2/H3 heading.
* Short explanation.
* Optional supporting image/icon.

### Visual Style

Keep the section simple.

The content should not visually compete with the Services and Products sections.

---

# 10. Services Section

### Section Structure

Use:

* Small eyebrow label.
* Large H2 heading.
* Short supporting copy if needed.
* Service card grid.

Example:

```text
SERVICES

Solusi Refrigerasi untuk Kebutuhan Bisnis Anda

[ Card ] [ Card ] [ Card ]
[ Card ] [ Card ] [ Card ]
```

### Desktop

Services use a **3-column grid**.

### Mobile

Services become a vertically stacked list/card layout.

### Service Card

Each card contains:

* Icon or relevant visual.
* Service title.
* Short description.
* WhatsApp CTA.

### Card Interaction

On hover:

* Subtle elevation/visual change.
* CTA becomes more prominent.
* Avoid exaggerated movement.

---

# 11. Product Catalog

The Product section is one of the most important sections on the website.

It should receive more visual emphasis than a standard content section.

### Section Structure

```text
PRODUCTS

Produk Refrigerasi & Compressor

[ Semua ] [ Compressor ] [ Condensor ] [ Evaporator ] ...

[ Product ] [ Product ] [ Product ] [ Product ]
[ Product ] [ Product ] [ Product ] [ Product ]

              [ Lihat Semua Produk ]
```

### Product Grid

Desktop:

* 4-column grid.

Mobile:

* 2-column grid where screen width allows.
* Cards should remain readable and usable.

### Category Filter

Category filters use compact pill/tab controls.

Default:

> Semua

Selecting a category updates the displayed products without navigating away from the page.

### Lihat Semua

If the initial product grid is limited, provide:

> **Lihat Semua Produk**

This expands the catalog to display all available products.

---

# 12. Product Card

Product cards should prioritize:

1. Product image.
2. Product name.
3. Price.
4. Discount information when applicable.
5. Product detail CTA.
6. WhatsApp CTA.

### Card Structure

```text
┌──────────────────────┐
│                      │
│     Product Image    │
│                      │
├──────────────────────┤
│ Product Name         │
│                      │
│ Rp X.XXX.XXX         │
│ Rp X.XXX.XXX         │
│                      │
│ [ Lihat Detail ] [WA]│
└──────────────────────┘
```

### Discount State

When a product has a discount:

* Show original price.
* Show discounted price prominently.
* Add a small discount indicator/badge.

The discount treatment should attract attention without overpowering the product information.

### Product Image

Product images should use consistent aspect ratios and cropping.

Avoid inconsistent image heights across the product grid.

---

# 13. Product Detail Modal

The modal should feel like an extension of the product card rather than a separate page.

### Layout

Desktop:

```text
┌─────────────────────────────────────────┐
│                                         │
│  Product Gallery    Product Information │
│                                         │
│  [ Image ]          Product Name        │
│  [ thumbnails ]     Category            │
│                     Description         │
│                     Price               │
│                     [ WhatsApp ]        │
│                                         │
└─────────────────────────────────────────┘
```

### Content

The modal displays:

* Product images.
* Product name.
* Category/brand if available.
* Description.
* Price.
* Discount information if available.
* Additional information if available.
* WhatsApp CTA.

### Interaction

* Modal opens smoothly.
* Background content is visually de-emphasized.
* User can close using close button or appropriate dismissal interaction.
* Modal should remain usable on mobile.

---

# 14. Client Showcase

The client section uses a logo showcase inspired by the reference website.

### Layout

Use a horizontal logo wall / marquee.

Client assets are already available and can be incorporated during implementation.

### Logo Treatment

Use a clean presentation that keeps attention on the client names/logos without making the section visually dominant.

The exact treatment can be adjusted based on the quality and visual consistency of the available logo assets.

---

# 15. Company Profile

### Layout

Use an image + text composition inspired by the image-heavy About section from the reference.

Example:

```text
ABOUT HOETY

[ Company / Workshop Image ]    [ Company Description ]
                                [ Year Founded ]
                                [ Service Area ]
```

### Content

Include:

* Year established.
* Short company story.
* Main business focus.
* Service area.

The section should remain concise rather than becoming a long corporate history.

---

# 16. Contact Section

Contact should function as a strong conversion section near the end of the page.

### Content

Include:

* Address.
* WhatsApp/phone.
* Email.
* Business hours.
* Service area.
* Google Maps.
* Social media when available.

### Layout

Recommended composition:

```text
CONTACT

[ Contact Information ]       [ Google Maps ]
```

### CTA

Include a prominent WhatsApp CTA.

---

# 17. Footer

Footer should remain clean and relatively compact.

Include:

* Logo.
* Navigation.
* Contact information.
* WhatsApp.
* Address.
* Service area.
* Social media if available.
* Copyright.

Use navy/dark background where appropriate to create a clear visual ending to the page.

---

# 18. Animation & Motion

Animation should follow the interaction quality of the Mastercare reference.

The goal is **smooth and polished**, not highly animated.

### Required Motion

#### Page / Section Entrance

Sections may use subtle:

* Fade-in.
* Slide-up.
* Image reveal.

Animation should trigger naturally as sections enter the viewport.

#### Buttons

Buttons should have subtle hover transitions:

* Background transition.
* Text/icon movement.
* Slight visual emphasis.

Avoid excessive scaling.

#### Product Cards

Hover may include:

* Subtle image zoom.
* Slight elevation.
* CTA emphasis.

#### Hero Carousel

Hero images transition smoothly between slides.

#### Client Marquee

Client logos move continuously and smoothly.

#### Product Modal

Modal should have a short enter/exit transition.

### Motion Principle

Animation should support hierarchy and interaction.

Do not use:

* Excessive parallax.
* Large bouncing elements.
* Constant floating animations.
* Long entrance delays.
* Animations that make content difficult to access.

Respect reduced-motion preferences where possible.

---

# 19. Responsive Behavior

Desktop and mobile are equally important.

### Desktop

* Full navigation.
* Large hero imagery.
* 3-column service grid.
* 4-column product grid.
* Two-column content sections where appropriate.
* Large typography.

### Tablet

* Navigation and content spacing adjust.
* Grids reduce column count when necessary.
* Hero adapts to available width.

### Mobile

* Hamburger navigation.
* Hero content stacks vertically.
* Hero CTA buttons become easier to tap.
* Services stack vertically.
* Product grid uses 2 columns where practical.
* Product modal adapts to a mobile-friendly layout.
* Client logos remain horizontally scrollable/marquee.
* Google Maps/contact layout stacks vertically.
* Typography scales down while maintaining hierarchy.

---

# 20. Content Style

### Voice

* Professional.
* Clear.
* Trustworthy.
* Direct.
* Approachable.

### Copy Style

Keep copy concise.

Prefer:

> Service dan maintenance untuk menjaga performa unit pendingin tetap optimal.

Over long technical explanations.

### Heading Style

Headings should be:

* Bold.
* Clear.
* Statement-based.
* Short.

Avoid unnecessary marketing language or exaggerated claims.

### CTA Style

Use direct action-oriented labels:

* Hubungi Kami
* Lihat Layanan
* Lihat Detail
* Lihat Semua Produk

Avoid vague CTA labels such as:

* Learn More
* Discover
* Explore Now

unless they provide meaningful context.

---

# 21. Visual Hierarchy

Priority of visual attention:

1. Hero headline and primary CTA.
2. Services and core capabilities.
3. Product catalog and pricing.
4. Client credibility.
5. Company profile.
6. Contact information.

The product catalog should remain highly discoverable without making the page feel like a traditional e-commerce store.

The website is a **company profile + catalog**, not a checkout-based e-commerce website.

---

# 22. Accessibility

The design should maintain:

* Sufficient color contrast.
* Clear interactive states.
* Readable typography.
* Keyboard-accessible interactive elements.
* Descriptive image alt text.
* Clearly labeled buttons.
* Usable modal controls.
* Reduced-motion consideration.

---

# 23. Agent Build Instructions

1. Use **Inter** throughout the website.
2. Use **navy blue as the dominant brand color**.
3. Use **yellow as the primary CTA/accent color**.
4. Maintain a clean, spacious layout inspired by the Mastercare reference.
5. Do not directly copy Mastercare's content, branding, or assets.
6. Use large image-heavy compositions where relevant.
7. Use a large image carousel in the Hero.
8. Use a 3-column service grid on desktop.
9. Use a 4-column product grid on desktop.
10. Use category pill filters for products.
11. Support a **Lihat Semua Produk** interaction.
12. Product cards must display fixed prices.
13. Support discounted product pricing when applicable.
14. Product cards must have both **Lihat Detail** and WhatsApp CTA.
15. Product detail should open in a responsive modal.
16. Use a horizontal client logo showcase/marquee.
17. Keep company profile concise.
18. Use strong WhatsApp CTA placement throughout the page.
19. Use subtle motion and interaction inspired by the reference.
20. Avoid excessive animation and decorative effects.
21. Maintain responsive behavior across desktop, tablet, and mobile.
22. Prioritize real Hoety imagery over generic stock imagery whenever available.
23. Keep the overall visual style professional and industrial rather than playful.
24. Ensure the final implementation follows the requirements defined in `PRD.md`.
25. Treat this document as the visual and interaction reference, while `PRD.md` remains the source of truth for business and functional requirements.

---

# 24. Design Principle

> **Clean like a modern service brand, credible like an industrial company, and easy to convert through WhatsApp.**
