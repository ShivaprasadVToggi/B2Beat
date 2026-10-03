import React from 'react';
import Link from 'next/link';
import {
  Store,
  Layers,
  Truck,
  Package,
  CreditCard,
  Wallet,
  Check,
  ArrowRight,
  ArrowUpRight,
} from '@/components/icons';

const steps = [
  {
    title: 'Merchant joins beat pool',
    desc: 'A retailer joins their scheduled route beat. Identity verified, capacity assessed from digital receipts.',
    icon: <Store size={22} />,
    detail: 'Onboarding includes consent-based Account Aggregator setup for credit capacity signals.',
  },
  {
    num: '02',
    title: 'Selects SKU',
    desc: 'Merchant browses the scheduled beat SKU catalog — staples, agri-inputs, daily goods — and selects what they need.',
    icon: <Layers size={22} />,
    detail: 'SKU catalog is curated based on local demand patterns and distributor availability.',
  },
  {
    num: '03',
    title: 'Commits quantity',
    desc: 'Merchant commits to a quantity within the 35% share cap. Commitment is binding and credit limit is frozen.',
    icon: <Check size={22} />,
    detail: 'The pool updates in real time. Every participant can see the progress, not the identities.',
  },
  {
    num: '04',
    title: 'Pool reaches tier',
    desc: 'As commitments accumulate, the pool crosses 40%, 70%, and 100% thresholds. Each tier unlocks better pricing.',
    icon: <Layers size={22} />,
    detail: 'At 100%, the pool locks. Distributor receives the confirmed aggregated order.',
  },
  {
    num: '05',
    title: 'Distributor fulfills',
    desc: 'Distributor prepares per-merchant sealed crates and dispatches scheduled doorstep deliveries.',
    icon: <Truck size={22} />,
    detail: 'Scheduled doorstep drops. High truck utilization. Transit insurance active.',
  },
  {
    num: '06',
    title: 'Merchant receives doorstep delivery',
    desc: 'At their shop counter, each merchant verifies with OTP. Custody formally transfers. Crate is sealed and tamper-evident.',
    icon: <Package size={22} />,
    detail: 'Merchant-specific invoice generated. GST-compliant documentation per transaction.',
  },
  {
    num: '07',
    title: 'Inventory facility repaid through cash flow',
    desc: 'The NBFC-funded facility is repaid via daily digital sales sweep, with a 14-day UPI AutoPay floor guarantee.',
    icon: <Wallet size={22} />,
    detail: 'Successful repayment builds the merchant credit history, increasing capacity for the next cycle.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">How It Works</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Seven steps from fragmented demand
              <br />
              <span className="text-text-secondary">to fulfilled, financed inventory.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Every step is designed around the realities of rural commerce.
              Every constraint is explicit. Every handoff is verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section">
        <div className="container-page">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-light hidden md:block" />

            <div className="space-y-10 md:space-y-16">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative reveal md:grid md:grid-cols-2 md:gap-12 items-start ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-bg-card border-2 border-brand-primary items-center justify-center z-10">
                    <span className="text-[0.75rem] font-semibold text-brand-primary tabular">{step.num}</span>
                  </div>

                  {/* Mobile dot */}
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-bg-card border-2 border-brand-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-[0.75rem] font-semibold text-brand-primary tabular">{step.num}</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="hidden md:flex items-center gap-3 mb-3 justify-start">
                      <div className={`w-11 h-11 rounded-xl bg-brand-muted/20 flex items-center justify-center text-brand-primary ${i % 2 === 0 ? 'md:order-2' : ''}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                    </div>
                    <h3 className="md:hidden text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-3">{step.desc}</p>
                    <p className="text-[0.8rem] text-text-tertiary leading-relaxed border-l-2 border-brand-primary/30 pl-3 md:border-l-0 md:pl-0 md:border-r-2 md:pr-3" style={{ borderInlineStart: i % 2 === 0 ? undefined : '2px solid rgba(184,134,11,0.3)', paddingInlineStart: i % 2 === 0 ? undefined : '12px' }}>
                      {step.detail}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary loop */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <p className="eyebrow mb-4">The Flywheel</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Each cycle strengthens the next.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto reveal">
            <div className="relative bg-bg-card border border-border-light rounded-xl p-8">
              <div className="space-y-0">
                {[
                  'Demand aggregates into purchasing power',
                  'Wholesale pricing unlocks for all participants',
                  'Doorstep delivery on scheduled beats makes last-mile economics work',
                  'Inventory facility bridges the capital gap',
                  'Repayment from real cash flow builds credit history',
                  'Stronger credit history enables larger next-cycle capacity',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-border-light last:border-0">
                    <div className="w-7 h-7 rounded-full bg-brand-muted/20 flex items-center justify-center text-brand-primary text-[0.75rem] font-semibold flex-shrink-0 tabular">
                      {i + 1}
                    </div>
                    <p className="text-[0.95rem] text-text-primary pt-0.5">{item}</p>
                    {i < 5 && (
                      <ArrowRight size={14} className="text-text-tertiary ml-auto mt-1 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-2xl bg-bg-dark text-text-inverse p-10 md:p-14 text-center reveal">
            <h2 className="font-display text-3xl md:text-4xl text-text-inverse mb-5 max-w-2xl mx-auto">
              Ready to see how this works for your context?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
                Build Your Cluster
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/platform" className="inline-flex items-center gap-2 px-5 py-3 border border-border-dark text-text-inverse rounded-lg font-medium text-[0.9rem] hover:bg-white/5 transition-colors">
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
