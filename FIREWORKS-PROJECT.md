# FireWorks Project Handoff — Catering Website 01

## Template summary

- **Demo brand:** Hearth & Table Catering (explicit sample)
- **Industry:** Catering / events
- **Repository:** `colonnamedia/Catering-Site-1`
- **Public preview:** `https://catering-site-1.vercel.app/`
- **Storefront status:** Featured + Available
- **Build price:** **$1,899 one time**

This template is a five-page catering lead-generation website built from the useful menu/presentation patterns in the existing Bistro template, but with a distinct catering information architecture and inquiry workflow. It is not a cosmetic duplicate of the restaurant demo.

## Pages

1. **Home** — industry hero, event types, sample packages, presentation gallery, four-step process, sample service-area structure and CTA.
2. **Sample Menus** — mobile-readable package contents, sample per-guest starting prices, enhancements and allergen disclosure.
3. **Services** — event types plus delivery/drop-off, styled buffet, station and plated-service explanations.
4. **Our Process** — inquiry-to-booking explanation, proposal factors, allergen/accommodation placeholder language and FAQs.
5. **Event Inquiry** — validated local-only demo form with clear non-transmission and non-booking disclosures.
6. **404** — branded fallback page.

## Reusable sections

- Sticky responsive navigation and footer
- Large image-led hero with mobile-safe crop
- Trust / event-type strip
- Package cards with sample-price labeling
- Menu/package detail rows
- Service-format cards
- Editorial image gallery
- Four-step process
- Service-area grid
- Dietary/allergen disclosure block
- FAQ accordions
- Local-only inquiry form
- CTA band

## Inquiry fields

- Name
- Email
- Event date
- Estimated guest count
- Venue or event location
- Event type
- Preferred service format
- Estimated catering budget
- Menu interest
- Dietary needs / allergen questions
- Additional notes
- Required demo acknowledgement

The form uses native browser validation plus a local JavaScript completion state. It has no `action`, API request, email service, database, upload control, storage, availability logic, booking logic or payment component. It explicitly states that nothing is sent or stored and that submission does not hold or confirm a date.

## Primary CTA

**Start your event inquiry** / **Plan an Event** → `/inquiry.html`

## Supported or proposed integrations (not connected)

The static template is provider-neutral. The following are **proposed separately** only after the client selects a provider and supplies client-owned credentials:

- Secure catering proposal / event management platform
- Online ordering platform
- CRM or email routing
- E-signature
- Deposit / payment processing
- Calendar or availability workflow
- Menu CMS
- Analytics and consent tooling

Every live integration requires provider configuration, privacy and policy review, test contacts/orders, delivery/notification checks, payment-mode validation where applicable and end-to-end acceptance testing. No provider is hard-coded or implied by the demo.

## Required client inputs

- Legal business name and approved brand name
- Logo, colors and fonts
- Rights-cleared photography
- Verified menus, ingredients, portions, minimums and pricing
- Confirmed event types and service formats
- Confirmed service areas, mileage/delivery rules and venue limitations
- Real contact details and hours
- Allergen, cross-contact and accommodation practices
- Staffing, rental, tax, gratuity and cancellation policies
- Approved testimonials, credentials and venue/client logos (if used)
- Selected proposal, ordering, CRM and payment providers
- Domain ownership or domain preference
- Privacy policy and any required consent language

## Pricing rationale

### Website build — $1,899 one time

The build price reflects five customer-facing pages, responsive navigation, optimized original hero and supporting imagery, reusable menus/packages, event and service-format content, legitimate service-area structure, editable SEO metadata, sample Caterer schema, detailed local-only inquiry validation and full mobile/responsive QA. This exceeds the $999 minimum because the scope includes multiple distinct pages and a specialized catering intake experience.

### Hosting (separate; annual primary)

- **Small Business:** **$299/year** or $39.99/month
- **Standard:** **$499/year** or $59.99/month
- **Advanced:** **from $899/year** or $99.99/month
- **Domain:** **$20/year**

Hosting, domains and integrations are never discounted as part of build pricing.

## Optional add-ons (separate, priced after scope)

- Additional menu, event or service-area page: $125/page
- Menu CMS / client editing: from $499 setup
- Proposal or CRM routing integration: from $499
- Secure online ordering integration: from $899
- Deposit/payment integration: from $899
- E-signature workflow: from $499
- Photo/video production: quoted separately
- Copywriting beyond storefront customization: quoted separately
- Accessibility or legal review by a qualified third party: quoted separately

Third-party subscriptions and transaction fees are not included.

## SEO and demo schema

- Unique editable page titles and descriptions
- Semantic page headings and internal navigation
- Caterer JSON-LD on the home page, labeled as a sample demo
- Mobile-responsive layout and descriptive image alt text
- `robots.txt` blocks indexing while the demo remains illustrative
- Replace all sample metadata, schema, service areas and URLs before any client launch

## Visual assets

- `assets/hero-catering.webp` — original purpose-generated hero, with headline-safe negative space and mobile focal point.
- `assets/gallery-corporate.webp` — original purpose-generated corporate-event image.
- `assets/gallery-grazing.webp` — original purpose-generated grazing/event-detail image.

All assets are original image-generation outputs created for this catering workflow, then stripped and optimized locally as WebP files (approximately 108–120 KB each). Replace with rights-cleared client imagery when appropriate.

**Hero prompt direction:** Photorealistic editorial catering professional actively finishing an event buffet; subject and food held in the right-center; darker negative space on the left for headline legibility; central mobile-safe focal area; olive, cream, terracotta, natural wood and warm late-afternoon light; no text, logo, watermark or branded product.

## Verification record

- Automated `npm test` checks every page, asset reference, required inquiry field, schema, demo disclosure and price.
- Demo form verified to validate locally without a form action, request API or browser storage.
- Generated hero and gallery assets checked for optimized WebP output and declared dimensions.
- Desktop and mobile visual checks completed against the deployed pages.
- Production deployment, clean routes, navigation and assets checked.
- Storefront thumbnail uses the live hero/template imagery.
- Storefront build price, annual-first hosting tiers, monthly alternatives and domain fee checked.
- Provider gates and demo disclosures checked.

## Commits

- Template repository commit: recorded in GitHub/Vercel deployment history
- Storefront repository commit: recorded in `colonnamedia/fire-works-web-BASE44`

## Future design variants

1. **Modern editorial** — brighter cream palette, fashion-forward typography and sculptural food photography.
2. **Rustic gathering** — warmer wood, hand-lettered accents and farm-to-table imagery.
3. **Corporate clean** — crisp grid, blue/charcoal palette and simplified ordering emphasis.
4. **Luxury wedding** — softer neutrals, serif display type and elevated reception imagery.


