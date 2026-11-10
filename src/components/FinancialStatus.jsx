const SOLVENCY = [
  {
    label: "CET1 Capital Ratio",
    badge: "+7.9% buffer",
    value: "18.4%",
    compare: "vs 10.5% required",
    width: "88%",
    body: "Consisting entirely of retained earnings and Tier-1 common equity. Highest resilience tier among European and North American custodial institutions.",
  },
  {
    label: "Liquidity Coverage (LCR)",
    badge: "2.8x requirement",
    value: "284%",
    compare: "vs 100% required",
    width: "96%",
    body: "Direct unencumbered central bank deposit reserves sufficient to withstand more than 90 consecutive days of extreme global market systemic liquidity shocks.",
  },
  {
    label: "Net Stable Funding (NSFR)",
    badge: "Ultra Conservative",
    value: "168%",
    compare: "vs 100% required",
    width: "84%",
    body: "Structural duration immunization preventing asset-liability mismatch across interest rate environments. Long-dated institutional deposits fund all loan tranches.",
  },
];

const BALANCE_SHEET = [
  {
    label: "HQLA Liquid Assets",
    value: "$34.2B",
    body: "Cash on deposit with Bank of England, Swiss National Bank, and US Federal Reserve.",
  },
  {
    label: "Custodial Assets",
    value: "$142.8B",
    body: "Sovereign securities, supranational bonds, and off-balance-sheet gold allocations.",
  },
  {
    label: "Total Statutory Equity",
    value: "$9.86B",
    body: "Fully paid-up Tier 1 institutional equity reserves held in perpetual treasury.",
  },
];

export default function FinancialStatus() {
  return (
    <section
      className="py-space-xl bg-surface-container-lowest border-b border-outline-variant scroll-mt-20"
      id="financial-status"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Financial Status & Solvency Indicators
            </h2>
          </div>
          <div className="text-right">
            <span className="font-label-caps text-label-caps bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded">
              Basel III & Dodd-Frank Stress Passed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLVENCY.map((item) => (
            <div
              key={item.label}
              className="bg-surface p-6 border border-outline-variant rounded"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {item.label}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-surface-container-high text-primary rounded">
                  {item.badge}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-tabular-figure text-4xl font-bold text-primary">
                  {item.value}
                </span>
                <span className="text-body-md text-xs text-on-surface-variant">
                  {item.compare}
                </span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-primary h-full" style={{ width: item.width }}></div>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant mt-4 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-surface p-8 border border-outline-variant rounded">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Audited Capital Architecture
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">
              Statutory Balance Sheet Constitution
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bancroft & Co. enforces an ironclad balance sheet policy. Sovereign
              deposits are segregated into ring-fenced custodial vehicles with zero
              commingling or rehypothecation.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-body-md hover:underline underline-offset-4"
                href="#annual-reports"
              >
                Download Statutory Pillar 3 Filing (PDF)
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BALANCE_SHEET.map((item) => (
              <div
                key={item.label}
                className="bg-white p-5 border border-outline-variant rounded"
              >
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase block">
                  {item.label}
                </span>
                <span className="font-tabular-figure text-2xl font-bold text-primary mt-2 block">
                  {item.value}
                </span>
                <p className="font-body-md text-xs text-on-surface-variant mt-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
