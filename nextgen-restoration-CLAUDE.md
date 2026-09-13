# CLAUDE.md — SporesRUs (sporesrus.com)

This file is the permanent context for this repo. It is loaded into every Claude Code
session automatically — do not restate any of this in prompts written against this repo.

---

## 1. What this project is

A brand-new, ground-up mold remediation website for **SporesRUs**, replacing the currently
unlaunched "Roslyn Mold Solutions" name (that old name has no meaningful web presence and is
being fully abandoned — don't reference it anywhere on the new site). SporesRUs is a
mold-only specialist brand run by the same operator as Next Generation Restoration, but it is
its own site, own identity, own domain (sporesrus.com), and should read as a mold specialist
first — not as a restoration company's side project.

**A named brand risk to manage, not ignore:** "SporesRUs" is a fun, memorable, easy-to-say
name — genuinely a good pick for word-of-mouth and for standing out in search. But mold is a
health-anxiety topic (YMYL — "your money or your life" territory in Google's own quality
guidelines), and a punny name can read as less serious to a homeowner worried about their
kid's asthma. The fix isn't a different name — it's letting the *design and copy* carry all
the credibility weight the name doesn't: certifications and process content above the fold,
clinical-clean visual language, zero jokes in the actual body copy (the pun lives in the name
and the logotype, nowhere else). This file is built around that principle throughout.

---

## 2. Facts — confirm before build, do not invent

- **Brand name:** SporesRUs
- **Domain:** sporesrus.com (confirmed available per Noah)
- **Old name (do not reference):** Roslyn Mold Solutions
- **Phone / email:** left blank/placeholder on purpose for now — Noah wants no real number or
  address wired up yet, and no contact form either (see §7 and §8's `/contact` entry). Render
  the phone and email spots as clearly visible placeholders (e.g. `[PHONE]` / `[EMAIL]`) rather
  than leaving them empty or inventing a number — this also means it's still an open question
  whether this reuses Next Generation Restoration's existing number (516.491.1601 /
  info@nextgenrest.com) or gets its own once Noah is ready to fill it in.
- **Service area:** assumed to be the same NYC tri-state area as Next Generation Restoration
  (NYC boroughs, Long Island, Westchester, NJ, CT) since it's the same operator — **confirm
  this assumption with Noah before building `/service-areas`**, don't ship it unconfirmed.
- **Certifications / licenses / years in business:** not yet supplied. Use bracketed
  placeholders (`[IICRC AMRT CERTIFICATION #]`, `[STATE MOLD LICENSE #]`, `[YEARS IN
  BUSINESS]`) everywhere the research below says these need to appear. Never invent a
  certification the company doesn't actually hold — an unverifiable claim on a health-safety
  site is a liability, not just a copy problem.

---

## 3. Stack

Next.js (App Router) + Tailwind CSS + Vercel. No Supabase needed for this site — there's no
contact form or lead table; contact is a static phone/email display only (see §8's `/contact`
entry). Match Noah's Vilas Studio conventions (TypeScript, `app/` directory, component per
section, Tailwind only, shadcn/ui primitives where useful) for everything else.

---

## 4. Research — what a mold remediation site actually needs (2026 industry sources, paraphrased)

**Trust signals, in order of how much they matter for this specific niche:**
1. Visible, named certifications — IICRC AMRT (Applied Microbial Remediation Technician) and
   WRT (Water Restoration Technician), state mold remediation license where the state
   requires one, and liability insurance that specifically covers pollution/mold work. This
   is repeatedly named as the single strongest trust signal in the category — stronger than
   reviews, stronger than years in business.
2. A stated, plain-English process: inspection → containment → removal → post-remediation
   verification. Buyers in this category are anxious and want to understand *what happens*
   before they commit, not just be told "we remove mold."
3. Real crew photos on real jobs, in PPE, doing visible containment/removal work. Stock
   photography of "a mold spot on a wall" is called out directly as a credibility red flag —
   it signals the company has no real work to show.
4. Reviews and star rating visible sitewide (footer widget or similar), not just on one
   review page — anxious buyers scrutinize credibility on every page they land on, not just
   the one they arrived at.
