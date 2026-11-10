const VALUES = [
  {
    icon: "balance",
    title: "Fiduciary Integrity",
    body: "We act exclusively as true fiduciaries. We maintain zero proprietary trading desks, guaranteeing absolute alignment with our institutional client mandates.",
  },
  {
    icon: "fort",
    title: "Balance Sheet Fortress",
    body: "Liquidity buffers maintained at more than double international statutory standards, insulating clients from external interbank contagions.",
  },
  {
    icon: "visibility",
    title: "Radical Disclosure",
    body: "Quarterly balance sheet transparency beyond regulatory obligations, with direct real-time custodial verification for participating sovereign depositors.",
  },
  {
    icon: "all_inclusive",
    title: "Intergenerational Continuity",
    body: "Custody horizons designed to outlast economic cycles. Our governance models prioritize century-scale wealth transmission and legal permanence.",
  },
];

export default function MissionValues() {
  return (
    <section
      className="py-space-xl bg-surface border-b border-outline-variant scroll-mt-20"
      id="mission-values"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Stewardship Mandate & Values
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We operate under a simple, non-negotiable principle: commercial
            enterprise flourishes only when custodial stewardship remains above
            reproach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-outline-variant rounded border-l-4 border-l-primary space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[24px]">flag</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">
                Institutional Mission
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">
              Perpetual preservation of sovereign and generational capital.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To provide an unshakeable institutional fortress capable of
              safeguarding sovereign treasury balances, intergenerational wealth
              repositories, and supranational reserves through any geopolitical or
              macro-financial turbulence.
            </p>
          </div>
          <div className="bg-white p-8 border border-outline-variant rounded border-l-4 border-l-primary space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[24px]">
                visibility
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">
                Strategic Vision
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">
              Architecting the most reliable institutional clearance
              infrastructure.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To remain the premier independent clearance, custody, and settlement
              engine for prime commercial enterprises, ensuring instantaneous,
              friction-free capital execution without speculative or proprietary
              exposures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 border border-outline-variant rounded space-y-3"
            >
              <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  {value.icon}
                </span>
              </div>
              <h4 className="font-title-md text-title-md text-primary">
                {value.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-xs">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
