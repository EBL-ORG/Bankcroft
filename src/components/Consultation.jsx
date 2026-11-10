export default function Consultation() {
  return (
    <section
      className="py-space-xl bg-primary text-on-primary relative overflow-hidden"
      id="consultation"
    >
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="max-w-7xl mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest">
              Discreet Institutional Advisory
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white">
              Engage the General Directorate
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl">
              Sovereign finance ministers, central bankers, institutional
              treasurers, and single-family office trustees may initiate formal
              confidential consultations through our secure liaison desk.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-surface-container-high">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">lock</span>{" "}
                256-bit Encrypted Protocol
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>{" "}
                Zero Intermediary Brokerage
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  schedule
                </span>{" "}
                4-Hour Fiduciary Response SLA
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button className="w-full py-3.5 px-6 bg-white text-primary font-semibold text-body-md hover:bg-surface-container-low transition-colors rounded shadow-md text-center">
              Request Institutional Consultation
            </button>
            <a
              className="w-full py-3 px-6 bg-transparent border border-white/30 text-white font-medium text-body-md hover:bg-white/10 transition-colors rounded text-center"
              href="#portal"
            >
              Access Dedicated Client Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
