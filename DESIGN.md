---
name: Sociedade Esportiva João Pessoa — Piloto
description: Management pilot plus a public institutional club site for a neighborhood football club, lit like a night match under the floodlights.
colors:
  pitch-dark: "#132B1D"
  pitch-mid: "#1D4530"
  pitch-950: "#0C1D13"
  pitch-700: "#295A3E"
  section-a: "#F5F7F1"
  section-b: "#ECF1E4"
  section-dark: "#15311F"
  chalk: "#F5F7F1"
  card: "#FFFFFF"
  ink: "#12201A"
  ink-soft: "#61655A"
  greige: "#6C6F62"
  on-pitch-warm: "rgba(234,231,213,0.80)"
  line: "#E1E7DD"
  on-pitch: "#F5F7F1"
  floodlight: "#F2A93B"
  floodlight-ink: "#3A2603"
  floodlight-text: "#8A5C0F"
  clay: "#B5622F"
  clay-text: "#8A4620"
  success: "#3E8E5A"
  success-text: "#1F6B3D"
  danger: "#C1473A"
  danger-text: "#A5352A"
  info-text: "#1D4530"
typography:
  display:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.3vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0em"
    textTransform: "uppercase"
  headline:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.7vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0em"
    textTransform: "uppercase"
  title:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
    textTransform: "uppercase"
  body:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "0.83rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
    textTransform: "uppercase"
  programme-name:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(2rem, 0.9rem + 5.6vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "0em"
    textTransform: "uppercase"
  programme-title:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 4.5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
  honour-title:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(2.3rem, 1.1rem + 4.6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0em"
    textTransform: "uppercase"
  programme-folio:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(5rem, 2.5rem + 13vw, 15rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "0em"
    textTransform: "uppercase"
  menu-label:
    fontFamily: "'Anton', 'Arial Narrow', 'Oswald', sans-serif"
    fontSize: "clamp(1.7rem, 1rem + 3.5vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
    textTransform: "uppercase"
rounded:
  xs: "7px"
  sm: "8px"
  md: "9px"
  lg: "12px"
  xl: "18px"
  pill: "20px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.pitch-mid}"
    textColor: "{colors.on-pitch}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 18px"
  button-pix:
    backgroundColor: "{colors.floodlight}"
    textColor: "{colors.floodlight-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.info-text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 18px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "19px 21px"
  kpi:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "18px"
  input:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "11px 13px"
  tag:
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  nav-item-active:
    backgroundColor: "{colors.floodlight}"
    textColor: "{colors.floodlight-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "11px 13px"
  link-enter:
    backgroundColor: "transparent"
    textColor: "{colors.floodlight}"
    typography: "{typography.label}"
    padding: "10px 4px"
  chip-enter:
    backgroundColor: "transparent"
    textColor: "{colors.on-pitch}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "8px 13px"
  site-photo-frame:
    backgroundColor: "{colors.pitch-mid}"
    textColor: "{colors.on-pitch}"
    rounded: "{rounded.lg}"
---

# Design System: Sociedade Esportiva João Pessoa — Piloto

## Overview

**Creative North Star: "Jogo Sob os Refletores" (The Night Match)**

The system is lit like a football match after dark. The structural chrome — top
bar, admin sidebar — is deep **pitch green**; the working surfaces sit on a pale
**chalk** ground carrying the faintest horizontal field marking; a single
**floodlight amber** is the only source of warm light on the screen, and where
it lands (the monogram, the active nav item, a "collect" button) it genuinely
glows. Every heading, folio numeral, big figure and name is set in **Anton** —
one heavy condensed weight, tall caps, near-zero tracking — the block lettering
of a kit number and a stadium end. Small UI labels (nav, tags, buttons, kickers,
form labels) and all body copy stay **Inter**, sentence-case where it reads as a
sentence. The split is temperature and job: Anton shouts a name across the room,
Inter is read up close.

The world spans two surfaces. The **management pilot** (`/entrar`, `/visitante`,
`/socio`, `/admin`) is operational and grounded: large tight headings,
chalk-touchline section breaks, scoreboard KPIs, a laminated membership card. The
**public institutional site** at `/` is the same world at **programme scale** —
one long vertical scroll of five "lit chapters" (História, Conquistas, Elenco,
Estrutura, Contato) framed by the stadium floodlights, oversized fluid display
type, a ghosted folio numeral behind each chapter, one rehearsed load animation
(the floodlights warming up) and then a calm bright page. It presents the club as
an institution — its pitch, its crest, its 2025 title, its squad, its facilities
— in the register big Brazilian clubs use, at this club's scale.

**Imagery.** The first public build was purely typographic. The restructured site
now carries **one real photograph** — the club's own floodlit field — full-bleed
behind the hero scrim, the real crest as a transparent PNG, and **designed-in
framed slots** for player, facility, team, and sponsor images. Where a real file
has not landed yet, the slot shows a quiet, section-toned fill-in placeholder (a
faint-scanline panel with an image-frame glyph and a greige label, or a flat
dashed logo tile), reading as a deliberate reserved space — never a blank, a
broken frame or a fabricated image.

**The elevated system (2nd typography/colour/layout pass).** The display face
moved from Big Shoulders Display to **Anton**; the two-note green grew to a
**four-step scale** (`--pitch-950 → --pitch-700`) plus two pale section grounds
(`--section-a` chalk, `--section-b` pale pitch) and one dark "spotlight" ground
(`--section-dark`); secondary text warmed to a **greige** (`--greige` on light,
`--on-pitch-warm` on dark) instead of a flat neutral-white. On the institutional
site, consecutive sections alternate ground tone, **Conquistas** runs full dark,
each chapter carries an **outlined** folio numeral, and the section compositions
vary (`stack` / `split` / `center`) so the page stops reading the same way twice.

Depth is low but real. Cards and filled buttons rest on a soft **green-tinted
shadow** with a 1px top highlight so they catch the light from above — always
kept over their 1px border. The dark sidebar, the membership card, and the site's
hero / fullscreen menu / footer get their weight from a pitch gradient and
light-stripe texture, not an edge shadow.

**Key Characteristics:**
- Pitch-green chrome, chalk ground with a faint field marking, one glowing amber.
- Condensed uppercase display lettering on every title, label, tag, and button.
- Sentence-case Inter for anything read as a sentence.
- Section breaks drawn as a chalk touchline; KPIs as a scoreboard readout.
- Low green-tinted shadows with a top highlight; filled control = raised,
  outlined control = flush; content cards may rest raised.
- Light and dark themes from one token set; `on-pitch` foreground never flips.
- The public site is the same world at programme scale: fluid display type, folio
  numerals, one authored "floodlights warm up" entrance over a real photo, then calm.
- Real photography sits behind the hero scrim or inside framed slots; missing
  images show a visible placeholder, never a fabrication.

## Colors

A three-note palette: deep pitch green for structure, chalk for the working
ground, floodlight amber for the one thing that matters on a screen. Everything
else is a functional tint. The institutional site adds **no colors** — it uses
`--pitch-dark → --pitch-mid` for the hero photo scrim, the honour plate
(`linear-gradient(150deg, --pitch-mid, --pitch-dark)`), the fullscreen menu and
the footer; `--chalk` for the chapter ground; `--on-pitch` / `-soft` / `-faint`
for every foreground on those dark surfaces — **including the footer link-column
headings**; `--floodlight` confined to the active route's nav underline, the
"Seja Sócio" CTA, the **Conquistas honour-plate year**, the "Em breve" pill and
every hover accent; `--floodlight-text` for the one
quiet Contato login link; and a `~30%` `--pitch-800` `-webkit-text-stroke` for
the outlined folio numerals.

### The green scale
Four steps, deepest to palest: `--pitch-950 #0C1D13` · `--pitch-900 #132B1D`
(= pitch-dark) · `--pitch-800 #1D4530` (= pitch-mid) · `--pitch-700 #295A3E`.
Plus three institutional-site **section grounds**: `--section-a` (chalk, the base)
· `--section-b #ECF1E4` (pale pitch, the alternate) · `--section-dark #15311F`
(the one "night" section — Conquistas). All flip in dark mode (the section
grounds collapse toward near-black greens). The honour plate now runs
`--pitch-700 → --pitch-900` with a 1px light border so it lifts off the dark
section under it.

### Primary
- **Pitch Green** (`#1D4530`, deep variant `#132B1D`): the club's structural
  color. Fills the top bar and the admin sidebar (as a `#132B1D → #1D4530`
  vertical gradient), the primary button, court-toggle and court-slot active
  states, and the membership card. On the site it is the hero photo scrim, the
  Conquistas honour plate, the fullscreen menu overlay, the footer, and the fill
  behind every not-yet-filled photo slot (player / facility / team) and player
  silhouette. In light mode it is also the "balance" figure in the finance summary.
- **Floodlight Amber** (`#F2A93B` on ink `#3A2603`): the single spotlight. See
  the One Voice Rule below.

### Secondary
- **Clay** (`#B5622F`): booked / occupied court slots and reserved event days —
  the color of a taken pitch. Used only in the scheduling grids.

### Neutral
- **Chalk** (`#F5F7F1`, dark theme `#0E1712`): the page ground everything sits
  on, and the fill of form inputs.
- **Card White** (`#FFFFFF`, dark theme `#17231C`): raised working surfaces —
  cards, KPIs, table rows, timeline items, announcements, and the site's player
  cards and facility cards.
- **Ink Green** (`#12201A`, dark theme `#EAF0EA`): primary text.
- **Sideline Grey** (`#57685D`, dark theme `#9FB2A6`): secondary text, labels,
  captions, table headers, placeholder text, the site's lede, prose, and
  data-grid labels. A greyed green, never a pure grey.
- **Chalk Line** (`#E1E7DD`, dark theme `#243329`): all 1px borders, dividers,
  table rules, the section touchline, and the site's chapter dividers, card
  borders, and data-grid rules.
- **On-Pitch** (`#F5F7F1`, **fixed** — never flips): foreground on any
  intrinsically dark-green surface — the top bar, the dark sidebar, the primary
  button, the membership card, the active court toggle, and the site's hero,
  menu, honour plate, and footer (including its column headings). Its `-soft`
  (`rgba(245,247,241,0.72)`) and `-faint` (`rgba(245,247,241,0.62)`) steps carry
  the site's nav links at rest, the "Entrar" chip label, the honour year,
  sponsor-slot text, close buttons, and fine print.

### Status
Base hues (`#3E8E5A` green, `#C1473A` red, `#B5622F` clay) color chart series,
dots, and large figures. Small text — tags, table amounts, stock labels,
timeline categories — uses the darker/lighter **`-text`** variant so it clears
4.5:1 on its own tint in both themes:

- **Field Green** text `#1F6B3D` light / `#7DBF97` dark: paid / on-time / available.
- **Red Card** text `#A5352A` light / `#E39289` dark: overdue / maintenance / low stock.
- **Floodlight** text `#8A5C0F` light / `#F1C07A` dark: the "waiting" status, the
  member's own slot, the light-sidebar active item, the site's Contato login link.
- **Clay** text `#8A4620` light / `#E0A47D` dark: booked slots, reserved days.
- **Info** text `#1D4530`: the "info" tag, ghost-button text, and the site's
  facility tag pills (`--info-text` on `rgba(29,69,48,0.1)`).

### Data-viz accents (admin dashboard only)
Two new tokens, added for the `/admin` Visão Geral indicator dashboard (KPI icon
chips, the revenue donut, the occupancy progress bars, the weekly bar chart):
`--chart-blue #2F6FED` light / `#7CA6FF` dark, and `--chart-cyan #0EA5B7` light /
`#4DD9E8` dark. They exist only to give multi-series admin charts enough
distinct, vibrant hues — never app chrome, nav, or buttons. The dashboard's
third and fourth accents reuse existing tokens rather than adding more:
`--floodlight` doubles as "orange" and `--success` as "green" in these charts —
the One Voice Rule below still holds for floodlight everywhere *outside* this
chart palette.

### Named Rules
**The One Voice Rule.** Floodlight amber appears on no more than ~10% of any
screen. Its sanctioned homes in the app: the "SE" monogram, the active navigation
item, the dunning action ("Gerar PIX"), the member's own reservation in a grid,
the "waiting" status tag. On the site: the **active route's nav underline**,
the **"Seja Sócio" CTA** (hero, nav, footer — the club's one conversion, always
amber-filled and glowing, → `/contato`), the Conquistas honour-plate year, the
marquee `•` separators, the "Em breve" / "Documento em breve" status pills, and
every **hover accent** (nav links, menu underline, social-icon and "Entrar"-chip
hover borders — the "Entrar" chip itself is a discreet outline, not amber). Where it lands as a
solid or a text mark it carries a soft warm glow (`--glow-floodlight` or
`text-shadow: 0 1px 12px rgba(242,169,59,0.5)`) so it reads as a light source. It
is never a heading color, a decorative rule, a footer-column heading, or a second
body accent. Its rarity is the effect — the three CTA placements are the *same*
button (same label, same target), not three accents.

**The Quiet-Login Rule.** On the public site, login is present on every surface
but never the loud call to action. The nav and footer "Entrar" are **outlined
chips** — transparent, `--on-pitch-soft`, a 1px `rgba(245,247,241,0.24–0.28)`
border, amber border+text on hover only. The Contato link uses the calmer
`--floodlight-text`, not the glowing amber. The full glowing-amber EnterLink
treatment is reserved for the fullscreen mobile menu.

**The Greyed-Green Rule.** Secondary text is always tinted, never a neutral grey.
On light surfaces it is `--ink-soft` — now a warmer **greige** (`#61655A` light,
`#A8AC9C` dark); `--greige` is its lighter alias for small labels. On the site's
dark surfaces (footer, hero lede, honour line, Conquistas lede) secondary text is
`--on-pitch-warm` (`rgba(234,231,213,0.80)`) — a warm off-white, **not** the
flat `--on-pitch-soft` white it replaced. The whole neutral ramp leans green,
now a touch warm.

**The Fixed-Foreground Rule.** A surface that is dark green in *both* themes
takes its text from `--on-pitch` / `--on-pitch-soft` / `--on-pitch-faint` (or
`rgba(245,247,241,·)`), never `--chalk` or `--card` — those flip with the theme
and would vanish on the dark chrome in dark mode.

## Typography

**Display Font:** Anton (fallback: Arial Narrow, Oswald, sans-serif) — one weight
(400), loaded from Google Fonts. `font-synthesis: none` globally so nothing
faux-bolds it; declarations that still say `font-weight: 700` are harmless no-ops.
**Body / utility Font:** Inter (fallback: system-ui, -apple-system, sans-serif).
**Accent Font:** Fraunces italic (`--font-serif`, opsz, weight 400–500) — a
high-contrast old-style serif, used **only** on 1–2 emphasis words inside an
Anton heading, lowercase, `text-transform: none`, `~0.92em`. The `.site-accent`
class: "Nossa *história*", "Quem *apoia*", "Fale com o *clube*". Its rarity and
the register clash (blocky sans → flowing serif) is the effect — never body
copy, never more than a word or two.

**Character:** Anton is a single heavy condensed weight with tall, even caps —
the block lettering of a kit number, a stadium marquee, a protest banner. It has
more mass and authority than a two-axis condensed face and is unmistakable as a
club's voice. It wants **near-zero tracking** (`0 → 0.005em`) and a hair more
leading than Big Shoulders did — `line-height` around `0.98–1.05`, never `0.9`.
Inter stays neutral and dense for everything read up close. The pairing is
"stadium marquee over a match-day programme".

### Hierarchy
- **Display** (Anton 400, `clamp(2rem → 3rem)`, line-height 0.98,
  tracking `-0.02em`, **UPPERCASE**): page `h1`, KPI and finance figures, the day
  number in timeline items, the membership-card name, the brand wordmark. The
  login wordmark pushes to `clamp(2.4rem → 3.9rem)`.
- **Headline** (Anton 400, `clamp(1.15rem → 1.45rem)`, UPPERCASE):
  in-page section titles (`h2.section-title`), followed by a chalk touchline.
  38px above / 16px below.
- **Title** (Anton 400, 1rem, UPPERCASE): card, callout, and
  role-card headings (`.card-title`). On the site the same recipe at `1.05–1.25rem`
  carries player names and facility names.
- **Body** (Inter 400, `0.83rem`, line-height 1.5): paragraphs, list rows, table
  cells, form values. Subtitles cap at ~56ch; the site's `.site-lede` runs
  `clamp(1rem → 1.18rem)` / 1.55 at ~58ch, `.site-prose` at `0.98rem` / 1.62.
- **Label** (Inter 700, `0.62–0.72rem`, tracking `0.06–0.18em`, UPPERCASE): table
  headers, KPI kickers, tags, nav, buttons, captions, form-field labels, the
  site's nav links (`0.7rem` / `0.09em`), data-grid labels
  (`.site-mark dt`), facility tags, footer column headings (`0.64rem` / `0.1em`),
  the hero CTA (`0.08em`), and carousel captions.

### The programme scale (institutional site only)
A fluid `clamp()` register **above** the app ramp, same face, same UPPERCASE,
same tracking discipline. It is legitimately continuous — do not enumerate it
into discrete steps.
- **Programme name** (`clamp(2rem → 5.2rem)`, line-height 0.96, tracking
  `-0.025em`): the hero club name, set two lines in a column, each line its own
  clip-wipe on load.
- **Programme title** (`clamp(2rem → 4rem)`, line-height 1, tracking `-0.03em`):
  each chapter's `h2`, revealed by a clip-path wipe when the chapter is lit.
- **Honour title** (`clamp(2.3rem → 4.6rem)`, line-height 0.9, tracking `-0.04em`,
  color `--on-pitch`): the "TETRACAMPEÃO INVICTO" headline on the Conquistas
  honour plate — the one place programme-scale display sits on a dark pitch
  surface. Its **year** is now `--floodlight` with a warm glow
  (`clamp(2rem → 3.8rem)`, `tabular-nums`) — the one sanctioned amber figure, the
  number that matters.
- **Folio numeral** (`clamp(5rem → 15rem)`, line-height 0.78, tracking 0):
  **outlined**, not ghost-filled — `color: transparent` with a
  `clamp(1px → 2px)` `-webkit-text-stroke` at ~30% `--pitch-800` (`rgba(245,247,241,0.2)`
  on the dark Conquistas section). It reads as a structural identity mark, one
  per chapter (Conquistas included, "02"), behind the content (`z-index: -1`
  inside the chapter's `isolation: isolate`), on its `data-align` side or centred
  for `data-layout="center"`, drifting on scroll. Always `aria-hidden`,
  `user-select:none`, `pointer-events:none`.
- **Menu label** (`clamp(1.7rem → 2.8rem)`, line-height 1, tracking `-0.02em`):
  the fullscreen-menu section list.
- **Data-grid value** (`.site-mark dd`): Display face 700, `1.1rem`, UPPERCASE,
  tracking `-0.005em` — the value in the história / contato fact grids.

### Named Rules
**The Scoreboard Rule.** Every title, label, tag, and button is condensed
uppercase. The only lowercase type on screen is Inter body copy — paragraphs,
subtitles, list-row text, table cell values, input text and placeholders. If a
person reads it as a *sentence*, it is sentence-case Inter; everything else is a
scoreboard caption.

**The Programme-Scale Rule.** The public site may set the club name up to `5.2rem`
fluid, chapter titles up to `4rem`, the honour-plate headline up to `4.6rem`, and
may drop a folio numeral up to `15rem` behind the content — but only on the
institutional surface, only in the Display face, only UPPERCASE, and the giant
numeral is always a faint decorative ghost (~11% pitch tint, `aria-hidden`),
never a readable figure. The app's Operate surfaces keep the `clamp(2rem → 3rem)`
Display ceiling.

**The Touchline Rule.** A section title (`h2.section-title` in the app,
`.site-chapter-title` + `.site-chapter-line` on the site) is a word followed by a
1px Chalk Line rule filling the remaining width. It is a grouping device, not
decoration — every section / chapter break uses it, nothing else does. On the
site the line draws itself (`scaleX(0 → 1)`) as the chapter is lit.

**The Two-Voice Rule.** Anton is for numbers and names read across the
room — headings, metrics, the wordmark, every label. Inter is for sentences.
Never set body copy or a data-table value in the display face.

**The Tabular Rule.** Any cell holding a number, date, or currency is
`font-variant-numeric: tabular-nums` so columns align. Folio numerals and the
honour year on the site follow the same rule.

## Layout

- **The field marking:** `body` carries a fixed-attachment
  `repeating-linear-gradient` — a 1px chalk line every 116px at ~2% opacity
  (`--field-mark`). The whole app sits on a faintly-marked pitch. It must stay
  at the threshold of perception; if you can *read* it as stripes, it is too
  strong. The site's hero, menu, honour plate, and footer restate the same motif
  at their own cadence (`rgba(245,247,241,0.045–0.05)` lines every 34–96px over
  the pitch gradient).
- **App frame:** a full-width top bar (44px, pitch-dark) always on top. Below it,
  role areas choose their own shell. **Operate shell** (sócio, admin): a fixed
  228px sidebar beside a fluid `.main` padded `36px 44px 64px`.
  **Persuade/simple shell** (login, visitante): no sidebar; `.main.narrow`
  centers content at max 880px.
- **Content rhythm:** `h1` + subtitle, then stacked sections. Section titles get
  38px above / 16px below — more space before a heading than after it.
- **Grids:** KPI row is 4-up, or 3-up for stock. Overview splits `1.4fr / 1fr`.
  Finance summary is 3-up.
- **Density:** compact. 14px gutters between cards, 6–8px inside tight groups,
  ~13px body. This is a data tool, not a landing page.
- **Breakpoints:** `560px` hides the top-bar caption and tightens padding.
  `720px` collapses the login role grid and the site's multi-column footer to one
  column. `860px` is the app's main shift — the sidebar becomes a horizontal
  scrolling strip, all multi-column grids collapse. `1160px` is the site's nav
  shift — the centred route links hide and the "Menu" button (fullscreen menu)
  appears.
- **Scroll containment:** wide tables (`min-width: 600px`) and the weekly court
  grid (`min-width: 760px`) scroll inside their own `overflow-x` wrapper; the
  page body never scrolls sideways. The site sets `overflow-x: clip` on its root.

### The institutional site (`/`, `/o-clube`, `/historia`, `/diretoria`, `/estrutura`, `/transparencia`, `/futebol/*`, `/noticias`, `/quem-apoia`, `/contato`)
- **Real pages, one shell.** `SiteLayout` (a React Router layout route) wraps
  every public page: one fixed top bar, `<main>`, the footer, and a
  `ScrollToTop` that runs in a `useLayoutEffect` before the page's reveal
  effects: `window.scrollTo({top:0, behavior:'instant'})` on a plain route
  change (always instant — CSS smooth scroll would stall on the transition's
  layout shift), or — when the URL carries an anchor whose element exists
  (`/historia#conquistas`) —
  `getElementById(hash).scrollIntoView({block:'start', behavior:'instant'})`,
  respecting each chapter's `scroll-margin-top: calc(var(--nav-h) + 8px)`; on a
  cold load it re-anchors every 80ms until the target's position settles
  (fonts/images), aborting the moment the user scrolls. No scrollspy — the
  active nav item is whichever route matches (`NavLink`). `scroll-behavior:
  smooth` (CSS) only under `prefers-reduced-motion: no-preference`.
- **The pages.** `/` = **HomePage** (the video hero, shown at once, the
  marquee, then `HomeHistory`, `HomeStructure` — a coverflow preview —,
  `HomeNews` — a real three-story news preview —, `HomeSquad`
  — a 5-card team photo deck — and `HomeSupporters` — the 3-tier sponsor wall
  (all slots reserved, no real brands); each a *preview* linking deeper, *not*
  the whole site).
  **O Clube is a hub + four dedicated routes.** `/o-clube` (`OClubePage`,
  `.site-oc`) is an institutional **welcome hub**: a full-bleed `.site-oc-hero`
  (the `campo-fundo.jpg` field under a `--pitch-950` gradient, "Institucional"
  kicker + a `clamp(2.8 → 6rem)` "O Clube" Anton title, cleared below the opaque
  fixed nav) → a **"Saiba mais sobre o clube"** chapter (confirmed-facts lede +
  `.site-prose` mission text + a `.site-oc-gallery` 2×2 grid of real patrimônio
  photos, `clubPatrimonio`) → a **"Palavra da diretoria"** `split` chapter (a
  `ComingSoon` for the message + the `diretoria.jpg` `.site-oc-portrait`) → an
  **"Explore o clube"** chapter with a 2×2 grid of `.site-oc-card` links to the
  four routes. Those routes: **`/historia`** (`HistoriaPage` — a **dark-themed**
  page, see below, not the light `.site-page` convention), `/diretoria`
  (`DiretoriaPage` — `diretoria` governance blocks `.site-org` with "Composição
  em breve" pills + the portrait; **no invented names**), `/estrutura`
  (`EstruturaPage` — `FacilitiesSection`), `/transparencia` (`TransparenciaPage`
  — `TransparencySection`, docs now include "Estatuto social" and "Regimento
  interno").
  **Futebol is five dedicated dark-theme routes** (no `/futebol` landing —
  `/futebol` `<Navigate replace>` → `/futebol/elenco`). All share `FutLayout`:
  a compact `FutHero` (`.site-fut-hero`, `--pitch-950` + a faint corner
  `--floodlight` radial, "Futebol" kicker + `clamp(2.4 → 4.4rem)` Anton title +
  lead) and `FutSection` (`.site-fut-block`, `useReveal`, 1180px `.site-fut-inner`,
  `scroll-margin-top: calc(var(--nav-h) + 8px)`). **`/futebol/comissao-tecnica`**
  and **`/futebol/diretoria`** (`FutebolStaffPage kind=`) — a `repeat(4,1fr)` →
  3 → 2 → 1 grid of `.site-fut-staff-card` bust cards (4/5 photo, hover
  `translateY(-5px)` + shadow + amber border), Anton uppercase name (`.is-empty`
  faint "A definir"), `--floodlight` role. **`/futebol/elenco`** (`ElencoPage`) —
  `rosterGroups` (Goleiros/Defensores/Meias/Atacantes) each an Anton title with
  an amber rule + count pill; players in an `auto-fill minmax(170px)` grid of
  `.site-fut-player` (3/4, `object-fit:cover`, a `::after` bottom gradient, a
  GIANT faint Anton shirt number absolute top-right, name + position bottom).
  While no athlete has a `grupo` set, all 22 sit under one "Elenco 2025" group
  that auto-splits once the secretariat fills `grupo`. **`/futebol/calendario`**
  (`CalendarioPage`) — championship filter chips (`.is-on` amber), fixtures
  grouped by `"Mês de AAAA"` (Anton, amber), each a `.site-fut-cal-row` 4-col
  grid (date/torneio · centred crest–scoreline–crest confront · venue + TV ·
  amber-outline "Ver detalhes" → `/noticias`); collapses to a stacked card
  ≤900px. A crestless team renders an initial monogram. **`/futebol/titulos`**
  (`TitulosPage`) — an `.site-fut-honour` plate (`achievement`) over an
  `auto-fill minmax(240px)` grid of `conquests` photo cards. `/noticias` and
  `/quem-apoia` = `ComingSoon` placeholder pages. `/contato` = `ContactSection`. Light interior
  pages wrap their chapters in `.site-page`, whose first `.site-chapter` gets
  `padding-top: calc(var(--nav-h) + clamp(36px → 96px))` so the title clears the
  fixed bar (on `.site-oc` the hero does that). (`NewsSection`,
  `SupportersSection`, `HistorySection`, `AchievementsSection` are kept in the
  tree, unmounted, holding structured placeholders / earlier layouts for later.)
- **Nav menu** (`navMenu`): Inicial `/` · **O Clube ▾** `/o-clube` · **Futebol ▾**
  (neutral) · Notícias `/noticias` · **Quem Apoia ▾** `/quem-apoia` · Contato
  `/contato`. História is no longer a top-level item — it lives in the O Clube
  flyout. **Futebol is a neutral parent** (`noNav: true`): a non-navigating
  `<span class="site-nav-parent">` (cursor default, no underline) that only opens
  its dropdown on hover/focus — desktop and mobile (`<p class="site-menu-item
  is-parent">`, faint label). Every other label is a real link to its page;
  items with `children` add
  a caret and a **hover / focus-within dropdown** (`.site-nav-group`): a
  `--pitch-900` @ 93% panel, subtle light border, `12px` radius, backdrop blur
  and `--shadow-lift`, fading + sliding down (`translateY(-8px → 0)`, 200ms) with
  an invisible `::before` bridge so the hover survives the gap. Drop links are
  light uppercase (`600 / 0.66rem / 0.07em`), roomy hit areas, and light up
  amber on hover/focus (text + a faint tint + a `scaleY` amber accent bar).
  Children — **O Clube:** História `/historia` · Diretoria `/diretoria` ·
  Estrutura `/estrutura` · Transparência `/transparencia` (each its own route);
  **Futebol:** Comissão técnica `/futebol/comissao-tecnica` · Diretoria de
  futebol `/futebol/diretoria` · Elenco `/futebol/elenco` · Calendário
  `/futebol/calendario` · Títulos `/futebol/titulos` (each its own route);
  **Quem Apoia:** Patrocinadores · Parceiros. Off the amber **Seja Sócio** CTA (`memberCtaTo` → `/contato`)
  and the discreet **Entrar** chip, which are unchanged. The fullscreen mobile
  menu repeats the tree: each `.site-menu-block` a parent `.site-menu-item` with
  an indented `.site-menu-sub` of `.site-menu-subitem` links.
- **Marquee** (`Marquee.jsx`). A full-bleed `--pitch-950` band on the home page
  after the hero, 1px light top/bottom rules, an infinite `translateX(-50%)`
  scroll of a doubled Anton-uppercase track (`Sociedade Esportiva João Pessoa ·
  Desde 1932 · Jaraguá do Sul · Futebol · Tradição · Comunidade · Tetracampeão ·
  Invicto 2025`) at 46s linear, `•` separators in `--floodlight`. Pauses on
  hover; static under reduced motion. Decorative (`aria-hidden`).
- **Hero.** A full-bleed looping muted `<video>` (`src/assets/video-hero.mp4`,
  falls back to the field-photo `poster` / `<img>` when the file is absent),
  playing from the first second under a **directional gradient** — `~0.94`
  pitch-dark at the left edge easing to `~0.12` at the right, plus a soft
  top/bottom vignette. A left-aligned text column (`max-width: 620px`) holds the
  two-line Display club name (`clamp(2.4rem → 5rem)`), one `--on-pitch`
  institutional support line (`heroLede`, weight 500), and the primary **amber
  CTA** "Seja Sócio" (`--floodlight` fill, `--floodlight-ink`, `--shadow-amber`
  + `--glow-floodlight`) linking to `/contato`. Home page only. Under 768px the
  gradient goes uniform-dark.
- **No opening sequence.** `.site-hero` is a plain `min-height: 100svh`
  flex-centred section — shown in full on first paint, everything interactive,
  page scroll never blocked (no `overflow` lock anywhere). The earlier
  scroll-scrubbed crest-curtain intro (splitting crest over an opaque veil, the
  `--intro` extra height, the `--p*` scroll vars, `data-intro` hold state) was
  removed at the user's request; `Hero.jsx` keeps only the muted-video autoplay
  effect. `.site-hero-glow` (amber corner bloom), `.site-hero-lines` (chalk
  touchline rule) and the directional `.site-hero-overlay` gradient stay as
  static ambience.
- **Chapter as programme spread.** `max-width: 1120px`, centered, vertical
  padding `clamp(88px → 160px)`, `clamp(20px → 56px)` inline. `isolation: isolate`
  + a `::before` at `z-index:-2` painting a **full-bleed** (`100vw`, centred)
  section ground; consecutive sections alternate `--section-a` / `--section-b`,
  with **Conquistas on `--section-dark`** (its chapter title, touchline and lede
  flip to `--on-pitch` / `--on-pitch-warm`; the framed carousel controls flip to
  light-on-dark). No inter-chapter border — the alternating tone is the seam.
- **Chapter layout variants** (`data-layout`):
  - `stack` (default) — head + body in one column; `data-align="right"` also
    right-aligns the head and reverses the touchline origin (Estrutura).
  - `split` — body is a 2-col grid `1.12fr / 0.88fr` (`.site-split-main` +
    `.site-split-aside`), collapsing to one column ≤860px. História: prose left,
    a bordered `.site-marks-stacked` panel right. Contato: intro + marks left, a
    `.site-contact-card` ("Fale com o clube") right.
  - `center` — head, touchline and body centred; the touchline becomes a short
    `clamp(56px → 96px)` centred rule; the folio centres behind the title.
    Conquistas only.
  - `data-density="compact"` — an orthogonal modifier that trims a chapter's
    vertical padding to `clamp(64px → 116px)` so a light, placeholder-only
    section keeps a presence proportional to its content. Transparência and
    Notícias carry it; the folio, ground and layout grammar are unchanged.
- **Chapter bodies** (now distributed across the route pages — see *The pages*
  above; the per-section design is unchanged):
  - **Nossa História** (`HomeHistory`, home, `id="home-historia"`) — a
    full-bleed green section (`--pitch-900`, `min-height: 50svh`), **an ordinary
    section in normal flow — no pin, no sticky, no oversized height, no
    scroll-progress**. A `.site-hh-grid` of two columns (`1fr / 1.08fr` ≈ 48% /
    52%, `align-items: stretch`, stacks ≤900px): **left** `.site-hh-media` —
    `camponovoJP.png` filling the whole column (`align-self: stretch`, no
    aspect-ratio or max-height, so it matches the text block's height; the
    `<img>` is `position:absolute; inset:0; object-fit:cover`). No overlay, no
    vignette, no frame. On mobile it keeps a `16/10` ratio so it doesn't
    collapse when stacked. **right** `.site-hh-text` — light on green: eyebrow ("—
    Nossa História", short amber rule), two-line Anton title with `1932` in
    Fraunces italic `.site-accent`, a `.site-hh-lead`, a `.site-hh-stats` row
    (`1932` / `4x` / `90+` over faint labels, `1px` top rule), and a `.site-more`
    link to `/historia`. **Entrance** (see Motion grammar): fired once by
    `useReveal` when the section enters — the photo fades + `scale(0.95 → 1)`,
    the text runs the standard `.site-stagger` cascade (badge → title → lead →
    stats → link) at tightened timing. Stable once shown; reduced motion / no-JS
    show it complete.
  - **Nossa Estrutura** (`HomeStructure`, home, `id="home-estrutura"`) — a
    preview of the facilities directly under Nossa História, same `--pitch-900`
    ground (set on `.site-struct::before`; `.site-struct` itself drops the
    `.site-chapter` max-width/padding), an inner `1180px` column with a `1px`
    top hairline dividing it from the section above. Head: amber-rule eyebrow
    ("— Patrimônio do clube"), Anton `.site-struct-title` ("Nossa Estrutura"),
    a `.site-struct-sub` line. The six spaces then sit in a **3D coverflow
    carousel** (`.site-struct-deck`, `perspective: 1500px`): the active card
    upright and full-opacity with a `--floodlight` hairline border + glow, the
    two neighbours each side `rotateY(±32/40deg) scale(0.84/0.68) translateZ`
    receding, dimmed by opacity **and** a `--pitch-950` scrim (`::after`); the
    sixth (blind spot of the ring) parked invisible. Each card
    (`clamp(300→420px)` wide, content-height, centred in the `clamp(410→500px)`
    deck) is **a large contained photo rectangle over the card body** — not a
    full-bleed poster: `.site-struct-cover-photo` is a `4/3`, `border-radius:
    14px`, `overflow: hidden` block (~285px tall / ~61% of the card at the max
    size) inset by the card's `clamp(14→18px)` padding, holding the real space
    photo (`facilities[].foto` — `camponovoJP.png`, `Quadra socyte.jpg`,
    `Chopana.jpg` ×2, `salao 1/2.jpg`; `object-fit: cover`, `PhotoGlyph` +
    "Foto em breve" only as fallback); below it in normal flow sit the amber tag
    row (first two
    `facilities[].detalhes`), the Anton name and a 3-line-clamped desc (no veil —
    the text is no longer over the image). **Looping** — `ringOffset` gives every card its
    shortest signed distance; `go()` wraps mod 6; blind-spot card gets
    `transition: opacity` only so it never slides across the stage. **Controls**
    (`.site-struct-controls`): amber outline chevrons + six dots (active dot
    `--floodlight`, `scale(1.45)`). **Navigation**: pointer drag / swipe (live
    `--drag` offset on the track, `data-dragging` kills its transition mid-drag,
    46px commit threshold), click a side card to centre it, `←/→` keys on the
    focusable deck. Closes on a `.site-more` link "Conhecer toda a estrutura" →
    `/o-clube`. Data from `homeStructure` + the shared `facilities` array — no
    facts not already on `/o-clube`. **Entrance** (`useReveal`, one-shot): head,
    deck and closing link fade + `translateY(22px)` as blocks (60 / 150 / 340ms
    delays, 540ms) — done ≈900ms. **Card motion** is CSS `transform`/`opacity`
    transitions on the strong `--ease-out` curve (~540ms) — no spring/physics
    library is in the project, so the decelerating curve stands in for one.
    **Reduced motion**: the deck collapses to a native horizontal scroll-snap
    strip of upright 3:4 cards, controls hidden, `reduced` in JS also drops the
    `far` state so every card stays reachable. `:root:not(.js-reveal)` shows it
    complete. Narrower perspective + cards ≤600px.
  - **Notícias & atualidades** (`HomeNews`, home, `id="home-noticias"`) — a news
    preview closing the dark lower third of the home page, same `--pitch-900`
    ground + `1px` top hairline as the two sections above. Head: amber-rule
    eyebrow ("— Fique por dentro"), Anton `.site-hnews-title-lg` ("Notícias &
    atualidades"), a `.site-hnews-subtitle`. **Real content now** (`homeNews`,
    supplied by the club — the "Conteúdo ilustrativo" pill is gone): the Estadual
    2026 quarter-final, the free-football social project, Kleber Rangel as new
    gerente. `.site-hnews-grid` is a flex row: one `.site-hnews-card.is-feature`
    (photo `aspect-ratio 16/10` capped `clamp(220→300px)`, big Anton title,
    3-line summary) beside a `.site-hnews-side` column of two compact horizontal
    cards (33%-wide photo left, 2-line title + 2-line summary right). Each card
    is a `<Link to="/noticias">` (`aria-label` = title) with a real cover photo
    (`item.foto`, `position:absolute; inset:0; object-fit:cover`; falls back to
    the gridded "Foto em breve" placeholder if a slot has none), a discreet
    bordered category tag, an **optional** date slot (only the feature carries
    one), title, summary, and a `.site-hnews-cue` "Ler notícia →" whose arrow
    nudges `translateX(4px)` on card hover (amber `::after` ring fades in too).
    Closes on a `.site-more` link "Ver todas as notícias" → `/noticias`.
    **Entrance** (`useReveal`, one-shot):
    head + closing link fade + `translateY` as blocks (60 / 420ms); the three
    cards cascade `translateY(24→0)` + fade (`460ms`, delays 140 / 220 / 300ms).
    Reduced motion / `:root:not(.js-reveal)` show it complete. ≤900px the
    feature goes full-width with the two cards in a row below (vertical mini),
    all stacked ≤560px.
  - **Nosso elenco** (`HomeSquad`, home, `id="home-elenco"`, between Notícias
    and Quem apoia) — a two-column team preview on the `--pitch-900` ground +
    `1px` hairline, `align-items: center`, stacks ≤900px. **Left**
    `.site-team-text` (`.site-stagger`-style cascade, 5 children): amber-rule
    eyebrow "— Nosso elenco", Anton `.site-team-title` "S.E. João Pessoa", a
    `.site-team-lead`, three bordered institutional badges (Categoria amadora ·
    Elenco principal · **Tetracampeão invicto 2025** — confirmed facts only, the
    brief's "Temporada 2026" swapped for the real title), and a `.site-more`
    link "Conhecer elenco completo" → `/futebol/elenco`. **Right** `.site-team-media`:
    a wide `.site-team-deck` (`aspect-ratio 16/12.4`, `overflow: hidden`,
    `border-radius: 18px`, `cursor: pointer`, `tabIndex 0`) holding a
    `.site-team-stack` of **5 cards** absolutely stacked at the bottom
    (`aspect-ratio 16/9`). Each card cycles a `data-pos` 0–4: front upright, the
    rest `translateY(-8 → -28%) scale(0.945 → 0.79)` + fading, alternating tone
    (`data-pos` 1/3 lift to `--pitch-700`). Card = a **real action photo**
    (`homeSquad.photos[i]` — the club's title-celebration shots, `position:
    absolute; inset:0; object-fit:cover`; the `0N` counter + "Foto em breve"
    only show if a slot has no photo) + an amber `.site-team-card-badge` "SEJP em
    campo" bottom-left. **Advance**
    (click the deck / drag left past 46px / `←→` `Enter` keys / autoplay every
    4.2s): the front card gets `.is-leaving` — `translateX(-116%) rotate(-7deg)`
    + fade, clipped by the deck — while `data-pos` 1 slides up to front;
    `SLIDE_MS 520`, `animating` ref guards re-entry. Autoplay pauses on hover /
    focus / hidden tab / reduced motion. Below: five `.site-team-dot`s
    (`role="tab"`, active `--floodlight` + `scale(1.45)`) and an `aria-live`
    "Foto N de 5". **Entrance** (`useReveal`): text children + media fade +
    `translateY(22px)` (`80–360ms` / media `200ms`). **Reduced motion**: no
    autoplay, `.is-leaving` drops the transform (cards cross-fade in place),
    text shown. No animation library — CSS transitions on `data-pos` + `.is-leaving`.
  - **Quem apoia** (`HomeSupporters`, home, `id="home-quem-apoia"`) — the
    sponsor wall, last section before the footer, same `--pitch-900` ground +
    `1px` hairline, **centred** (`text-align: center`). Head: centred amber-rule
    eyebrow ("— Quem apoia"), Anton `.site-spon-title`, a discreet
    `.site-spon-note` pill "Espaços reservados". Then `.site-spon-tiers` — three
    `.site-spon-tier`s in the big-club hierarchy, each a small **amber** tracked
    label (`color-mix(--floodlight 78%, --on-pitch)`, `0.22em`) over a
    `flex-wrap`, centre-justified `.site-spon-row` of logo slots that **shrink
    per tier**: `is-master` `clamp(148→216px)` ×2, `is-official`
    `clamp(116→152px)` ×4, `is-partner` `clamp(88→116px)` ×6. Each slot renders
    `slot.logo` as an `<img>` — `filter: brightness(0) invert(1); opacity: .8`,
    hover (pointer/hover only) → `filter:none; opacity:1; scale(1.05)` — or,
    while `slot.logo` is null (**all of them for now** — no real sponsors, the
    "não inventar patrocinadores" rule), a dashed-frame `.is-empty` slot with a
    faint fill and one of six abstract `MARKS` glyphs (`currentColor`,
    `rgba(245,247,241,.52)` → `--on-pitch` + `scale(1.05)` on hover). No real
    third-party brand names anywhere. Closes on a `.site-more` link "Seja um
    apoiador" → `/contato`. Data: `homeSupporters` (`makeSlots(n)`). **Entrance**
    (`useReveal`, one-shot): head, each tier, and the link fade + `translateY`
    progressively — `60 / 180 / 280 / 380 / 480ms` (a fade *per category*, per
    the brief). Reduced motion / `:root:not(.js-reveal)` show it complete.
  - **O Clube hub** (`/o-clube`) — hero + "Saiba mais" (lede + mission
    `.site-prose` + `.site-oc-gallery` 2×2 photo grid) + "Palavra da diretoria"
    (`split`: `ComingSoon` + `.site-oc-portrait`) + "Explore o clube"
    (`.site-oc-cards`: a 2×2 grid of white `.site-oc-card` links — Anton label +
    `--ink-soft` line + amber "Acessar →" that nudges on hover — to `/historia`,
    `/diretoria`, `/estrutura`, `/transparencia`).
  - **`/historia` — a full dark-theme page** (`HistoriaPage`, `.site-hist`,
    `background: var(--pitch-950)`; not a `.site-page`/`Chapter` layout). Its own
    section grammar: a full-bleed **hero** (`campo-fundo.jpg`, `grayscale(0.55)
    brightness(0.42)` + a `--pitch-950` gradient + a low amber corner glow,
    "Desde 1932" kicker, `clamp(2.8 → 6.4rem)` "NOSSA HISTÓRIA" Anton title);
    then `.site-hist-block` sections (`useReveal` per section, 1120px inner,
    hairline dividers, `.site-hist-eyebrow` + `.site-hist-h2` heads):
    **`#historia` timeline** — `.site-hist-line`, an amber vertical rule with
    `--floodlight`-ringed dots, three `.site-hist-mark`s (1932 fundação · décadas
    seguintes · era atual & projetos — confirmed facts, missing founder/title
    names flagged as "será publicado"); **Identity** — a `1fr 1fr`
    `.site-hist-id-grid` (stacks ≤900px): the crest + verde/branco text, and the
    **`HinoPlayer`** (`site-hino` — big round `--floodlight` play/pause,
    decorative bar "waveform" that pulses on play + a `scaleX` amber progress
    line + seek-on-click, `mm:ss / mm:ss`; renders a disabled "Áudio em breve"
    state while `history.identity.hinoAudio` is null); **`#conquistas` —
    `HistoryReel`** (see Motion grammar); **Memorial** — a 6-tile
    `.site-hist-leaders` grid of `PlayerSilhouette` placeholders ("Registro em
    breve", no invented presidents) + a `.site-hist-gallery` 3-col grid of real
    club photos under a `grayscale(1)` B&W treatment that goes colour + `scale(1.06)`
    on hover. `scroll-margin-top` on `.site-hist-block`/`.site-hist-reel` so the
    `#historia` / `#conquistas` anchors land below the nav.
  - **Elenco** (`stack`) — `.site-lede` note, then `.site-squad`
    (`auto-fill minmax(150px, 1fr)`); every 7th card spans 2 columns with a
    `16/10` crop so the grid changes rhythm (uniform 2-col ≤520px). Missing
    photos show the `PlayerSilhouette` **contained** (`meet`), centred in a
    tinted frame — an assumed placeholder, never a stretched crop.
  - **Diretoria** (`/diretoria`, `stack`) — `.site-lede-lg`, then `.site-org`:
    three `.site-org-block` cards (Diretoria executiva / Conselho fiscal /
    Conselho deliberativo — name + what it does + a "Composição em breve" amber
    pill), then the `.site-oc-portrait.is-wide`. **No invented names, cargos or
    photos of people.**
  - **Estrutura** (`/estrutura`, `stack`) —
    `.site-lede`, then
    `.site-facilities` (`repeat(2, 1fr)`, one column ≤560px) of six spaces
    (Campo · Quadra society coberta · Choupana 01 33 m² · Choupana 02 50 m² ·
    Salão 01 140 m² · Salão 02 411 m²). The **field** and **Salão 02** run
    full-width as horizontal `.site-facility.is-feature` cards, bookending a
    balanced 2×2 of the four compact cards — size encoding which spaces matter
    most. Photo boxes are capped (`max-height: clamp(150px → 240px)`) so a
    pending-photo slot never dominates its card.
  - **Transparência** (`/transparencia`, `stack`, `compact`) — `.site-lede`,
    then a `.site-doc-list` of category rows (Estatuto social · Regimento
    interno · Prestação de contas · Balanço financeiro · Atas de assembleia ·
    Editais — each with a "Documento em breve" status pill). Structure ready for
    the real documents; nothing fabricated, no dead affordance.
  - **Notícias** (`/noticias`, `center`) — a `ComingSoon` placeholder (an amber
    "Em breve" pill + one line of context). The full `NewsSection` "mural"
    (`.site-news` featured-first grid, `.site-news-flag` "Aguardando publicação",
    no invented dates) stays in the tree for when real posts arrive.
  - **Quem Apoia** (`/quem-apoia`, `center`) — a `ComingSoon` placeholder. The
    full `SupportersSection` (two `.site-supporters-block`s of flat dashed **5:2**
    logo tiles, a "Fale com o clube" invitation) stays in the tree for the real
    sponsor / partner logos.
  - **Contato** ("Fale com o *clube*", `split`) — `.site-lede` + a
    `.site-marks-stacked` of Telefone / WhatsApp / E-mail / Endereço (all "A
    confirmar") and **Instagram** (`@sociedadejoaopessoa`, the one real
    `.site-mark-link`); the aside is the `.site-contact-card`.
- **Nav.** One fixed bar, `--nav-h` tall (88px desktop / 72px ≤600px) — no
  secondary contact/hours strip above it. **Transparent only over the home
  hero**; on every other route (`pathname !== '/'`) it is forced opaque so its
  light text stays legible over the pale page grounds. Over the hero it also has
  a `nav-h + 64px` top-to-bottom `rgba(10,26,17,0.55 → 0)` gradient scrim
  (`::before`); past 40px scroll (home only) it gains `.is-scrolled` —
  `background: rgba(10,26,17,0.86)`, `backdrop-filter: blur(12px) saturate(1.2)`,
  a `rgba(245,247,241,0.12)` bottom hairline, 320ms `--ease-out`, scrim fades
  out. **Left:** the real crest PNG at `clamp(38 → 48px)` wide (a `<Link>` home),
  vertically centred, beside "S.E. João Pessoa". **Centre:** `navMenu` —
  Inicial · O Clube ▾ · Futebol ▾ · Notícias · Quem Apoia ▾ · Contato — as
  `NavLink`s, three of them wrapped in a `.site-nav-group` that opens a
  hover/focus dropdown (see *Nav menu* above). The link matching the current
  route carries `--on-pitch` + the 2px amber underline (route match, never
  scroll). **Right:** the primary **amber CTA** "Seja Sócio" (`--floodlight`
  fill, `--shadow-amber` + glow, → `/contato` via `memberCtaTo`), the outlined
  "Entrar" chip, and below 1160px a "Menu" button; the centre links hide below
  1160px.
- **Fullscreen menu.** `position: fixed; inset: 0`, pitch gradient + scanline
  overlay, opacity/visibility transition (300–320ms `--ease-out`), focus-trapped
  dialog, `overflow-y: auto`, body scroll locked while open, closes on route
  change. `navMenu` as a table-of-contents of big Anton `NavLink`s (active
  route → amber label + underline); a group's children follow as an indented
  `.site-menu-sub` of smaller Anton `.site-menu-subitem` links (amber on
  hover/focus). A `.site-menu-actions` block closes it — the amber "Seja Sócio"
  CTA and the discreet outlined "Entrar no sistema" chip.

### Motion grammar (institutional site)
Curves are the established `--ease-out` (`cubic-bezier(0.23,1,0.32,1)`) and
`--ease-in-out` (`cubic-bezier(0.77,0,0.175,1)`). Every chapter reveal is gated
on a `js-reveal` class set on `<html>` at boot, so a failed bundle shows all content.
- **The hero has no entrance.** It paints in full immediately — the only hero
  motion is the looping muted video (paused under reduced motion). The crest
  curtain / veil / scroll-scrub opening was removed at the user's request.
- **The home history entrance** (`HomeHistory`) is **not a scroll animation** —
  it is the ordinary *Being lit* section entrance below, just faster. `useReveal`
  (IntersectionObserver) sets `data-shown` once when the section enters. The
  **photo** fades `opacity 0 → 1` + `scale(0.95 → 1)` over `640ms`. The **text**
  runs `.site-stagger` on `.site-hh-text`: `translateY(22px → 0)` + `opacity
  0 → 1`, `440ms` per element, delays `120 → 380ms` (badge visible ~150–250ms,
  most by ~500ms, done by ~800ms). The section is normal height — no pin, no
  scrub. Stable afterward; reduced motion / no-JS skip straight to shown.
- **Being lit (chapter entrance).** Fired once by an IntersectionObserver
  (`useReveal`, also resolves on instant jump / already on-screen / reduced
  motion): the title clip-path wipes up (720ms), the touchline `scaleX`es
  left-to-right (720ms, 120ms later), and body children fade+translateY in on a
  **capped 5-step** stagger (560ms, delays 220 → 500ms; everything past the 4th
  shares 500ms).
- **Folio parallax.** `animation-timeline: view()` drift of `±7vh`, wrapped in
  `@supports` **and** `prefers-reduced-motion: no-preference`.
- **Structure coverflow.** The `HomeStructure` carousel (see *The pages → Nossa
  Estrutura*) moves cards on `transform` + `opacity` CSS transitions, `~540ms` on
  `--ease-out` — the decelerating curve substitutes for a spring (no motion
  library in the project). Six-card loop via `ringOffset`; the blind-spot card
  transitions opacity only so it never crosses the stage. Drag applies a live
  `--drag` translate to the track with its transition suppressed (`data-dragging`);
  46px commits a step. Reduced motion swaps the whole 3D deck for a native
  scroll-snap strip and hides the controls.
- **Home news cascade** (`HomeNews`). Same *Being lit* pattern: `useReveal` sets
  `data-shown`; head + closing link fade + `translateY(20px)` as blocks, the
  three cards fade + `translateY(24 → 0)` over `460ms` at `140 / 220 / 300ms`
  delays. Card hover: the `::after` ring border fades to amber (`240ms`) and the
  "Ler notícia" arrow `translateX(4px)` (`200ms`). No pin, no scrub.
- **Team deck** (`HomeSquad`). A 5-card stack; the front card leaves on
  `translateX(-116%) rotate(-7deg)` + fade (`520ms --ease-out`, clipped by the
  deck's `overflow: hidden`) while the next slides up from `data-pos` 1. Driven
  by click / drag-left (46px) / arrow keys / autoplay (`4200ms`, paused on
  hover, focus, hidden tab, reduced motion). An `animating` ref blocks
  re-entry mid-slide. Reduced motion: no autoplay, no fling — cards cross-fade.
  CSS transitions only, no library.
- **History reel** (`HistoryReel`, `/historia` Conquistas). A **vertical** focus
  reel over `conquests`: the active shot centred `scale(1)` / opacity 1 /
  `border-radius: 18px`, the previous (above) and next (below) `scale(0.9)` /
  opacity 0.42 partly out of the `overflow: hidden` stage, the rest parked
  invisible. Advancing (`go(1)`) slides everything up. Driven by up/down
  chevrons, click a neighbour, `↑↓`/`PageUp/Down` keys on the focusable stage,
  a vertical drag (44px commit, live `--drag` on the track), and autoplay
  (`5000ms`, paused on hover/focus/hidden tab/reduced motion). `520ms --ease-out`
  transform / `440ms` opacity — the strong decel curve stands in for the spring
  the brief named (no Framer Motion in the project). Six-shot loop via
  `ringOffset`. Reduced motion: only the active shot shows, no slide.
- **Sponsor wall fade** (`HomeSupporters`). `useReveal` → the head, then each of
  the three tiers, then the closing link fade + `translateY(20px)` in sequence
  (`60 / 180 / 280 / 380 / 480ms`) — one step per category. Logo hover (gated
  `hover: hover and pointer: fine`): mono → colour (`filter:none`, `opacity:1`)
  + `scale(1.05)`, `300ms --ease-out`. No pin, no scrub.
- **Gallery crossfade.** The `Carousel` swaps slides on a 600ms `--ease-out`
  opacity transition (not keyframes — retargets on rapid nav). Autoplay advances
  every ~5.2s and pauses on hover, keyboard focus, a hidden tab, or reduced
  motion; a play/pause control, prev/next arrows, dot picker, arrow keys and
  swipe all drive it. The bleed variant (retained but not currently mounted)
  adds a one-shot 6.8s Ken Burns (`scale(1.05 → 1)`) on the active slide,
  `no-preference` only.
- **Reduced motion.** A full `prefers-reduced-motion: reduce` path neutralizes
  every clip-path, transform, and infinite animation; the menu keeps a 120ms
  linear fade; the carousel cuts between slides at 160ms with no autoplay and no
  Ken Burns.

<!-- Testing note (not a design rule): Playwright screenshot capture hangs on
pages carrying scroll-driven `animation-timeline: view()` folio animations. The
animation itself is correct and `@supports` / reduced-motion guarded; capture the
hero and mobile rasters with the folio drift disabled or via a shorter viewport. -->

## Elevation & Depth

A low, deliberate elevation system. Depth on a raised surface is always three
layers together: **tone** (a `#FFFFFF`/`#17231C` card on the chalk ground), a
**1px Chalk Line hairline**, and a **soft green-tinted drop shadow + 1px inner
top highlight** (`inset 0 1px 0 rgba(255,255,255,0.6)`). Never shadow alone.

The admin sidebar, the membership card, and the site's hero / fullscreen menu /
footer are the exception: their weight comes from a pitch gradient plus
`repeating-linear-gradient` light-stripe texture, not an edge shadow. Court-grid
slots, calendar cells, inputs, the site's chapters, its `.site-marks` data grid,
and its nav stay shadowless. The site's **framed media and content cards** —
player cards, facility cards, the 16:9 team-photo frame — carry the resting
`--shadow-card` over their 1px border; player cards lift on hover
(`translateY(-3px)` + `--shadow-card-hover`) under `@media (hover)`. The
Conquistas **honour plate** is a dark pitch-green surface that additionally takes
`--shadow-lift` — the one shadowed dark surface on the site.

### Shadow Vocabulary
- **Card** (`--shadow-card`): top highlight + `0 1px 2px / 0 4px 12px` at ~5–7%
  ink-green (dark mode black at ~40%). Every resting card, KPI, finance box,
  timeline item, announcement, doc row, court toggle, calendar cell, and the
  site's player cards, facility cards, and team-photo frame.
- **Card hover** (`--shadow-card-hover`): interactive cards, paired with a
  `translateY(-3px)` lift — login role cards (amber warm cast) and site player cards.
- **Lift** (`--shadow-lift`): the membership card and the site's honour plate —
  the deepest shadow in the system.
- **Button** / **Button hover** (`--shadow-btn` / `--shadow-btn-hover`): tighter
  and darker than the card shadow; the button also rises 1px on hover.
- **Button active** (`--shadow-btn-active`, `inset 0 2px 4px`): the shadow turns
  inward and the button drops 1px — a click reads as a press.
- **Amber** (`--shadow-amber` / `--shadow-amber-hover`): a warm amber cast under
  the PIX button. The floodlight, made physical.
- **Glow** (`--glow-floodlight`, `0 2px 10px rgba(242,169,59,0.42)`): under the
  monogram (app and site nav), the active dark-sidebar nav item, and the
  member's own court slot.

### Named Rules
**The Grounded-Shadow Rule.** Every shadow is green-tinted (black in dark mode),
has a real vertical offset and a soft blur, and sits under an element that also
has a 1px border. No pure-black shadows on light surfaces, no `box-shadow: 0 0`
halos, no hard offset blocks. Depth is a few pixels, not a diorama.

**The Floodlight-Glow Rule.** Amber never sits flat. The monogram, the active
nav block, the PIX button, the member's own slot, and the site's fullscreen-menu
EnterLink each carry a soft warm shadow (box or text) so the amber reads as
*lit*, not just filled. Only amber glows — green and neutral surfaces get the
plain card shadow. (The site's outlined "Entrar" chips do not glow — see the
Quiet-Login Rule.)

**The Raised-vs-Flush Rule.** Filled *controls* (primary, PIX) are raised: shadow
at rest, a 1px lift on hover, an inset press on `:active`. Outlined controls
(app ghost button, the site "Entrar" chips) are flush — no shadow until hover.
Inputs, the site nav, chapters, and the `.site-marks` grid are flush or recessed.
Content *cards* — app cards, KPIs, and the site's player / facility / media
cards — may rest raised on `--shadow-card`; raised-at-rest is fine for a card,
never for a control.

**The Lift-on-Touch Rule.** Interactive cards respond to hover with a
`translateY(-3px)` and the hover shadow (app role cards add an amber border
shift). Motion plus shadow together, only in response to input.

## Shapes

- **Corner language:** softly rounded, scaling with element size. Slots and
  buttons `8px`, the site "Entrar" chips and sponsor-slot boxes `7–8px`, nav
  items and toggles `9px`, the social-icon containers `9px`, cards / KPIs /
  timeline items / site player cards `12px`, the site facility cards and
  team-photo frame `14px`, the login role cards `14px`, the honour plate `16px`,
  the membership card `18px`. Status pills and chips are fully rounded (`20px`),
  as are the facility tag pills. Focus rings on the site round their offset
  outline at `3–4px`.
- **Borders:** exactly 1px, Chalk Line (or `rgba(245,247,241,·)` on dark site
  surfaces), on every card, frame, input, table rule, grid cell, chip, and site
  chapter/data-grid divider. Two exceptions: a `3px` colored `border-left` on the
  sócio "situação" callout and on announcements (lifted from the pinned
  prototype), and a `1px dashed rgba(245,247,241,0.22)` border on the not-yet-filled
  footer **sponsor slots** — a placeholder affordance, not a general form option.
- **Silhouette:** rectangles with gentle corners. No clipping as decoration, no
  angles, no organic shapes. Clip-path appears only as *motion* (the hero and
  chapter title wipes, the hero field-lines reveal), never as a static shape.

### Drawn marks
- **Arrow** (`src/components/site/Arrow.jsx`) — an 18×10 inline SVG,
  `stroke: currentColor`, `stroke-width: 1`, `fill: none`, `aria-hidden`. Slides
  `translateX(4px)` on parent-link hover. Matches the 1px CSS scroll-cue chevron
  in the hero.
- **Player silhouette** (`PlayerSilhouette.jsx`) — a head-and-shoulders shape
  drawn in `--pitch-mid` tints (14% ground, 50% figure), `aria-hidden`,
  decorative. Fills a player card's 4:5 photo area until a real `squad[].foto`
  lands; the player's name sits below as text.
- **Social icons** (`SocialIcon.jsx`) — outlined-stroke SVGs (`fill: none`,
  `stroke: currentColor`, `stroke-width: 1.5`, rounded caps/joins, `18px`) in
  `38px` rounded-square containers (`9px` radius, 1px `rgba(245,247,241,0.2)`
  border, amber border+icon on hover). Custom-drawn to the Arrow's stroke
  language — not an icon font or package.
- **Faux-QR** on the membership card — a deterministic 25×25 inline-SVG module
  grid, literal colors so it survives dark mode.

## Components

For each component, lead with a short character line, then specify shape, color
assignment, states, and any distinctive behavior.

### Buttons
- **Shape:** `8px` radius, `11px 18px` padding, `0.72rem` bold **uppercase**
  label, `0.04em` tracking. Effective height ≥40px.
- **Primary:** solid Pitch Green fill, `--on-pitch` text, raised on
  `--shadow-btn`. The default confident action.
- **PIX / dunning:** solid Floodlight Amber fill, floodlight-ink text, warm
  `--shadow-amber` cast — the one amber button, reserved for "collect money from
  a late member".
- **Ghost:** transparent fill, 1px Chalk Line border, `--info-text`, **flat**
  (no shadow until hover, then the border shifts to amber) — secondary actions.
- **Hover:** opacity `0.95`, shadow grows, button rises `translateY(-1px)`.
- **Active:** `translateY(1px)` + inset shadow — a click reads as a press.
- **Focus:** the shared 2px amber outline. **Disabled:** opacity `0.5`, shadow removed.

### EnterLink (site login, three registers)
The site's persistent route into the pilot (`/entrar`, via a View-Transition
cross-fade where supported). It renders in three deliberately different weights:
- **Nav / footer "Entrar" chip** (`.site-nav-enter` / `.site-footer-enter`) —
  the primary register. Transparent, `0.66rem` bold UPPERCASE `0.09em`
  `--on-pitch-soft`, 1px `rgba(245,247,241,0.24–0.28)` border, `7px` radius,
  `8px 13px` padding. Border and text go `--floodlight` on hover only. No glow,
  no fill — see the Quiet-Login Rule.
- **Fullscreen-menu link** (`.site-menu-enter`) — `0.8rem` bold UPPERCASE
  `--floodlight`, the full directional-bloom `text-shadow`; hover shifts toward
  `--floodlight-text`. The one glowing amber on the site.
- **Contato inline link** (`.site-contact-login-link`) — `--floodlight-text`,
  weight 600, in a sentence; hover to `--info-text`. The quietest register.

### Chips / Tags
- **Status tag:** fully rounded pill, background at ~14–18% of the status hue,
  the matching **`-text`** variant for the label, no border. `0.68rem` bold
  uppercase, `0.03em` tracking. Set: `ok` / `late` / `soon` / `info`.
- **Facility tag** (site): a fully-rounded pill, `--info-text` on
  `rgba(29,69,48,0.1)`, `0.62rem` bold uppercase `0.04em`, `5px 10px` — spec
  facts on a facility card ("gramado natural", "300 m²", "climatizado").
- **The Fixed Vocabulary Rule.** App status is only ever one of the four status
  tags. Do not invent a new status color or a bare colored dot for state.

### Cards / Containers
- **Corner:** `12px` (`14px` facility cards & role cards, `16px` honour plate,
  `18px` membership card).
- **Background:** Card White / dark `#17231C` for content cards; pitch gradient
  for the honour plate.
- **Shadow:** `--shadow-card` (drop + top highlight) at rest, **plus** the 1px
  border — always both. Interactive cards swap to `--shadow-card-hover` + lift;
  the membership card and honour plate use `--shadow-lift`.
- **Padding:** `19px 21px` (`18px` KPIs, `18px 20px` facility body,
  `clamp(32px → 60px)` honour plate).

### KPI (scoreboard readout)
- Order top to bottom: **kicker** (`.kpi-label` — `0.66rem` uppercase, `0.09em`
  tracking, `--ink-soft`), **figure** (`.kpi-value` — display face,
  `clamp(2rem → 2.7rem)`, `line-height:0.9`, `-0.02em`), **indicator**
  (`.kpi-trend` — a 7px square in the trend color, the signed delta). No pill
  background on the trend.

### Inputs / Fields
- **Style:** 1px Chalk Line border, `8px` radius, filled with Chalk so the field
  reads recessed. `caret-color` amber.
- **Label:** `0.68rem` uppercase `--ink-soft`, `0.06em` tracking, stacked above,
  7px gap. The value itself is sentence-case Inter (`text-transform:none`).
- **Focus:** the shared amber outline. **Disabled:** after submit, alongside a
  green `.form-note` confirmation.

### Navigation
- **App top bar:** pitch-dark strip; left = mini monogram + caption (hidden
  <560px), right = uppercase role chip + "Trocar de acesso" text button.
- **App sidebar nav:** `0.84rem` medium links, `9px` radius, 3px gap, `11px 13px`
  padding. *Dark (admin):* rest `rgba(on-pitch,0.72)`; active a solid amber block
  with floodlight-ink text **and** `--glow-floodlight`. *Light (sócio):* rest
  `--ink-soft`; active a 20% amber tint with `--floodlight-text`.
- **App mobile (<860px):** horizontal scrolling row, 6px gaps.
- **Site top bar (`.site-nav`):** one fixed bar, `--nav-h` tall (88px / 72px
  ≤600px). Transparent over the home hero (behind a `nav-h + 64px`
  `rgba(10,26,17,0.55 → 0)` scrim; `rgba(10,26,17,0.86)` + `blur(12px)` past 40px
  scroll); **forced opaque on every other route**. Enlarged crest
  (`clamp(38 → 48px)`) + "S.E. João Pessoa" left; six centred UPPERCASE
  `NavLink`s with a 2px amber underline on the **route match** (no scrollspy) —
  O Clube / Futebol / Quem Apoia carry a caret and a hover/focus dropdown
  (Futebol is a neutral non-navigating parent); an
  outlined "Entrar" chip right, plus a "Menu" button below 1160px (centre links
  hide).
- **Site fullscreen menu:** pitch-gradient dialog, scanline overlay, the
  `navMenu` tree — big Anton `NavLink`s with an amber hover/active-underline
  wipe, each group's children as an indented sub-list; closes on route change.
  Actions: the amber "Seja Sócio" CTA and a **discreet outlined "Entrar no
  sistema"** chip (not amber — One Voice). Focus-trapped, body scroll-locked,
  `Esc` to close.

### Chapter (site signature component)
A `<section>` at `max-width: 1120px`, `clamp(88px → 160px)` vertical padding,
`isolation: isolate` with a `::before` full-bleed section ground (consecutive
sections alternate `--section-a` / `--section-b`; Conquistas `--section-dark`).
Parts: an **outlined folio numeral** (`clamp(5rem → 15rem)`, `-webkit-text-stroke`
~19% `--pitch-800` so it stays a ghost even where a title crosses it,
`z-index:-1` behind the content, on its `data-align` side or centred,
scroll-drift, `aria-hidden`; every chapter incl. Conquistas), an
UPPERCASE Anton **title** that clip-wipes up when lit, a **touchline** that
`scaleX`es in behind it (short + centred when `data-layout="center"`), and a
**body** whose composition follows `data-layout` (`stack` / `split` / `center`)
with a capped 5-step fade+rise stagger. Entrance fires once via
IntersectionObserver and degrades to fully-shown without JS or under reduced motion.

### Honour plate (site signature component)
The Conquistas centerpiece — a lifted statement block on the dark section,
`max-width: 780px`, centred. `linear-gradient(150deg, --pitch-700, --pitch-900)`,
1px `rgba(245,247,241,0.14)` border, `18px` radius, `--shadow-lift`, a faint 34px
scanline `::after`. Stacked: the honour title
(`clamp(2.5rem → 5rem)`, `--on-pitch`), the **year** in glowing `--floodlight`
(`clamp(2rem → 3.8rem)`, `tabular-nums`), an `--on-pitch-warm` line of prose.
Followed by the conquests `Carousel` (framed variant).

### Carousel / gallery (site signature component)
A crossfading photo gallery. **Framed variant:** 16:9, `14px` radius, 1px Line
border, `--shadow-card` — sits in the content flow (Conquistas titles gallery).
**Bleed variant:** full-viewport-width, no border/radius, taller aspect
(`4:3 → 16:9 → 2.4:1`). Each slide is a full-bleed `<img>`
(`object-fit: cover`) with an optional caption plate (bottom gradient scrim,
`--on-pitch`, an optional Display-face tabular **year** + a body-face UPPERCASE
label). Controls row below: a play/pause circle, a dot picker, and a
`{n} / {total}` tabular count. Circular blur-backed prev/next arrows overlay the
frame. Autoplays; see Motion grammar. The bleed variant is kept in the component
for reuse but has no caller since the "Nosso time em ação" band was removed.

### Player card (site signature component)
A 4:5 photo area over a name + position, in a `12px` Card-White frame with 1px
border and `--shadow-card`; lifts `translateY(-3px)` on hover under
`@media (hover)`. Photo area shows a real `<img>` (`object-fit: cover`) when
`squad[].foto` is set, else the `PlayerSilhouette` SVG (`preserveAspectRatio`
`meet` — contained, bottom-centred, never stretched) on a
`color-mix(--pitch-mid 11%, --card)` ground. Name in Display face UPPERCASE
`1.05rem`; position in `0.62rem` uppercase `--ink-soft` label, "A definir" until
filled. Laid out in a `.site-squad` grid, `auto-fill minmax(150px, 1fr)`; every
7th card 2-col on desktop, uniform 2-col ≤520px.

### Facility card (site signature component)
A 3:2 photo area, capped `max-height: clamp(150px → 240px)` so a pending slot
never dwarfs its card (real `<img>` or the `.site-photo-slot` "Foto em breve"
placeholder) over a body: `<h3>` name (Display UPPERCASE `1.25rem`), a
`0.9rem` `--ink-soft` description, and a wrap of `.site-facility-tags` pills.
`14px` Card-White frame, 1px border, `--shadow-card`. `.site-facilities` grid,
`repeat(2, 1fr)` (one column ≤560px); the field and Salão 02 run full-width as
horizontal `.is-feature` cards bookending a balanced 2×2 of the four compact ones.

### Photo slot (site placeholder)
`.site-photo-slot` — the visible fill-in inside any framed media slot whose real
image has not landed. A **quiet, section-toned** panel: a faint scanline over
`color-mix(--pitch-800 6%, --card)`, a small hollow image-frame glyph and a
centred `0.62rem` UPPERCASE `0.11em` `--greige` label ("FOTO EM BREVE"). Reads as
a deliberate reserved space, never a blank, a broken frame or a stock stand-in.

### Data grid (`.site-marks`, site)
A `<dl>` of fact rows — `auto-fit minmax(190px, 1fr)`, a 1px Chalk Line above the
grid and below each row. Each cell: `dt` a `0.62rem` uppercase `0.09em`
`--ink-soft` label, `dd` a Display-face UPPERCASE `1.1rem` `--ink` value. Carries
the história facts (fundação / sede / modalidade) and the contato block
(cidade / endereço / telefone / e-mail).

### Multi-column footer (site)
Pitch-gradient (`--pitch-mid → --pitch-dark`) + scanline. A brand block (52px
crest + club name + city, `1fr`) beside a `2fr` `.site-footer-cols`
(`auto-fit minmax(140px, 1fr)`) of two `react-router` `<Link>` columns ("O
Clube": Apresentação / História / Diretoria / Estrutura / Transparência —
"Mais": Futebol (`/futebol/elenco`) / Notícias / Quem Apoia / Contato)
with **`--on-pitch` headings** (never amber) and `0.82rem` `--on-pitch-warm`
links, plus a Redes Sociais column (Instagram `SocialIcon` chip + the
`@sociedadejoaopessoa` handle as a text link). Then a `.site-footer-bar` —
`© {year} …` and a `.site-footer-bar-actions` pair (compact amber "Seja Sócio"
`<Link>` + outlined "Entrar"). Collapses to one column at 720px. **Sponsor logos
are not here** — they belong to the Quem Apoia page.

### Weekly court grid (app signature component)
- A `64px + 7×` time/day matrix, min-width 780px, horizontal-scroll wrapped.
  **Free slot:** Card White, 1px line, "Livre", `8px` radius, min-height 44px, a
  real `<button>`; hover shifts the border to amber. **Booked:** Clay tint,
  `--clay-text`, not interactive. **Mine / selected:** amber tint, amber border,
  `--floodlight-text`, `--glow-floodlight`. Always paired with an uppercase dot legend.

### Membership card (app signature component)
- `135deg` pitch gradient (`#245239 → #132B1D`), `--on-pitch` text, `18px`
  radius, 390px max, `--shadow-lift` + 1px inset light border, a 34px
  light-stripe overlay and a diagonal sheen band. Role kicker + club line,
  inline-SVG faux-QR, display-face UPPERCASE name, tabular meta line.

### Section title (touchline)
`h2.section-title` (app) / `.site-chapter-title` + `.site-chapter-line` (site):
an UPPERCASE display heading followed by a 1px Chalk Line rule to the edge. The
grouping device for every section / chapter break, and nothing else.

## Do's and Don'ts

### Do:
- **Do** keep floodlight amber under ~10% of any screen — monogram, active nav,
  PIX action, member's own slot, "waiting" tag, the site's active-route
  underline and the "Seja Sócio" CTA — and give solid/text amber a warm glow.
- **Do** set every title, label, tag, and button in condensed uppercase Anton;
  keep sentences in sentence-case Inter.
- **Do** end each section / chapter title with the chalk touchline rule.
- **Do** take the foreground of any always-dark-green surface (including footer
  column headings and the honour plate) from `--on-pitch` / `-soft` / `-faint`,
  never `--chalk` / `--card`.
- **Do** use the `-text` color variant for small status text.
- **Do** raise cards and filled buttons on `--shadow-card` / `--shadow-btn` with
  the 1px top highlight and border; keep ghost buttons, the site "Entrar" chips,
  the site nav, chapters, and the `.site-marks` grid flush.
- **Do**, on the site, render login as a quiet outlined "Entrar" chip (amber on
  hover only) in the nav and footer; reserve the glowing-amber EnterLink for the
  fullscreen menu.
- **Do** seat real photographs behind the hero pitch scrim or inside framed slots
  (`--shadow-card`, 1px border, `object-fit: cover`); where the file is missing,
  show the labelled `.site-photo-slot` / dashed sponsor box, never a blank or a
  fabricated image.
- **Do** make numeric/date cells and the honour year `tabular-nums`; wrap wide
  app tables and the court grid in their own scroll container.
- **Do** give every focusable control the shared 2px amber `:focus-visible`
  outline (offset `3–4px` on the site).
- **Do**, on the public site, use the fluid programme scale (name up to `5.2rem`,
  chapter titles up to `4rem`, honour headline up to `4.6rem`, a `15rem` ghosted
  folio numeral), gate every chapter reveal on `js-reveal`, ship the full
  `prefers-reduced-motion` path, and animate with `--ease-out` / `--ease-in-out`
  only.

### Don't:
- **Don't** use a pure-black shadow on a light surface, a `box-shadow: 0 0` halo,
  or a hard offset block. Don't shadow inputs, court slots, calendar cells, the
  sidebar edge, the site chapters, the site nav, or the `.site-marks` grid.
- **Don't** set body copy, a table value, an input, or a placeholder in the
  display face or in uppercase.
- **Don't** introduce a new accent color or a gradient headline; the palette is
  green + amber + functional tints.
- **Don't** put amber on a heading, a footer-column heading, or use it as
  decoration; only the sanctioned homes, and solid/text amber always glows.
- **Don't** make the site "Entrar" chip glow or fill — it is outlined and quiet,
  amber only on hover.
- **Don't** use a pure/neutral grey anywhere — the neutrals lean green.
- **Don't** reuse the `1px dashed` sponsor-slot border or the `3px border-left`
  callout accent as general form devices.
- **Don't** let the `--field-mark` texture become legible as stripes.
- **Don't** let any page scroll horizontally at the body level.
- **Don't** carry the programme scale, the folio numeral, the scroll
  choreography, the honour plate, or the fullscreen menu into the Operate
  surfaces of the pilot — they belong to the institutional site only. The app
  keeps its `clamp(2rem → 3rem)` Display ceiling and its fast page/feedback motion.
- **Don't** leave a chapter reveal ungated: content must be fully visible with no
  JS, no IntersectionObserver, or under reduced motion.
