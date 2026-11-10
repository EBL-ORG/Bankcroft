const KPI_STRIP = [
  {
    label: "Intraday Peak Cushion",
    icon: "water_drop",
    value: "$18.6B",
    detail: "Real-time RTGS buffer unencumbered",
    detailIcon: "check_circle",
    accent: true,
  },
  {
    label: "Historical Default Ratio",
    icon: "verified_user",
    value: "0.00% NPL",
    detail: "100% prime sovereign & cash backing across cycles",
  },
  {
    label: "NSFR Structural Duration",
    icon: "timelapse",
    value: "3.84 Years",
    detail: "Weighted asset-liability maturity surplus",
    detailIcon: "trending_up",
    accent: true,
  },
];

const RWA_SLICES = [
  {
    label: "G7 Sovereign Treasury Securities (AAA / AA+)",
    value: "42% ($78.48B)",
    width: "42%",
    color: "bg-primary",
  },
  {
    label: "Direct Central Bank Reserves (BoE, SNB, Fed)",
    value: "28% ($52.32B)",
    width: "28%",
    color: "bg-[#264191]",
  },
  {
    label: "G10 Multicurrency Clearing & RTGS Liquidity",
    value: "18% ($33.63B)",
    width: "18%",
    color: "bg-[#4059aa]",
  },
  {
    label: "Prime Over-Collateralized Sovereign Facilities",
    value: "12% ($22.43B)",
    width: "12%",
    color: "bg-[#8fa7fe]",
  },
];

const STRESS_ROWS = [
  {
    scenario: "Global Sovereign Yield Spike & Rate Dislocation",
    note: "Simultaneous parallel shift in G10 curves",
    shock: "+400 bps instantaneous",
    cet1: "17.2%",
    lcr: "246%",
    buffer: "Resilient (+670 bps buffer)",
  },
  {
    scenario: "Severe Interbank Liquidity Freeze & Clearing Halts",
    note: "90-day wholesale funding evaporation",
    shock: "-65% private market access",
    cet1: "16.8%",
    lcr: "212%",
    buffer: "Resilient (+630 bps buffer)",
  },
  {
    scenario: "Multi-Jurisdiction Sovereign Debt Contagion",
    note: "Adverse credit spread widening and systemic haircuts",
    shock: "-30% collateral haircut",
    cet1: "16.4%",
    lcr: "198%",
    buffer: "Resilient (+590 bps buffer)",
  },
];

