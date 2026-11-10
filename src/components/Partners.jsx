const PARTNER_LOGOS = [
  {
    href: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNYF2hJjsH6oUN977MTCywjAmdCa1K1zLZ_MK1fYVgE9MM48bhJqjG2ivav0s3Xtl7Clrgk0QGFQouFQjlXzCspg-3SucT7MGBiYesVKP9z-l8eznKiodvvQiKHTnI-0XTDR1jOUw-KCTzL1z7of-iCav-7yJjsLmusKXGx90a6vJenpFvod__1unbb-87e1RsZRlyOmcuc1zyc3EImdEis1EZMWdShQHECEUeGYeHPKrP16awDpe",
    width: 108,
    height: 108,
    x: 266,
    y: 118,
  },
  {
    href: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxp3OU0jwWEHOhovJ_j7ZF9xZg8FhwfHB_9nwbId6B2H7wiVlZQdDF5kHJhkiIdWhhUSZ3Ic95aPpIh5jDCoLrlYqHxfHm2DYktfYK1ueW0Saz3DvYpLLczD1WR48dvqaNfWK7DBSMC2Pad4QXE2bKl4W9lPK-0fmAIn4PXNMAsJQ_tSCvVsCSZrpFSrh4YM201sZ2b0vIY0wr8up4eYe1QrsfcD9vjixNB9WZ_245xu8v-mdq2XgW",
    width: 108,
    height: 108,
    x: 384,
    y: 206,
  },
  {
    href: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIVTPU2tCBUM4v71n-fvTxfWMxkHAREod9vNIjSBynSLkcuP_t-kVlz5booxSuzZa5ChO8GGKfclyTNAVwswoHafVld5yvh_T8Z-T0cvZV6GM8ZtLgACF9izu02PSG_9H098CUsmd_SW6m7YAzk-2kpQa_VG7xYNhGix_FDLozAH-gpq0JqZdSi6jWEP0Tbusv5lhOjwcieP1KLuzI9XuvyakaLFZHMw9r5L3e_wZ503pscpPlDII9",
    width: 106,
    height: 106,
    x: 340,
    y: 372,
  },
  {
    href: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAMBwEob2xaWLiOtA5qNGDzx5GZ0dp8tfjkdENXUMJRvhDwFfW2dhVauZQV0JiEoC1R-NZjtHN7y_seBO8GikwecIfM37gIGHFCi_1yOtSOSyYxkwWN2R1L0NUUU1uNQRcrHqmMPLJUcgMseFRfB5p2uLGz16vdUjK78mKvT3K4-iILGoWyXaFaHPNsJHEvJCUfegEF5la5mZfhrkRm_9WTQOyMtauYF-KUDrDBvVE84IHVDmxhORq",
    width: 106,
    height: 106,
    x: 194,
    y: 372,
  },
  {
    href: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLakrmvNVaIZbuzon1E9E8sCALxD1S67zJW9Owyuk_NMoJGUjWU8p20aK2I0sGJaAoAWOUciGMNWO3sMprY0gHekqt25kBQA42EhEFUUAmc96U5lSzjqSHyiPJsypQQ0loCxum3aGk7sgHq3AsiLT5dQ_E4elLlADboye53vMdOoYq20iyui500XTxhzXSDs0UD00PhnbVWmvS72mVuXknWW4spM1b2Q-ruL1IkKi0NRQF_oj-1w4V",
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
