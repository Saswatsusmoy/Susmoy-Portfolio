"use client";

import { useState } from "react";

interface Coursework {
  semester: string;
  courses: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  coursework?: Coursework[];
}

interface CollapsibleEducationProps {
  education: EducationItem[];
}

export default function CollapsibleEducation({ education }: CollapsibleEducationProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <ul className="space-y-3">
      {education.map((ed, index) => (
        <li key={ed.institution} className="rounded-md border border-[color:var(--border)] bg-[color:var(--card)] hover:bg-[color:var(--card-hover)] transition-colors">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-[color:var(--foreground)] text-sm font-medium">{ed.degree}</p>
                <p className="text-xs text-[color:var(--muted)]">{ed.institution} · {ed.years}</p>
              </div>
              {ed.coursework && ed.coursework.length > 0 && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="ml-4 p-1 rounded hover:bg-[color:var(--muted)]/20 transition-colors"
                  aria-label={expandedItems.has(index) ? "Collapse coursework" : "Expand coursework"}
                >
                  <span className="text-[color:var(--muted)] text-sm font-medium">
                    {expandedItems.has(index) ? "▼" : "▶"}
                  </span>
                </button>
              )}
            </div>
            
            {ed.coursework && ed.coursework.length > 0 && expandedItems.has(index) && (
              <div className="mt-4 pt-4 border-t border-[color:var(--border)]">
                <div className="space-y-3">
                  {ed.coursework.map((semester, semesterIndex) => (
                    <div key={semesterIndex} className="bg-[color:var(--muted)]/10 rounded-md p-3">
                      <h4 className="text-xs font-medium text-[color:var(--foreground)] mb-2">
                        {semester.semester}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {semester.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="text-xs text-[color:var(--muted)] bg-[color:var(--card)] px-2 py-1 rounded border border-[color:var(--border)]"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
