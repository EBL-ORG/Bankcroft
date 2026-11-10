const PHASES = [
  {
    phase: "PHASE 01",
    icon: "policy",
    title: "Fiduciary Mandate & Due Diligence",
    body: "Exhaustive institutional risk profiling, full source-of-funds lineage tracing, AML/KYC KYC6 clearance, and bespoke jurisdiction treaty verification.",
    deliverable: "Custodial Accord & Legal Mandate",
  },
  {
    phase: "PHASE 02",
    icon: "account_tree",
    title: "Capital Structuring & Committee Review",
    body: "Custom balance sheet modeling, collateral stress simulation under -400bps liquidity scenarios, and unanimous sign-off by the Credit & Solvency Committee.",
    deliverable: "Solvency Allocation Covenant",
  },
  {
    phase: "PHASE 03",
    icon: "sync_alt",
    title: "Precision Execution & RTGS Settlement",
    body: "Direct connection into central bank Real-Time Gross Settlement engines (Fedwire, CHAPS, TARGET2, SIC). Zero proprietary intermediary exposure or delay.",
    deliverable: "T+0 Immutable Settlement Notice",
  },
  {
    phase: "PHASE 04",
    icon: "fact_check",
    title: "Continuous Regulatory Auditing",
    body: "Real-time balance reconciliation, automated Pillar 3 compliance tagging, ongoing asset verification, and quarterly external audit endorsements.",
    deliverable: "Statutory Attestation & Ledger Seal",
  },
];

export default function Workflow() {
  return (
    <section
      className="py-space-xl bg-surface border-b border-outline-variant scroll-mt-20"
      id="operational-workflow"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Institutional Underwriting & Settlement Workflow
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            How Bancroft & Co. transforms client mandates into hardened balance
            sheet reality through our four-phase disciplined execution pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((step) => (
            <div
              key={step.phase}
              className="bg-white p-6 border border-outline-variant rounded relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-tabular-figure text-sm font-bold text-primary px-2.5 py-1 bg-surface-container-low rounded border border-outline-variant">
                    {step.phase}
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-primary">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-xs leading-relaxed">
                  {step.body}
                </p>
              </div>
              <div className="pt-6 border-t border-surface-container mt-6">
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">
                  Deliverable
                </span>
                <span className="text-xs font-semibold text-primary">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
