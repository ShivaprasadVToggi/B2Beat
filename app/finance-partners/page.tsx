import React from 'react';
import Link from 'next/link';
import {
  Building2,
  CreditCard,
  Layers,
  Shield,
  Wallet,
  Check,
  ArrowUpRight,
  FileText,
  Zap,
} from '@/components/icons';

const valueProps = [
  {
    icon: <FileText size={24} />,
    title: 'Cash-flow underwriting',
    desc: 'Consent-based Account Aggregator data plus real commerce behavior from the B2Beat system.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Merchant behavioral data',
    desc: 'Commitment patterns, pool participation, on-time crate collection — signals beyond just bank statements.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Pool & order history',
    desc: 'Every transaction is recorded. Order-backed facilities mean capital follows verified commerce.',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Channel financing',
    desc: 'Reach a segment of rural MSME retailers that is difficult to underwrite and serve individually.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Repayment rails',
    desc: 'Dual-rail collection: revenue-linked digital sweep plus 14-day UPI AutoPay floor mandate.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Risk controls built in',
    desc: 'Merchant share caps, credit frozen at commitment, custody boundaries — system-level constraints.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Portfolio visibility',
    desc: 'Dashboards show cluster-level and portfolio-level performance. Repayment tracking per facility.',
  },
  {
    icon: <Wallet size={24} />,
    title: 'Distributor payment',
    desc: 'You fund the merchant facility. The distributor gets paid. Clean cash flow on both sides.',
  },
];

export default function FinancePartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">For Finance Partners</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Underwrite against
              <br />
              <span className="text-text-secondary">verified commerce behavior.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              B2Beat generates a rich stream of merchant-level commerce signals —
              commitments, order fulfillment, custody transfers, repayment —
              that complement traditional underwriting data.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-bg-secondary border border-border-light text-[0.85rem] text-text-secondary max-w-xl">
              <span className="font-medium text-text-primary">Note:</span> B2Beat is not a regulated lender.
              We orchestrate the commerce workflow and provide data infrastructure.
              All lending is performed by licensed NBFC partners.
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
            {valueProps.map((v) => (
              <div key={v.title} className="p-5 rounded-xl border border-border-light bg-bg-card card-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-4">
                  {v.icon}
                </div>
                <h3 className="text-[0.95rem] font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-[0.8rem] text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <p className="eyebrow mb-4">Integration Model</p>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
                You remain the regulated entity.
              </h2>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6">
                B2Beat provides the commerce data, the merchant identity context,
                and the repayment collection rails. Your institution retains the lending license,
                the customer relationship, and the balance sheet.
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                {[
                  'NBFC partner makes credit decisions',
                  'Funds disbursed from your books',
                  'B2Beat orchestrates repayment flows',
                  'Regulated payment infrastructure handles settlement',
                  'Portfolio reporting and dashboards provided',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check size={15} className="text-brand-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="bg-bg-card border border-border-light rounded-xl p-6 space-y-3">
                {[
                  { from: 'B2Beat', to: 'NBFC Partner', data: 'Merchant commerce signals, pool & order data' },
                  { from: 'NBFC Partner', to: 'Distributor', data: 'Facility disbursement' },
                  { from: 'Merchant', to: 'Payment Rail', data: 'Digital sales + UPI AutoPay' },
                  { from: 'Payment Rail', to: 'NBFC Partner', data: 'Repayment allocation' },
                  { from: 'B2Beat', to: 'NBFC Partner', data: 'Portfolio reporting & dashboards' },
                ].map((flow, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary/60 border border-border-light">
                    <div className="flex-shrink-0 text-[0.65rem] font-mono text-text-tertiary">0{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[0.8rem] font-medium text-text-primary truncate">
                        {flow.from} → {flow.to}
                      </div>
                      <div className="text-[0.7rem] text-text-tertiary truncate">{flow.data}</div>
                    </div>
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
          <div className="rounded-2xl bg-bg-dark text-text-inverse p-10 md:p-14 reveal">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl text-text-inverse mb-5">
                Discuss a finance partnership.
              </h2>
              <p className="text-[0.95rem] text-text-inverse-secondary mb-8 leading-relaxed">
                We're actively seeking NBFC and payment infrastructure partners
                to validate and implement the credit and repayment flows described here.
              </p>
              <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
                Discuss a Finance Partnership
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