5. Insurance language stated as its own value prop: many mold jobs trace back to a covered
   water-damage event, and homeowners frequently don't realize remediation may be covered —
   stating this plainly removes a real objection.

**Page architecture that performs, per this research:**
- A dedicated page **per job type/location**, not one generic "mold removal" page: basement,
  attic, crawlspace, bathroom, and HVAC mold each get their own page. Each type has a
  different anxiety (basement = water intrusion, attic = roof leak + insulation, bathroom =
  chronic moisture, HVAC = "it's spreading through my whole house's air").
- A **separate Mold Inspection & Testing page**, distinct from the remediation page. Research
  is specific that this is often the actual first search a worried homeowner makes — they
  want confirmation before they commit to a remediation quote — and a buyer who books an
  inspection converts to a full job at a meaningfully higher rate than a cold remediation
  inquiry. Treat the inspection page as its own conversion funnel, not a subsection.
- Dedicated **service-area/city pages** rather than one generic coverage page — "Mold
  Remediation in [City]" reliably outperforms a single "Service Area" page for this category,
  same pattern as the restoration research above. Build one per major service area from
  Section 2 once that list is confirmed.
- A **Health & Mold** informational page/section — mold is a health topic, and buyers arrive
  via health-anxiety searches ("mold making me sick," "black mold symptoms") as often as
  service searches. Content here must be measured, sourced, non-alarmist, and explicitly
  avoid making a medical diagnosis claim — state facts, recommend professional evaluation for
  actual symptoms, and stop there.
- Insurance & claims content, same pattern as Next Generation Restoration's `/insurance-claims`.
- FAQ addressing the real early-funnel questions: "Is my mold covered by insurance?" "How do
  I know if I actually have a problem?" "Is DIY mold removal safe?" "How long does
  remediation take?" "Do you test after the work is done?"

**What hurts sites in this category specifically:**
- Any claim about health outcomes that reads as a medical/diagnostic promise — this is a
  compliance risk, not just a tone problem, and Google's own guidance treats health-adjacent
  content with extra scrutiny (YMYL). Every health-adjacent sentence in this file is written
  to describe symptoms *reported by others* and recommend professional evaluation, never to
  diagnose.
- Scare-tactic photography or copy that reads as fear-mongering rather than reassuring —
  buyers in this niche are already anxious; the job of the site is to calm and inform, not
  amplify the fear.
- A generic, templated feel — this is exactly where the design system in Section 6 earns its
  keep; a clinical-clean, deliberate visual language reads as more credible than a busy or
  "salesy" one in a health-adjacent category.

---

## 5. Sitemap — 13 pages

1. `/` — Home
2. `/mold-remediation` — the core remediation process page
3. `/mold-inspection-testing` — separate funnel, per research above
4. `/basement-mold-removal`
5. `/attic-mold-removal`
6. `/crawlspace-mold-removal`
7. `/bathroom-mold-removal`
8. `/hvac-mold-cleaning`
9. `/mold-and-your-health` — measured, non-diagnostic health information page
10. `/insurance-claims`
11. `/service-areas`
12. `/faq`
13. `/contact`

---

## 6. Design system

SporesRUs needs its own visual identity, distinct from Next Generation Restoration, even
though they share an owner — a shared look would undercut the "mold specialist, not a side
project" positioning this brand needs. Where NGR leans industrial-trustworthy with a
red-orange urgency accent, SporesRUs leans **clinical-clean and airy**, built around a single
green accent that reads as "clean air / resolved problem" rather than urgency — because the
core emotional arc of this site is anxiety → relief → clean, not disaster → emergency call.

### 6.1 Color — validated with the pitch-deck skill's `check_palette.py` (WCAG + APCA, monitor medium)

