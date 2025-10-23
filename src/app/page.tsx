import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { data } from "@/data/site";

export default function Home() {
  return (
    <div className="space-y-8">
      <section id="blogs" className="space-y-4">
        <SectionHeader title="Latest Journal" subtitle="recent thoughts" />
        
        <div className="space-y-4">
          <div className="group">
            <Link 
              href="/blogs/stop-treating-ai-agents-like-functions"
              className="block hover:text-[color:var(--foreground)] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[color:var(--foreground)] group-hover:underline leading-relaxed">
                      Stop Treating AI Agents Like Functions
                    </h3>
                  </div>
                  <div className="ml-4 text-xs text-[color:var(--muted)] whitespace-nowrap">
                    October 2025
                  </div>
                </div>
                <p className="text-xs text-[color:var(--muted)] leading-relaxed">
                  The fundamental mistake we&apos;re making in AI agent design: treating autonomous systems like deterministic functions...
                </p>
              </div>
            </Link>
            <div className="mt-3 border-b border-[color:var(--border)]/30"></div>
          </div>
          <div className="group">
            <Link 
              href="/blogs/i-never-knew-the-life-of-pre-ai-stack-overflow-developers"
              className="block hover:text-[color:var(--foreground)] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[color:var(--foreground)] group-hover:underline leading-relaxed">
                      I never knew the life of pre-AI stack-overflow developers
                    </h3>
                  </div>
                  <div className="ml-4 text-xs text-[color:var(--muted)] whitespace-nowrap">
                    August 2025
                  </div>
                </div>
                <p className="text-xs text-[color:var(--muted)] leading-relaxed">
                  I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums...
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Link href="/blogs" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">view all journal →</Link>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <SectionHeader title="Featured Projects" subtitle="curated selection" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            data.projects.categories.GenAI[0], // AarogyaAI
            data.projects.categories.GenAI[4], // TalkDocs2
            data.projects.categories.GenAI[1], // LLM Benchmarking Suite
          ].map((p) => (
            <ProjectCard key={p.title} project={{ title: p.title, description: p.description, tags: p.tags, href: p.github || p.demo }} />
          ))}
        </div>
        <div>
          <Link href="/projects" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">view all projects →</Link>
        </div>
      </section>

      <section id="experience" className="space-y-4">
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
            <ul className="space-y-2 text-xs text-[color:var(--foreground)]">
              {top.map((e) => (
                <li key={e.company} className="leading-relaxed">
                  <span className="font-medium">{e.role}</span> <span className="text-[color:var(--muted)]">@ {e.company}</span> — <span className="text-[color:var(--muted)]/70">{e.duration}</span>
                </li>
              ))}
            </ul>
          );
        })()}
      </section>
    </div>
  );
}
