import React from 'react';
import Link from 'next/link';
import {
  Layers,
  Truck,
  CreditCard,
  Shield,
  Gauge,
  ArrowRight,
  ArrowUpRight,
  Check,
} from '@/components/icons';

const engines = [
  {
    id: 'demand',
    icon: <Layers size={24} />,
    title: 'Demand Engine',
    desc: 'Merchant onboarding, cluster formation, SKU catalog management, and anonymous commitment aggregation.',
    capabilities: ['Cluster creation & governance', 'SKU selection & catalog', 'Anonymous commitment API', 'Progressive tier calculation', 'Pool cutoff & locking'],
  },
  {
    id: 'pool',
    icon: <Gauge size={24} />,
    title: 'Pool Engine',
    desc: 'Real-time pool state machine. Tracks commitments, validates share caps, and triggers tier transitions.',
    capabilities: ['Live pool state tracking', '35% merchant share enforcement', 'Tier crossing events', 'Binding commitment logic', 'Distributor confirmation'],
  },
  {
    id: 'logistics',
    icon: <Truck size={24} />,
    title: 'Logistics Engine',
    desc: 'Zero-warehouse delivery coordination. Truck allocation, crate manifest, OTP custody transfer.',
    capabilities: ['Truck capacity planning', 'Per-merchant crate manifest', 'Cluster hub coordination', 'OTP custody verification', 'Transit insurance tracking'],
  },
  {
    id: 'credit',
    icon: <CreditCard size={24} />,
    title: 'Credit Engine',
    desc: 'Order-backed facility origination through regulated NBFC partner. Credit capacity derived from digital receipts.',
    capabilities: ['Receipts-based capacity model', 'Order-to-facility mapping', 'NBFC partner handoff', 'Consent & AA integration', 'Facility state tracking'],
  },
  {
    id: 'repayment',
    icon: <ArrowRight size={24} />,
    title: 'Repayment Engine',
    desc: 'Dual-rail collection: revenue-linked digital sweep plus 14-day UPI AutoPay floor mandate.',
    capabilities: ['Daily digital settlement sweep', 'UPI AutoPay mandate mgmt', 'Repayment allocation logic', 'Overdue handling', 'Credit history accumulation'],
  },
  {
    id: 'risk',
    icon: <Shield size={24} />,
    title: 'Risk Engine',
    desc: 'System-wide controls: share caps, frozen credit limits, custody boundaries, and exposure monitoring.',
    capabilities: ['Merchant concentration limits', 'Credit freeze at commitment', 'Custody state enforcement', 'Exposure dashboards', 'Audit trail & logging'],
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">Platform</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Seven connected engines.
              <br />
              <span className="text-text-secondary">One operating system for rural commerce.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              B2Beat is built as a system of specialized engines that pass a transaction
              through its complete lifecycle — from demand signal to fulfilled repayment.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Architecture</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-4">
              How the engines connect.
            </h2>
          </div>

          {/* Horizontal flow */}
          <div className="reveal">
            <div className="relative bg-bg-card border border-border-light rounded-xl p-6 md:p-10 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-stretch">
                {engines.slice(0, 7).map((engine, i) => (
                  <React.Fragment key={engine.id}>
                    <div className="relative p-4 rounded-lg border border-border-light bg-bg-secondary/50 text-center">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-3">
                        {engine.icon}
                      </div>
                      <div className="text-[0.75rem] font-semibold text-text-primary leading-tight">
                        {engine.title.replace(' Engine', '')}
                      </div>
                      <div className="text-[0.65rem] text-text-tertiary mt-1 font-mono">0{i + 1}</div>
                    </div>
                    {i < 6 && (
                      <div className="hidden lg:flex items-center justify-center -mx-3 text-text-tertiary z-10">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute left-[7%] right-[7%] top-1/2 h-px bg-border-light -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Engine detail cards */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-5 stagger-children">
            {engines.map((engine) => (
              <div
                key={engine.id}
                id={engine.id}
                className="p-7 rounded-xl border border-border-light bg-bg-card card-hover scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-muted/20 flex items-center justify-center text-brand-primary flex-shrink-0">
                    {engine.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{engine.title}</h3>
                    <p className="text-[0.875rem] text-text-secondary mt-1 leading-relaxed">{engine.desc}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border-light">
                  <div className="text-[0.7rem] uppercase tracking-wider text-text-tertiary mb-3">Capabilities</div>
                  <ul className="space-y-2">
                    {engine.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <Check size={14} className="text-brand-primary mt-0.5 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <p className="eyebrow mb-4">Analytics</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
                System-of-record for every transaction.
              </h2>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                Every commitment, every crate, every repayment is recorded with full attribution.
                Merchants build a verifiable credit history. Distributors see predictable demand patterns.
                Finance partners get portfolio-level visibility.
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                {[
                  'Per-merchant transaction history',
                  'Cluster-level economics dashboards',
                  'Portfolio quality metrics for finance partners',
                  'Audit trail for compliance',
                  'Credit history accumulation per merchant',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={15} className="text-brand-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="bg-bg-card border border-border-light rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[0.8rem] font-medium text-text-primary">Cluster Performance · Mandya East</span>
                  <span className="text-[0.7rem] text-text-tertiary">Last 6 cycles</span>
                </div>
                <div className="flex items-end gap-2 h-40 mb-4">
                  {[62, 78, 71, 85, 92, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className="w-full bg-brand-primary/80 rounded-t transition-all"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[0.6rem] text-text-tertiary">C{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border-light text-center">
                  <div>
                    <div className="text-[0.65rem] text-text-tertiary uppercase">Avg Fill</div>
                    <div className="text-lg font-semibold text-text-primary tabular">79%</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-text-tertiary uppercase">On-Time</div>
                    <div className="text-lg font-semibold text-status-positive tabular">100%</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-text-tertiary uppercase">Repayment</div>
                    <div className="text-lg font-semibold text-text-primary tabular">12.1 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bg-dark text-text-inverse">
        <div className="container-page">
          <div className="max-w-2xl reveal">
            <h2 className="font-display text-3xl md:text-4xl text-text-inverse mb-5">
              Want to understand a specific engine in detail?
            </h2>
            <p className="text-[0.95rem] text-text-inverse-secondary mb-8 leading-relaxed">
              The platform architecture is designed for modular integration.
              Each engine exposes clear boundaries and data contracts.
            </p>
            <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
              Discuss Integration
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

