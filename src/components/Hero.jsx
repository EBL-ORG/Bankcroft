const METRICS = [
  {
    label: "Common Equity Tier 1",
    value: "18.4%",
    detail: "+790 bps over Basel III",
    detailClass: "text-emerald-800",
    icon: "trending_up",
  },
  {
    label: "Assets Under Custody",
    value: "$142.8B",
    detail: "Institutional & Sovereign Segregated",
    detailClass: "text-on-surface-variant",
  },
  {
    label: "Long-Term Rating",
    value: "AAA / Aaa",
    detail: "Fitch, S&P, Moody's Prime Stable",
    detailClass: "text-emerald-800",
  },
  {
    label: "Global Clearing Presence",
    value: "6 Principal Hubs",
    detail: "London • Zurich • NY • SG • FRA",
    detailClass: "text-on-surface-variant",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-surface-container-lowest border-b border-outline-variant overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="max-w-7xl mx-auto px-margin py-space-xl md:py-24 relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface-container-low border border-outline-variant text-on-surface-variant rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          </div>
          <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
            Sovereign Stewardship.
            <br className="hidden sm:inline" /> Verifiable Performance.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Founded on unyielding fiduciary principles, Bancroft & Co. provides
            institutional balance sheet management, sovereign custody, and direct
            global clearing for governments, central agencies, and family offices
            worldwide.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-outline-variant pt-10">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-white p-5 border border-outline-variant rounded border-t-2 border-t-primary shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                {metric.label}
              </span>
              <div className="mt-2 font-tabular-figure text-tabular-figure text-primary font-bold">
                {metric.value}
              </div>
              <span
                className={`font-body-md text-xs mt-1 block flex items-center gap-1 font-medium ${metric.detailClass}`}
              >
                {metric.icon && (
                  <span className="material-symbols-outlined text-[14px]">
                    {metric.icon}
                  </span>
                )}
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
