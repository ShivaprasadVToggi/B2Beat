import React from 'react';
import Link from 'next/link';
import {
  Store,
  TrendingUp,
  Truck,
  CreditCard,
  FileText,
  Check,
  ArrowUpRight,
  Gauge,
} from '@/components/icons';

const benefits = [
  {
    icon: <TrendingUp size={24} />,
    title: 'Buy cheaper',
    desc: 'Pooled demand unlocks wholesale pricing tiers that no single small retailer can reach alone.',
    stat: 'Target: 1.5–3.5%',
    statLabel: 'wholesale improvement (hypothesis)',
  },
  {
    icon: <Store size={24} />,
    title: 'Buy together',
    desc: 'Anonymous participation on scheduled beats. Blind to other merchants, transparent to the system.',
    stat: 'Scheduled Beat',
    statLabel: 'route pooling',
  },
  {
    icon: <Truck size={24} />,
    title: 'Receive reliably',
    desc: 'Doorstep delivery via scheduled distributor beat truck. OTP-verified custody transfer at your shop counter.',
    stat: 'Doorstep',
    statLabel: 'delivery',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Access inventory capital',
    desc: 'Short-duration inventory facility from regulated NBFC partner. Repaid from your actual digital sales.',
    stat: '14-day',
    statLabel: 'tenor',
  },
  {
    icon: <FileText size={24} />,
    title: 'Build a credit history',
    desc: 'Every successful cycle builds verifiable commerce history. Credit capacity grows with your track record.',
    stat: 'Cycle-over-cycle',
    statLabel: 'capacity growth',
  },
  {
    icon: <Gauge size={24} />,
    title: 'Track savings',
    desc: 'Clear dashboard shows wholesale savings per order, repayment progress, and available credit.',
    stat: 'Real-time',
    statLabel: 'visibility',
  },
];

export default function RetailersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">For Retailers</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Wholesale pricing.
              <br />
              <span className="text-text-secondary">Without wholesale scale.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              If you're a rural retailer running 10–25 kg/day of staples, B2Beat
              turns your individual demand into collective purchasing power —
              and finances the inventory against your real cash flow.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 rounded-xl border border-border-light bg-bg-card card-hover">
                <div className="w-12 h-12 rounded-xl bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{b.title}</h3>
                <p className="text-[0.875rem] text-text-secondary leading-relaxed mb-5">{b.desc}</p>
                <div className="pt-4 border-t border-border-light">
                  <div className="text-xl font-semibold text-text-primary tabular">{b.stat}</div>
                  <div className="text-[0.7rem] text-text-tertiary mt-0.5">{b.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Joining a Cluster</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Three steps to participate.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 stagger-children">
            {[
              { n: '01', t: 'Check your cluster', d: 'See if a B2Beat cluster is active within 15 km of your shop.' },
              { n: '02', t: 'Verify capacity', d: 'Consent-based digital receipts check establishes your indicative credit capacity.' },
              { n: '03', t: 'Start committing', d: 'Join active pools, commit quantities, and track wholesale savings accumulate.' },
            ].map((s) => (
              <div key={s.n} className="p-6 rounded-xl border border-border-light bg-bg-card">
                <div className="text-[0.8rem] font-mono text-brand-primary mb-3">{s.n}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{s.t}</h3>
                <p className="text-[0.875rem] text-text-secondary leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-2xl bg-bg-dark text-text-inverse p-10 md:p-14 reveal">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl text-text-inverse mb-5">
                Join a cluster near your shop.
              </h2>
              <p className="text-[0.95rem] text-text-inverse-secondary mb-8 leading-relaxed">
                If no cluster exists in your area yet, you can help seed one.
                We work with groups of 8+ retailers to establish a new cluster.
              </p>
              <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
                Join a Cluster
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