| Role | Hex | Use | Contrast (validated) |
|---|---|---|---|
| `bg` (default) | `#F7F9F8` | Page background — a cool, almost-white, evokes clean air | — |
| `surface` | `#EDF2F0` | Cards, callouts | text_primary 15.9:1 |
| `rule` | `#D8E0DC` | Hairline dividers | 1.27:1 (quiet by design) |
| `text-primary` | `#121815` | Headlines, body | 17.0:1 on bg — PASS |
| `text-secondary` | `#454F4A` | Sub-copy | 8.0:1 on bg — PASS |
| `text-tertiary` | `#5B655F` | Meta/caption text | 5.7:1 on bg — PASS |
| `accent` (primary — trust/CTA/"resolved") | `#00875E` | Every primary button, checkmarks, the one accent that means "act / this is handled" | 4.3:1 on bg, 4.5:1 white-on-accent — PASS |
| `accent-2` (semantic only — "before"/hazard state) | `#B25B00` | Used ONLY inside before/after sliders and health-page warning callouts — never as a competing CTA color | 4.5:1 on bg — PASS |
| `on-accent` | `#FFFFFF` | Text/icons on either accent fill | — |

This is a genuine-opposition case per the pitch-deck skill's color reference (Section 2, case
2): "before" (contaminated) vs. "after" (clean) is literally the content of the before/after
sliders. `accent-2` is deliberately **not** used anywhere else on the site — it exists only to
mark the contaminated/hazard state, so it never dilutes what the green accent means.
Colorblind check: accent vs. accent-2 measured at worst-case ΔE 32.5 across protanopia,
deuteranopia, and tritanopia simulation — they remain distinguishable.

Never use pure black or pure white as a surface — `#121815` and `#F7F9F8` are the chosen
near-black/near-white for exactly that reason (see the pitch-deck skill's dark/light-ground
research on halation and overstimulation).

### 6.2 Typography

- **Display / headlines:** Sora (Google Fonts via `next/font/google`) — weight 500–700. Sora
  reads rounder and friendlier than NGR's Space Grotesk, on purpose — this is the brand's one
  license to feel approachable, kept strictly to typography and never to the copy voice.
- **Body / UI:** Inter — 400–500 body, 600 labels/buttons. (Sharing Inter with the NGR site
  is fine; it's a body workhorse font, not a brand signature — the two sites still read as
  distinct because of color, headline type, and radius.)
- **Scale:** same as NGR — H1 36px→56px, H2 28px→40px, H3 22px→28px, body 16px→17px, meta
  13px→14px. Line height 1.15 headlines, 1.6 body.

### 6.3 Spacing, radius, elevation

- Section padding `py-20` mobile / `py-28` desktop, container max-width `1280px`, `px-6`/`px-8`.
- **Corner radius — noticeably softer than NGR, on purpose:** cards & callouts `20px`
  (`rounded-[20px]`), buttons full pill, input fields `14px`, before/after slider frame `24px`
  (`rounded-3xl`). The softer radius across the board is the visual shorthand for "calm,
  resolved, clean" versus NGR's more squared "industrial, urgent" language — a small,
  consistent difference that makes the two sibling sites feel like different companies at a
  glance, which is exactly what this brand needs.
- **Shadow:** one soft token — `shadow-[0_10px_28px_-10px_rgba(18,24,21,0.14)]` — slightly
  softer/lighter than NGR's, reinforcing the "clean air" feel. No stacked border+shadow.
- **Border:** `1px solid #D8E0DC` on cards over `surface` only, omitted on cards over `bg`.

### 6.4 Motion

- **Scroll reveal:** same pattern as NGR (fade up 16px + opacity, 500ms ease-out, 20%
  viewport trigger) — reuse the identical hook/component if this repo shares any code with
  the NGR repo; otherwise rebuild once and use everywhere on this site.
- **Before/after slider:** draggable vertical divider, same interaction pattern as NGR, but
  restyle to this site's radius/color tokens. This is the single most important interactive
  element on the site — every job-type page needs one with real (or clearly placeholder)
  contamination → clean photos.
- **"Clear air" micro-animation (this site's signature moment, not NGR's):** on the Home hero,
  a very subtle particle-drift effect — a handful of soft, low-opacity circular particles
  (representing spores) slowly drifting and fading out as the viewport scrolls past the hero,
  as if the air is clearing. Keep it extremely subtle (max 8–10 particles, low opacity 10–20%,
  slow drift ~20s loop) — the point is a felt sense of "resolved," not a gimmick or a literal
  mold-spore illustration, which would read as alarming rather than reassuring. If this proves
  distracting or heavy on mobile performance, cut it — it's a nice-to-have polish detail, not
  load-bearing.
