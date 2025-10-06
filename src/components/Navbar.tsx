"use client";
import { data } from "@/data/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[color:var(--panel)]/70 border-b border-[color:var(--border)]">
      <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
          <div className="size-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_rgba(233,84,32,0.6)]" />
          <span className="font-mono text-xs text-[color:var(--muted)]">$</span>
          <span className="font-mono text-xs text-[color:var(--foreground)]">{data.person.alias?.toLowerCase() || data.person.name.toLowerCase()}</span>
      </div>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4 text-xs text-[color:var(--muted)]">
            <Link href="/" className={pathname === "/" ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}>home</Link>
            <Link href="/projects" className={pathname === "/projects" ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}>projects</Link>
            <Link href="/resume" className={pathname === "/resume" ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}>resume</Link>
            <Link href="/blogs" className={pathname === "/blogs" ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}>blogs</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}


