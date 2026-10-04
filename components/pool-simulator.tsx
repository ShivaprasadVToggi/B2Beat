'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Minus, Check, Truck, Package, CreditCard, Dot } from './icons';
import { PRICING_TIERS, MERCHANT_SHARE_CAP } from '@/data/pools';

interface PoolSimulatorProps {
  targetKg?: number;
  basePricePerKg?: number;
  skuName?: string;
  clusterName?: string;
}

export default function PoolSimulator({
  targetKg = 2400,
  basePricePerKg = 42,
  skuName = 'Sona Masoori Rice',
  clusterName = 'Mandya East · Cluster 07',
}: PoolSimulatorProps) {
  const [userCommitment, setUserCommitment] = useState(200);
  const baseCurrent = 1780;
  const currentKg = baseCurrent + userCommitment;
  const progress = Math.min(100, (currentKg / targetKg) * 100);
  const remaining = Math.max(0, targetKg - currentKg);
  const isUnlocked = progress >= 100;

  const maxCommitment = Math.floor(targetKg * MERCHANT_SHARE_CAP); // 35% cap

  // Calculate current tier discount
  const currentDiscount = useMemo(() => {
    let discount = 0;
    for (const tier of PRICING_TIERS) {
      if (progress >= tier.threshold) {
        discount = tier.discount;
      }
    }
    return discount;
  }, [progress]);

  const effectivePrice = basePricePerKg * (1 - currentDiscount / 100);
  const userOrderValue = userCommitment * effectivePrice;
  const userSavings = userCommitment * basePricePerKg - userOrderValue;

  // Next tier info
  const nextTier = useMemo(() => {
    for (const tier of PRICING_TIERS) {
      if (progress < tier.threshold) {
        const kgNeeded = Math.ceil((tier.threshold / 100) * targetKg - currentKg);
        return { ...tier, kgNeeded: Math.max(0, kgNeeded) };
      }
    }
    return null;
  }, [progress, currentKg, targetKg]);

  const adjustCommitment = (delta: number) => {
    setUserCommitment((prev) => Math.max(0, Math.min(maxCommitment, prev + delta)));
  };

  // Anonymized merchants
  const merchants = [
    { id: 'M01', qty: 180, anonymous: 'Store #42' },
    { id: 'M02', qty: 240, anonymous: 'Store #11' },
    { id: 'M03', qty: 150, anonymous: 'Store #89' },
    { id: 'M04', qty: 320, anonymous: 'Store #23' },
    { id: 'M05', qty: 210, anonymous: 'Store #56' },
    { id: 'M06', qty: 120, anonymous: 'Store #78' },
    { id: 'M07', qty: 280, anonymous: 'Store #34' },
    { id: 'M08', qty: 80, anonymous: 'Store #91' },
    { id: 'YOU', qty: userCommitment, anonymous: 'Your Commitment', isYou: true },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Main pool card */}
      <div className="lg:col-span-3 bg-bg-card border border-border-light rounded-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[0.7rem] font-medium px-2 py-0.5 rounded-full bg-brand-muted/40 text-brand-primary border border-brand-muted">
                LIVE POOL
              </span>
              <span className="text-[0.75rem] text-text-tertiary">{clusterName}</span>
            </div>
            <h3 className="text-xl font-semibold text-text-primary">{skuName}</h3>
          </div>
          <div className="text-right">
            <div className="text-[0.7rem] text-text-tertiary uppercase tracking-wider">T-12h ROUTE CUTOFF</div>
            <div className="text-[0.85rem] font-medium text-brand-primary tabular">48:00:00</div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-end justify-between mb-2">
            <div>
              <div className="text-[0.75rem] text-text-tertiary">Current</div>
              <div className="text-2xl font-semibold text-text-primary tabular">
                {currentKg.toLocaleString()}
                <span className="text-base font-normal text-text-tertiary"> / {targetKg.toLocaleString()} kg</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[0.75rem] text-text-tertiary">Progress</div>
              <div className={`text-2xl font-semibold tabular ${isUnlocked ? 'text-status-positive' : 'text-brand-primary'}`}>
                {progress.toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Progress bar with tier markers */}
          <div className="relative h-2 bg-bg-secondary rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out ${
                isUnlocked ? 'bg-status-positive' : 'bg-brand-primary'
              }`}
              style={{ width: `${progress}%` }}
            />
            {/* Tier markers */}
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.threshold}
                className="absolute top-0 bottom-0 w-px bg-bg-card"
                style={{ left: `${tier.threshold}%` }}
              />
            ))}
          </div>

          {/* Tier labels */}
          <div className="flex justify-between mt-2 text-[0.65rem] text-text-tertiary">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.threshold}
                className={`text-center ${progress >= tier.threshold ? 'text-brand-primary font-medium' : ''}`}
                style={{ marginLeft: tier.threshold === 40 ? 'auto' : undefined, marginRight: tier.threshold === 100 ? '0' : undefined }}
              >
                {tier.threshold}% · -{tier.discount}%
              </div>
            ))}
          </div>
        </div>

        {/* Pricing tiers table */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="text-center p-3 rounded-lg bg-bg-secondary">
            <div className="text-[0.65rem] text-text-tertiary uppercase tracking-wider mb-1">Base</div>
            <div className="text-[0.95rem] font-semibold text-text-primary tabular">₹{basePricePerKg}</div>
          </div>
          {PRICING_TIERS.map((tier) => {
            const active = progress >= tier.threshold;
            const tierPrice = basePricePerKg * (1 - tier.discount / 100);
            return (
              <div
                key={tier.threshold}
                className={`text-center p-3 rounded-lg border transition-all ${
                  active
                    ? 'bg-brand-muted/20 border-brand-primary text-brand-primary'
                    : 'bg-bg-secondary border-transparent text-text-primary'
                }`}
              >
                <div className="text-[0.65rem] uppercase tracking-wider mb-1 opacity-70">
                  {tier.threshold}%
                </div>
                <div className="text-[0.95rem] font-semibold tabular">
                  ₹{tierPrice.toFixed(0)}
                  <span className="text-[0.7rem] ml-1 opacity-70">-{tier.discount}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unlocked state */}
        {isUnlocked && (
          <div className="mb-6 p-4 rounded-lg bg-status-positive/10 border border-status-positive/20 flex items-start gap-3">
            <Check size={18} className="text-status-positive mt-0.5 flex-shrink-0" />
            <div className="grid grid-cols-3 gap-4 flex-1 text-sm">
              <div>
                <div className="text-[0.7rem] text-text-tertiary uppercase">Wholesale Price</div>
                <div className="font-semibold text-text-primary tabular">₹{effectivePrice.toFixed(0)}/kg</div>
              </div>
              <div>
                <div className="text-[0.7rem] text-text-tertiary uppercase">Delivery</div>
                <div className="font-semibold text-text-primary">Shop Doorstep</div>
              </div>
              <div>
                <div className="text-[0.7rem] text-text-tertiary uppercase">Financing</div>
                <div className="font-semibold text-text-primary">Eligible</div>
              </div>
            </div>
          </div>
        )}

        {/* Next tier indicator */}
        {!isUnlocked && nextTier && (
          <div className="mb-6 p-3 rounded-lg bg-bg-secondary flex items-center gap-3 text-sm">
            <Dot className="text-brand-primary flex-shrink-0" />
            <span className="text-text-secondary">
              <span className="font-medium text-text-primary">{nextTier.kgNeeded.toLocaleString()} kg</span> to trigger{' '}
              <span className="font-medium text-brand-primary">100% Volume Slab & Cash Discount</span>
            </span>
          </div>
        )}

        {/* Commitment controls */}
        <div className="border-t border-border-light pt-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[0.8rem] font-medium text-text-primary">Your Commitment</div>
              <div className="text-[0.7rem] text-text-tertiary">Max 35% of pool · {maxCommitment.toLocaleString()} kg cap</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustCommitment(-50)}
                className="w-8 h-8 rounded-lg border border-border-light flex items-center justify-center text-text-secondary hover:bg-bg-secondary transition-colors"
                aria-label="Decrease commitment"
              >
                <Minus size={14} />
              </button>
              <div className="w-20 text-center">
                <div className="text-lg font-semibold text-text-primary tabular">{userCommitment}</div>
                <div className="text-[0.65rem] text-text-tertiary">kg</div>
              </div>
              <button
                onClick={() => adjustCommitment(50)}
                className="w-8 h-8 rounded-lg border border-border-light flex items-center justify-center text-text-secondary hover:bg-bg-secondary transition-colors"
                aria-label="Increase commitment"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* User economics */}
          {userCommitment > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-4 p-4 rounded-lg bg-bg-secondary">
              <div>
                <div className="text-[0.65rem] text-text-tertiary uppercase">INVOICE VALUE</div>
                <div className="text-[0.95rem] font-semibold text-text-primary tabular">₹8,190</div>
              </div>
              <div>
                <div className="text-[0.65rem] text-text-tertiary uppercase">EFFECTIVE RATE</div>
                <div className="text-[0.95rem] font-semibold text-text-primary tabular">₹41/kg</div>
              </div>
              <div>
                <div className="text-[0.65rem] text-text-tertiary uppercase">NET MARGIN BOOST</div>
                <div className="text-[0.95rem] font-semibold text-status-positive tabular">+₹210</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Participants panel */}
      <div className="lg:col-span-2 bg-bg-card border border-border-light rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[0.85rem] font-semibold text-text-primary">Dual-Rail Repayment Ledger</h4>
          <span className="text-[0.75rem] text-text-tertiary tabular">Simulated</span>
        </div>

        <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
          <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm bg-bg-secondary transition-colors">
            <span className="text-text-secondary">T+0 Upfront Cash Required</span>
            <span className="font-medium text-status-positive bg-status-positive/10 px-2 py-0.5 rounded-full tabular">₹0</span>
          </div>
          <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm hover:bg-bg-secondary transition-colors">
            <span className="text-text-secondary">NBFC Disbursal to Distributor</span>
            <span className="font-medium text-text-primary tabular">₹8,190</span>
          </div>
          <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm hover:bg-bg-secondary transition-colors">
            <span className="text-text-secondary">Daily Paytm QR Micro-Sweep</span>
            <span className="font-medium text-brand-primary tabular">Est. 15% of daily sales</span>
          </div>
          <div className="flex items-center justify-between px-3 py-3 rounded-lg text-sm hover:bg-bg-secondary transition-colors">
            <span className="text-text-secondary">Day-14 UPI AutoPay Floor</span>
            <span className="font-medium text-text-primary tabular">Residual Balance</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border-light text-[0.7rem] text-text-tertiary">
          <p>*Ledger simulates automated T+0 nodal splits via Paytm PA. Legal custody transfers upon driver OTP verification at doorstep.</p>
        </div>
      </div>
    </div>
  );
}