export default function CapitalAnalytics() {
  return (
    <section
      className="py-space-xl bg-surface border-b border-outline-variant scroll-mt-20"
      id="solvency-analytics"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Capital Fortification & Stress Testing Analytics
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Empirical decomposition of capital buffers, risk-weighted asset
            distribution, and simulated adverse stress vectors under
            supranational prudential scrutiny.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {KPI_STRIP.map((item) => (
            <div
              key={item.label}
              className="bg-white p-6 border border-outline-variant rounded border-t-2 border-t-primary shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-caps text-label-caps uppercase">
                  {item.label}
                </span>
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {item.icon}
                </span>
              </div>
              <div className="mt-3 font-tabular-figure text-2xl font-bold text-primary">
                {item.value}
              </div>
              <span
                className={`font-body-md text-xs mt-1 block font-medium flex items-center gap-1 ${
                  item.accent ? "text-emerald-800" : "text-on-surface-variant"
                }`}
              >
                {item.detailIcon && (
                  <span className="material-symbols-outlined text-[14px]">
                    {item.detailIcon}
                  </span>
                )}
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-white p-6 border border-outline-variant rounded space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Analytical Diagram 01
                </span>
                <h3 className="font-title-md text-title-md text-primary mt-1">
                  Capital Adequacy & Buffer Composition
                </h3>
              </div>
              <span className="font-label-caps text-label-caps bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded">
                Total CAR: 21.6%
              </span>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Comparison of statutory Basel III minimum benchmarks against
              Bancroft & Co. fortified balance sheet tranches. The surplus
              constitutes ring-fenced sovereign liquidity.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-primary">
                  Bancroft Total Capital Ratio (21.6%)
                </span>
                <span className="font-tabular-figure font-bold text-primary">
                  18.4% CET1 + 3.2% Tier 2
                </span>
              </div>
              <div className="h-7 w-full bg-surface-container-high rounded overflow-hidden flex border border-outline-variant">
                <div
                  className="bg-primary h-full flex items-center justify-center text-[10px] text-white font-mono font-medium"
                  style={{ width: "38%" }}
                  title="CET1 Statutory Minimum (4.5% + 3.5% = 8.0%)"
                >
                  Min 8.0%
                </div>
                <div
                  className="bg-[#264191] h-full flex items-center justify-center text-[10px] text-white font-mono font-medium"
                  style={{ width: "15%" }}
                  title="Capital Conservation Buffer (2.5%)"
                >
                  CCB 2.5%
                </div>
                <div
                  className="bg-[#4059aa] h-full flex items-center justify-center text-[10px] text-white font-mono font-medium"
                  style={{ width: "32%" }}
                  title="Voluntary Sovereign Fortress Buffer (7.9%)"
                >
                  Fortress +7.9%
                </div>
                <div
                  className="bg-[#8fa7fe] h-full flex items-center justify-center text-[10px] text-primary font-mono font-semibold"
                  style={{ width: "15%" }}
                  title="Tier 2 Subordinated Capital (3.2%)"
                >
                  T2 3.2%
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-on-surface-variant pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-primary rounded-sm inline-block"></span>{" "}
                  Min Regulatory (8.0%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#264191] rounded-sm inline-block"></span>{" "}
                  Conservation Buffer (2.5%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#4059aa] rounded-sm inline-block"></span>{" "}
                  Fortress Buffer (7.9%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#8fa7fe] rounded-sm inline-block"></span>{" "}
                  Tier 2 (3.2%)
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-surface-container">
              <div className="flex justify-between text-xs">
                <span className="font-medium text-on-surface-variant">
                  Standard Basel III Requirement Baseline
                </span>
                <span className="font-tabular-figure text-on-surface-variant">
                  10.5% Minimum
                </span>
              </div>
              <div className="h-5 w-full bg-surface-container-high rounded overflow-hidden flex border border-outline-variant">
                <div
                  className="bg-outline h-full flex items-center justify-center text-[10px] text-white font-mono"
                  style={{ width: "48%" }}
                >
                  4.5% Min
                </div>
                <div
                  className="bg-outline-variant h-full flex items-center justify-center text-[10px] text-on-surface font-mono"
                  style={{ width: "27%" }}
                >
                  2.5% CCB
                </div>
                <div
                  className="bg-surface-container-highest h-full flex items-center justify-center text-[10px] text-on-surface-variant font-mono"
                  style={{ width: "25%" }}
                >
                  3.5% Pillar 2
                </div>
              </div>
            </div>
            <div className="p-3 bg-surface-container-low border border-outline-variant rounded flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">
                Bancroft CET1 Buffer vs Global G-SIB Average:
              </span>
              <span className="font-bold text-primary font-tabular-figure">
                +480 bps Outperformance
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 border border-outline-variant rounded space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Analytical Diagram 02
                </span>
                <h3 className="font-title-md text-title-md text-primary mt-1">
                  RWA Exposure & Asset Distribution
                </h3>
              </div>
              <span className="font-label-caps text-label-caps bg-surface-container-low text-primary border border-outline-variant px-2.5 py-1 rounded">
                Total $186.86B Custody & Asset Base
              </span>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Granular portfolio composition categorized by counterparty quality.
              Zero speculative corporate paper or uncollateralized lending is
              permitted on the statutory ledger.
            </p>
            <div className="space-y-4">
              {RWA_SLICES.map((slice) => (
                <div key={slice.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-primary">{slice.label}</span>
                    <span className="font-tabular-figure font-bold text-primary">
                      {slice.value}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`${slice.color} h-full`}
                      style={{ width: slice.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-surface-container-low border border-outline-variant rounded flex items-center justify-between text-xs">
              <span className="text-on-surface-variant">
                Zero-Risk Weighted (0% RWA) Asset Proportion:
              </span>
              <span className="font-bold text-primary font-tabular-figure">
                70.0% of Total Custody
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-outline-variant rounded shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                Analytical Simulation Matrix 03
              </span>
              <h3 className="font-title-md text-title-md text-primary mt-1">
                Adverse Macroeconomic Stress Scenario Testing
              </h3>
            </div>
            <span className="font-label-caps text-label-caps bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded">
              All Simulated Scenarios Exceed Statutory Limits
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Stress Vector Scenario
                  </th>
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Simulated Shock
                  </th>
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Simulated CET1
                  </th>
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Simulated LCR
                  </th>
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Regulatory Min
                  </th>
                  <th className="py-3.5 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Stress Verification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-body-md text-xs">
                {STRESS_ROWS.map((row) => (
                  <tr
                    key={row.scenario}
                    className="hover:bg-surface-container-low transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-primary">
                      {row.scenario}
                      <span className="block font-normal text-on-surface-variant text-[11px] mt-0.5">
                        {row.note}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right font-medium text-on-surface">
                      {row.shock}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right font-bold text-primary">
                      {row.cet1}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right font-bold text-primary">
                      {row.lcr}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right text-on-surface-variant">
                      10.5% / 100%
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {row.buffer}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
