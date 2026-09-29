import React from 'react';

type IconProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

const base = (size = 20, strokeWidth = 1.5, className = '') => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
});

export const ArrowRight = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const ArrowDown = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

export const Check = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Plus = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const Minus = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M5 12h14" />
  </svg>
);

export const Menu = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

export const X = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const Store = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M3 9h18l-1.5 10.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 9Z" />
    <path d="M3 9 4.5 4h15L21 9" />
    <path d="M9 22v-6h6v6" />
  </svg>
);

export const Truck = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M3 7h11v10H3z" />
    <path d="M14 10h4l3 3v4h-7" />
    <circle cx="7" cy="18.5" r="2" />
    <circle cx="17" cy="18.5" r="2" />
  </svg>
);

export const Package = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export const Wallet = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" />
    <path d="M17 14h.01" />
  </svg>
);

export const CreditCard = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

export const MapPin = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Users = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Building2 = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
    <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export const Shield = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);

export const Layers = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
);

export const TrendingUp = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="m22 7-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
);

export const Gauge = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
);

export const FileText = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

export const Lock = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Zap = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  </svg>
);

export const Circle = ({ className, size, strokeWidth }: IconProps) => (
  <svg {...base(size, strokeWidth, className)}>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const Dot = ({ className, size = 8 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 8 8" className={className}>
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

// VyaparPool Logo Mark
export const LogoMark = ({ className, size = 32 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none">
    <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 22V10l7 8 7-8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="10" r="1.5" fill="currentColor" />
  </svg>
);
