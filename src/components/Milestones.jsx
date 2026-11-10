const MILESTONES = [
  {
    year: "1902",
    tag: "Municipal Inception",
    title: "Charter Granted & Financial District Founding",
    body: "Ratification of the Bancroft Corporate Banking Charter by state comptroller. Initial syndication focused entirely on municipal water aqueducts and maritime port bonds.",
  },
  {
    year: "1948",
    tag: "Post-War Mandate",
    title: "Sovereign Debt Reconstruction Mandate",
    body: "Selected as lead co-trustee for Western European bilateral infrastructure credits, overseeing $1.4B in capital reconstruction bonds with zero payment defaults.",
  },
  {
    year: "1985",
    tag: "Transcontinental Reach",
    title: "Expansion Across London, Zurich, and Singapore",
    body: "Inaugurated European and Asian custodial branches to serve multilateral institutions, central banks, and the burgeoning Pacific trade settlement corridors.",
  },
  {
    year: "2008",
    tag: "Systemic Resilience",
    title: "Fortress Balance Sheet Preservation",
    body: "Maintained net positive capital inflow and 100% liquidity compliance throughout the global credit crisis without state intervention or emergency equity dilution.",
  },
  {
    year: "2024",
    tag: "New Century Infrastructure",
    title: "Digital Settlement & Sustainable Capital Framework",
    body: "Deployed next-generation institutional clearing rails with sub-second atomic settlement while committing $25B in underwriting for nuclear and renewable grid transitions.",
  },
];

export default function Milestones() {
  return (
    <section className="py-20 bg-surface-container-lowest border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-outline-variant pb-6">
          <div>
            <span className="text-label-caps font-label-caps text-primary tracking-widest uppercase block mb-2">
              Historical Continuity
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Milestones of Sovereign Trust
            </h2>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mt-4 md:mt-0">
            Over twelve decades of unbroken stewardship navigating historic global
            realignments and structural market shocks.
          </p>
        </div>

        <div className="relative pl-6 md:pl-10 border-l border-outline-variant space-y-12 my-8">
          {MILESTONES.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-headline-sm font-headline-sm font-bold text-primary w-24 shrink-0">
                  {item.year}
                </span>
                <div className="bg-surface-container-low p-6 rounded border border-outline-variant flex-1">
                  <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-title-md font-title-md text-on-surface font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
