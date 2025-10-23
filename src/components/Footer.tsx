"use client";
import { data } from "@/data/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-4 border-t border-[color:var(--border)]">
      <div className="space-y-3">
        {/* Contact Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] text-[color:var(--muted)] flex-wrap">
            {data.contact_section.socials.map((s, i) => (
              <div key={s.name} className="flex items-center gap-3">
                <a 
                  href={s.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[color:var(--foreground)] transition-colors duration-200"
                >
                  {s.name.toLowerCase()}
                </a>
                {i < data.contact_section.socials.length - 1 ? (
                  <span className="text-[color:var(--muted)]/50">/</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex items-center justify-center text-[11px] text-[color:var(--muted)]">
          <button
            onClick={scrollToTop}
            className="hover:text-[color:var(--foreground)] transition-colors duration-200 cursor-pointer font-mono min-h-[44px] px-3 py-2"
            aria-label="Scroll to top"
          >
            saswatsusmoy
          </button>
        </div>
      </div>
    </footer>
  );
}


