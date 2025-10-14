import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { data } from "@/data/site";

export default function ProjectsPage() {

  return (
    <div className="space-y-6">
      <SectionHeader title="Projects" subtitle="all projects" />

      <div className="max-h-[60vh] overflow-y-auto">
        <div className="space-y-1">
          {data.projects.all_projects.map((p) => (
            <div key={p.title} className="flex items-start gap-2">
              <span className="text-[color:var(--muted)] text-xs mt-0.5">•</span>
              <div className="flex-1 flex items-start justify-between gap-3">
                <div>
                  <span className="text-[color:var(--foreground)] text-sm">
                    {p.title}
                  </span>
                  <div className="text-xs text-[color:var(--muted)] mt-0.5">
                    {p.description}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                    >
                      [github]
                    </a>
                  )}
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                    >
                      [demo]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-[color:var(--muted)] pt-2 border-t border-[color:var(--border)]">
        <Link href="/" className="hover:text-[color:var(--foreground)]">[← back home]</Link>
        <span className="ml-4">total: {data.projects.all_projects.length}</span>
      </div>
    </div>
  );
}


