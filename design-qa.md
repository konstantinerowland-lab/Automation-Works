# AutomationWorks redesign QA

final result: passed

Source visual: design-reference.png
Implementation: live-homepage.png
Combined comparison: design-comparison.png
Mobile: mobile preview checked locally; not bundled

Desktop reference and implementation: 1488 × 1056 px, CSS viewport 1488 × 1056; combined review scales both uniformly to 744 × 528. No device frame. Implementation captured at completed workflow; source depicts a completed task with active cursor. Cursor is intentionally hidden after completion. Mobile viewport 390 × 844; document width confirmed 390 with no horizontal overflow.

## Findings and comparison history

Initial capture: P2 preview and navigation text too small; hero copy broke after “tools.” rather than following the selected three-line composition. Fixed grid proportions, removed the hard break, increased preview/window size, body text, navigation, and CTAs. Recaptured and compared both images together.

Post-fix: no remaining actionable P0/P1/P2 issues. Headline and preview align with the reference composition; typography is comfortably readable and all above-the-fold controls fit. Header and portal retain the actual existing AW brand asset instead of the generated mark. Feather icons are real library assets. No invented metrics or customer proof.

## Required surfaces

- Typography: Manrope headings and DM Sans UI/body preserve source sans-serif hierarchy; headline line breaks and proportional scale match. Live UI uses real editable controls, so labels and supporting text are smaller than the mock's presentation text where needed for functional states.
- Layout: paired text/portal grid, compact white header, soft window border, and service divider match. Actual browser controls introduce intentional compact label rows and a pause link, with no timeline or video chrome.
- Colors: offwhite background, charcoal text, restrained steel blue action color, pale task surface and green completion state match.
- Image quality: no raster placeholders or code-drawn illustrations. Existing brand SVGs preserved; Feather icon SVGs used. The product UI is functional HTML rather than a rasterized screenshot. Full-view and readable original-size UI captures inspected; no separate crop necessary.
- Copy: selected headline, service explanation, consultation CTA and service strip preserved. Demo adds the sample-data disclosure, actual project selector, and completed state. No video labels.

## Interaction evidence

- Automatic cursor and request progression observed to completion.
- Try it yourself cancels automatic motion, exposes editable details and supports a second submission.
- Edited project type/details propagate into follow-up and project summary.
- Projects and Files tabs work; sample brief download control present.
- Reset animation restores automatic mode; pause/resume control present.
- Real estate and construction scenario selectors update the live workflow.
- Mobile consultation dialog opens/closes and menu navigation works.
- Portal pricing category displays correct plans; first-year costs reflect setup + 12 monthly fees.
- Console error check: none recorded.
- Reduced-motion handling inspected: intro disabled, motion not auto-started, explicit start available. No OS preference was changed.
- Source crawl: nine unique titles, descriptions and H1s; schema parses; internal assets/links resolve; sitemap has nine canonical URLs.

## Follow-up polish

P3: the live brand is intentionally more compact than the generated wordmark. Industry content below the selected hero remains text-focused and can receive a separate editorial pass.

## Implementation checklist

Completed selected hero, intro fade, working workflow, mobile styling, consultation preservation, seven updated recurring plans, and crawl checks. Ready for Vercel publication and production verification.
