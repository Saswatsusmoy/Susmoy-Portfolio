import Link from "next/link";
import AIAgentsFunctionsContent from "./content";

export default function BlogPostPage() {
  return (
    <div className="space-y-8">
      {/* Back to journal link */}
      <div className="text-sm text-[color:var(--muted)]">
        <Link 
          href="/blogs" 
          className="hover:text-[color:var(--foreground)] transition-colors"
        >
          [← back to journal]
        </Link>
      </div>

      {/* Blog post header */}
      <article className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-lg font-medium text-[color:var(--foreground)] border-b border-[color:var(--border)] pb-2">
            Stop Treating AI Agents Like Functions
          </h1>
          <div className="text-xs text-[color:var(--muted)]">
            <span>October 2025</span> • <span>5 min read</span>
          </div>
        </div>

        {/* Blog content */}
        <AIAgentsFunctionsContent />
      </article>

      {/* Navigation */}
      <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)] pt-4 border-t border-[color:var(--border)]">
        <Link href="/projects" className="hover:text-[color:var(--foreground)] transition-colors">projects</Link>
        <span className="text-[color:var(--muted)]/50">/</span>
        <Link href="/resume" className="hover:text-[color:var(--foreground)] transition-colors">resume</Link>
      </div>
    </div>
  );
}
