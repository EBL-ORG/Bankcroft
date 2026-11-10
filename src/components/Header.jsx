const NAV_LINKS = [
  { href: "#commercial-performance", label: "Commercial Results" },
  { href: "#financial-status", label: "Financial Status" },
  { href: "#hierarchy-direction", label: "Hierarchy" },
  { href: "#mission-values", label: "Mission & Values" },
  { href: "#operational-workflow", label: "Workflow" },
  { href: "#global-agencies", label: "Agencies" },
  { href: "#annual-reports", label: "Disclosures" },
];

const COMPACT_LINKS = [
  { href: "#commercial-performance", label: "Performance" },
  { href: "#financial-status", label: "Solvency" },
  { href: "#hierarchy-direction", label: "Hierarchy" },
  { href: "#mission-values", label: "Mission & Values" },
  { href: "#operational-workflow", label: "Workflow" },
  { href: "#global-agencies", label: "Global Network" },
  { href: "#annual-reports", label: "Reports Archive" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant transition-all">
      <div className="max-w-7xl mx-auto px-margin h-20 flex items-center justify-between gap-6">
        <a className="flex items-center gap-3.5 group focus:outline-none" href="#">
          <img
            alt="Bancroft & Co. Monogram"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105 duration-200"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUkXybpeMnxKCwoQ3t1R3Wwnwt8LnBQzh5DspZjY6TTA26malEaeH6_D_NgOe2gl9zG6o0ML2iSuv_XoWt4gWmbG9g_KgrTHS2Jt9eI3LBGKhnMQ0jBLpXTY22aKf5f_jOy8EPcqt3cRUybddTWy9ouEwy-Xp55nh4b6GzH8vXYbuhTZ7wsGrY3kWsR8vVOC8dPZ7GVHpH5DtijIW_15bDUw7WSHdwHk9zAvbzlqRhzbkrtFAWwWP"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold leading-none">
              Bancroft
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-1">
              Institutional Banking Corp
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-6 font-body-md text-body-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-150 py-1 font-medium"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3"></div>
      </div>

      <div className="xl:hidden flex items-center overflow-x-auto custom-scrollbar border-t border-outline-variant/60 bg-surface px-margin py-2 gap-5 text-xs whitespace-nowrap">
        {COMPACT_LINKS.map((link) => (
          <a
            key={link.href}
            className="text-on-surface-variant hover:text-primary font-medium"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
