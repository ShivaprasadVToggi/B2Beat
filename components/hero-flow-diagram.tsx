'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Store, Layers, TrendingUp, Truck, Package, Wallet, CreditCard, ArrowRight } from './icons';

interface FlowStep {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

const steps: FlowStep[] = [
  { id: 'merchants', label: 'Merchants', sublabel: 'Fragmented demand', icon: <Store size={18} />, x: 8, y: 50 },
  { id: 'pool', label: 'Pool', sublabel: 'Aggregated', icon: <Layers size={18} />, x: 25, y: 50 },
  { id: 'tier', label: 'Wholesale Tier', sublabel: 'Price unlocked', icon: <TrendingUp size={18} />, x: 42, y: 50 },
  { id: 'truck', label: 'Consolidated', sublabel: 'One truck route', icon: <Truck size={18} />, x: 58, y: 50 },
  { id: 'crates', label: 'Merchant Crates', sublabel: 'Sealed delivery', icon: <Package size={18} />, x: 74, y: 50 },
  { id: 'finance', label: 'Inventory Facility', sublabel: '14-day credit', icon: <CreditCard size={18} />, x: 90, y: 50 },
];

export default function HeroFlowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress based on how far the section has been scrolled
      const start = viewportHeight * 0.3;
      const end = -rect.height * 0.3;
      const scrollProgress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

      setProgress(scrollProgress);
      setActiveStep(Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lineProgress = progress * 100;

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Desktop horizontal flow */}
      <div className="hidden md:block">
        <svg
          className="w-full h-[200px]"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="flowProgress" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#D4A843" />
            </linearGradient>
          </defs>

          {/* Base line */}
          <line
            x1="80"
            y1="100"
            x2="920"
            y2="100"
            stroke="#E5E3DF"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Progress line */}
          <line
            x1="80"
            y1="100"
            x2={80 + (840 * lineProgress) / 100}
            y2="100"
            stroke="url(#flowProgress)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ transition: 'x2 0.3s ease-out' }}
          />

          {/* Animated flow dashes on active portion */}
          {progress > 0.05 && (
            <line
              x1="80"
              y1="100"
              x2={80 + (840 * lineProgress) / 100}
              y2="100"
              stroke="#B8860B"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="flow-line"
              opacity="0.5"
            />
          )}
        </svg>

        {/* Step nodes */}
        <div className="relative -mt-[200px] h-[200px]">
          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;
            return (
              <div
                key={step.id}
                className="absolute -translate-x-1/2 flex flex-col items-center"
                style={{
                  left: `${step.x}%`,
                  top: `${step.y}%`,
                  transform: `translate(-50%, -50%)`,
                  opacity: isActive ? 1 : 0.35,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isActive
                      ? 'bg-bg-card border-brand-primary text-brand-primary shadow-sm'
                      : 'bg-bg-card border-border-light text-text-tertiary'
                  } ${isCurrent ? 'ring-4 ring-brand-muted scale-110' : ''}`}
                >
                  {step.icon}
                </div>
                <div className="mt-3 text-center">
                  <div
                    className={`text-[0.75rem] font-semibold whitespace-nowrap transition-colors ${
                      isActive ? 'text-text-primary' : 'text-text-tertiary'
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="text-[0.65rem] text-text-tertiary mt-0.5 whitespace-nowrap">
                    {step.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden">
        <div className="relative pl-10 space-y-6">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border-light" />
          <div
            className="absolute left-[18px] top-2 w-px bg-brand-primary transition-all duration-500"
            style={{ height: `${lineProgress}%` }}
          />

          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            return (
              <div
                key={step.id}
                className="relative flex items-center gap-4"
                style={{
                  opacity: isActive ? 1 : 0.35,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <div
                  className={`absolute -left-10 w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                    isActive
                      ? 'bg-bg-card border-brand-primary text-brand-primary'
                      : 'bg-bg-card border-border-light text-text-tertiary'
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <div className={`text-[0.85rem] font-semibold ${isActive ? 'text-text-primary' : 'text-text-tertiary'}`}>
                    {step.label}
                  </div>
                  <div className="text-[0.75rem] text-text-tertiary">{step.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
