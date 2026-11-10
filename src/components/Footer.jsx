const FOOTER_LINKS = [
  { href: "#governance", label: "Governance & Charter" },
  { href: "#investor-relations", label: "Investor Relations" },
  { href: "#fiduciary-disclosures", label: "Fiduciary Disclosures" },
  { href: "#regulatory-capital", label: "Regulatory Capital" },
  { href: "#whistleblower", label: "Whistleblower Policy" },
  { href: "#privacy", label: "Privacy & Security" },
  { href: "#sitemap", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-on-primary px-margin py-space-xl border-t border-outline-variant">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3"></div>
            <p className="font-body-md text-xs text-on-primary-container leading-relaxed">
              Institutional Banking Corporation. Established for the perpetual
              preservation, clearing, and stewardship of sovereign balance sheets
              and global institutional capital.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-body-md text-xs text-on-primary-container">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                className="hover:text-on-primary transition-colors duration-150"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-[11px] text-on-primary-container leading-relaxed">
          <div className="flex flex-wrap items-center gap-3 text-white/80 font-medium">
            <span className="px-2 py-0.5 border border-white/20 rounded">
              Member FDIC
            </span>
            <span className="px-2 py-0.5 border border-white/20 rounded">
              FINMA Authorized
            </span>
            <span className="px-2 py-0.5 border border-white/20 rounded">
              Bank of England / PRA Supervised
            </span>
            <span className="px-2 py-0.5 border border-white/20 rounded">
              Equal Housing Lender
            </span>
          </div>
          <p>
            Bancroft & Co. Institutional Banking Corporation is authorized by the
            Prudential Regulation Authority and regulated by the Financial Conduct
            Authority and the Prudential Regulation Authority in the UK (FRN
            892110). In Switzerland, Bancroft & Co. AG is licensed by the Swiss
            Financial Market Supervisory Authority (FINMA) as an institutional bank
            and securities dealer. In the United States, depositary facilities are
            managed by Bancroft & Co. USA, Member FDIC. All sovereign deposits are
            maintained in ring-fenced custodial custody accounts without
            rehypothecation or balance sheet lending exposure unless explicitly
            designated under discretionary treasury covenants.
          </p>
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-primary-container">
            <span>
              © 2025 Bancroft & Co. Institutional Banking Corporation. All rights
              reserved. Member FDIC. Equal Housing Lender.
            </span>
            <span className="font-mono text-[10px]">
              LEI: 549300BNCRFTCOBANK01
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
