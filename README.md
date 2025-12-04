# Pactior Group

En professionell fintech-webbplats för Pactior Group och dess dotterbolag.

## Dotterbolag

- **Trestor Partners** - Företagsförmedling (Aktivt)
- **Valiora Analytics** - Företagsvärdering (Kommer snart)
- **Vectoryx** - Företagsdata White Label (Kommer snart)

## Teknisk stack

- **Framework:** Next.js 14 med App Router
- **Språk:** TypeScript
- **Styling:** CSS Modules med globala CSS-variabler

## Installation

```bash
# Installera beroenden
npm install

# Starta utvecklingsservern
npm run dev

# Bygg för produktion
npm run build

# Starta produktionsserver
npm start
```

## Struktur

```
src/
├── app/
│   ├── globals.css          # Globala stilar och CSS-variabler
│   ├── layout.tsx           # Root layout med Header/Footer
│   ├── page.tsx             # Startsidan
│   ├── page.module.css      # Stilar för startsidan
│   ├── legal.module.css     # Delade stilar för juridiska sidor
│   ├── om-oss/              # Om oss-sidan
│   ├── tjanster/            # Tjänster-sidan
│   ├── kontakt/             # Kontakt-sidan
│   ├── integritetspolicy/   # Integritetspolicy
│   ├── villkor/             # Användarvillkor
│   └── cookies/             # Cookiepolicy
├── components/
│   ├── Header.tsx           # Header-komponent
│   ├── Header.module.css
│   ├── Footer.tsx           # Footer-komponent
│   └── Footer.module.css
public/
├── Trestor_logo.png         # Lägg till logo här
├── Valiora_logo.png         # Lägg till logo här
├── Vectoryx_logo.png        # Lägg till logo här
└── README.md                # Instruktioner för logos
```

## Färgschema

Webbplatsen använder ett minimalistiskt färgschema:

- **Mörk röd:** `#4a0d0d` - Accentfärg
- **Mörk blå:** `#0a1628` - Primär färg, headers, knappar
- **Ljusgrå:** `#f5f5f7` - Bakgrund
- **Vit:** `#ffffff` - Kort och sektioner

## Design-element

- **Pulsating boxes:** Kort med animerade skuggor
- **Minimalistisk design:** Ingen gradienter, inga emojis/ikoner
- **Professionell typografi:** Cormorant Garamond för rubriker, DM Sans för brödtext

## Logotyper

Logotyperna finns nu i `/public/logos/`:

- `Pactior_logo.png` - Pactior Group logotyp (header/footer)
- `Trestor_logo.png` - Trestor Partners logotyp
- `Valiora_logo.png` - Valiora Analytics logotyp  
- `Vectoryx_logo.png` - Vectoryx logotyp

## Deployment

Webbplatsen är optimerad för deployment på Vercel:

```bash
npm run build
```

## Licens

Privat - Pactior Group AB

