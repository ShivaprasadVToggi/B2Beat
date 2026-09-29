'use client';

import React, { useState, useMemo } from 'react';
import { CreditCard, Wallet, Zap, Shield } from './icons';

const RECEIPT_OPTIONS = [10000, 25000, 50000, 75000, 100000];
const TENOR_DAYS = 14;

// Demo calculation constants
const CREDIT_MULTIPLIER = 2.5; // Up to 2.5x weekly digital receipts
const INTEREST_RATE_PER_14_DAYS = 0.015; // 1.5% per 14-day cycle (illustrative)
const DAILY_SWEEP_RATIO = 0.15; // 15% of daily digital sales go to repayment

export default function CreditSimulator() {
  const [weeklyReceipts, setWeeklyReceipts] = useState(25000);
  const [requestedOrder, setRequestedOrder] = useState(25000);

  const calculations = useMemo(() => {
    const maxCredit = Math.floor(weeklyReceipts * CREDIT_MULTIPLIER);
    const approvedAmount = Math.min(requestedOrder, maxCredit);
    const interest = Math.floor(approvedAmount * INTEREST_RATE_PER_14_DAYS);
    const totalRepayable = approvedAmount + interest;
    const dailyDigitalSales = weeklyReceipts / 7;
    const dailyRepaymentSweep = Math.floor(dailyDigitalSales * DAILY_SWEEP_RATIO);
    const estimatedDaysToRepay = Math.ceil(totalRepayable / dailyRepaymentSweep);
    const remainingCapacity = Math.max(0, maxCredit - approvedAmount);

    return {
      maxCredit,
      approvedAmount,
      interest,
      totalRepayable,
      dailyDigitalSales,
      dailyRepaymentSweep,
      estimatedDaysToRepay: Math.min(estimatedDaysToRepay, TENOR_DAYS),
      remainingCapacity,
      floorRepayment: Math.ceil(totalRepayable / TENOR_DAYS),
    };
  }, [weeklyReceipts, requestedOrder]);

  const orderSliderMax = calculations.maxCredit * 1.2;

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="bg-bg-card border border-border-light rounded-xl p-6 md:p-8 space-y-8">
        <div>
          <p className="eyebrow mb-2">Demo Calculator</p>
          <h3 className="text-xl font-semibold text-text-primary mb-1">Indicative Credit Simulation</h3>
          <p className="text-[0.85rem] text-text-tertiary">
            Based on trailing digital receipts and order request. Illustrative only.
          </p>
        </div>

        {/* Weekly receipts selector */}
        <div>
          <label className="block text-[0.85rem] font-medium text-text-primary mb-3">
            Weekly Digital Receipts
          </label>
          <div className="grid grid-cols-5 gap-2">
            {RECEIPT_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setWeeklyReceipts(opt)}
                className={`px-2 py-2.5 rounded-lg text-[0.75rem] font-medium tabular transition-all ${
                  weeklyReceipts === opt
                    ? 'bg-text-primary text-text-inverse'
                    : 'bg-bg-secondary text-text-secondary hover:bg-border-light'
                }`}
              >
                ₹{(opt / 1000).toFixed(opt >= 100000 ? 0 : 0)}K
              </button>
            ))}
          </div>
          <div className="mt-2 text-[0.75rem] text-text-tertiary tabular">
            Selected: ₹{weeklyReceipts.toLocaleString()} / week
          </div>
        </div>

        {/* Requested order slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-[0.85rem] font-medium text-text-primary">
              Requested Inventory Order
            </label>
            <span className="text-lg font-semibold text-text-primary tabular">
              ₹{requestedOrder.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={5000}
            max={Math.max(50000, orderSliderMax)}
            step={1000}
            value={requestedOrder}
            onChange={(e) => setRequestedOrder(Number(e.target.value))}
            className="w-full h-1.5 bg-bg-secondary rounded-full appearance-none cursor-pointer accent-brand-primary"
            style={{ accentColor: '#B8860B' }}
          />
          <div className="flex justify-between mt-2 text-[0.7rem] text-text-tertiary tabular">
            <span>₹5K</span>
            <span className="text-brand-primary font-medium">
              Max credit: ₹{calculations.maxCredit.toLocaleString()}
            </span>
            <span>₹{(orderSliderMax / 1000).toFixed(0)}K</span>
          </div>
        </div>

        {/* Repayment rails */}
        <div className="border-t border-border-light pt-6">
          <div className="text-[0.8rem] font-medium text-text-primary mb-3">Repayment Rails</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-bg-secondary border border-border-light">
              <div className="flex items-center gap-2 mb-1.5">
                <Zap size={14} className="text-brand-primary" />
                <span className="text-[0.75rem] font-semibold text-text-primary">Accelerator</span>
              </div>
              <p className="text-[0.7rem] text-text-tertiary leading-relaxed">
                Revenue-linked digital settlement sweep
              </p>
            </div>
            <div className="p-3 rounded-lg bg-bg-secondary border border-border-light">
              <div className="flex items-center gap-2 mb-1.5">
                <Shield size={14} className="text-status-info" />
                <span className="text-[0.75rem] font-semibold text-text-primary">Floor</span>
              </div>
              <p className="text-[0.7rem] text-text-tertiary leading-relaxed">
                14-day UPI AutoPay mandate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Outputs */}
      <div className="bg-bg-dark text-text-inverse rounded-xl p-6 md:p-8">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard size={18} className="text-brand-secondary" />
          <span className="text-[0.75rem] font-medium uppercase tracking-wider text-text-inverse-secondary">
            Indicative Outputs
          </span>
        </div>

        <div className="space-y-5">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-[0.7rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
              Financing Capacity
            </div>
            <div className="text-3xl font-semibold tabular">₹{calculations.maxCredit.toLocaleString()}</div>
            <div className="text-[0.75rem] text-text-inverse-secondary mt-1">
              Based on {weeklyReceipts.toLocaleString()} weekly receipts × 2.5x
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[0.65rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                Approved Order
              </div>
              <div className="text-xl font-semibold tabular">₹{calculations.approvedAmount.toLocaleString()}</div>
              {requestedOrder > calculations.maxCredit && (
                <div className="text-[0.65rem] text-status-warning mt-1">Capped at credit limit</div>
              )}
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[0.65rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                Est. Interest
              </div>
              <div className="text-xl font-semibold tabular">₹{calculations.interest.toLocaleString()}</div>
              <div className="text-[0.65rem] text-text-inverse-secondary mt-1">@ 1.5% per 14 days</div>
            </div>
          </div>

          <div className="divider-dark" />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[0.65rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                Daily Repayment (Sweep)
              </div>
              <div className="text-lg font-semibold tabular">₹{calculations.dailyRepaymentSweep.toLocaleString()}</div>
              <div className="text-[0.65rem] text-text-inverse-secondary mt-0.5">
                ~15% of daily sales
              </div>
            </div>
            <div>
              <div className="text-[0.65rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                Est. Repayment Period
              </div>
              <div className="text-lg font-semibold tabular">
                {calculations.estimatedDaysToRepay} days
              </div>
              <div className="text-[0.65rem] text-text-inverse-secondary mt-0.5">
                Floor: {TENOR_DAYS} days
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.65rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                  Remaining Credit Capacity
                </div>
                <div className="text-lg font-semibold tabular">₹{calculations.remainingCapacity.toLocaleString()}</div>
              </div>
              <Wallet size={20} className="text-text-inverse-secondary" />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/10 text-[0.7rem] text-text-inverse-secondary leading-relaxed">
          <p className="mb-1">
            <span className="text-text-inverse font-medium">Demo calculation — not a lending decision.</span>
          </p>
          <p>Final eligibility and terms are determined by the regulated lending partner.</p>
        </div>
      </div>
    </div>
  );
}
