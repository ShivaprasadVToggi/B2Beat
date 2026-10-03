import React from 'react';
import { Truck, Users, Layers, Wallet, MapPin, Dot, Lock } from './icons';

const beatData = [
  { name: 'Mandya East Beat - Tue/Fri', demand: '2.6 tonnes', truck: '87%', merchants: 17, settlement: '₹2,84,500', delivery: 'Tomorrow · 08:30' },
  { name: 'Mysore Rural Beat - Mon/Thu', demand: '1.8 tonnes', truck: '72%', merchants: 12, settlement: '₹1,92,800', delivery: 'Oct 03 · 09:00' },
  { name: 'Hassan South Beat - Wed/Sat', demand: '3.1 tonnes', truck: '94%', merchants: 21, settlement: '₹3,41,200', delivery: 'Tomorrow · 11:00' },
];

export default function DistributorDashboard() {
  return (
    <div className="bg-bg-card border border-border-light rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-light bg-bg-secondary/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-status-info" />
          <span className="text-[0.75rem] font-medium text-text-secondary">Distributor Portal</span>
          <span className="text-[0.65rem] text-text-tertiary">· South Karnataka Region</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-medium" />
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-px bg-border-light">
        {[
          { label: 'Scheduled Beats', value: '4', icon: <MapPin size={14} />, sub: 'Active routes' },
          { label: 'Beat PO Consolidation', value: '9.2T', icon: <Layers size={14} />, sub: 'This cycle' },
          { label: 'OTP Verifications', value: '87%', icon: <Lock size={14} />, sub: 'Successful drops' },
          { label: 'T+0 NBFC Settlement', value: '₹9.4L', icon: <Wallet size={14} />, sub: '0 days DSO' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-bg-card p-4">
            <div className="flex items-center gap-1.5 text-[0.65rem] text-text-tertiary uppercase tracking-wider mb-1.5">
              {kpi.icon}
              {kpi.label}
            </div>
            <div className="text-xl font-semibold text-text-primary tabular">{kpi.value}</div>
            <div className="text-[0.65rem] text-status-positive mt-0.5">{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Cluster table */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-[0.85rem] font-semibold text-text-primary">Active Beats</h4>
          <span className="text-[0.7rem] text-text-tertiary">{beatData.length} beats</span>
        </div>

        <div className="overflow-x-auto -mx-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[0.65rem] uppercase tracking-wider text-text-tertiary border-b border-border-light">
                <th className="px-5 py-2.5 font-medium">Scheduled Beat</th>
                <th className="px-3 py-2.5 font-medium">PO Consolidation</th>
                <th className="px-3 py-2.5 font-medium">OTP Verified</th>
                <th className="px-3 py-2.5 font-medium hidden md:table-cell">Kirana Stops</th>
                <th className="px-3 py-2.5 font-medium hidden lg:table-cell">T+0 Disbursal</th>
                <th className="px-5 py-2.5 font-medium text-right">Dispatch Status</th>
              </tr>
            </thead>
            <tbody>
              {beatData.map((c) => (
                <tr key={c.name} className="border-b border-border-light last:border-0 hover:bg-bg-secondary/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-text-tertiary" />
                      <span className="font-medium text-text-primary">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 tabular text-text-primary">{c.demand}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-primary rounded-full"
                          style={{ width: c.truck }}
                        />
                      </div>
                      <span className="text-[0.75rem] tabular text-text-primary">{c.truck}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 hidden md:table-cell">
                    <div className="flex items-center gap-1.5 text-text-primary">
                      <Users size={13} className="text-text-tertiary" />
                      <span className="tabular">{c.merchants}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 hidden lg:table-cell tabular font-medium text-text-primary">
                    {c.settlement}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[0.75rem] text-text-secondary">
                      <Dot size={6} className="text-status-info" />
                      {c.delivery}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="mt-4 pt-4 border-t border-border-light text-[0.7rem] text-text-tertiary flex items-center justify-between">
          <span>Driver OTP Dispatch verified at kirana doorstep. 100% T+0 NBFC Disbursal.</span>
          <span className="text-brand-primary font-medium">Illustrative economics</span>
        </div>
      </div>
    </div>
  );
}
