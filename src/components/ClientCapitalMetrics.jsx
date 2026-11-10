const KPI_STRIP = [
  {
    label: "Total Institutional Clientele",
    icon: "account_balance",
    value: "1,420+ Entities",
    detailIcon: "trending_up",
    detail: "+14.8% YoY Net Onboarding",
    footer: "Sovereign & prime institutional accounts",
  },
  {
    label: "Blended Fiduciary Fee",
    icon: "price_check",
    value: "18.4 bps",
    detailIcon: "savings",
    detail: "$224M Client Fee Savings",
    footer: "vs. 34.2 bps industry standard benchmark",
  },
  {
    label: "Sovereign Fiscal Dividend",
    icon: "payments",
    value: "$3.42B",
    detailIcon: "verified",
    detail: "Public Value Generated",
    footer: "Taxes, bond underwriting & concessions since 2020",
  },
  {
    label: "Capital Retention Rate",
    icon: "security",
    value: "99.4%",
    detailIcon: "lock",
    detail: "Zero Balance Sheet Flight",
    footer: "10-year rolling continuity average",
  },
];

const CHART_DATA = [
  {
    year: "2020",
    clients: "780 entities",
    div: "$1.85B",
    fee: "27.8 bps",
    infra: "$5.2B",
    retention: "99.1%",
    savings: "$86M",
  },
  {
    year: "2021",
    clients: "910 entities",
    div: "$2.15B",
    fee: "25.1 bps",
    infra: "$7.4B",
    retention: "99.2%",
    savings: "$112M",
  },
  {
    year: "2022",
    clients: "1,080 entities",
    div: "$2.58B",
    fee: "22.4 bps",
    infra: "$9.8B",
    retention: "99.3%",
    savings: "$148M",
  },
  {
    year: "2023",
    clients: "1,240 entities",
    div: "$2.96B",
    fee: "20.2 bps",
    infra: "$12.1B",
    retention: "99.4%",
    savings: "$185M",
  },
  {
    year: "2024",
    clients: "1,420 entities",
    div: "$3.42B",
    fee: "18.4 bps",
    infra: "$14.6B",
    retention: "99.4%",
    savings: "$224M",
  },
  {
    year: "2025 (Est)",
    clients: "1,610 entities",
    div: "$3.95B",
    fee: "16.5 bps",
    infra: "$17.8B",
    retention: "99.5%",
    savings: "$268M",
  },
];

const DISTRIBUTION = [
  {
    label: "Sovereign Wealth Funds & Central Banks (38%)",
    detail: "540 entities • $54.2B AUC",
    width: "38%",
    color: "bg-primary",
  },
  {
    label: "Regulated Asset Managers & Pension Reserves (26%)",
    detail: "369 entities • $37.1B AUC",
    width: "26%",
    color: "bg-[#264191]",
  },
  {
    label: "Supranational & Multilateral Agencies (24%)",
    detail: "341 entities • $34.3B AUC",
    width: "24%",
    color: "bg-[#4059aa]",
  },
  {
    label: "Dynastic Family Offices & Trusts (12%)",
    detail: "170 entities • $17.2B AUC",
    width: "12%",
    color: "bg-[#8fa7fe]",
  },
];

const FISCAL_IMPACT = [
  {
    title: "Public Infrastructure & Green Energy Syndication",
    value: "$14.6B Underwritten",
    body: (
      <>
        Syndicated at favorable yields with a -18 bps sub-sovereign spread
        reduction, delivering{" "}
        <strong className="text-primary">$142M in direct savings</strong> to
        municipal taxpayers.
      </>
    ),
  },
  {
    title: "Direct Corporate Tax & Statutory Levies",
    value: "$512M Paid",
    body: "Contributed in full compliance across national treasuries in London (HMRC), Zurich (FTA), and partner G10 jurisdictions without aggressive tax sheltering.",
  },
  {
    title: "Strategic Sovereign Liquidity Facilities",
    value: "$8.4B Deployed",
    body: "Rapid-response intraday facilities provided to stabilize domestic municipal and regional interbank liquidity during macro stress dislocations.",
  },
  {
    title: "High-Value Fiduciary Guild Endowments",
    value: "2,400+ Positions",
    body: (
      <>
        Supported high-value specialized fiduciary careers in clearance & trust,
        augmented by{" "}
        <strong className="text-primary">$48M in civic endowments</strong> via the
        Bancroft Foundation.
      </>
    ),
  },
];

const HOVER_ZONES = [
  { x: 65, year: "2020" },
  { x: 135, year: "2021" },
  { x: 205, year: "2022" },
  { x: 275, year: "2023" },
  { x: 345, year: "2024" },
  { x: 415, year: "2025 (Est)" },
];

