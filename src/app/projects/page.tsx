"use client";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import Link from "next/link";
import { data } from "@/data/site";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const categories = Object.keys(data.projects.categories);
  const [active, setActive] = useState<string>(categories[0] ?? "");

  const visibleProjects = useMemo(() => {
    if (!active) return [];
    return data.projects.categories[active] ?? [];
  }, [active]);

  return (
    <div className="space-y-8">
      <SectionHeader title="Projects" subtitle="explore by category" />

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-md border px-3 py-1 text-sm transition-all duration-200 ${
              active === c
                ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent)] shadow-sm"
                : "border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--foreground)] hover:border-[color:var(--border-hover)] hover:bg-[color:var(--panel-hover)]"
            }`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.title} project={{ title: p.title, description: p.description, tags: p.tags, href: p.github || p.demo }} />
        ))}
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge>{`total: ${data.projects.all_projects.length}`}</Badge>
          <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">← back home</Link>
        </div>
      </div>
    </div>
  );
}


