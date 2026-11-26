# Start here, Claude

Read `HANDOFF.md` before changing this project. This is the actual source of the live AutomationWorks website, not a framework starter.

## Preserve these decisions

- The user selected the restrained light design shown in `design-reference.png`, inspired **only by the top section** of https://multivariate.tech/products.
- Keep the current steel-blue, charcoal and off-white direction, clear service copy and prominent free 20-minute consultation.
- The workflow demo is live HTML/JS and auto-starts. It is **not a video**: no play button, timeline, scrubber, duration, volume or video-player styling.
- Keep the brief AW entry reveal, staggered fade-in, animated cursor, pause/resume, visitor takeover and reduced-motion support.
- Every package combines a separately stated setup fee and recurring monthly fee in CAD. Preserve defined limits and truthful ownership/cancellation terms.
- Never invent testimonials, client logos, results, reviews, guaranteed savings, physical offices, public contact details or business metrics.
- Maintain unique static SEO content/canonical URLs for all nine pages. Don't make search metadata depend on JavaScript.
- Keep consultation records private. Never commit `.env` files, Blob credentials or real inquiry data. Public demos use sample data and must not send real notifications.

## Work in this repository

Edit the existing static implementation. No framework migration is required. `redesign.css` overrides portions of `style.css`; inspect both when a style seems inconsistent. Shared marketing HTML is duplicated across all nine pages, so shared changes need to be applied consistently without erasing industry-specific content.

Run a local preview and check desktop and mobile behavior. Verify automatic demo startup, takeover/reset, portal tabs, industry scenarios, pricing category and annual-total toggles, mobile navigation, and consultation entry. Confirm no console errors, horizontal overflow, broken assets, stale prices or duplicate IDs.

The source already contains a real Vercel consultation function. Don't replace it with an alert, fake-success message, mailto or disconnected form.

GitHub source ownership and Vercel deployment are separate. Do not assume pushes deploy until the repository is linked to the existing Vercel project. Keep existing environment variables/storage connections when deploying.
