"use client";
import { useState } from "react";
import { data } from "@/data/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span className="text-xs text-[color:var(--muted)]">
    {isOpen ? "×" : "☰"}
  </span>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigationLinks = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/blogs", label: "journal" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[color:var(--panel)]/70 border-b border-[color:var(--border)]">
      <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 hover:bg-[color:var(--panel)]/50 rounded-md px-2 py-1 transition-colors duration-200 group">
              <span className="font-mono text-xs text-[color:var(--muted)]">$</span>
              <span className="font-mono text-xs text-[color:var(--foreground)] group-hover:text-[color:var(--foreground)] transition-colors duration-200">
                {data.person.alias?.toLowerCase() || data.person.name.toLowerCase()}
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-4 text-xs text-[color:var(--muted)]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-3 rounded-md hover:bg-[color:var(--panel)]/50 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile/Tablet menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[color:var(--border)] py-3 animate-in slide-in-from-top-2 fade-in duration-200">
            <nav className="flex flex-col space-y-2 text-xs text-[color:var(--muted)]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-3 rounded-md transition-colors duration-200 min-h-[44px] flex items-center ${
                    pathname === link.href
                      ? "text-[color:var(--foreground)] bg-[color:var(--panel)]/30"
                      : "hover:text-[color:var(--foreground)] hover:bg-[color:var(--panel)]/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