- **Checkmark reveal:** on the process steps (inspection → containment → removal →
  verification), each step's checkmark icon draws itself in (stroke-dashoffset animation,
  400ms) as it scrolls into view, sequenced 150ms apart across the four steps.
- **Hover:** cards lift 4px + shadow deepens, 150ms. Buttons darken accent ~8% on hover.
- No parallax, no autoplay video, nothing that could read as gimmicky on a health-anxiety
  page — every motion choice above earns its place by reinforcing "resolved and clean," not
  by being flashy for its own sake.

---

## 7. Component specs

**Header (sticky, all pages):** logo left (wordmark, no literal mold/spore iconography in the
logo itself — keep the logotype clean and typographic; a cartoon spore mascot would undercut
the credibility this brand needs more than the pun in the name already risks), nav (`Mold
Remediation`, `Inspection & Testing`, `Mold & Your Health`, `Service Areas`, `FAQ`), a filled
`accent` pill button far right reading "Contact" that links to `/contact` — there's no form
or number to put directly in the header button for now, so it's a link, not a tap-to-call
button, until Noah fills in real contact info.

**Hero (Home):** full-bleed photo of a genuinely clean, bright interior (not a mold photo —
lead with the resolved state, same "outcome not disaster" principle as NGR) with the particle
micro-animation from §6.4. Headline + subhead + two CTAs: primary `accent` "Schedule an
Inspection", secondary outline "Learn Our Process". Every "Schedule an Inspection" CTA on
this site (hero and elsewhere) links to `/contact` — there's no inspection-request form to
submit, so it's a link to the phone/email page, not a form trigger.

**Process strip (Home + `/mold-remediation`):** 4-step horizontal (stacks on mobile):
Inspect → Contain → Remove → Verify, each with the checkmark-draw animation.

**Job-type card grid (Home + `/mold-remediation`):** 5 cards (Basement, Attic, Crawlspace,
Bathroom, HVAC), each linking to its dedicated page, icon + one-line description.

**Before/after slider:** on every job-type page — see §6.4.

**Health-page warning callout:** `accent-2`-tinted contained card (never full-bleed, never
alarmist styling) for the one or two places `/mold-and-your-health` needs to say "if you're
experiencing [symptoms], talk to a doctor" — visually distinct from the reassuring green
accent used everywhere else, and used sparingly.

**Reviews strip:** a compact star-rating + review-count widget in the footer, present
sitewide (per the research in Section 4) — `[REVIEWS WIDGET — CONNECT ONCE GOOGLE BUSINESS
PROFILE REVIEWS EXIST]` placeholder until real reviews are available.

**FAQ accordion:** same pattern as NGR — single-open, `surface` background, rotating `+`/`–`.

**Footer:** on `surface` (lighter than NGR's dark footer — stays within this site's airy
palette rather than switching to a dark section, since SporesRUs never uses a dark band
anywhere, another deliberate difference from NGR). Logo + tagline, service links, area links,
a contact block showing the `[PHONE]` / `[EMAIL]` placeholders (no form), copyright, and —
**required on every page, bottom-most line** — `Site by vilas.studio` linking to
`https://vilas.studio`.

---

## 8. Page-by-page copy

Tone throughout: warm but precise, never jokey (the name carries the personality; the copy
carries the credibility), plain sentences, no manufactured urgency. Any bracketed placeholder
below needs a real fact before ship — do not fill it with an invented one.

### `/` — Home

**H1:** Mold Doesn't Belong Here. Let's Fix That.
**Subhead:** Inspection, remediation, and prevention for homes and businesses across [SERVICE
AREA — confirm]. Certified, thorough, and built to make sure it doesn't come back.
**CTAs:** `Schedule an Inspection` (primary) · `Learn Our Process` (secondary)

**H2 — Worried About Mold? Start With an Inspection.**
Most people don't call about mold until they've already seen it — but by then it's often
spread somewhere you can't see. A proper inspection tells you exactly what you're dealing
with, and exactly what it'll take to fix it, before you commit to anything.

**Process strip:** Inspect → Contain → Remove → Verify

