import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="space-y-4">
      <SectionHeader title="Blogs" subtitle="notes on genai, agents, and systems" />
      <p className="text-[12px] text-[color:var(--muted)]">
        Writing coming soon. For now, explore projects or resume.
      </p>
      <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)]">
        <Link href="/projects" className="hover:text-[color:var(--foreground)] transition-colors">projects</Link>
        <span className="text-[color:var(--muted)]/50">/</span>
        <Link href="/resume" className="hover:text-[color:var(--foreground)] transition-colors">resume</Link>
      </div>
    </div>
  );
}


