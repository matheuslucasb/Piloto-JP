# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the leadership and management (diretoria, secretaria, tesouraria) of
Sociedade Esportiva João Pessoa — the people who decide whether the club adopts
this system. They review the pilot to judge fit, not to run the club through it
yet.

End users the pilot must convincingly represent:

- **Administração do clube** (often volunteers, no IT background): manage courts,
  dues, members, events, the club-wide agenda, and bar / sporting-goods stock.
- **Sócios**: book courts, check dues status, carry a digital membership card,
  track their kiosk tab, read announcements, pull documents, refer new members.
- **Visitantes** (não-sócios): see court availability and request an
  events-hall quote with only a name and phone number.

## Product Purpose

A single management system for a neighborhood sports club that unifies what is
normally scattered across a notebook, a spreadsheet, and WhatsApp: court
reservations, member dues and club cash flow, the events hall, a shared club
schedule, and inventory. One base serves three access types (visitante, sócio,
administrador). The pilot exists to show the club's leadership that one coherent
system can replace the current patchwork; success is the diretoria deciding to
adopt it.

## Positioning

Everything the club runs on lives in one system instead of separate tools —
court booking, the member's financial standing, the club's cash flow, events,
the shared agenda, and stock are integrated, and the same base serves members,
visitors, and administrators. A general-purpose booking app or a spreadsheet
covers one slice; this is built around the whole operating reality of a small
club.

## Operating Context

- Two futebol society courts ("Society 1", "Society 2"), booked in weekday
  evening slots (18h–22h).
- A bar / quiosque where members run a monthly tab (comanda) that is added to
  their dues.
- An events hall (salão de eventos) rented for weddings, birthdays,
  confraternizações.
- Monthly dues (mensalidade), categories sócio titular / familiar. PIX is the
  payment instrument; "Gerar PIX" is the dunning action for late members.
- A club-wide schedule mixing games, training, events, maintenance windows, and
  assemblies (assembleia geral).
- Bar and sporting-goods inventory tracked against minimum-stock thresholds.
- Members enter through a portaria that checks a membership card (carteirinha).
- Run by a small leadership team, frequently volunteers, with no dedicated IT.

## Capabilities and Constraints

- Web SPA: React 18 + Vite, React Router, Recharts. No backend — every value
  comes from `src/data/clubData.js`; pages are meant to be repointed at a real
  API later without reworking components.
- Light/dark theming through CSS custom properties; charts read the tokens so
  they follow the active theme.
- The pilot simulates a single login by letting the visitor pick one of three
  access types on the entry screen. The real system would be one login that
  routes automatically by account type.
- All operational data is fictional (members, amounts, bookings, KPIs) and must
  never be presented as real club figures.
- Interface language is Brazilian Portuguese. Fixed local terminology: sócio
  titular/familiar, mensalidade, PIX, quiosque, comanda, salão de eventos,
  Society 1/2, carteirinha, portaria.
- Undecided: whether the shipped product keeps the three-way access picker or
  moves to a real unified login; the real API and data model; the deployment
  target.

## Brand Commitments

- Sociedade Esportiva João Pessoa is a real club. Its official name and founding
  date (FUNDAÇÃO 05/07/32, carried on the club emblem) are facts to preserve
  exactly — not placeholders.
- The club has an existing emblem (escudo); `src/assets/logo-sejp.svg` is a
  rendition of it. The identity is to be honored, not reinvented.
- Voice: plain, direct, warm pt-BR that speaks to members and volunteers as
  neighbors ("pros sócios", "trazer mais gente pra perto").

## Evidence on Hand

- Prototypes in the parent folder: `clube-piloto-v3.html` (current reference —
  login + visitante + sócio + admin), plus earlier `clube-piloto-v2_2.html` and
  `JP-piloto.html`.
- The React implementation in `clube-piloto/` mirrors v3.
- Club emblem: `clube-piloto/src/assets/logo-sejp.svg`.
- No verified club facts beyond the name and the stated founding date — no real
  member counts, finances, history, honors, or photos are on hand. Future work
  must not fabricate them.

## Product Principles

1. **One system, the whole club.** Reservations, money, events, agenda, and
   stock belong together, not in separate tools.
2. **Operable by volunteers.** Every task must be doable without training or an
   IT person on hand.
3. **Three audiences, one base.** Visitante, sócio, and administrador each get
   only what their role needs, from the same data.
4. **Honest pilot.** The club's real identity is respected; every operational
   number is clearly fictional and never dressed up as a real result.
5. **Ready to be wired up.** The mock data layer is a seam, not a rewrite — a
   real API swaps in without reworking the UI.

## Accessibility & Inclusion

Broad-public tool for a neighborhood club: members span all ages and portaria
staff use it in passing. No formal standard was set; treat legible type,
adequate contrast in both themes, and full keyboard operation as the baseline.
