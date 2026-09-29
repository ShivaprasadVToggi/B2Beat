# VyaparPool 2.0

> Demand pooling and embedded working-capital infrastructure for rural Indian MSME retailers.

VyaparPool aggregates fragmented rural merchant demand into cluster-level purchasing power, unlocks distributor pricing, coordinates consolidated delivery, and finances each merchant's fulfilled order through a short-duration inventory facility.

## The Core Mechanism

```
MERCHANTS → POOL DEMAND → UNLOCK WHOLESALE PRICE → CONSOLIDATED DELIVERY → INVENTORY FINANCE → REPAY FROM CASH FLOW
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Custom inline SVG (no external icon dependency)
- **Animations**: CSS + IntersectionObserver (scroll reveals)
- **Data**: Mock data in dedicated files under `/data`

## Project Structure

```
/app
  layout.tsx              # Root layout, metadata, navigation, footer
  page.tsx                # Homepage
  /platform/page.tsx      # Platform architecture page
  /how-it-works/page.tsx  # Seven-step journey
  /retailers/page.tsx     # For Retailers
  /distributors/page.tsx  # For Distributors
  /finance-partners/page.tsx  # For Finance Partners
  /about/page.tsx         # About + regulatory positioning
  globals.css             # Design system tokens + CSS
/components
  icons.tsx               # Custom inline SVG icon set
  navigation.tsx          # Desktop + mobile navigation
  footer.tsx              # Site footer
  reveal-provider.tsx     # IntersectionObserver scroll reveals
  hero-flow-diagram.tsx   # Animated hero system flow
  pool-simulator.tsx      # Interactive live pool demo
  credit-simulator.tsx    # Interactive credit calculator
  merchant-dashboard.tsx  # Merchant dashboard preview
  distributor-dashboard.tsx  # Distributor portal preview
  cluster-visualization.tsx  # Geographic cluster map
/data
  pools.ts                # Mock clusters, pools, merchants, tiers
/hooks
  use-reveal.ts           # Scroll reveal hook
/lib
  design-system.ts        # Color tokens (TypeScript)
```

## Design Principles

- **Institutional aesthetic**: Restrained, serious, financial-infrastructure feel
- **No AI-startup visuals**: No purple gradients, no neon, no emoji, no 3D blobs
- **Typography-first**: Large display type, tight tracking, high information density
- **Motion with purpose**: Animations explain system behavior, not decoration
- **Honest content**: No invented metrics, partnerships, or regulatory claims
- **Accessibility**: Semantic HTML, keyboard navigation, `prefers-reduced-motion` support

## Key Interactive Features

1. **Hero Flow Diagram** — Scroll-driven system visualization (Merchants → Pool → Wholesale → Truck → Crates → Credit)
2. **Live Pool Simulator** — Adjustable commitment, tiered pricing, anonymous participants, "pool unlocked" state
3. **Credit Simulator** — Weekly receipts selector, order slider, dual repayment rails, clearly marked DEMO
4. **Merchant Dashboard** — Tabbed interface: Overview / Active Pool / Orders / Credit / History
5. **Distributor Dashboard** — KPIs, cluster table, truck utilization bars
6. **Cluster Visualization** — Abstract geographic map, hoverable merchant nodes, animated truck route
7. **Scroll Reveals** — IntersectionObserver-based staggered entrance animations

## Pages Implemented

- **Home** — Hero, problem framing, live pool simulator, three core systems, credit simulator, dashboards, cluster map, risk section, what-we-fixed, ecosystem, partner dependencies, CTA
- **Platform** — Seven-engine architecture, capabilities per engine, analytics system-of-record
- **How It Works** — Seven-step journey with alternating timeline, flywheel summary
- **For Retailers** — Six benefits, three-step joining process
- **For Distributors** — Benefits, route economics comparison
- **For Finance Partners** — Value props, integration model, partner boundaries
- **About** — Philosophy, regulatory positioning, honesty section, what-we-don't-do

## Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## Content Rules

This project deliberately avoids:

- Invented customers, partnerships, or metrics
- Fake regulatory approvals or certifications
- Guaranteed discount percentages (labeled "target hypothesis" where mentioned)
- "AI-powered" / "revolutionizing" / "game-changing" language
- Purple/blue AI gradients, neon, emoji, cartoon illustrations

Labels used where appropriate: *Illustrative*, *Demo*, *Target*, *Indicative*, *Partner-dependent*, *Hypothesis*.

## Regulatory Positioning

- VyaparPool **orchestrates the commerce workflow**
- Lending is performed by **regulated NBFC partners**
- Payment processing uses **regulated payment infrastructure**
- Data access is **consent-based** (Account Aggregator framework)

## Deployment

This project is configured for Vercel deployment. Framework detection is automatic for Next.js.

```
Build Command: next build
Output Directory: .next
Install Command: npm install
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values. No secrets are committed to the repository.

## Important Notes

- **No secrets in repository**: All tokens, API keys, and credentials must use environment variables
- **Partner dependencies**: Distributor pricing and production payment flows require partner validation
- **Demo calculations**: Credit simulator outputs are indicative, not lending decisions

## License

Private / Internal project.