function HoverZones({ hoverClass, data }) {
  return HOVER_ZONES.map((zone, index) => {
    const item = data[index];
    return (
      <rect
        key={zone.x}
        className={`chart-hover-zone fill-transparent ${hoverClass} cursor-pointer`}
        data-clients={item.clients}
        data-div={item.div}
        data-fee={item.fee}
        data-infra={item.infra}
        data-retention={item.retention}
        data-savings={item.savings}
        data-year={zone.year}
        height="200"
        width="55"
        x={zone.x}
        y="20"
      ></rect>
    );
  });
}

function ClienteleChart() {
  return (
    <div className="bg-white p-6 md:p-8 border border-outline-variant rounded shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider">
              Dual-Axis Analysis • Trend 01
            </span>
            <h3 className="font-title-md text-title-md text-primary mt-1">
              Clientele Growth vs. Blended Fiduciary Fee
            </h3>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 bg-surface-container-high text-primary rounded">
            2020 – 2025e
          </span>
        </div>
        <p className="font-body-md text-xs text-on-surface-variant mt-2 leading-relaxed">
          Displays expansion of institutional mandates (bars, left scale) against
          systemic efficiency gains and declining blended basis-point fee burden
          (line, right scale).
        </p>
        <div className="flex items-center gap-6 mt-4 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-primary rounded-sm inline-block"></span>
            <span>Institutional Clients (Entities)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-[#4059aa] rounded-full inline-block"></span>
            <span className="w-2 h-2 rounded-full border-2 border-[#4059aa] bg-white -ml-3 mr-0.5"></span>
            <span>Blended Fee (bps)</span>
          </div>
        </div>
        <div className="relative mt-6 select-none">
          <svg className="w-full h-56 overflow-visible" viewBox="0 0 540 240">
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="30"
              y2="30"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="75"
              y2="75"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="120"
              y2="120"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="165"
              y2="165"
            ></line>
            <line stroke="#c6c5d0" x1="45" x2="495" y1="205" y2="205"></line>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="34"
            >
              1,800
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="79"
            >
              1,350
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="124"
            >
              900
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="169"
            >
              450
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="209"
            >
              0
            </text>
            <text
              className="text-[10px] fill-[#4059aa] font-mono"
              textAnchor="start"
              x="500"
              y="34"
            >
              30 bps
            </text>
            <text
              className="text-[10px] fill-[#4059aa] font-mono"
              textAnchor="start"
              x="500"
              y="79"
            >
              25 bps
            </text>
            <text
              className="text-[10px] fill-[#4059aa] font-mono"
              textAnchor="start"
              x="500"
              y="124"
            >
              20 bps
            </text>
            <text
              className="text-[10px] fill-[#4059aa] font-mono"
              textAnchor="start"
              x="500"
              y="169"
            >
              15 bps
            </text>
            <text
              className="text-[10px] fill-[#4059aa] font-mono"
              textAnchor="start"
              x="500"
              y="209"
            >
              10 bps
            </text>
            <rect
              className="fill-[#081448] transition-all hover:fill-[#264191]"
              height="76"
              rx="2"
              width="34"
              x="75"
              y="129"
            ></rect>
            <rect
              className="fill-[#081448] transition-all hover:fill-[#264191]"
              height="89"
              rx="2"
              width="34"
              x="145"
              y="116"
            ></rect>
            <rect
              className="fill-[#081448] transition-all hover:fill-[#264191]"
              height="105"
              rx="2"
              width="34"
              x="215"
              y="100"
            ></rect>
            <rect
              className="fill-[#081448] transition-all hover:fill-[#264191]"
              height="121"
              rx="2"
              width="34"
              x="285"
              y="84"
            ></rect>
            <rect
              className="fill-[#081448] transition-all hover:fill-[#264191]"
              height="138"
              rx="2"
              width="34"
              x="355"
              y="67"
            ></rect>
            <rect
              className="fill-[#081448] opacity-75 stroke-dashed transition-all hover:opacity-100"
              height="157"
              rx="2"
              stroke="#4059aa"
              strokeDasharray="2,2"
              width="34"
              x="425"
              y="48"
            ></rect>
            <polyline
              fill="none"
              points="92,49 162,73 232,96 302,116 372,132 442,148"
              stroke="#4059aa"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></polyline>
            <circle
              cx="92"
              cy="49"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="162"
              cy="73"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="232"
              cy="96"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="302"
              cy="116"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="372"
              cy="132"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="442"
              cy="148"
              fill="#ffffff"
              r="4.5"
              stroke="#4059aa"
              strokeWidth="2.5"
            ></circle>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="92"
              y="226"
            >
              2020
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="162"
              y="226"
            >
              2021
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="232"
              y="226"
            >
              2022
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="302"
              y="226"
            >
              2023
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-bold fill-primary"
              textAnchor="middle"
              x="372"
              y="226"
            >
              2024
            </text>
            <text
              className="text-[11px] fill-[#4059aa] font-semibold"
              textAnchor="middle"
              x="442"
              y="226"
            >
              2025e
            </text>
            <HoverZones hoverClass="hover:fill-blue-500/10" data={CHART_DATA} />
          </svg>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
        <span>Scale Ratio: ~60% Fee Deflation per 1,000 mandates</span>
        <span className="font-medium text-emerald-800 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">verified</span>{" "}
          Fiduciary Scale Benchmark
        </span>
      </div>
    </div>
  );
}

function FiscalChart() {
  return (
    <div className="bg-white p-6 md:p-8 border border-outline-variant rounded shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-outline-variant pb-3">
          <div>
            <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider">
              Dual-Axis Analysis • Trend 02
            </span>
            <h3 className="font-title-md text-title-md text-primary mt-1">
              Sovereign Dividend vs. Infrastructure Syndication
            </h3>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
            Audited Public Value
          </span>
        </div>
        <p className="font-body-md text-xs text-on-surface-variant mt-2 leading-relaxed">
          Tracks direct macro-fiscal transfers to sovereign treasuries (bars, left
          scale) alongside long-term national grid and green transport syndication
          (line, right scale).
        </p>
        <div className="flex items-center gap-6 mt-4 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#264191] rounded-sm inline-block"></span>
            <span>Fiscal Dividend ($B)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-emerald-600 rounded-full inline-block"></span>
            <span className="w-2 h-2 rounded-full border-2 border-emerald-600 bg-white -ml-3 mr-0.5"></span>
            <span>Cum. Infrastructure ($B)</span>
          </div>
        </div>
        <div className="relative mt-6 select-none">
          <svg className="w-full h-56 overflow-visible" viewBox="0 0 540 240">
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="30"
              y2="30"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="75"
              y2="75"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="120"
              y2="120"
            ></line>
            <line
              stroke="#dee8ff"
              strokeDasharray="3,3"
              x1="45"
              x2="495"
              y1="165"
              y2="165"
            ></line>
            <line stroke="#c6c5d0" x1="45" x2="495" y1="205" y2="205"></line>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="34"
            >
              $5.0B
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="79"
            >
              $3.75B
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="124"
            >
              $2.5B
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="169"
            >
              $1.25B
            </text>
            <text
              className="text-[10px] fill-[#767680] font-mono"
              textAnchor="end"
              x="40"
              y="209"
            >
              $0
            </text>
            <text
              className="text-[10px] fill-emerald-800 font-mono"
              textAnchor="start"
              x="500"
              y="34"
            >
              $20.0B
            </text>
            <text
              className="text-[10px] fill-emerald-800 font-mono"
              textAnchor="start"
              x="500"
              y="79"
            >
              $15.0B
            </text>
            <text
              className="text-[10px] fill-emerald-800 font-mono"
              textAnchor="start"
              x="500"
              y="124"
            >
              $10.0B
            </text>
            <text
              className="text-[10px] fill-emerald-800 font-mono"
              textAnchor="start"
              x="500"
              y="169"
            >
              $5.0B
            </text>
            <text
              className="text-[10px] fill-emerald-800 font-mono"
              textAnchor="start"
              x="500"
              y="209"
            >
              $0
            </text>
            <rect
              className="fill-[#264191] transition-all hover:fill-[#4059aa]"
              height="65"
              rx="2"
              width="34"
              x="75"
              y="140"
            ></rect>
            <rect
              className="fill-[#264191] transition-all hover:fill-[#4059aa]"
              height="75"
              rx="2"
              width="34"
              x="145"
              y="130"
            ></rect>
            <rect
              className="fill-[#264191] transition-all hover:fill-[#4059aa]"
              height="90"
              rx="2"
              width="34"
              x="215"
              y="115"
            ></rect>
            <rect
              className="fill-[#264191] transition-all hover:fill-[#4059aa]"
              height="104"
              rx="2"
              width="34"
              x="285"
              y="101"
            ></rect>
            <rect
              className="fill-[#264191] transition-all hover:fill-[#4059aa]"
              height="120"
              rx="2"
              width="34"
              x="355"
              y="85"
            ></rect>
            <rect
              className="fill-[#264191] opacity-75 stroke-dashed transition-all hover:opacity-100"
              height="138"
              rx="2"
              stroke="#10b981"
              strokeDasharray="2,2"
              width="34"
              x="425"
              y="67"
            ></rect>
            <polyline
              fill="none"
              points="92,160 162,140 232,119 302,99 372,77 442,49"
              stroke="#059669"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></polyline>
            <circle
              cx="92"
              cy="160"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="162"
              cy="140"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="232"
              cy="119"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="302"
              cy="99"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="372"
              cy="77"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <circle
              cx="442"
              cy="49"
              fill="#ffffff"
              r="4.5"
              stroke="#059669"
              strokeWidth="2.5"
            ></circle>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="92"
              y="226"
            >
              2020
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="162"
              y="226"
            >
              2021
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="232"
              y="226"
            >
              2022
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-semibold"
              textAnchor="middle"
              x="302"
              y="226"
            >
              2023
            </text>
            <text
              className="text-[11px] fill-[#111c2d] font-bold fill-primary"
              textAnchor="middle"
              x="372"
              y="226"
            >
              2024
            </text>
            <text
              className="text-[11px] fill-emerald-800 font-semibold"
              textAnchor="middle"
              x="442"
              y="226"
            >
              2025e
            </text>
            <HoverZones hoverClass="hover:fill-emerald-500/10" data={CHART_DATA} />
          </svg>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs text-on-surface-variant">
        <span>Public Yield Delta: -18 bps Sub-Sovereign Spread Relief</span>
        <span className="font-medium text-emerald-800 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">verified</span>{" "}
          Clean Public Ledger
        </span>
      </div>
    </div>
  );
}

export default function ClientCapitalMetrics() {
  return (
    <section
      className="py-space-xl bg-surface-container-low border-b border-outline-variant scroll-mt-20"
      id="client-capital-metrics"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-1">
              Institutional Value & Fiscal Impact
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Client Capital Metrics & Sovereign Economic Dividend
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Audited Institutional Clientele Dynamics, Transparent Fiduciary Fee
            Structuring, and Tangible Macro-Fiscal Returns Generated for Host
            Nations and Public Treasuries (2020–2025e).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {KPI_STRIP.map((item) => (
            <div
              key={item.label}
              className="bg-white p-6 border border-outline-variant rounded border-t-2 border-t-primary shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2"
            >
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-caps text-label-caps uppercase">
                  {item.label}
                </span>
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {item.icon}
                </span>
              </div>
              <div className="font-tabular-figure text-2xl font-bold text-primary">
                {item.value}
              </div>
              <div className="text-xs text-emerald-800 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  {item.detailIcon}
                </span>{" "}
                {item.detail}
              </div>
              <p className="font-body-md text-[11px] text-on-surface-variant pt-1 border-t border-surface-container">
                {item.footer}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClienteleChart />
          <FiscalChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-white p-6 md:p-8 border border-outline-variant rounded shadow-sm space-y-6">
            <div className="border-b border-outline-variant pb-4 flex items-center justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Client Breakdown & Pricing
                </span>
                <h3 className="font-title-md text-title-md text-primary mt-1">
                  Client Distribution & Tier Architecture
                </h3>
              </div>
              <span className="font-label-caps text-label-caps bg-surface-container-low text-primary border border-outline-variant px-2.5 py-1 rounded">
                1,420 Master Mandates
              </span>
            </div>
            <div className="space-y-4">
              {DISTRIBUTION.map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-primary">
                      {item.label}
                    </span>
                    <span className="font-tabular-figure font-bold text-primary">
                      {item.detail}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded p-4 space-y-3">
              <span className="font-label-caps text-label-caps text-primary uppercase font-bold block">
                Transparent Fiduciary Fee Structuring
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
                  <span className="text-on-surface-variant font-medium">
                    Sovereign Custody & Clearance:
                  </span>
                  <span className="font-tabular-figure font-bold text-primary">
                    8.5 bps flat on segregated tier-1 assets
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
                  <span className="text-on-surface-variant font-medium">
                    Treasury Clearing & RTGS Liquidity Routing:
                  </span>
                  <span className="font-tabular-figure font-bold text-primary">
                    4.2 bps on transacted volumes
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant font-medium">
                    Discretionary Asset Liability Structuring:
                  </span>
                  <span className="font-tabular-figure font-bold text-primary">
                    25.0 bps (Zero hidden spread gouging)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 md:p-8 border border-outline-variant rounded shadow-sm space-y-6">
            <div className="border-b border-outline-variant pb-4 flex items-center justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Macro-Fiscal Contribution
                </span>
                <h3 className="font-title-md text-title-md text-primary mt-1">
                  National Economic Value Augmentation
                </h3>
              </div>
              <span className="font-label-caps text-label-caps bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded">
                Audited Fiscal Impact
              </span>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Bancroft & Co. directly reinforces sovereign financial stability and
              public wealth generation across core operating jurisdictions through
              non-speculative, nation-building credit operations.
            </p>
            <div className="space-y-4">
              {FISCAL_IMPACT.map((item) => (
                <div
                  key={item.title}
                  className="p-4 bg-surface rounded border border-outline-variant space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-sm font-semibold text-primary">
                      {item.title}
                    </span>
                    <span className="font-tabular-figure text-sm font-bold text-primary">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
