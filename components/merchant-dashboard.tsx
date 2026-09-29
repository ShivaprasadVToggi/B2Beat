'use client';

import React, { useState } from 'react';
import {
  Wallet,
  Layers,
  Package,
  CreditCard,
  FileText,
  Store,
  ArrowRight,
  Check,
  Dot,
} from './icons';

const tabs = [
  { id: 'overview', label: 'Overview', icon: <Store size={14} /> },
  { id: 'pool', label: 'Active Pool', icon: <Layers size={14} /> },
  { id: 'orders', label: 'Orders', icon: <Package size={14} /> },
  { id: 'credit', label: 'Credit', icon: <CreditCard size={14} /> },
  { id: 'history', label: 'History', icon: <FileText size={14} /> },
];

const recentOrders = [
  { id: 'ORD-2847', sku: 'Sona Masoori Rice', qty: '180 kg', amount: '₹7,452', status: 'In Pool', date: 'Active' },
  { id: 'ORD-2831', sku: 'Sunflower Oil', qty: '40 L', amount: '₹5,568', status: 'Delivered', date: 'Oct 28' },
  { id: 'ORD-2812', sku: 'Toor Dal', qty: '60 kg', amount: '₹7,142', status: 'Repaid', date: 'Oct 15' },
  { id: 'ORD-2798', sku: 'Sugar', qty: '100 kg', amount: '₹4,120', status: 'Repaid', date: 'Oct 02' },
];

