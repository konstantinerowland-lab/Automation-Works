# AutomationWorks — project handoff

Updated November 25, 2026. This file records the website's current production implementation and the decisions behind it.

## Business and user goals

Two founders are starting AutomationWorks. They want to sell practical, repeatable packages to small niche industries: websites, forms, workflow automation and branded client portals, with a strong emphasis on recurring revenue. The main company branches into industry-specific webpages. The site should make it easy to understand the offer, see useful examples and request a free consultation.

The founders want approachable pricing, clearly scoped work, professional design and strong monthly revenue. They disliked generic AI-looking websites, walls of text, excessive numbers, glossy contractor/house imagery, toy calculators and dashboard clutter.

## Current production and infrastructure

- Canonical site: https://www.automationworks.ca/
- Apex domain redirects to www. Domain was purchased through Vercel.
- Also served at https://automationworks.vercel.app/.
- Vercel team/project: `kosta-x-george/automationworks`.
- Last verified production deployment: `9EW9hj3L35dMb3hr4yc6ytnm2k2t`.
- Release was uploaded through Vercel Drop, then passed Vercel identity verification.
- Repo creation alone does not establish Git-triggered Vercel deployments. Connect this repo to the existing project if desired.
- There is an older Sites/Cloudflare/D1 implementation elsewhere in the original workspace. It is **not** this production site. Do not accidentally republish that older source.

## Design evolution and accepted direction

Early versions were light, text-heavy small-studio websites. We added managed monthly plans, eight industry pages, working calculators, website/automation/portal previews and a real consultation backend. The user subsequently rejected the visual direction and calculator examples as too generic and AI-looking.

We researched Jobber, ServiceTitan and WebFX as adjacent established businesses, borrowing service clarity and the principle of showing work rather than copying branding or claiming equivalent scale. Many static visual concepts were explored and rejected. The user eventually supplied https://multivariate.tech/products and specified that they liked **only the top portion**.

The accepted direction combines that spacious text/product-preview composition with a calmer specialist technology studio: charcoal text, off-white background, restrained steel-blue buttons, comfortable spacing, plain language and a genuine editable product demonstration. The selected light mock was refined to remove every video affordance. `design-reference.png` captures this revised target; `live-homepage.png` captures the shipped result. The actual existing AW mark was retained rather than replacing it with generated lettering.

Current homepage headline: “Your website and tools. Working together.”

Supporting copy: “We build websites, automate routine tasks and give your clients a simpler way to work with you.”

Primary action: free consultation. Secondary action: explore services.

## Entry reveal and interactive demo

Implementation: `public/app.js` and `public/redesign.css`, with markup in each HTML page.

- A brief AW brand reveal appears on first entry in a browser session, tracked with `sessionStorage` key `aw-intro-seen`.
- Header, headline and preview fade/rise into place with short staggered animations.
- The hero's real HTML interface automatically demonstrates an inquiry arriving, request organization and a follow-up appearing.
- A Feather mouse-pointer asset moves smoothly between controls. It hides after the sequence; no video playback UI exists.
- The demo repeats after a pause. `IntersectionObserver` and page visibility stop motion when the preview is offscreen or the tab is hidden.
- Pause/resume is available so motion is not forced.
- “Try it yourself” cancels automatic motion, exposes editable details and allows a local sample submission.
- The edited project type/details flow into the follow-up and project summary. “Reset animation” restores auto mode.
- Requests / Projects / Files tabs work. Files offers a downloadable sample text brief.
- Demos do not call the production consultation endpoint or contact any real person.
- `prefers-reduced-motion` removes the intro and transitions and avoids automatic demo startup; an explicit start control remains.

The mock is a design target, not a video or a finished screenshot used as the actual UI. Everything interactive in the shipped preview is code.

## Industries and examples

Dedicated static landing pages:

- `/construction/`
- `/real-estate/`
- `/home-services/`
- `/auto-detailing/`
- `/salons/`
- `/fitness/`
- `/accounting/`
- `/property-management/`

The hero automatically selects the relevant scenario on industry pages. The homepage defaults to a website inquiry; its “Start with your industry” section switches scenarios in the same preview.

| Industry | Current scenario |
| --- | --- |
| Construction | Change request → scope review → client approval handoff |
| Real estate | Buyer inquiry → agent assignment → discovery follow-up |
| Property management | Maintenance intake → team review → vendor follow-up |
| Home services | Service intake → organize details → scheduling review |
| Auto detailing | Vehicle intake → scope review → quote follow-up |
| Salons | Service inquiry → review → consultation follow-up |
| Fitness | Trial request → trainer assignment → introduction task |
| Accounting | Client intake → organize needs → discovery checklist |

