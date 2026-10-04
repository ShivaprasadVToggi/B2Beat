'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMark, Menu, X, ArrowRight } from './icons';

const navItems = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Demand Pooling', href: '/platform#demand' },
      { label: 'Logistics', href: '/platform#logistics' },
      { label: 'Embedded Credit', href: '/platform#credit' },
      { label: 'Risk Infrastructure', href: '/platform#risk' },
    ],
  },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'For Retailers', href: '/retailers' },
      { label: 'For Distributors', href: '/distributors' },
      { label: 'For Finance Partners', href: '/finance-partners' },
    ],
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/85 backdrop-blur-md border-b border-border-light'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-page flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoMark size={28} className="text-text-primary transition-colors group-hover:text-brand-primary" />
            <span className="font-semibold text-[0.95rem] tracking-tight text-text-primary">
              B2Beat
            </span>
            <span className="hidden sm:inline text-[0.65rem] font-medium px-1.5 py-0.5 rounded bg-bg-secondary text-text-tertiary border border-border-light">
              2.0
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-[0.875rem] text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-60">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-bg-card border border-border-light rounded-lg shadow-lg p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-[0.85rem] text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-md transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/how-it-works" className="btn-ghost text-[0.85rem]">
              See How It Works
            </Link>
            <Link href="#get-started" className="btn-primary text-[0.85rem]">
              Build Your Cluster
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bottom-0 bg-bg-primary overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="container-page py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border-light py-3">
                <Link
                  href={item.href}
                  className="text-[1rem] font-medium text-text-primary flex items-center justify-between"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 ml-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-[0.9rem] text-text-secondary py-1.5"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/how-it-works"
                className="btn-secondary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                See How It Works
              </Link>
              <Link
                href="#get-started"
                className="btn-primary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Build Your Cluster
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

