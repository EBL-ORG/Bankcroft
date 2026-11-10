const REPORTS = [
  {
    badge: "Current FY 2024",
    badgeClass: "bg-primary text-white",
    pages: "148 Pages • PDF",
    title: "2024 Integrated Annual Report & Audited Financials",
    body: "Consolidated balance sheet, complete Pillar 3 risk disclosure, comprehensive cash-flow audits, and Executive Governance statement.",
    audit: "Unqualified Clean Audit",
    accent: "border-t-primary",
  },
  {
    badge: "FY 2023",
    badgeClass: "bg-surface-container-low text-primary",
    pages: "132 Pages • PDF",
    title: "2023 Consolidated Annual Review & Risk Report",
    body: "Detailed macro liquidity adjustments, sovereign stress tests, interest rate shock management, and custodial growth logs.",
    audit: "PwC Statutory Sign-off",
    accent: "border-t-outline-variant",
  },
  {
    badge: "FY 2022",
    badgeClass: "bg-surface-container-low text-primary",
    pages: "120 Pages • PDF",
    title: "2022 Balance Sheet Resilience & Allocation",
    body: "Post-inflationary rate regime adaptation, defensive high-quality liquid asset (HQLA) positioning, and credit reserve analysis.",
    audit: "Deloitte Independent Audit",
    accent: "border-t-outline-variant",
  },
  {
    badge: "FY 2021",
    badgeClass: "bg-surface-container-low text-primary",
    pages: "116 Pages • PDF",
    title: "2021 Stability & Digital Transformation Audit",
    body: "Consolidation of RTGS multi-currency settlement rails and institutional automated custody verification interfaces.",
    audit: "Statutory Clean Opinion",
    accent: "border-t-outline-variant",
  },
  {
    badge: "FY 2020 Centennial",
    badgeClass: "bg-surface-container-low text-primary",
    pages: "160 Pages • Special Edition",
    title: "2020 Centennial Stewardship Statement",
    body: "Reflections on 100 years of fiduciary continuity through century-scale market upheavals and statutory baseline preservation.",
    audit: "Centennial Board Sign-off",
    accent: "border-t-outline-variant",
  },
];

export default function AnnualReports() {
  return (
    <section
      className="py-space-xl bg-surface-container-low border-b border-outline-variant scroll-mt-20"
      id="annual-reports"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Annual Reports & Disclosures
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Unabridged regulatory filings, independent statutory auditor
            confirmations, and full Basel III Pillar 3 market disclosures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPORTS.map((report) => (
            <div
              key={report.title}
              className={`bg-white p-6 border border-outline-variant rounded border-t-2 ${report.accent} flex flex-col justify-between group hover:border-primary transition-all`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-label-caps text-label-caps ${report.badgeClass} px-2 py-0.5 rounded`}
                  >
                    {report.badge}
                  </span>
                  <span className="text-xs text-on-surface-variant font-mono">
                    {report.pages}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-primary">
                  {report.title}
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  {report.body}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant mt-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-800">
                  {report.audit}
                </span>
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline"></button>
              </div>
            </div>
          ))}

          <div className="bg-surface p-6 border border-dashed border-outline rounded flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Independent Verification
              </span>
              <h4 className="font-title-md text-title-md text-primary">
                Statutory Auditor Confirmation
              </h4>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                "We confirm that the consolidated statutory accounts and capital
                ratios presented herein comply in all material respects with
                International Financial Reporting Standards (IFRS) and applicable
                prudential regulatory rules."
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between text-xs font-semibold text-on-surface">
              <span>PricewaterhouseCoopers LLP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
