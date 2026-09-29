// Mock data for VyaparPool 2.0
// All data is illustrative / demo only

export interface Cluster {
  id: string;
  name: string;
  region: string;
  radiusKm: number;
  merchantCount: number;
  activePools: number;
  demandTonnes: number;
  hubLocation: { x: number; y: number };
}

export const clusters: Cluster[] = [
  {
    id: 'cluster-07',
    name: 'Mandya East',
    region: 'Karnataka',
    radiusKm: 15,
    merchantCount: 17,
    activePools: 3,
    demandTonnes: 2.6,
    hubLocation: { x: 50, y: 50 },
  },
  {
    id: 'cluster-12',
    name: 'Nashik Rural',
    region: 'Maharashtra',
    radiusKm: 15,
    merchantCount: 22,
    activePools: 4,
    demandTonnes: 3.8,
    hubLocation: { x: 50, y: 50 },
  },
  {
    id: 'cluster-03',
    name: 'Tirunelveli South',
    region: 'Tamil Nadu',
    radiusKm: 15,
    merchantCount: 14,
    activePools: 2,
    demandTonnes: 1.9,
    hubLocation: { x: 50, y: 50 },
  },
];

export interface PoolTier {
  threshold: number; // percentage
  discount: number; // percentage discount
  label: string;
}

export interface Pool {
  id: string;
  sku: string;
  skuName: string;
  clusterId: string;
  clusterName: string;
  targetKg: number;
  currentKg: number;
  basePricePerKg: number;
  unit: string;
  tiers: PoolTier[];
  cutoffDate: string;
  status: 'active' | 'locked' | 'fulfilled';
  participants: number;
}

export const pools: Pool[] = [
  {
    id: 'pool-rice-07',
    sku: 'RICE-SONA',
    skuName: 'Sona Masoori Rice',
    clusterId: 'cluster-07',
    clusterName: 'Mandya East',
    targetKg: 2400,
    currentKg: 1780,
    basePricePerKg: 42,
    unit: 'kg',
    tiers: [
      { threshold: 40, discount: 2, label: 'Tier 1' },
      { threshold: 70, discount: 4, label: 'Tier 2' },
      { threshold: 100, discount: 7, label: 'Wholesale' },
    ],
    cutoffDate: '2026-10-02',
    status: 'active',
    participants: 12,
  },
  {
    id: 'pool-oil-07',
    sku: 'OIL-SUN',
    skuName: 'Sunflower Oil',
    clusterId: 'cluster-07',
    clusterName: 'Mandya East',
    targetKg: 800,
    currentKg: 520,
    basePricePerKg: 145,
    unit: 'L',
    tiers: [
      { threshold: 40, discount: 2, label: 'Tier 1' },
      { threshold: 70, discount: 4, label: 'Tier 2' },
      { threshold: 100, discount: 6, label: 'Wholesale' },
    ],
    cutoffDate: '2026-10-02',
    status: 'active',
    participants: 9,
  },
  {
    id: 'pool-pulses-12',
    sku: 'PULSE-TOOR',
    skuName: 'Toor Dal',
    clusterId: 'cluster-12',
    clusterName: 'Nashik Rural',
    targetKg: 1200,
    currentKg: 1200,
    basePricePerKg: 128,
    unit: 'kg',
    tiers: [
      { threshold: 40, discount: 2, label: 'Tier 1' },
      { threshold: 70, discount: 4, label: 'Tier 2' },
      { threshold: 100, discount: 7, label: 'Wholesale' },
    ],
    cutoffDate: '2026-10-01',
    status: 'locked',
    participants: 18,
  },
];

export interface Merchant {
  id: string;
  anonymousId: string;
  clusterId: string;
  weeklyDigitalReceipts: number;
  creditLimit: number;
  creditUtilized: number;
  activeCommitments: number;
}

export const merchants: Merchant[] = [
  { id: 'm1', anonymousId: 'Merchant 01', clusterId: 'cluster-07', weeklyDigitalReceipts: 28500, creditLimit: 84000, creditUtilized: 18400, activeCommitments: 2 },
  { id: 'm2', anonymousId: 'Merchant 02', clusterId: 'cluster-07', weeklyDigitalReceipts: 17200, creditLimit: 52000, creditUtilized: 12600, activeCommitments: 1 },
  { id: 'm3', anonymousId: 'Merchant 03', clusterId: 'cluster-07', weeklyDigitalReceipts: 42000, creditLimit: 125000, creditUtilized: 31200, activeCommitments: 3 },
  { id: 'm4', anonymousId: 'Merchant 04', clusterId: 'cluster-07', weeklyDigitalReceipts: 21800, creditLimit: 65000, creditUtilized: 15800, activeCommitments: 2 },
  { id: 'm5', anonymousId: 'Merchant 05', clusterId: 'cluster-07', weeklyDigitalReceipts: 33400, creditLimit: 98000, creditUtilized: 24500, activeCommitments: 2 },
];

export interface Distributor {
  id: string;
  name: string;
  region: string;
  activeClusters: number;
  monthlyVolumeTonnes: number;
  truckUtilization: number;
}

export const distributors: Distributor[] = [
  { id: 'd1', name: 'Distributor Partner', region: 'South India', activeClusters: 4, monthlyVolumeTonnes: 42, truckUtilization: 87 },
];

export interface FinancePartner {
  id: string;
  name: string;
  type: 'NBFC' | 'Payment' | 'Account Aggregator';
}

export const financePartners: FinancePartner[] = [
  { id: 'f1', name: 'NBFC Partner', type: 'NBFC' },
  { id: 'f2', name: 'Payment Partner', type: 'Payment' },
  { id: 'f3', name: 'Account Aggregator', type: 'Account Aggregator' },
];

// Pricing tiers reference
export const PRICING_TIERS = [
  { threshold: 40, discount: 2, label: 'Tier 1' },
  { threshold: 70, discount: 4, label: 'Tier 2' },
  { threshold: 100, discount: 7, label: 'Wholesale' },
] as const;

// Merchant share cap
export const MERCHANT_SHARE_CAP = 0.35; // 35%

// Loan tenor
export const LOAN_TENOR_DAYS = 14;
