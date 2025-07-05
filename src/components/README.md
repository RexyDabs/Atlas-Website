# 📦 components/

This directory contains all the UI building blocks used across the Atlas Power Solutions frontend. It is organized by **context** and **reuse level** for clarity and maintainability.

---

## Folders & Their Purpose

### `contact/`
UI components specific to the Contact page or lead generation.
- `ContactForm.tsx`
- `ContactSteps.tsx`

---

### `email/`
Email templates used in transactional or system-generated communication.
- (e.g. `ProposalConfirmationEmail.tsx`)

---

### `feature/`
Special highlight sections for client stories, projects, or promotional tiles.
- `ClientCard.tsx`, `ProjectCard.tsx`

---

### `hero/`
Landing or section Hero components with media, titles, and CTAs.
- `HeroWithVideo.tsx` (video backgrounds, dynamic headings, etc.)

---

### `impact/`
Visuals and stats related to outreach, initiatives, or social impact.
- `InitiativesList.tsx`, `OutreachMap.tsx`

---

### `layout/`
Top-level layout components shared across the entire site.
- `Header.tsx`, `Footer.tsx`

---

### `portfolio/`
Components for displaying case studies, image galleries, and project tiles.
- (e.g. `GalleryGrid.tsx`, `ProjectTile.tsx`)

---

### `services/`
Service-specific blocks, e.g. listings, detail displays, and categories.
- `ServicesDetail.tsx`

---

### `shared/`
Reusable content blocks that appear in multiple places.
- `CTABlock.tsx`, `ImageGallery.tsx`, `SectionHeader.tsx`, `TrustBar.tsx`

---

### `solution/`
Page-specific components for the Solutions section.
- `SolutionDetail.tsx`

---

### `testimonial/` *(optional)*
Dedicated area for managing testimonials and review components.
- `TestimonialCard.tsx` (if needed)

---

### `ui/`
Atomic UI elements used across various contexts (buttons, dropdowns, sliders).
- `Button.tsx`, `QuoteBlock.tsx`, `Slider.tsx`

---

## Naming Conventions

- All component files use **PascalCase**: `ComponentName.tsx`
- Group components into subfolders based on their **function and reuse scope**
- Keep atomic UI (like buttons or inputs) in `ui/`
- Avoid duplicate folders outside `components/` unless scoped for routing

---

Happy building! 🚀
