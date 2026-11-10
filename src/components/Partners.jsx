import logo1 from "../../logos/1111.png";
import logo2 from "../../logos/2222.png";
import logo3 from "../../logos/33333.png";
import logo4 from "../../logos/44444.png";
import logo5 from "../../logos/55555.png";

const PARTNER_LOGOS = [
  {
    href: logo1,
    width: 108,
    height: 108,
    x: 266,
    y: 118,
  },
  {
    href: logo2,
    width: 108,
    height: 108,
    x: 384,
    y: 206,
  },
  {
    href: logo3,
    width: 106,
    height: 106,
    x: 340,
    y: 372,
  },
  {
    href: logo4,
    width: 106,
    height: 106,
    x: 194,
    y: 372,
  },
  {
    href: logo5,
    width: 108,
    height: 108,
    x: 148,
    y: 206,
  },
];

const SECTORS = [
  { d: "M 320 320 L 167.8 110.5 A 260 260 0 0 1 472.2 110.5 Z", fill: "#ffffff" },
  { d: "M 320 320 L 472.2 110.5 A 260 260 0 0 1 567.3 400.3 Z", fill: "#fcfdff" },
  { d: "M 320 320 L 567.3 400.3 A 260 260 0 0 1 320 580 Z", fill: "#ffffff" },
  { d: "M 320 320 L 320 580 A 260 260 0 0 1 72.7 400.3 Z", fill: "#fcfdff" },
  { d: "M 320 320 L 72.7 400.3 A 260 260 0 0 1 167.8 110.5 Z", fill: "#ffffff" },
];

export default function Partners() {
  return (
    <section
      className="py-space-xl bg-surface-container-low border-b border-outline-variant scroll-mt-20"
      id="partners-ecosystem"
    >
      <div className="max-w-7xl mx-auto px-margin space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-outline-variant">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block mb-1">
              OUR PARTNERS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              STRONG PARTNERSHIPS. SHARED AMBITION.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Building lasting relationships with trusted institutions and strategic
            partners to create sustainable value and strengthen our financial
            ecosystem.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 select-none">
          <div className="relative w-full max-w-[640px] aspect-square flex items-center justify-center">
            <svg
              className="partner-svg-wheel w-full h-full overflow-visible"
              viewBox="0 0 640 640"
            >
              <defs>
                <filter height="140%" id="slice-shadow" width="140%" x="-20%" y="-20%">
                  <feDropShadow
                    dx="0"
                    dy="4"
                    floodColor="#081448"
                    floodOpacity="0.06"
                    stdDeviation="6"
                  />
                </filter>
              </defs>
              {SECTORS.map((sector, index) => (
                <g className="partner-sector-group" key={sector.d}>
                  <path
                    className="partner-sector-bg"
                    d={sector.d}
                    fill={sector.fill}
                    filter="url(#slice-shadow)"
                    stroke="#dee8ff"
                    strokeWidth="1.5"
                  ></path>
                  <image
                    height={PARTNER_LOGOS[index].height}
                    href={PARTNER_LOGOS[index].href}
                    preserveAspectRatio="xMidYMid meet"
                    width={PARTNER_LOGOS[index].width}
                    x={PARTNER_LOGOS[index].x}
                    y={PARTNER_LOGOS[index].y}
                  />
                </g>
              ))}
              <circle
                cx="320"
                cy="320"
                fill="#ffffff"
                filter="url(#slice-shadow)"
                r="82"
                stroke="#c6c5d0"
                strokeWidth="1.5"
              ></circle>
              <circle
                cx="320"
                cy="320"
                fill="#f0f3ff"
                r="74"
                stroke="#dee8ff"
                strokeWidth="1"
              ></circle>
              <g pointerEvents="none">
                <text
                  className="font-label-caps fill-primary font-bold text-[10px] tracking-widest"
                  letterSpacing="0.12em"
                  textAnchor="middle"
                  x="320"
                  y="313"
                >
                  BANCROFT & CO.
                </text>
                <text
                  className="font-label-caps fill-[#4059aa] font-semibold text-[8px] tracking-wider"
                  letterSpacing="0.08em"
                  textAnchor="middle"
                  x="320"
                  y="331"
                >
                  ALLIANCE NETWORK
                </text>
                <circle cx="320" cy="346" fill="#264191" r="2"></circle>
              </g>
            </svg>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>{" "}
              Verified Tier-1 Institutional Partners
            </span>
            <span className="text-outline-variant">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">
                handshake
              </span>{" "}
              Sovereign, Multilateral & Strategic Global Alliances
            </span>
            <span className="text-outline-variant">•</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary">
                verified_user
              </span>{" "}
              Fiduciary Ring-Fenced Ecosystem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
