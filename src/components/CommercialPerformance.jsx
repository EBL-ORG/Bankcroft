const YEARS = [
  {
    year: "2024 Audited",
    nbi: "$3.84B",
    yoy: "+14.2% YoY",
    profit: "$1.42B",
    roe: "14.8%",
    cost: "44.1%",
    status: "Record High Performance",
    highlight: true,
  },
  {
    year: "2023",
    nbi: "$3.36B",
    yoy: "+11.8% YoY",
    profit: "$1.28B",
    roe: "13.9%",
    cost: "46.2%",
    status: "Pillar 3 Verified",
  },
  {
    year: "2022",
    nbi: "$3.01B",
    yoy: "+9.5% YoY",
    profit: "$1.15B",
    roe: "12.8%",
    cost: "48.0%",
    status: "Pillar 3 Verified",
  },
  {
    year: "2021",
    nbi: "$2.75B",
    yoy: "+8.2% YoY",
    profit: "$1.09B",
    roe: "12.1%",
    cost: "49.5%",
    status: "Pillar 3 Verified",
  },
  {
    year: "2020",
    nbi: "$2.54B",
    yoy: "Resilient Baseline",
    profit: "$0.98B",
    roe: "11.2%",
    cost: "51.0%",
    status: "Centennial Stress Pass",
    baseline: true,
  },
];

const GROWTH_CARDS = [
  {
    label: "Credit Facilities",
    icon: "account_balance",
    value: "$48.2 Billion",
    body: "Consistently matched with prime sovereign collateral, maintaining non-performing loan (NPL) ratio under 0.12%.",
    width: "82%",
  },
  {
    label: "Custody Assets Compound",
    icon: "shield",
    value: "+51.3% Since 2020",
    body: "Accelerated inflows from tier-1 institutional trustees seeking segregated custody and ring-fenced legal immunity.",
    width: "94%",
  },
  {
    label: "Net Interest Margin (NIM)",
    icon: "query_stats",
    value: "2.88%",
    body: "Dynamic balance sheet asset-liability immunization protecting margins through fluctuating sovereign rate cycles.",
    width: "76%",
  },
];

export default function CommercialPerformance() {
  return (
    <section
      className="py-space-xl bg-surface border-b border-outline-variant scroll-mt-20"
      id="commercial-performance"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Commercial Performance (2020 – 2026)
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Unbroken five-year fiscal compounding characterized by disciplined
            loan book underwriting, zero unhedged exposure, and robust net
            banking income expansion.
          </p>
        </div>

        <div className="bg-white border border-outline-variant rounded shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Fiscal Year
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Net Banking Income
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    YoY Trajectory
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Operating Profit
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    ROE (%)
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                    Cost-to-Income
                  </th>
                  <th className="py-4 px-6 font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Status & Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-body-md">
                {YEARS.map((row) => (
                  <tr
                    key={row.year}
                    className={`hover:bg-surface-container-low transition-colors ${
                      row.highlight ? "bg-white font-medium" : ""
                    }`}
                  >
                    <td
                      className={`py-4 px-6 text-primary font-bold ${
                        row.highlight ? "flex items-center gap-2" : "font-semibold"
                      }`}
                    >
                      {row.highlight && (
                        <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                      )}
                      {row.year}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right font-bold text-on-surface">
                      {row.nbi}
                    </td>
                    <td
                      className={`py-4 px-6 text-right font-semibold ${
                        row.baseline
                          ? "text-on-surface-variant font-medium"
                          : "text-emerald-800"
                      }`}
                    >
                      {row.yoy}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right text-on-surface">
                      {row.profit}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right text-on-surface">
                      {row.roe}
                    </td>
                    <td className="py-4 px-6 font-tabular-figure text-right text-on-surface">
                      {row.cost}
                    </td>
                    <td className="py-4 px-6">
                      {row.highlight ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {row.status}
                        </span>
                      ) : (
                        <span className="text-on-surface-variant text-xs">
                          {row.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROWTH_CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-white p-6 border border-outline-variant rounded border-t-2 border-t-primary"
            >
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-caps text-label-caps uppercase">
                  {card.label}
                </span>
                <span className="material-symbols-outlined text-[20px] text-primary">
                  {card.icon}
                </span>
              </div>
              <div className="mt-4 font-tabular-figure text-2xl font-bold text-primary">
                {card.value}
              </div>
              <p className="font-body-md text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                {card.body}
              </p>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-5 overflow-hidden">
                <div className="bg-primary h-full" style={{ width: card.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
