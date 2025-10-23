import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

// Blog metadata - moved from site.ts (sorted by newest first)
const blogPosts = [
  {
    id: "stop-treating-ai-agents-like-functions",
    title: "Stop Treating AI Agents Like Functions",
    excerpt: "The fundamental mistake we're making in AI agent design: treating autonomous systems like deterministic functions. Here's why this approach is fundamentally flawed and what we should do instead.",
    date: "October 2025",
    tags: ["AI", "Agents", "Architecture"],
    slug: "stop-treating-ai-agents-like-functions"
  },
  {
    id: "i-never-knew",
    title: "I never knew the life of pre-AI stack-overflow developers (And Why I'm Mad About It)",
    excerpt: "I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started...",
    date: "August 2025",
    tags: ["Development"],
    slug: "i-never-knew-the-life-of-pre-ai-stack-overflow-developers"
  }
];

export default function BlogsPage() {

  return (
    <div className="space-y-8 font-mono">
      <SectionHeader title="Journal" subtitle="ramblings of a sleep-deprived programmer" />
      
      {/* Journal Entries with improved layout */}
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article key={post.id} className="group">
            <Link 
              href={`/blogs/${post.slug}`}
              className="block hover:text-[color:var(--foreground)] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-base font-medium text-[color:var(--foreground)] group-hover:underline leading-relaxed">
                      {post.title}
                    </h2>
                  </div>
                  <div className="ml-6 text-xs text-[color:var(--muted)] whitespace-nowrap">
                    {post.date}
                  </div>
                </div>
                <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
            {index < blogPosts.length - 1 && (
              <div className="mt-6 border-b border-[color:var(--border)]/20"></div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-[color:var(--border)]">
        <div className="text-center space-y-2">
          <p className="text-xs text-[color:var(--muted)]">
          </p>
          <p className="text-xs text-[color:var(--muted)]">
            “Any sufficiently advanced technology is indistinguishable from magic.”
            <span className="ml-2 italic">— Arthur C. Clarke</span>
          </p>
        </div>
      </div>

    </div>
  );
}


