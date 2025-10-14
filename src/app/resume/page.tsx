"use client";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { data } from "@/data/site";
import { useState } from "react";

export default function ResumePage() {
  const [expandedEducation, setExpandedEducation] = useState<Record<string, boolean>>({});

  const toggleEducation = (institution: string) => {
    setExpandedEducation(prev => ({
      ...prev,
      [institution]: !prev[institution]
    }));
  };
  return (
    <div className="space-y-8">
      <SectionHeader title="Resume" subtitle={data.person.name} />

      <section className="space-y-3">
        <h3 className="text-sm text-[color:var(--foreground)] font-medium border-b border-[color:var(--border)] pb-1">Experience</h3>
        <div className="space-y-4">
          {data.resume.experience.map((e) => (
            <div key={e.company} className="border-l-2 border-[color:var(--border)] pl-4">
              <div className="mb-2">
                <p className="text-[color:var(--foreground)] text-sm font-medium">{e.role} @ {e.company}</p>
                <p className="text-xs text-[color:var(--muted)]">{e.duration}</p>
              </div>
              <ul className="space-y-1 ml-4">
                {e.achievements.map((a, idx) => (
                  <li key={idx} className="text-xs text-[color:var(--muted)]">• {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm text-[color:var(--foreground)] font-medium border-b border-[color:var(--border)] pb-1">Education</h3>
        <div className="space-y-4">
          {data.resume.education.map((edu) => (
            <div key={edu.institution} className="border-l-2 border-[color:var(--border)] pl-4">
              <button
                onClick={() => toggleEducation(edu.institution)}
                className="w-full text-left mb-2 hover:text-[color:var(--accent)] transition-colors"
              >
                <p className="text-[color:var(--foreground)] text-sm font-medium">{edu.degree}</p>
                <p className="text-xs text-[color:var(--muted)]">
                  {edu.institution} • {edu.years}
                  <span className="ml-2">
                    {expandedEducation[edu.institution] ? '[-]' : '[+]'}
                  </span>
                </p>
              </button>
              
              {expandedEducation[edu.institution] && edu.coursework && (
                <div className="ml-4 space-y-2">
                  {edu.coursework.map((semester, idx) => (
                    <div key={idx} className="text-xs text-[color:var(--muted)]">
                      <p className="font-medium mb-1">{semester.semester}</p>
                      <ul className="ml-4 space-y-1">
                        {semester.courses.map((course, courseIdx) => (
                          <li key={courseIdx}>• {course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="pt-2">
        <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">[← back home]</Link>
      </div>
    </div>
  );
}