**H2 — Every Space Is Different**
Mold in a basement behaves differently than mold in an attic, a bathroom, or your ductwork —
different moisture sources, different containment needs, different risks if it's handled
wrong. That's why we treat each one as its own job, not a one-size version of "mold removal."
**Job-type grid:** Basement · Attic · Crawlspace · Bathroom · HVAC — each linking out.

**H2 — [CERTIFICATIONS — confirm before writing this section]**
Draft this section once Noah confirms actual certifications held (IICRC AMRT/WRT, state
license, insurance). Do not publish a certifications section with placeholder badges — cut
the section entirely rather than imply a credential that isn't real.

**Closing CTA:** Not sure what you're dealing with? An inspection gives you a straight
answer. `Schedule an Inspection`

---

### `/mold-remediation`

**H1:** How We Remove Mold — Start to Finish
**Intro:** Mold remediation isn't just "cleaning it off." Done right, it's a sequence:
confirm what you're dealing with, seal it off so it can't spread while it's being disturbed,
remove it completely, and verify the space is actually clear once the work is done.
**H2 — Inspect:** We identify the mold, find its moisture source, and determine how far it's
actually spread — including anywhere it isn't visible yet.
**H2 — Contain:** Before removal starts, we seal off the work area so spores can't travel
into the rest of the property during the process.
**H2 — Remove:** Affected materials are removed and treated following industry-standard
remediation protocols.
**H2 — Verify:** Once remediation is complete, we confirm the space meets a clean standard
before calling the job done — not just visually, but tested.
**[Before/After slider placeholder]**

---

### `/mold-inspection-testing`

**H1:** Not Sure If It's Mold? Start Here.
**Intro:** A lot of the time, what looks like mold isn't — and what's actually a problem
isn't always visible. An inspection gives you a clear, honest answer before you spend money
on remediation you may or may not need.
**H2 — What an Inspection Covers:** A full visual assessment of the property, moisture
readings in areas prone to growth, air and/or surface sampling where warranted, and a written
report explaining exactly what we found.
**H2 — What Happens After:** If there's no significant mold present, you'll know that too —
we're not going to recommend remediation you don't need. If there is, the report becomes the
basis for a clear, specific remediation plan.
**CTA:** `Schedule an Inspection`

---

### `/basement-mold-removal`

**H1:** Basement Mold Removal
**Intro:** Basements are the most common place mold shows up, usually because of moisture
that's been sitting unnoticed — a slow foundation leak, poor drainage, or just the natural
dampness of below-grade space. We identify the actual moisture source (not just the mold
itself) so the problem doesn't come right back after removal.
**[Before/After slider placeholder]**

### `/attic-mold-removal`

**H1:** Attic Mold Removal
**Intro:** Attic mold usually traces back to a roof leak, poor ventilation, or insulation
holding onto moisture it shouldn't. We remove the mold and address the ventilation or
moisture issue driving it, so the fix actually holds.
**[Before/After slider placeholder]**

### `/crawlspace-mold-removal`

**H1:** Crawlspace Mold Removal
**Intro:** Crawlspaces trap moisture more than almost any other part of a property, which
makes them one of the most common — and most overlooked — sources of a mold problem that
eventually spreads upward into the living space above. We handle full crawlspace remediation,
including moisture control, so it stays fixed.
**[Before/After slider placeholder]**

### `/bathroom-mold-removal`

**H1:** Bathroom Mold Removal
**Intro:** Bathrooms deal with more chronic moisture than any other room in a property, which
means mold here often keeps coming back even after a homeowner cleans it themselves. We
remove it at the source and identify the ventilation or moisture habit that's letting it
return.
**[Before/After slider placeholder]**

### `/hvac-mold-cleaning`

**H1:** HVAC Mold Cleaning
**Intro:** Mold in ductwork is one of the more serious versions of this problem, because your
HVAC system actively spreads spores through every room it services every time it runs. We
clean and treat affected ductwork and components thoroughly, so your air handling system
stops being part of the problem.
**[Before/After slider placeholder]**

---

### `/mold-and-your-health`