These use a shared three-stage demonstration framework. They are illustrative handoffs, not fully implemented external CRM, legal approval, booking, pricing or vendor-dispatch systems. Construction's last state is “ready for approval”; the demo does not bind an actual client or price. A production customer's tools, permissions and approval steps would be scoped separately.

The previous fence, cleaning, detailing, salon, fitness and bookkeeping calculators were removed from the public interactive sections during the redesign. Some industry prose still describes estimate-related services that the business can scope; don't confuse that with a currently working pricing engine.

## Current pricing — CAD

All packages have a setup fee **and** monthly service. Monthly service begins at launch. Applicable taxes and third-party costs are extra. Prices are proposed selling prices, not actual active subscriptions or a payment checkout.

| Package | Setup | Monthly | Setup + first 12 monthly payments |
| --- | ---: | ---: | ---: |
| Smart Form | $395 | $59 | $1,103 |
| Quick Automation | $995 | $179 | $3,143 |
| Business Workflow | $2,495 | $349 | $6,683 |
| Website Refresh | $1,495 | $129 | $3,043 |
| Website Relaunch | $3,495 | $199 | $5,883 |
| Portal Starter | $2,495 | $249 | $5,483 |
| Connected Portal | $5,995 | $499 | $11,983 |

Initial scope and monthly allowances are defined in the actual package cards. Preserve those details when editing prices:

- Smart Form: one form, up to 12 fields; monthly submission/delivery test, summary and up to 15 minutes of edits/fixes.
- Quick Automation: one trigger, up to three actions, two supported tools, one straightforward rule; monthly run/connection review, summary and up to 30 minutes of work.
- Business Workflow: one workflow up to five steps, one form up to 12 fields, up to two supported integrations and follow-up/approval logic; monthly tests/report and up to 90 minutes of work.
- Website Refresh: refresh up to three existing pages, typography/spacing/layout cleanup, mobile fixes and existing inquiry-form improvements, with one consolidated revision. Keeps the existing platform, structure, branding and content. Monthly website/form checks, supported platform updates and up to 30 minutes of small edits/fixes.
- Website Relaunch: full design/rebuild up to five standard pages with supplied branding/content and light editing; one inquiry form, basic SEO/redirect map/analytics setup, two revisions and launch handoff. Monthly site/form/platform checks, site-health/traffic summary and up to 60 minutes of edits/fixes. Ecommerce, branding, full copywriting and complex migrations are separate.
- Portal Starter: branded established-platform template, client/admin roles, one supported data source, up to two viewing screens for status/files. One-way viewing; not a custom application. Monthly checks/summary and up to 60 minutes of changes.
- Connected Portal: branded established-platform portal, up to three views, two supported integrations, one request/approval workflow; monthly integration checks/summary and up to two hours of changes.

Contract positioning: month-to-month after launch, 30 days' cancellation notice, separately paid setup, no financed-build balance or early-cancellation penalty. Unused support time does not roll over. No unlimited work, 24/7 monitoring or emergency SLA. Third-party hosting, domains, licences, seats and usage charges are identified separately. Agreed business assets/data/accounts remain the customer's, with a standard handoff; complex migrations are separately scoped.

Pricing category tabs and first-year total toggle work. This first-year total is a comparison, not an annual commitment. Keep calculations and all repeated price copy consistent across nine pages.

## Free consultation and backend

Multiple CTAs open a shared dialog for a free 20-minute consultation. It collects name, work email, business, industry, package interest, budget, availability, challenge and affirmative contact consent. Submission is a request, not a calendar reservation.

`public/consultation.js` posts JSON to `/api/consultations`; Vercel's trailing-slash redirect preserves POST to `/api/consultations/`.

`api/consultations.js` adapts `lib/consultation-handler.js` to `@vercel/blob`:

- Node 24; `@vercel/blob` 2.9.0; function max duration 15 seconds.
- Requires `BLOB_READ_WRITE_TOKEN` supplied by Vercel storage/environment configuration. The token is not in the repository.
- Existing **private** Blob store is named `automationworks-consultations`, region Montreal/YUL1. Keep it private and connected to the existing project.
- Validates method, origin, JSON content type, body length (15 KB), field types/limits, required fields, email and consent. Honeypot `website_url` must remain empty.
- Caps recent submissions per normalized email hash/day by listing a limited private prefix.
- Saves to `consultations/YYYY-MM-DD/<hashed-email-prefix>/<uuid>.json`.
- Returns HTTP 201 with an `AW-…` reference only after an awaited private write.
- No public list/read endpoint for consultation records.
- A clearly marked deployment test record from the earlier backend deployment exists. Do not treat it as a customer, copy private records into source, or delete production data casually.

