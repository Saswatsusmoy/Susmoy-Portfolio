"use client";
import SectionHeader from "@/components/SectionHeader";
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
            className={`text-sm transition-colors border-b border-[color:var(--border)] pb-1 ${
              active === c
                ? "text-[color:var(--foreground)] border-[color:var(--foreground)]"
                : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {visibleProjects.map((p) => (
          <div key={p.title} className="border border-[color:var(--border)] p-4 hover:bg-[color:var(--panel)]/30 transition-colors">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-[color:var(--foreground)]">
                {p.title}
              </h3>
              <p className="text-xs text-[color:var(--muted)] line-clamp-3">
                {p.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                  >
                    [github]
                  </a>
                )}
                {p.demo && p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                  >
                    [demo]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-[color:var(--muted)]">total: {data.projects.all_projects.length}</span>
          <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">[← back home]</Link>
        </div>
      </div>
    </div>
  );
}


