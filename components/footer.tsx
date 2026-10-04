import React from 'react';
import Link from 'next/link';
import { LogoMark, ArrowUpRight } from './icons';

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Demand Pooling', href: '/platform#demand' },
      { label: 'Zero-Warehouse Logistics', href: '/platform#logistics' },
      { label: 'Embedded Credit', href: '/platform#credit' },
      { label: 'Risk Infrastructure', href: '/platform#risk' },
      { label: 'Analytics', href: '/platform#analytics' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Retailers', href: '/retailers' },
      { label: 'For Distributors', href: '/distributors' },
      { label: 'For Finance Partners', href: '/finance-partners' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'About', href: '/about' },
      { label: 'Clusters', href: '/#clusters' },
    ],
  },
  {
    title: 'Compliance',
    links: [
      { label: 'Regulatory Positioning', href: '/about#compliance' },
      { label: 'Partner Dependencies', href: '/about#dependencies' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse">
      {/* CTA Band */}
      <div className="border-b border-border-dark">
        <div className="container-page py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="eyebrow-inverse mb-4">Get Started</p>
              <h2 className="font-display text-3xl md:text-5xl text-text-inverse max-w-xl">
                Build infrastructure around how rural commerce actually works.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-bg-card text-text-primary rounded-lg font-medium text-[0.9rem] hover:bg-bg-secondary transition-colors"
              >
                Build Your Cluster
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border-dark text-text-inverse rounded-lg font-medium text-[0.9rem] hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <LogoMark size={28} className="text-text-inverse" />
              <span className="font-semibold text-[1rem] tracking-tight">B2Beat</span>
              <span className="text-[0.65rem] font-medium px-1.5 py-0.5 rounded bg-white/5 text-text-inverse-secondary border border-border-dark">
                2.0
              </span>
            </Link>
            <p className="text-[0.875rem] text-text-inverse-secondary leading-relaxed max-w-xs">
              Demand pooling and embedded working-capital infrastructure for rural Indian MSME retailers.
            </p>
            <div className="mt-6 text-[0.75rem] text-text-inverse-secondary">
              <p className="mb-1">
                <span className="text-text-inverse">B2Beat orchestrates the commerce workflow.</span>
              </p>
              <p>Regulated financial functions remain with licensed partners.</p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[0.75rem] font-semibold uppercase tracking-wider text-text-inverse-secondary mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-text-inverse/80 hover:text-text-inverse transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-text-inverse-secondary">
            © {new Date().getFullYear()} B2Beat. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[0.8rem] text-text-inverse-secondary">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-status-positive" />
              Systems operational
            </span>
            <span>Demo environment · Illustrative data</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

