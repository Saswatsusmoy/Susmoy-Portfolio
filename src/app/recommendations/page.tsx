"use client";
import { data } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useState } from "react";

export default function RecommendationsPage() {
  const recommendations = data.recommendations;
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="space-y-8">
      <SectionHeader title="Recommendations" subtitle="curated favorites" />

      <div className="space-y-6">
        {Object.entries(recommendations.categories).map(([category, items]) => (
          <section key={category} className="space-y-2">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--accent)] transition-colors border-b border-[color:var(--border)] pb-1"
            >
              {category.replace('_', ' ')}
              <span className="ml-2 text-xs text-[color:var(--muted)]">
                {expandedCategories[category] ? '[-]' : '[+]'}
              </span>
            </button>
            
            {expandedCategories[category] && (
              <ul className="list-disc list-inside space-y-1 ml-4">
                {items.map((item, index) => (
                  <li key={index} className="text-sm">
                    {item.link && (item.linkType === 'youtube' || item.linkType === 'website') ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[color:var(--foreground)] hover:text-[color:var(--accent)] hover:underline transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-[color:var(--foreground)]">
                        {item.title}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                          >
                            [link]
                          </a>
                        )}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="pt-2">
        <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors">← back home</Link>
      </div>
    </div>
  );
}
