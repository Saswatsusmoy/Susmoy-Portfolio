import TerminalHero from "@/components/TerminalHero";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import Link from "next/link";
import { data } from "@/data/site";

export default function Home() {
  return (
    <div className="space-y-8">
      <TerminalHero />

      <section id="highlights" className="space-y-1">
        <SectionHeader title="Highlights" subtitle={data.about.tagline} />
        <div className="flex flex-wrap gap-1">
          {data.about.stats.slice(0, 3).map((s) => (
            <Badge key={s.label}>{`${s.number} ${s.label}`}</Badge>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-2">
        <SectionHeader title="Featured Projects" subtitle="curated selection" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {[
            data.projects.categories.GenAI[0], // AarogyaAI
            data.projects.categories.GenAI[5], // TalkDocs2
            data.projects.categories.GenAI[1], // LLM Benchmarking Suite
          ].map((p) => (
            <ProjectCard key={p.title} project={{ title: p.title, description: p.description, tags: p.tags, href: p.github || p.demo }} />
          ))}
        </div>
        <div className="pt-2">
          <Link href="/projects" className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--foreground)]">view all projects →</Link>
        </div>
      </section>


      <section id="experience" className="space-y-2">
        <SectionHeader title="Experience" subtitle="recent roles" />
        {(() => {
          const monthIndex: Record<string, number> = {
            jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
            jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
          };
          const parseEndDate = (duration: string): number => {
            const parts = duration.split("-");
            const end = (parts[1] || parts[0]).trim();
            // e.g. "Jun 2024" or "Dec 2024" or "Present"
            if (/present/i.test(end)) return Date.now();
            const m = end.split(/\s+/)[0]?.slice(0,3).toLowerCase();
            const y = parseInt((end.match(/\d{4}/)?.[0] || "0"), 10);
            if (Number.isFinite(y) && m in monthIndex) {
              return new Date(y, monthIndex[m as keyof typeof monthIndex], 1).getTime();
            }
            return 0;
          };
          const sorted = [...data.resume.experience].sort((a, b) => parseEndDate(b.duration) - parseEndDate(a.duration));
          const top = sorted.slice(0, 3);
          return (
            <ul className="space-y-1 text-[12px] text-[color:var(--foreground)]">
              {top.map((e) => (
                <li key={e.company}>
                  {e.role} <span className="text-[color:var(--muted)]">@ {e.company}</span> — <span className="text-[color:var(--muted)]/70">{e.duration}</span>
                </li>
              ))}
            </ul>
          );
        })()}
        <div className="pt-2">
          <Link href="/resume" className="text-[12px] text-[color:var(--muted)] hover:text-[color:var(--foreground)]">view full resume →</Link>
        </div>
      </section>
    </div>
  );
}