const repayments = [
  { date: 'Oct 30', amount: '₹840', type: 'Digital sweep', status: 'completed' },
  { date: 'Oct 29', amount: '₹720', type: 'Digital sweep', status: 'completed' },
  { date: 'Oct 28', amount: '₹910', type: 'Digital sweep', status: 'completed' },
  { date: 'Oct 27', amount: '₹680', type: 'Digital sweep', status: 'upcoming' },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    'In Pool': 'bg-brand-muted/30 text-brand-primary border-brand-muted',
    Delivered: 'bg-status-info/10 text-status-info border-status-info/20',
    Repaid: 'bg-status-positive/10 text-status-positive border-status-positive/20',
  };
  const style = styles[status] || 'bg-bg-secondary text-text-tertiary border-border-light';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] font-medium border ${style}`}>
      {status === 'In Pool' && <Dot size={6} className="animate-pulse" />}
      {status}
    </span>
  );
}

export default function MerchantDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-bg-card border border-border-light rounded-xl overflow-hidden shadow-sm">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-light bg-bg-secondary/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-status-positive" />
          <span className="text-[0.75rem] font-medium text-text-secondary">Merchant Dashboard</span>
          <span className="text-[0.65rem] text-text-tertiary">· Merchant 01</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-border-light overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[0.75rem] font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-text-primary text-text-inverse'
                : 'text-text-secondary hover:bg-bg-secondary'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {activeTab === 'overview' && (
          <div className="space-y-5">
            {/* KPI cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg bg-bg-secondary border border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] text-text-tertiary uppercase tracking-wider mb-2">
                  <Wallet size={12} /> Available Credit
                </div>
                <div className="text-2xl font-semibold text-text-primary tabular">₹84,000</div>
                <div className="mt-2 h-1.5 bg-border-light rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary rounded-full" style={{ width: '78%' }} />
                </div>
                <div className="text-[0.65rem] text-text-tertiary mt-1.5">₹18,400 utilized</div>
              </div>
              <div className="p-4 rounded-lg bg-bg-secondary border border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] text-text-tertiary uppercase tracking-wider mb-2">
                  <Layers size={12} /> Active Pool
                </div>
                <div className="text-2xl font-semibold text-text-primary tabular">1,200 kg</div>
                <div className="mt-2 h-1.5 bg-border-light rounded-full overflow-hidden">
                  <div className="h-full bg-status-info rounded-full" style={{ width: '78%' }} />
                </div>
                <div className="text-[0.65rem] text-text-tertiary mt-1.5">Rice · 78% filled</div>
              </div>
              <div className="p-4 rounded-lg bg-bg-secondary border border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] text-text-tertiary uppercase tracking-wider mb-2">
                  <span className="w-3 h-3 rounded-sm bg-brand-muted" /> Wholesale Saving
                </div>
                <div className="text-2xl font-semibold text-status-positive tabular">₹1,472</div>
                <div className="text-[0.65rem] text-text-tertiary mt-1.5">@ -7% tier unlocked</div>
              </div>
              <div className="p-4 rounded-lg bg-bg-secondary border border-border-light">
                <div className="flex items-center gap-2 text-[0.7rem] text-text-tertiary uppercase tracking-wider mb-2">
                  <CreditCard size={12} /> Inventory Facility
                </div>
                <div className="text-2xl font-semibold text-text-primary tabular">₹18,400</div>
                <div className="text-[0.65rem] text-text-tertiary mt-1.5">Due in 14 days</div>
              </div>
            </div>

            {/* Repayment mini chart */}
            <div className="p-4 rounded-lg border border-border-light">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[0.8rem] font-medium text-text-primary">Repayment Progress</span>
                <span className="text-[0.75rem] text-text-tertiary tabular">₹2,470 / ₹18,676</span>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[40, 55, 35, 48, 62, 30, 0, 0, 0, 0, 0, 0, 0, 0].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t transition-all ${i < 7 ? 'bg-brand-primary/80' : 'bg-bg-secondary'}`}
                    style={{ height: `${Math.max(8, h)}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[0.6rem] text-text-tertiary">
                <span>Day 1</span>
                <span>Day 7 · Today</span>
                <span>Day 14</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pool' && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-bg-secondary border border-border-light">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[0.85rem] font-semibold text-text-primary">Sona Masoori Rice</div>
                  <div className="text-[0.7rem] text-text-tertiary">Mandya East · Cluster 07</div>
                </div>
                <StatusPill status="In Pool" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Your commitment</span>
                  <span className="font-medium tabular">180 kg · ₹7,452</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Pool progress</span>
                  <span className="font-medium tabular">1,872 / 2,400 kg (78%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Wholesale savings</span>
                  <span className="font-medium text-status-positive tabular">₹561</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-tertiary">Cutoff</span>
                  <span className="font-medium tabular">Oct 02, 2026</span>
                </div>
              </div>
            </div>
            <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-brand-primary rounded-full transition-all" style={{ width: '78%' }} />
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-2">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border-light hover:bg-bg-secondary transition-colors"
              >
                <div>
                  <div className="text-[0.85rem] font-medium text-text-primary">{order.sku}</div>
                  <div className="text-[0.7rem] text-text-tertiary">
                    {order.id} · {order.qty} · {order.date}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[0.85rem] font-medium text-text-primary tabular">{order.amount}</span>
                  <StatusPill status={order.status} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'credit' && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-bg-dark text-text-inverse">
              <div className="text-[0.7rem] text-text-inverse-secondary uppercase tracking-wider mb-1">
                Active Facility
              </div>
              <div className="text-2xl font-semibold tabular">₹18,400</div>
              <div className="text-[0.75rem] text-text-inverse-secondary mt-1">
                14-day tenor · 1.5% fee · Due Nov 11
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-[0.65rem] text-text-inverse-secondary uppercase">Daily Sweep</div>
                  <div className="font-medium tabular">₹780 avg</div>
                </div>
                <div>
                  <div className="text-[0.65rem] text-text-inverse-secondary uppercase">Floor Repayment</div>
                  <div className="font-medium tabular">₹1,335 / day</div>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              {repayments.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 text-sm">
                  <div className="flex items-center gap-2.5">
                    {r.status === 'completed' ? (
                      <Check size={14} className="text-status-positive" />
                    ) : (
                      <Dot size={8} className="text-text-tertiary" />
                    )}
                    <div>
                      <div className="text-text-primary">{r.type}</div>
                      <div className="text-[0.7rem] text-text-tertiary">{r.date}</div>
                    </div>
                  </div>
                  <span className={`font-medium tabular ${r.status === 'upcoming' ? 'text-text-tertiary' : 'text-text-primary'}`}>
                    {r.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="text-center py-12 text-text-tertiary text-sm">
            <FileText size={28} className="mx-auto mb-3 opacity-50" />
            <p>Order and repayment history</p>
            <p className="text-[0.8rem] mt-1">12 completed orders · 0 defaults</p>
          </div>
        )}
      </div>
    </div>
  );
}
