import React from 'react';
import Link from 'next/link';
import {
  Building2,
  Truck,
  Layers,
  Wallet,
  MapPin,
  Check,
  ArrowUpRight,
  Users,
} from '@/components/icons';

const benefits = [
  {
    icon: <Layers size={24} />,
    title: 'Demand aggregation',
    desc: 'Receive aggregated purchase orders for scheduled routes instead of many fragmented small orders.',
  },
  {
    icon: <Truck size={24} />,
    title: 'Higher truck utilization',
    desc: 'Doorstep deliveries on scheduled beats with verified OTPs. Route economics transform from marginal to efficient.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Lower route fragmentation',
    desc: 'Instead of scattered logistics, you serve scheduled kirana doorstep drops with zero hassle.',
  },
  {
    icon: <Wallet size={24} />,
    title: 'Faster payment',
    desc: 'Distributor receives payment from the NBFC partner. No waiting for merchant collection.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Predictable volume',
    desc: 'Pool commitments are binding. You know what to prepare before the truck rolls.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'New rural coverage',
    desc: 'Reach thin rural markets that were previously uneconomical to serve directly.',
  },
];

export default function DistributorsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-page relative pt-16 md:pt-24 pb-16">
          <div className="max-w-3xl reveal">
            <p className="eyebrow mb-4">For Distributors</p>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6 leading-[1.05]">
              Turn fragmented rural demand
              <br />
              <span className="text-text-secondary">into efficient routes.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              VyaparPool aggregates merchant demand at the scheduled beat level,
              giving you predictable volume, high truck utilization, and
              cleaner payment economics — without the cost of building rural reach yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 rounded-xl border border-border-light bg-bg-card card-hover">
                <div className="w-12 h-12 rounded-xl bg-brand-muted/20 flex items-center justify-center text-brand-primary mb-5">
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{b.title}</h3>
                <p className="text-[0.875rem] text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-bg-secondary/50">
        <div className="container-page">
          <div className="max-w-3xl mb-12 reveal">
            <p className="eyebrow mb-4">Route Economics</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-5">
              Normal route vs. VyaparPool route.
            </h2>
            <p className="text-[0.8rem] text-text-tertiary">Illustrative economics for comparison</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 reveal">
            <div className="p-7 rounded-xl border border-border-light bg-bg-card">
              <div className="text-[0.7rem] uppercase tracking-wider text-text-tertiary mb-2">Normal Route</div>
              <h3 className="text-xl font-semibold text-text-secondary mb-5">Multiple stops · Fragmented</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Merchant stops', '20+'],
                  ['Truck utilization', '~40%'],
                  ['Credit terms', 'Extended'],
                  ['Demand certainty', 'Low'],
                  ['Rural coverage', 'Limited'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-2 border-b border-border-light last:border-0">
                    <span className="text-text-secondary">{k}</span>
                    <span className="font-medium text-text-primary tabular">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-7 rounded-xl border border-brand-primary/30 bg-brand-muted/5">
              <div className="text-[0.7rem] uppercase tracking-wider text-brand-primary mb-2">VyaparPool Route</div>
              <h3 className="text-xl font-semibold text-text-primary mb-5">Scheduled beat deliveries</h3>
              <div className="space-y-3 text-sm">
                {[
                  ['Merchant stops', 'Scheduled Doorstep Beats'],
                  ['Truck utilization', '85–95%'],
                  ['Payment', 'NBFC-funded, faster'],
                  ['Demand certainty', 'Binding commitments'],
                  ['Rural coverage', 'New clusters viable'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-2 border-b border-border-light last:border-0">
                    <span className="text-text-secondary">{k}</span>
                    <span className="font-medium text-brand-primary tabular">{v}</span>
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
                Become a distribution partner.
              </h2>
              <p className="text-[0.95rem] text-text-inverse-secondary mb-8 leading-relaxed">
                We work with FMCG distributors operating in tier-2, tier-3, and rural markets.
                Bring your rate cards and your truck fleet. We bring the aggregated demand.
              </p>
              <Link href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors">
                Become a Distribution Partner
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
