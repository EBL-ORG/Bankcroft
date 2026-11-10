const DIRECTORATES = [
  {
    region: "General Directorate • United Kingdom",
    badge: "Prudential Regulated",
    title: "London Executive Directorate",
    address: "44 Exchange Place & EC3V, City of London",
    head: "Lord Henry Montagu",
    swift: "BNCRGB2LXXX",
    jurisdiction: "PRA / FCA Authorized",
    activity: "Syndicated Debt & Clearing",
  },
  {
    region: "General Directorate • Switzerland",
    badge: "FINMA Regulated",
    title: "Zurich Central Treasury & Custody",
    address: "Bahnhofstrasse 28, 8001 Zürich",
    head: "Kaspar Von Meiss",
    swift: "BNCRCHZZXXX",
    jurisdiction: "FINMA License No. 4410",
    activity: "Sovereign Bullion & Custody",
  },
];

const AGENCIES = [
  {
    region: "United States",
    badge: "FED Direct",
    title: "New York Agency",
    address: "One Vanderbilt Avenue, New York, NY",
    head: "Arthur Pendelton",
    swift: "BNCRUS33XXX",
    focus: "USD Clearing & Treasury",
  },
  {
    region: "Germany / Eurozone",
    badge: "BaFin / ECB",
    title: "Frankfurt Directorate",
    address: "Taunusanlage 8, Frankfurt am Main",
    head: "Dr. Claudia Weber",
    swift: "BNCRDEFFXXX",
    focus: "TARGET2 & Sovereign Debt",
  },
  {
    region: "Asia-Pacific",
    badge: "MAS Approved",
    title: "Singapore Agency",
    address: "Marina Bay Financial Centre, SG",
    head: "Li Wei Zhang",
    swift: "BNCRSGSGXXX",
    focus: "APAC Custodial Syndicate",
  },
  {
    region: "Private Office",
    badge: "FINMA Trustee",
    title: "Geneva Private Office",
    address: "Rue du Rhône, 1204 Genève",
    head: "Édouard de Beaumont",
    swift: "BNCRCHGGXXX",
    focus: "Family Trusts & Settlement",
  },
];

export default function Agencies() {
  return (
    <section
      className="py-space-xl bg-surface-container-lowest border-b border-outline-variant scroll-mt-20"
      id="global-agencies"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Agencies & Banking Direction Network
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Headquartered across dual European capitals with fully licensed
            regional sovereign agencies in leading financial jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIRECTORATES.map((item) => (
            <div
              key={item.title}
              className="bg-surface p-6 border border-outline-variant rounded border-l-4 border-l-primary"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                  {item.region}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-surface-container-high text-primary rounded">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mt-2">
                {item.title}
              </h3>
              <p className="font-body-md text-xs text-on-surface-variant mt-1">
                {item.address}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-outline-variant text-xs">
                <div>
                  <span className="text-on-surface-variant block">
                    Director General:
                  </span>
                  <span className="font-semibold text-primary">{item.head}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">
                    SWIFT / BIC Code:
                  </span>
                  <span className="font-mono font-semibold text-primary">
                    {item.swift}
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">
                    Jurisdiction:
                  </span>
                  <span className="font-semibold text-primary">
                    {item.jurisdiction}
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant block">
                    Key Activity:
                  </span>
                  <span className="font-semibold text-primary">
                    {item.activity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCIES.map((agency) => (
            <div
              key={agency.title}
              className="bg-white p-5 border border-outline-variant rounded space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {agency.region}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-surface-container-low text-primary rounded">
                  {agency.badge}
                </span>
              </div>
              <h4 className="font-title-md text-title-md text-primary text-base">
                {agency.title}
              </h4>
              <p className="font-body-md text-xs text-on-surface-variant">
                {agency.address}
              </p>
              <div className="pt-3 border-t border-surface-container space-y-1.5 text-[11px]">
                <div>
                  <span className="text-on-surface-variant">Agency Head:</span>{" "}
                  <span className="font-semibold text-primary">{agency.head}</span>
                </div>
                <div>
                  <span className="text-on-surface-variant">SWIFT:</span>{" "}
                  <span className="font-mono font-semibold text-primary">
                    {agency.swift}
                  </span>
                </div>
                <div>
                  <span className="text-on-surface-variant">Focus:</span>{" "}
                  <span className="font-medium text-primary">{agency.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
