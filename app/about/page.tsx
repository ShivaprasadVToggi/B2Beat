import React from 'react';
import Link from 'next/link';
import {
  Building2,
  CreditCard,
  FileText,
  Shield,
  Check,
  ArrowUpRight,
  Layers,
  Users,
} from '@/components/icons';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">About</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Build infrastructure around
              <br />
              <span className="text-text-secondary">how rural commerce actually works.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              B2Beat exists because rural retail already has demand — it just doesn't have coordination.
              We're building the operating layer that turns fragmented merchant demand into
              real purchasing power and working capital.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 reveal">
              <p className="eyebrow mb-4">Philosophy</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
                We don't romanticize the kirana store.
                <br />
                <span className="text-text-secondary">We instrument it.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[0.95rem] text-text-secondary leading-relaxed reveal reveal-delay-1">
              <p>
                The small rural retailer is the backbone of Indian distribution — and also its bottleneck.
                Each shop orders too little to access wholesale pricing, ties up too much capital in inventory,
                and is too small a stop for efficient distributor routes.
              </p>
              <p>
                B2Beat doesn't try to replace these retailers. It doesn't try to build a giant warehouse
                in the middle of nowhere. Instead, we create a thin coordination layer: aggregate demand
                within a 15 km cluster, unlock the next price tier, consolidate into one truck drop,
                and bridge the inventory capital with short-duration credit.
              </p>
              <p>
                The system is designed around the realities of how rural commerce actually operates:
                cash-heavy, relationship-based, low-margin, and physically distributed.
                Every mechanism — from the 35% merchant cap to the OTP custody transfer —
                exists because we thought about how this could break, and engineered against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory positioning */}
      <section className="section bg-bg-secondary/50" id="compliance">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Regulatory Positioning</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Clear boundaries. Licensed partners.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto reveal">
            <div className="p-6 md:p-8 rounded-xl bg-bg-card border border-border-light mb-6">
              <p className="text-[1rem] text-text-primary leading-relaxed mb-4">
                <span className="font-semibold">B2Beat orchestrates the commerce workflow.</span>{' '}
                Regulated financial functions remain with licensed partners.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                {[
                  { icon: <CreditCard size={14} />, label: 'Lending', detail: 'Through NBFC partner' },
                  { icon: <Building2 size={14} />, label: 'Payment processing', detail: 'Through regulated payment infrastructure' },
                  { icon: <FileText size={14} />, label: 'Invoicing', detail: 'Merchant-specific, GST-compliant' },
                  { icon: <Layers size={14} />, label: 'Data', detail: 'Consent-based Account Aggregator' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary/60">
                    <div className="w-7 h-7 rounded-md bg-brand-muted/20 flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-text-primary text-[0.85rem]">{item.label}</div>
                      <div className="text-[0.75rem] text-text-tertiary">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[0.8rem] text-text-tertiary leading-relaxed">
              No claim is made regarding regulatory approvals, certifications, or production-ready integrations
              unless specifically validated with the relevant regulated partners.
              This website describes a product architecture and operating model.
            </p>
          </div>
        </div>
      </section>

      {/* Partner dependencies */}
      <section className="section" id="dependencies">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Honesty Section</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Two pieces are partner-dependent.
            </h2>
            <p className="text-[0.95rem] text-text-secondary leading-relaxed">
              We think credibility comes from being clear about what we don't control.
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

      {/* What we don't do */}
      <section className="section bg-bg-dark text-text-inverse">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow-inverse mb-4">What We Don't Do</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-inverse mb-5">
              Clear boundaries.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto stagger-children">
            {[
              'We are not a regulated lender or NBFC.',
              'We are not a payment aggregator or payment system provider.',
              'We do not hold customer funds.',
              'We do not invent distributor partnerships or NBFC relationships.',
              'We do not guarantee specific discount percentages until validated.',
              'We do not claim production-ready integrations without partner sign-off.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <Shield size={16} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                <p className="text-[0.9rem] text-text-inverse-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-2xl bg-bg-secondary/50 border border-border-light p-10 md:p-14 text-center reveal">
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5 max-w-2xl mx-auto">
              Want to help build this infrastructure?
            </h2>
            <p className="text-[0.95rem] text-text-secondary mb-8 max-w-xl mx-auto">
              We're looking for distribution partners, finance partners, and clusters of rural retailers
              to validate and refine the model.
            </p>
            <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-text-primary text-text-inverse rounded-lg font-medium text-[0.9rem] hover:bg-[#1a1d24] transition-colors">
              Get Involved
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

