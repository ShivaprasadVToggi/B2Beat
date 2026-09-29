import React from 'react';
import Link from 'next/link';
import HeroFlowDiagram from '@/components/hero-flow-diagram';
import PoolSimulator from '@/components/pool-simulator';
import CreditSimulator from '@/components/credit-simulator';
import MerchantDashboard from '@/components/merchant-dashboard';
import DistributorDashboard from '@/components/distributor-dashboard';
import ClusterVisualization from '@/components/cluster-visualization';
import {
  ArrowRight,
  ArrowUpRight,
  Store,
  Layers,
  Truck,
  CreditCard,
  Wallet,
  Shield,
  Lock,
  Package,
  Building2,
  Users,
  Check,
  Zap,
  Gauge,
} from '@/components/icons';

export default function HomePage() {
  return (
    <>
      {/* ============================================================
         HERO
         ============================================================ */}
      <section className="relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(184, 134, 11, 0.06) 0%, transparent 70%)',
          }}
        />

        <div className="container-page relative pt-16 md:pt-24 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary border border-border-light text-[0.75rem] text-text-secondary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              VyaparPool 2.0 · Commerce Infrastructure
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-[1.02]">
              Turn fragmented retail demand
              <br />
              <span className="text-text-secondary">into purchasing power.</span>
            </h1>

            <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              VyaparPool helps rural retailers combine demand, unlock distributor pricing,
              receive consolidated delivery, and finance inventory against real business cash flow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="#get-started" className="btn-primary">
                Build Your Cluster
                <ArrowRight size={14} />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero flow diagram */}
          <div className="mt-16 md:mt-24 reveal reveal-delay-2">
            <HeroFlowDiagram />
          </div>

          {/* Trust bar */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-border-light reveal">
            <p className="text-center text-[0.7rem] uppercase tracking-[0.15em] text-text-tertiary mb-8">
              Built around how rural commerce actually works
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 stagger-children">
              {[
                { value: '15 km', label: 'Cluster radius' },
                { value: '35%', label: 'Merchant share cap' },
                { value: '14-day', label: 'Inventory facility' },
                { value: '1 drop', label: 'Per cluster route' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-semibold text-text-primary tabular mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[0.75rem] text-text-tertiary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         WHY THE MODEL EXISTS
         ============================================================ */}
      <section className="section" id="why">
        <div className="container-page">
          <div className="max-w-3xl mb-16 reveal">
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-6">
              Rural retail already has demand.
              <br />
              <span className="text-text-secondary">It just doesn't have coordination.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 stagger-children">
            {[
              {
                num: '01',
                title: 'Fragmented Purchasing',
                desc: '10–25 kg/day per small retailer. Too small for meaningful wholesale leverage. Each merchant negotiates alone.',
                icon: <Store size={20} />,
                data: '10–25 kg/day',
                dataLabel: 'per retailer',
              },
              {
                num: '02',
                title: 'Working-Capital Constraints',
                desc: 'Inventory ties up scarce capital. Limited stock means lost sales. No credit history to unlock larger facilities.',
                icon: <Wallet size={20} />,
                data: '60%+',
                dataLabel: 'capital in inventory',
              },
              {
                num: '03',
                title: 'Unreliable Last-Mile Economics',
                desc: 'Multiple small stops. Partial truckloads. Distributors avoid thin rural routes or pass on the cost.',
                icon: <Truck size={20} />,
                data: '< 40%',
                dataLabel: 'typical truck utilization',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="group p-6 md:p-7 rounded-xl border border-border-light bg-bg-card card-hover"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary group-hover:text-brand-primary transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[0.8rem] font-mono text-text-tertiary">{item.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-5">{item.desc}</p>
                <div className="pt-5 border-t border-border-light">
                  <div className="text-2xl font-semibold text-text-primary tabular">{item.data}</div>
                  <div className="text-[0.7rem] text-text-tertiary mt-0.5">{item.dataLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         LIVE POOL SIMULATOR
         ============================================================ */}
      <section className="section bg-bg-secondary/50" id="live-pool">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 reveal">
              <p className="eyebrow mb-4">Interactive Demo</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
                Pool demand.
                <br />
                Unlock the next price tier.
              </h2>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                Watch how anonymous merchant commitments progressively unlock wholesale pricing.
                When the pool crosses a threshold, every participant gets the better rate.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Progressive pricing tiers at 40% / 70% / 100%',
                  '35% merchant share cap prevents dominance',
                  'Binding commitments create predictable volume',
                  'Identities remain blind to the pool',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-text-secondary">
                    <Check size={15} className="text-brand-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-2">
              <PoolSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         THREE CORE SYSTEMS
         ============================================================ */}
      <section className="section" id="systems">
        <div className="container-page">
          <div className="max-w-3xl mb-16 reveal">
            <p className="eyebrow mb-4">The Three Core Systems</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
              One infrastructure. Three connected engines.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">
              Demand pooling, zero-warehouse logistics, and embedded inventory credit —
              each designed to reinforce the others.
            </p>
          </div>

          <div className="space-y-5">
            {/* Module A */}
            <div className="grid lg:grid-cols-12 gap-0 rounded-xl border border-border-light overflow-hidden bg-bg-card reveal">
              <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-wider text-brand-primary mb-4">
                  <span className="w-6 h-px bg-brand-primary" />
                  Module A
                </div>
                <div className="w-11 h-11 rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  <Layers size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3">Demand Pooling</h3>
                <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-6">
                  Merchants within a 15 km cluster anonymously commit to SKUs.
                  As commitments accumulate, the pool crosses progressive pricing tiers.
                </p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {[
                    'Cluster creation and SKU selection',
                    'Live anonymous commitments',
                    'Progressive pricing tiers',
                    '30–35% merchant share cap',
                    'Binding commitment · Pool cutoff',
                    'Distributor confirmation',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 p-6 md:p-8 bg-bg-secondary/40">
                <div className="space-y-4">
                  {[
                    { sku: 'Rice', current: 1872, target: 2400, tier: '78% · Tier 2' },
                    { sku: 'Sunflower Oil', current: 520, target: 800, tier: '65% · Tier 1' },
                    { sku: 'Toor Dal', current: 1200, target: 1200, tier: '100% · Wholesale' },
                  ].map((p) => (
                    <div key={p.sku} className="p-4 rounded-lg bg-bg-card border border-border-light">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[0.85rem] font-medium text-text-primary">{p.sku}</span>
                        <span className={`text-[0.7rem] font-medium px-2 py-0.5 rounded-full ${
                          p.tier.includes('Wholesale')
                            ? 'bg-status-positive/10 text-status-positive'
                            : 'bg-brand-muted/30 text-brand-primary'
                        }`}>
                          {p.tier}
                        </span>
                      </div>
                      <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden mb-2">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            p.tier.includes('Wholesale') ? 'bg-status-positive' : 'bg-brand-primary'
                          }`}
                          style={{ width: `${(p.current / p.target) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[0.7rem] text-text-tertiary tabular">
                        <span>{p.current.toLocaleString()} kg</span>
                        <span>{p.target.toLocaleString()} kg</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module B */}
            <div className="grid lg:grid-cols-12 gap-0 rounded-xl border border-border-light overflow-hidden bg-bg-card reveal">
              <div className="lg:col-span-7 p-6 md:p-8 bg-bg-secondary/40 border-b lg:border-b-0 lg:border-r border-border-light order-2 lg:order-1">
                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-bg-card border border-border-light">
                    <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-text-secondary">
                      <Building2 size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[0.8rem] font-medium text-text-primary">Distributor</div>
                      <div className="text-[0.7rem] text-text-tertiary">Full pallet load · 3-tonne mini truck</div>
                    </div>
                  </div>

                  <div className="relative pl-8 ml-5 space-y-4">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-light" />
                    <div className="absolute left-[7px] top-2 w-px h-1/2 bg-brand-primary" />

                    {[
                      { label: 'In transit', status: 'active', icon: <Truck size={14} /> },
                      { label: 'Cluster hub · OTP verification', status: 'pending', icon: <Lock size={14} /> },
                      { label: 'Sealed merchant crates', status: 'pending', icon: <Package size={14} /> },
                    ].map((step, i) => (
                      <div key={i} className="relative flex items-center gap-3">
                        <div
                          className={`absolute -left-8 w-4 h-4 rounded-full border-2 ${
                            step.status === 'active'
                              ? 'bg-brand-primary border-brand-primary'
                              : 'bg-bg-card border-border-medium'
                          }`}
                        >
                          {step.status === 'active' && (
                            <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-40" />
                          )}
                        </div>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          step.status === 'active' ? 'bg-brand-muted/20 text-brand-primary' : 'bg-bg-secondary text-text-tertiary'
                        }`}>
                          {step.icon}
                        </div>
                        <span className={`text-sm ${step.status === 'active' ? 'text-text-primary font-medium' : 'text-text-tertiary'}`}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg border border-border-light bg-bg-card text-center">
                      <div className="text-[0.65rem] text-text-tertiary uppercase tracking-wider mb-1">Before OTP</div>
                      <div className="text-[0.8rem] font-medium text-text-primary">Distributor responsibility</div>
                    </div>
                    <div className="p-3 rounded-lg border border-brand-primary/40 bg-brand-muted/10 text-center">
                      <div className="text-[0.65rem] text-brand-primary uppercase tracking-wider mb-1">After OTP</div>
                      <div className="text-[0.8rem] font-medium text-text-primary">Merchant custody</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 md:p-10 order-1 lg:order-2">
                <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-wider text-brand-primary mb-4">
                  <span className="w-6 h-px bg-brand-primary" />
                  Module B
                </div>
                <div className="w-11 h-11 rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  <Truck size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3">Zero-Warehouse Delivery</h3>
                <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-6">
                  One consolidated truck from distributor to cluster hub.
                  Sealed merchant crates. OTP-verified custody transfer.
                  No intermediate warehouse. No shared pallets.
                </p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {[
                    '3-ton mini truck per cluster',
                    'Single drop at cluster hub',
                    'Sealed per-merchant crates',
                    'OTP custody verification',
                    'Transit insurance included',
                    'Claims window per consignment',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Module C */}
            <div className="grid lg:grid-cols-12 gap-0 rounded-xl border border-border-light overflow-hidden bg-bg-card reveal">
              <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-wider text-brand-primary mb-4">
                  <span className="w-6 h-px bg-brand-primary" />
                  Module C
                </div>
                <div className="w-11 h-11 rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  <CreditCard size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3">Embedded Inventory Credit</h3>
                <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-6">
                  Each fulfilled order becomes a short-duration inventory facility
                  from a regulated NBFC partner. Repaid through the merchant's actual digital sales flow.
                </p>
                <ul className="space-y-2.5 text-sm text-text-secondary">
                  {[
                    'Order-backed financing',
                    'NBFC partner as regulated lender',
                    'Revenue-linked digital settlement sweep',
                    '14-day UPI AutoPay floor mandate',
                    'Account Aggregator cash-flow signals',
                    'Credit history builds with each cycle',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 p-6 md:p-8 bg-bg-secondary/40">
                <div className="grid grid-cols-5 gap-2 items-center">
                  {[
                    { label: 'Merchant Order', val: '₹25,000', icon: <Store size={14} /> },
                    { label: 'NBFC Financing', val: '₹25,000', icon: <Building2 size={14} /> },
                    { label: 'Distributor Paid', val: '₹25,000', icon: <Wallet size={14} /> },
                    { label: 'Daily Sales', val: 'Sweep', icon: <Zap size={14} /> },
                    { label: 'Repaid', val: '14 days', icon: <Check size={14} /> },
                  ].map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="text-center p-3 rounded-lg bg-bg-card border border-border-light">
                        <div className="w-7 h-7 mx-auto rounded-md bg-bg-secondary flex items-center justify-center text-text-secondary mb-2">
                          {step.icon}
                        </div>
                        <div className="text-[0.7rem] font-medium text-text-primary leading-tight">{step.val}</div>
                        <div className="text-[0.6rem] text-text-tertiary mt-0.5">{step.label}</div>
                      </div>
                      {i < 4 && (
                        <div className="hidden sm:block text-text-tertiary -mx-1">
                          <ArrowRight size={12} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-lg bg-bg-card border border-border-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={14} className="text-brand-primary" />
                      <span className="text-[0.75rem] font-semibold text-text-primary">Accelerator</span>
                    </div>
                    <p className="text-[0.72rem] text-text-tertiary leading-relaxed">
                      Revenue-linked digital settlement sweep. Repays faster when sales are strong.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-bg-card border border-border-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={14} className="text-status-info" />
                      <span className="text-[0.75rem] font-semibold text-text-primary">Floor</span>
                    </div>
                    <p className="text-[0.72rem] text-text-tertiary leading-relaxed">
                      14-day UPI AutoPay mandate. Guarantees full repayment within the tenor.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-bg-dark text-text-inverse-secondary text-[0.7rem]">
                  <span className="text-text-inverse font-medium">Note:</span> VyaparPool orchestrates the workflow.
                  Lending and payment functions are performed by regulated partners.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         CREDIT SIMULATOR
         ============================================================ */}
      <section className="section bg-bg-secondary/50" id="credit-sim">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Embedded Credit</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
              Inventory finance tied to real merchant cash flow.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">
              Credit capacity is derived from trailing digital receipts.
              Repayment flows through the merchant's actual business revenue.
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <CreditSimulator />
          </div>
        </div>
      </section>

      {/* ============================================================
         MERCHANT DASHBOARD PREVIEW
         ============================================================ */}
      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 reveal">
              <p className="eyebrow mb-4">Product Preview</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
                The merchant sees a clear operating picture.
              </h2>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                Available credit, active pools, wholesale savings, and repayment
                progress — all in one place. Every tab updates as the system evolves.
              </p>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Real-time pool tracking', icon: <Layers size={15} /> },
                  { label: 'Transparent savings per order', icon: <Gauge size={15} /> },
                  { label: 'Repayment visibility', icon: <CreditCard size={15} /> },
                  { label: 'Credit history building', icon: <Shield size={15} /> },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 p-3 rounded-lg border border-border-light bg-bg-card">
                    <div className="w-8 h-8 rounded-md bg-bg-secondary flex items-center justify-center text-brand-primary">
                      {f.icon}
                    </div>
                    <span className="text-text-primary font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-2">
              <MerchantDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         CLUSTER VISUALIZATION + DISTRIBUTOR DASHBOARD
         ============================================================ */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">For Distributors</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
              One cluster. One truck.
              <br />
              <span className="text-text-secondary">Predictable rural demand.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="reveal">
              <ClusterVisualization />
            </div>
            <div className="reveal reveal-delay-2">
              <DistributorDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         DESIGNED AROUND FAILURE MODES
         ============================================================ */}
      <section className="section" id="risk">
        <div className="container-page">
          <div className="max-w-3xl mb-14 reveal">
            <p className="eyebrow mb-4">Risk & Operations</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
              Designed around the failure modes.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">
              Every mechanism addresses a specific way this could break.
              We made the constraints explicit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {[
              { title: '30–35% Merchant Cap', desc: 'No single merchant dominates a pool. Prevents concentration risk and preserves the pooling logic.' },
              { title: 'Binding Commitments', desc: 'Merchants commit to quantities. The pool only forms with real intent, not speculative interest.' },
              { title: 'Credit Frozen at Commitment', desc: 'Credit limits lock when commitment is made. No expansion of exposure during the cycle.' },
              { title: 'OTP Custody Transfer', desc: 'Custody formally shifts from distributor to merchant at the hub. Clear accountability boundary.' },
              { title: 'Per-Merchant Invoicing', desc: 'Each merchant receives their own invoice. Compliant, traceable, auditable.' },
              { title: '14-Day Repayment Floor', desc: 'UPI AutoPay mandate guarantees full repayment within the tenor regardless of sales pace.' },
              { title: 'Transit Insurance', desc: 'Every consignment is insured during transit. Claims window defined per shipment.' },
              { title: 'Account Aggregator Signals', desc: 'Consent-based bank transaction data informs underwriting. The merchant controls access.' },
              { title: 'Sealed Merchant Crates', desc: 'No shared pallets. Each merchant receives a sealed crate. Tamper-evident from distributor to merchant.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-border-light bg-bg-card card-hover"
              >
                <h4 className="text-[0.95rem] font-semibold text-text-primary mb-2">{item.title}</h4>
                <p className="text-[0.825rem] text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         WHAT WE FIXED
         ============================================================ */}
      <section className="section bg-bg-dark text-text-inverse">
        <div className="container-page">
          <div className="max-w-3xl mb-14 reveal">
            <p className="eyebrow-inverse mb-4">Version 2.0 Improvements</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-inverse mb-5">
              What we fixed from the original model.
            </h2>
          </div>

          <div className="space-y-px bg-border-dark rounded-xl overflow-hidden reveal">
            {[
              { old: 'Village-only pooling', new: '15 km cluster', desc: 'Expanded geographic scope creates meaningful order volume while keeping delivery economics viable.' },
              { old: 'Webhook-based repayment sweep', new: 'Licensed payment rail + AutoPay floor', desc: 'Proper regulated payment infrastructure with a mandatory floor repayment.' },
              { old: 'Single shared pallet', new: 'Sealed merchant crates', desc: 'Each merchant gets their own sealed consignment. Clear custody, no mixing, no disputes.' },
              { old: 'Anonymous invoicing', new: 'Merchant-specific compliant invoicing', desc: 'Proper GST-compliant documentation per merchant. Auditable and traceable.' },
            ].map((row, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center p-6 md:p-8 bg-bg-darker">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-text-inverse-secondary mb-2">Old Model</div>
                  <div className="text-text-inverse-secondary line-through text-lg">{row.old}</div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight size={20} className="text-brand-secondary" />
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-brand-secondary mb-2">New Model</div>
                  <div className="text-text-inverse text-lg font-medium mb-1.5">{row.new}</div>
                  <p className="text-[0.825rem] text-text-inverse-secondary leading-relaxed">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
         PARTNER ECOSYSTEM
         ============================================================ */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="eyebrow mb-4">Ecosystem</p>
            <h2 className="font-display text-3xl md:text-5xl text-text-primary mb-5">
              Three parties. One infrastructure.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 stagger-children">
            {[
              {
                icon: <Store size={22} />,
                title: 'Retailers',
                need: 'Need better purchasing power',
                desc: 'Small rural merchants who want wholesale pricing, reliable delivery, and inventory capital.',
              },
              {
                icon: <Building2 size={22} />,
                title: 'Distributors',
                need: 'Need efficient demand and routes',
                desc: 'FMCG distributors who want predictable aggregated volume and optimized truck utilization.',
              },
              {
                icon: <Users size={22} />,
                title: 'Regulated Finance Partners',
                need: 'Need better merchant-level risk signals',
                desc: 'NBFCs and payment institutions who need verified commerce data to underwrite and collect.',
              },
            ].map((p) => (
              <div key={p.title} className="p-7 rounded-xl border border-border-light bg-bg-card text-center card-hover">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1.5">{p.title}</h3>
                <p className="text-[0.8rem] text-brand-primary font-medium mb-3">{p.need}</p>
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-xl mx-auto reveal">
            <div className="p-6 rounded-xl bg-text-primary text-text-inverse text-center">
              <div className="text-[0.7rem] uppercase tracking-[0.15em] text-text-inverse-secondary mb-2">At the center</div>
              <div className="text-2xl font-semibold mb-2">VyaparPool</div>
              <p className="text-[0.85rem] text-text-inverse-secondary">
                Orchestrates the commerce workflow. Regulated financial functions remain with licensed partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         PARTNER DEPENDENCIES
         ============================================================ */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <p className="eyebrow mb-4">Partner Dependencies</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Two pieces are partner-dependent.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">
              Being clear about what we don't control builds credibility for what we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto stagger-children">
            <div className="p-7 rounded-xl border border-border-light bg-bg-card">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-brand-primary mb-4">
                <Building2 size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Distributor Pricing</h3>
              <p className="text-[0.875rem] text-text-secondary leading-relaxed">
                Actual achievable discount must be validated against real distributor rate cards.
                The 6–8% wholesale improvement is a target hypothesis, not a proven guarantee.
              </p>
            </div>
            <div className="p-7 rounded-xl border border-border-light bg-bg-card">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-brand-primary mb-4">
                <CreditCard size={18} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Production Payment Flows</h3>
              <p className="text-[0.875rem] text-text-secondary leading-relaxed">
                Split settlement and AutoPay implementation must be validated with the relevant
                regulated and payment partners before production deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
         CTA
         ============================================================ */}
      <section className="section" id="get-started">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl bg-bg-dark text-text-inverse p-10 md:p-16 reveal">
            <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
            <div className="relative max-w-2xl">
              <p className="eyebrow-inverse mb-4">Get Started</p>
              <h2 className="font-display text-3xl md:text-5xl text-text-inverse mb-6">
                Build infrastructure around how rural commerce actually works.
              </h2>
              <p className="text-[1rem] text-text-inverse-secondary leading-relaxed mb-8 max-w-xl">
                Whether you're a retailer, distributor, or finance partner —
                VyaparPool creates a new operating layer for the commerce outside the metro.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
                  Build Your Cluster
                  <ArrowUpRight size={16} />
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border-dark text-text-inverse rounded-lg font-medium text-[0.9rem] hover:bg-white/5 transition-colors">
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