**H1:** Mold and Your Health — What's Actually Known
**Intro:** Mold exposure affects people differently, and it's important to be precise about
what's established versus what isn't. This page is informational, not medical advice — if
you're experiencing symptoms you think may be related to mold exposure, talk to a doctor.
**H2 — Commonly Reported Symptoms:** People exposed to mold sometimes report respiratory
irritation, allergy-like symptoms, or worsened asthma. Sensitivity varies significantly
person to person, and not everyone exposed to mold experiences symptoms.
**H2 — When to See a Doctor:** If you or someone in your home is experiencing ongoing
respiratory symptoms, allergy symptoms, or asthma flare-ups and you suspect mold may be a
factor, a doctor can evaluate that properly — this site can tell you whether mold is present
and remove it, but a medical evaluation is the right step for a health concern itself.
**Warning callout (accent-2, used sparingly):** If you smell a persistent musty odor or see
visible growth, especially near plumbing, roofing, or after any water damage, it's worth
scheduling an inspection — the earlier mold is identified, the less it typically costs to
remediate.
**CTA:** `Schedule an Inspection`

*(Every sentence on this page is written to describe reported experiences and recommend
professional evaluation — never to diagnose or promise a health outcome. Do not add any
sentence claiming mold removal will resolve a specific symptom or health condition; that's
both inaccurate and a real liability. If a future edit to this page does that, flag it.)*

---

### `/insurance-claims`

**H1:** Is Mold Remediation Covered by Insurance?
**Intro:** It depends on the cause — mold resulting from a sudden, covered event (like a
burst pipe) is often covered, while mold from long-term neglect or humidity typically isn't.
We help you figure out which situation applies and handle the claims conversation directly
where it does.
**H2 — We Handle the Claim:** If your mold traces back to a covered water-damage event, we
manage the insurance conversation so you don't have to navigate it alone.
**CTA:** `Schedule an Inspection`

---

### `/service-areas`

**H1:** Serving [SERVICE AREA — confirm with Noah before writing final copy]
Structure identically to NGR's `/service-areas` once the actual coverage area is confirmed —
do not assume it matches NGR's area without confirmation even though it's the same operator.

---

### `/faq`

Write 6–8 entries covering: Is mold remediation covered by insurance? How do I know if I
actually have a mold problem? Is it safe to remove mold myself? How long does remediation
take? Do you test the space after the work is done? What's the difference between an
inspection and remediation? What areas do you serve? Use only facts from Section 2 —
flag anything needing an unconfirmed fact.

### `/contact`

**No contact form on this site for now** — contact is phone and email only, displayed as
large, simple, tap-to-call / tap-to-email blocks. Do not build a form or a Supabase
submissions table for this page.

**H1:** Get In Touch
**Phone block:** large, tap-to-call, `accent` colored — `[PHONE NUMBER — PLACEHOLDER, blank
until confirmed]`.
**Email block:** tap-to-email — `[EMAIL — PLACEHOLDER, blank until confirmed]`.
No other fields, no form, no additional page content required beyond these two blocks and
the page heading.

---

## 9. SEO / schema

- `LocalBusiness` JSON-LD on every page, `areaServed` per Section 2 once confirmed.
- Unique title/meta description per page, built around the specific job type/area.
- Health page (`/mold-and-your-health`) should follow standard YMYL content practices —
  clear, sourced, non-promissory language; this is a place where being conservative in the
  copy protects the business, not just the reader.
- `alt` text on every image, `sitemap.xml` for all 13 routes.

## 10. Rules for every Claude Code session on this repo

- Never invent a certification, phone number, service area, or health claim. Every one of
  those has an explicit placeholder or confirm-first note above — use it.
- The health page never makes a diagnostic or outcome-guarantee claim. Flag any draft that
  does, don't ship it.
- `accent-2` (`#B25B00`) is used only for before/after "contaminated" states and the health
  warning callout — never as a general CTA or decorative color.
- `Site by vilas.studio` (linking to `https://vilas.studio`) appears in the footer on every page.
- Match existing Vilas Studio repo conventions if this repo shares tooling/setup with other
  Vilas Studio projects.
- **If anything is ambiguous, especially the phone/email and service-area confirmations
  flagged above — stop and ask. Don't guess on a health-and-safety business's facts.**
