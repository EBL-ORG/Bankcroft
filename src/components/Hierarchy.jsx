const EXECUTIVES = [
  {
    initials: "AS",
    name: "Alistair St. John Vance",
    role: "Chief Executive Officer",
    bio: "Former Deputy Governor of Central Clearance; 28 years sovereign asset orchestration.",
    icon: "mail",
    office: "Executive Office, London",
  },
  {
    initials: "ER",
    name: "Dr. Elena Rostova",
    role: "Chief Risk & Solvency Officer",
    bio: "Ph.D. Econometrics (Zurich); Basel Committee advisory panelist; oversight of CET1 fortress.",
    icon: "security",
    office: "Solvency Direction, Zurich",
  },
  {
    initials: "JC",
    name: "Julian Chen, CFA",
    role: "Head of Global Capital Markets",
    bio: "Directs sovereign debt issuance, multi-currency syndicated credit lines, and RTGS clearing.",
    icon: "public",
    office: "Syndication, Singapore",
  },
  {
    initials: "MA",
    name: "Marcus Adebayo, KBE",
    role: "CIO & Treasurer",
    bio: "Oversees $34B+ liquid treasury portfolio and central bank foreign exchange stabilization reserves.",
    icon: "account_balance_wallet",
    office: "Treasury, London",
  },
  {
    initials: "BV",
    name: "Beatrice Von Fürstenberg",
    role: "General Counsel & Compliance",
    bio: "International trust law authority; governs multi-jurisdictional immunity and AML KYC6 protocols.",
    icon: "gavel",
    office: "Legal, Frankfurt",
  },
];

const DIVISIONS = [
  {
    title: "Institutional & Corporate",
    body: "Cross-border cash pooling, trade finance guarantees, and structured debt syndication.",
  },
  {
    title: "Global Treasury Operations",
    body: "Repo financing, multi-sovereign currency clearing, and HQLA reserve immunization.",
  },
  {
    title: "Private Wealth Management",
    body: "Discretionary family trust administration, bullion custody, and succession structuring.",
  },
  {
    title: "Regulatory & Fiduciary Affairs",
    body: "Pillar 3 quarterly auditing, sanctions compliance, and statutory central bank reporting.",
  },
];

export default function Hierarchy() {
  return (
    <section
      className="py-space-xl bg-surface-container-lowest border-b border-outline-variant scroll-mt-20"
      id="hierarchy-direction"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Enterprise Hierarchy & General Direction
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Supervised by an independent Custodial Board of Governors and
            administered by a veteran Executive Committee with an average tenure of
            24 years in prime banking.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-surface p-6 border border-outline-variant rounded">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-outline-variant gap-2">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Tier 01 • Governance & Oversight
                </span>
                <h3 className="font-title-md text-title-md text-primary">
                  Board of Governors & Supervisory Council
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-white border border-outline-variant text-on-surface rounded">
                Chaired by Senior Custodial Trustee
              </span>
            </div>
            <p className="font-body-md text-xs text-on-surface-variant mt-3 max-w-3xl leading-relaxed">
              Endowed with absolute veto power over balance-sheet leverage,
              statutory mergers, and sovereign custody allocations. Composed of 9
              non-executive independent trustees with tenures bound by fiduciary
              charter.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                Tier 02 • Executive Committee & General Direction
              </span>
              <div className="h-px bg-outline-variant flex-1"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {EXECUTIVES.map((person) => (
                <div
                  key={person.name}
                  className="bg-white p-5 border border-outline-variant rounded space-y-3 hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center text-primary font-bold font-headline-sm">
                    {person.initials}
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-primary text-base">
                      {person.name}
                    </h4>
                    <span className="font-label-caps text-label-caps text-on-surface-variant block mt-0.5">
                      {person.role}
                    </span>
                  </div>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {person.bio}
                  </p>
                  <div className="text-[11px] text-primary font-semibold flex items-center gap-1 pt-2 border-t border-surface-container">
                    <span className="material-symbols-outlined text-[14px]">
                      {person.icon}
                    </span>{" "}
                    {person.office}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface p-6 border border-outline-variant rounded">
            <div className="flex items-center gap-2 mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-body-md">
              {DIVISIONS.map((division) => (
                <div
                  key={division.title}
                  className="p-3 bg-white border border-outline-variant rounded"
                >
                  <span className="font-semibold text-primary block text-sm">
                    {division.title}
                  </span>
                  <span className="text-on-surface-variant mt-1 block">
                    {division.body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
