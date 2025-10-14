import SectionHeader from "@/components/SectionHeader";
import Badge from "@/components/Badge";
import CollapsibleEducation from "@/components/CollapsibleEducation";
import Link from "next/link";
import { data } from "@/data/site";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Resume" subtitle={data.person.name} />

      <section className="space-y-3">
        <h3 className="text-sm text-[color:var(--foreground)] font-medium">Experience</h3>
        <ul className="space-y-3">
          {data.resume.experience.map((e) => (
            <li key={e.company} className="rounded-md border border-[color:var(--border)] p-4 bg-[color:var(--card)] hover:bg-[color:var(--card-hover)] transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[color:var(--foreground)] text-sm font-medium">{e.role} @ {e.company}</p>
                  <p className="text-xs text-[color:var(--muted)]">{e.duration}</p>
                </div>
              </div>
              <ul className="mt-2 list-disc list-inside text-sm text-[color:var(--muted)] space-y-1">
                {e.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm text-[color:var(--foreground)] font-medium">Education</h3>
        <CollapsibleEducation education={data.resume.education} />
      </section>

      <section className="space-y-3">
        <h3 className="text-sm text-[color:var(--foreground)] font-medium">Skills</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {data.skills.tech_stack_categories.map((cat) => (
            <div key={cat.title} className="rounded-md border border-[color:var(--border)] p-4 bg-[color:var(--card)] hover:bg-[color:var(--card-hover)] transition-colors">
              <p className="text-[color:var(--foreground)] text-sm font-medium">{cat.title}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {cat.techs.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-2">
        <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">← back home</Link>
      </div>
    </div>
  );
}


