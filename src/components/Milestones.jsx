import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(() =>
    MILESTONES.map(() => false),
  );

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          ratios.set(index, entry.intersectionRatio);

          if (entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });

        let bestIndex = -1;
        let bestRatio = 0;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestIndex >= 0 && bestRatio > 0.15) {
          setActive(bestIndex);
        }
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
        rootMargin: "-12% 0px -12% 0px",
      },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const element = sectionRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 1);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToIndex = (index) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const activeItem = MILESTONES[active];
  const nextItem = MILESTONES[active + 1];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-surface-container-lowest border-b border-outline-variant scroll-mt-20"
      id="historical-continuity"
    >
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
            realignments and structural market shocks. Scroll to advance through
            each chapter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                Active Chapter
              </span>
              <div className="mt-3 flex items-baseline gap-3">
                <span
                  key={activeItem.year}
                  className="year-pop font-headline-lg text-[92px] leading-none text-primary"
                >
                  {activeItem.year}
                </span>
              </div>
              <div className="mt-4 h-px w-16 bg-primary"></div>
              <p className="mt-4 font-title-md text-title-md text-primary">
                {activeItem.tag}
              </p>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {activeItem.title}
              </p>

              <div className="mt-8 flex items-center gap-2">
                {MILESTONES.map((item, index) => (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    aria-label={`Jump to ${item.year}`}
                    aria-current={active === index ? "true" : undefined}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-outline-variant hover:bg-primary/40"
                    }`}
                  >
                    <span className="sr-only">{item.year}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-on-surface-variant">
                  <span>1902</span>
                  <span>2024</span>
                </div>
                <div className="mt-2 h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-150"
                    style={{ width: `${Math.max(progress * 100, 3)}%` }}
                  ></div>
                </div>
              </div>

              {nextItem && (
                <div className="mt-8 border-t border-outline-variant pt-4">
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                    Next in scroll
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToIndex(active + 1)}
                    className="mt-1 flex items-center gap-2 text-primary group"
                  >
                    <span className="font-headline-sm text-headline-sm font-semibold">
                      {nextItem.year}
                    </span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-0.5">
                      arrow_downward
                    </span>
                    <span className="font-body-md text-xs text-on-surface-variant">
                      {nextItem.tag}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-[6px] top-0 bottom-0 w-px bg-outline-variant"></div>
            <div
              className="absolute left-[6px] top-0 w-px bg-primary transition-all duration-150"
              style={{ height: `${Math.max(progress * 100, 2)}%` }}
            ></div>

            <div className="space-y-8 lg:space-y-12">
              {MILESTONES.map((item, index) => (
                <div
                  key={item.year}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className="relative pl-10"
                >
                  <span
                    className={`absolute left-0 top-7 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                      active === index
                        ? "bg-primary border-primary ring-4 ring-primary/10"
                        : "bg-white border-outline-variant"
                    }`}
                  ></span>

                  <div
                    className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                      revealed[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div
                      className={`bg-surface-container-low p-6 rounded border transition-all duration-500 ${
                        active === index
                          ? "border-primary shadow-[0_8px_24px_-12px_rgba(8,20,72,0.18)]"
                          : "border-outline-variant"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-label-caps font-label-caps uppercase tracking-wider text-on-surface-variant font-semibold">
                          {item.tag}
                        </span>
                        <span
                          className={`text-xs font-tabular-figure font-bold px-2 py-0.5 rounded border transition-colors duration-300 ${
                            active === index
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-primary border-outline-variant"
                          }`}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-title-md font-title-md text-on-surface font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
