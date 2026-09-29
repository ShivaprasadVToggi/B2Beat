'use client';

import React, { useState } from 'react';
import { Truck, MapPin, Package } from './icons';

interface MerchantNode {
  id: string;
  x: number;
  y: number;
  skus: { name: string; qty: string }[];
}

const merchantNodes: MerchantNode[] = [
  { id: 'M01', x: 22, y: 28, skus: [{ name: 'Rice', qty: '180 kg' }, { name: 'Oil', qty: '40 L' }] },
  { id: 'M02', x: 78, y: 22, skus: [{ name: 'Rice', qty: '240 kg' }] },
  { id: 'M03', x: 82, y: 62, skus: [{ name: 'Rice', qty: '150 kg' }, { name: 'Pulses', qty: '60 kg' }] },
  { id: 'M04', x: 68, y: 82, skus: [{ name: 'Rice', qty: '120 kg' }, { name: 'Oil', qty: '60 L' }, { name: 'Pulses', qty: '40 kg' }] },
  { id: 'M05', x: 28, y: 78, skus: [{ name: 'Rice', qty: '320 kg' }] },
  { id: 'M06', x: 15, y: 55, skus: [{ name: 'Rice', qty: '210 kg' }, { name: 'Sugar', qty: '80 kg' }] },
  { id: 'M07', x: 50, y: 15, skus: [{ name: 'Rice', qty: '80 kg' }] },
  { id: 'M08', x: 50, y: 88, skus: [{ name: 'Rice', qty: '280 kg' }, { name: 'Oil', qty: '30 L' }] },
];

export default function ClusterVisualization() {
  const [hoveredNode, setHoveredNode] = useState<MerchantNode | null>(null);

  return (
    <div className="bg-bg-card border border-border-light rounded-xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="eyebrow mb-1">Cluster 07</div>
          <h4 className="text-lg font-semibold text-text-primary">Mandya East · Karnataka</h4>
        </div>
        <div className="text-right">
          <div className="text-[0.7rem] text-text-tertiary uppercase tracking-wider">Radius</div>
          <div className="text-[0.9rem] font-medium text-text-primary tabular">15 km</div>
        </div>
      </div>

      <div className="relative aspect-[4/3] bg-bg-secondary rounded-lg overflow-hidden border border-border-light">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-fine opacity-60" />

        {/* Cluster radius circle */}
        <div
          className="absolute rounded-full border border-brand-primary/30 bg-brand-muted/10"
          style={{
            left: '50%',
            top: '50%',
            width: '70%',
            height: '70%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute rounded-full border border-dashed border-brand-primary/20"
          style={{
            left: '50%',
            top: '50%',
            width: '45%',
            height: '45%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* SVG for routes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Routes from hub to merchants */}
          {merchantNodes.map((m) => (
            <line
              key={`route-${m.id}`}
              x1="50"
              y1="50"
              x2={m.x}
              y2={m.y}
              stroke="#B8860B"
              strokeWidth="0.3"
              strokeOpacity={hoveredNode?.id === m.id ? 0.6 : 0.15}
              strokeDasharray="1 1"
            />
          ))}

          {/* Animated truck route */}
          <line
            x1="50"
            y1="50"
            x2="22"
            y2="28"
            stroke="#B8860B"
            strokeWidth="0.4"
            strokeOpacity="0.5"
            className="flow-line"
          />
        </svg>

        {/* Hub */}
        <div
          className="absolute z-10"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative">
            <div className="absolute inset-0 w-10 h-10 -m-2 rounded-full bg-brand-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="w-6 h-6 rounded-full bg-brand-primary border-2 border-bg-card flex items-center justify-center shadow-lg relative">
              <MapPin size={12} className="text-white" />
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-center whitespace-nowrap">
            <div className="text-[0.65rem] font-semibold text-text-primary">Cluster Hub</div>
          </div>
        </div>

        {/* Merchant nodes */}
        {merchantNodes.map((m) => (
          <button
            key={m.id}
            className="absolute z-10 group"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setHoveredNode(m)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div
              className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                hoveredNode?.id === m.id
                  ? 'bg-brand-primary border-brand-primary scale-150'
                  : 'bg-bg-card border-text-tertiary group-hover:border-brand-primary'
              }`}
            />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 text-[0.55rem] text-text-tertiary whitespace-nowrap">
              {m.id}
            </span>
          </button>
        ))}

        {/* Truck indicator */}
        <div
          className="absolute z-20 transition-all duration-3000 ease-in-out"
          style={{
            left: '35%',
            top: '38%',
            animation: 'truckMove 4s ease-in-out infinite',
          }}
        >
          <div className="w-7 h-7 rounded-md bg-bg-card border border-brand-primary shadow-md flex items-center justify-center">
            <Truck size={14} className="text-brand-primary" />
          </div>
        </div>

        {/* Tooltip */}
        {hoveredNode && (
          <div
            className="absolute z-30 bg-bg-card border border-border-light rounded-lg shadow-lg p-3 min-w-[140px]"
            style={{
              left: `${Math.min(hoveredNode.x + 5, 70)}%`,
              top: `${Math.max(hoveredNode.y - 15, 5)}%`,
            }}
          >
            <div className="text-[0.7rem] font-semibold text-text-primary mb-2">{hoveredNode.id}</div>
            <div className="space-y-1">
              {hoveredNode.skus.map((sku, i) => (
                <div key={i} className="flex items-center justify-between gap-4 text-[0.7rem]">
                  <span className="text-text-tertiary">{sku.name}</span>
                  <span className="font-medium text-text-primary tabular">{sku.qty}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] text-text-tertiary">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-brand-primary border-2 border-bg-card" />
          <span>Cluster Hub</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-bg-card border border-text-tertiary" />
          <span>Merchant Node</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 bg-brand-primary/40" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #B8860B 0, #B8860B 3px, transparent 3px, transparent 6px)' }} />
          <span>Delivery Route</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck size={12} className="text-brand-primary" />
          <span>In Transit</span>
        </div>
      </div>
    </div>
  );
}
