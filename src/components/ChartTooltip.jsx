import { useEffect, useState } from "react";

const INITIAL = {
  visible: false,
  left: -999,
  top: -999,
  year: "Fiscal Year 2024",
  retention: "99.4% Retention",
  clients: "1,420 entities",
  fee: "18.4 bps",
  savings: "$224M Saved",
  div: "$3.42B",
  infra: "$14.6B Underwritten",
};

export default function ChartTooltip() {
  const [tooltip, setTooltip] = useState(INITIAL);

  useEffect(() => {
    function handleMouseMove(event) {
      const zone = event.target.closest?.(".chart-hover-zone");

      if (!zone) {
        setTooltip((current) =>
          current.visible ? { ...current, visible: false } : current,
        );
        return;
      }

      let left = event.clientX + 18;
      let top = event.clientY + 18;

      if (left + 300 > window.innerWidth) {
        left = event.clientX - 305;
      }
      if (top + 220 > window.innerHeight) {
        top = event.clientY - 220;
      }

      const { dataset } = zone;
      setTooltip({
        visible: true,
        left,
        top,
        year: `Fiscal Year ${dataset.year}`,
        retention: `${dataset.retention} Retention`,
        clients: dataset.clients,
        fee: dataset.fee,
        savings: `${dataset.savings} Saved`,
        div: dataset.div,
        infra: `${dataset.infra} Underwritten`,
      });
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-150 bg-[#081448]/95 backdrop-blur-md text-white border border-slate-700/80 rounded-xl p-4 shadow-2xl text-xs w-72 ${
        tooltip.visible ? "opacity-100" : "opacity-0"
      }`}
      id="chart-floating-tooltip"
      style={{ top: tooltip.top, left: tooltip.left }}
    >
      <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold text-sm tracking-wide text-white">
            {tooltip.year}
          </span>
        </div>
        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
          {tooltip.retention}
        </span>
      </div>
      <div className="space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center justify-between text-slate-300">
          <span>Institutional Mandates:</span>
          <strong className="text-white font-bold">{tooltip.clients}</strong>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>Blended Custody Fee:</span>
          <strong className="text-secondary-fixed font-bold">{tooltip.fee}</strong>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>Annual Client Savings:</span>
          <strong className="text-emerald-400 font-bold">
            {tooltip.savings}
          </strong>
        </div>
        <div className="border-t border-white/10 pt-1.5 mt-1.5 flex items-center justify-between text-slate-300">
          <span>Sovereign Fiscal Dividend:</span>
          <strong className="text-amber-300 font-bold">{tooltip.div}</strong>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>Cum. Infrastructure Rails:</span>
          <strong className="text-emerald-300 font-bold">{tooltip.infra}</strong>
        </div>
      </div>
      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
        <span>Verified Pillar 3 Record</span>
        <span className="text-emerald-400 flex items-center gap-0.5">
          ★ Statutory Clean
        </span>
      </div>
    </div>
  );
}
