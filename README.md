# 🚀 B2Beat
**Event-Driven Beat Aggregation & Automated Channel-Credit Orchestrator**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat&logo=supabase)](https://supabase.com/)
[![n8n](https://img.shields.io/badge/n8n-Workflow_Automation-EA4B71?style=flat&logo=n8n)](https://n8n.io/)
[![Paytm](https://img.shields.io/badge/Paytm-PA_Nodal_Rails-002970?style=flat)](https://paytm.com/)

**B2Beat** is an asset-light middleware protocol that digitizes FMCG distributor delivery beats. It aggregates fragmented neighborhood retail (kirana) demand to unlock real wholesale Cash Discounts (2.5%) via instant T+0 NBFC financing, executing deliveries on existing distributor routes, and automating micro-repayments via counter UPI QR splits.

---

## 🛑 The Problem: The Cash-Discount Trap
1. **The 2.5% Penalty:** Distributors offer a 2.5% Cash Discount for instant payment. Cash-strapped kiranas buy on 21-day credit, losing ₹1,20,000+ in profit yearly.
2. **Fragmented Purchasing:** Small order sizes (e.g., 5 bags of sugar) never unlock distributor wholesale volume slabs.
3. **Working-Capital Freeze:** Distributors chase payments for 25+ days (DSO), locking up capital and risking bad debts.

## ⚡ The B2Beat Solution
1. **Virtual Beat Pooling:** 12–20 kiranas anonymously pool staple orders along scheduled delivery routes to unlock volume pricing.
2. **Instant T+0 Financing:** Partner NBFC pays the distributor 100% upfront on Day 0 (closed-loop channel financing).
3. **Doorstep Beat Delivery:** Invoiced goods arrive at the kirana counter on the distributor's regular truck; driver OTP transfers custody.
4. **Dual-Rail Repayment:** Automated daily micro-sweeps (15-20%) from Paytm QR counter sales, backstopped by a Day-14 UPI AutoPay floor.

---

## 🏗️ System Architecture & Data Flow

```mermaid
flowchart LR
    classDef card fill:#FFFFFF,stroke:#CBD5E1,stroke-width:1.5px,color:#0F172A,font-size:12px;
    classDef highlight fill:#F0FDFA,stroke:#00C4D4,stroke-width:2px,color:#0B132B,font-weight:600,font-size:12px;
    classDef success fill:#F0FDF4,stroke:#10B981,stroke-width:2px,color:#0B132B,font-weight:600,font-size:12px;
    classDef orchestrator fill:#FFFBEB,stroke:#F59E0B,stroke-width:2px,color:#0B132B,font-weight:600,font-size:12px;

    subgraph S1 ["1 · DEMAND POOLING"]
        direction TB
        A1["fa:fa-laptop Kiranas Commit Orders<br/>Anonymous cluster portal"]:::card
        A2{"fa:fa-shield-alt Anti-Monopoly Guard<br/>Capped at 35% per store"}:::highlight
        A3["fa:fa-chart-line Wholesale Slab Unlocked<br/>Up to 3.5% total spread"]:::card
        A1 --> A2 -->|Validated| A3
    end

    subgraph S2 ["2 · T+0 CASH FINANCING"]
        direction TB
        B1["fa:fa-cogs Automated Cutoff Lock<br/>n8n event orchestration"]:::orchestrator
        B2["fa:fa-file-invoice Single Route Invoice<br/>Direct to distributor ERP"]:::card
        B3["fa:fa-university NBFC Pays Supplier T+0<br/>Direct 100% RTGS transfer"]:::highlight
        B1 --> B2 --> B3
    end

    subgraph S3 ["3 · DOORSTEP DELIVERY"]
        direction TB
        C1["fa:fa-truck Distributor Beat Truck<br/>Standard scheduled route"]:::card
        C2["fa:fa-box Shop Doorstep Drop<br/>Zero warehouse overhead"]:::card
        C3["fa:fa-key Driver 4-Digit OTP<br/>Instant custody transfer"]:::highlight
        C1 --> C2 --> C3
    end

    subgraph S4 ["4 · DAILY AUTO-REPAY"]
        direction TB
        D1["fa:fa-qrcode Customer Scans Paytm QR<br/>0% MDR on bank UPI"]:::success
        D2["fa:fa-code-branch Paytm Nodal Split<br/>15% to Loan, 85% to Shop"]:::success
        D3["fa:fa-calendar-check Day-14 AutoPay Floor<br/>Sweeps unpaid residual"]:::card
        D1 --> D2 --> D3
    end

    S1 -->|Cutoff Locked| S2
    S2 -->|100% Cash Paid| S3
    S3 -->|Stock Verified| S4
```