The latest redesign release verified invalid-request handling without creating a new valid inquiry. Earlier backend deployment had passed a successful production storage test. Python static preview cannot test this API. Do not claim the latest redesign re-tested a new successful storage write.

**Not configured:** email alerts to founders, calendar booking, billing, subscription checkout, CRM sync or an inquiry admin dashboard. The confirmation text says the team will follow up by email, but storing a request does not automatically notify them; this is an operational gap worth addressing next.

## SEO work already shipped

Originally all nine pages were identical HTML and JS changed the title after load. Now each industry page has its own static title, meta description, H1, introduction and useful industry content, available before JavaScript executes.

- Canonical domain is `https://www.automationworks.ca/` with trailing-slash page URLs.
- Vercel `cleanUrls` and `trailingSlash` enabled; non-slash industry URLs redirect permanently.
- `robots.txt` allows public pages, excludes API crawling and points at the sitemap.
- `sitemap.xml` lists all nine canonical pages.
- Open Graph and Twitter metadata use `social-preview.png` (1200 × 630).
- Organization, WebSite and WebPage JSON-LD; industry pages also include Service and BreadcrumbList.
- No fake reviews, star ratings, offices or addresses in structured data.
- Favicon and logo assets are local SVGs.
- Font loading uses head stylesheet links and preconnects rather than a CSS import.
- Skip link, meaningful navigation and basic accessibility improvements.

Search Console verification/sitemap submission was not completed. No ranking or performance score was promised. Static HTTP/crawl checks passed, not a full Lighthouse/Core Web Vitals audit.

## Content truthfulness

The original testimonial layout had clearly labeled future-client placeholders. Those cards and their related FAQ were removed in the redesign. There are no verified customer testimonials ready to publish. Add only real, approved quotes.

No public business email, telephone number or office address has been finalized in this source. Do not invent them. Domain-branded Google Workspace setup was attempted separately but no successful account setup was confirmed; that is not a website dependency and no credential belongs here.

## Files, duplication and maintenance

- `public/style.css` contains legacy base/lower-page CSS and unused older preview rules.
- `public/redesign.css` is loaded after it and provides current overrides. Check specificity before adding more overrides.
- `public/app.js` was rewritten for the new animation/scenarios and no longer runs the old calculators.
- `public/consultation.js` preserves the real form and pricing category behavior.
- Each industry HTML duplicates shared site sections. There is currently no template generator in the production repository. Avoid updating only the homepage and leaving prices or shared copy inconsistent elsewhere.
- `scripts/build.mjs` checks files exist. It does not generate pages or test runtime behavior.
- `vercel.json` also includes nosniff and strict-origin referrer headers.
- `.gitignore` excludes credentials, Vercel local metadata, local dependencies and generated runtime/build files.

## Verification already performed

- Selected mock and desktop implementation reviewed together; text/layout polish adjusted after the first pass.
- Desktop reference viewport: 1488 × 1056. Mobile checked at 390 × 844 with no horizontal overflow.
- Auto demo observed, takeover/editing/submission/reset tested, project data propagation checked.
- Portal tabs and sample brief control checked, construction and real-estate selectors checked.
- Mobile navigation and consultation open/close checked.
- Portal package tab and first-year totals checked.
- No browser console errors observed in checks.
- JavaScript syntax checks passed.
- Nine unique titles/descriptions/H1s, JSON-LD parsing, internal links and canonical sitemap checked.
- After deployment, HTTP responses for all nine pages and new JS/CSS/icon assets matched local source exactly; consultation invalid request returned HTTP 400.
- Vercel dashboard showed the release ready on the custom domain.

## Suggested next work

1. Arrange private, reliable inquiry notifications and a way for founders to review records; test an authorized complete submission without exposing customer data.
2. Connect this GitHub repo to the existing Vercel project and confirm production/preview environment variables.
3. Refine each industry demonstration beyond the shared framework if desired, preserving sample-data boundaries and human approvals.
4. Verify Search Console and submit the sitemap; collect real performance evidence before making performance claims.
5. Consider a small template-generation script to reduce nine-page drift without migrating the whole frontend.

## A useful first prompt for Claude

> Read CLAUDE.md and HANDOFF.md first. This repository is the deployed AutomationWorks website. Preserve the selected design, automatic non-video workflow demo, real private consultation backend, CAD setup-plus-monthly pricing, and static SEO. Inspect the current implementation before changing it. Tell me what you understand and then work on the specific change I request. Do not replace it with a generic template or invent social proof.
