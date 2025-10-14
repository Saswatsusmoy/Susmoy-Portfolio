import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { data } from "@/data/site";

export default function BlogsPage() {

  return (
    <div className="space-y-6 font-sans">
      <SectionHeader title="Blogs" subtitle="ramblings of a sleep-deprived programmer" />
      
      {/* Blog Posts */}
      <div className="space-y-3">
        {data.blogs.posts.map((post) => (
          <div key={post.id} className="border-b border-[color:var(--border)] pb-2">
            <Link 
              href={`/blogs/${post.slug}`}
              className="group block hover:text-[color:var(--accent)] transition-colors"
            >
              <h2 className="text-sm font-medium text-[color:var(--foreground)] group-hover:underline">
                {post.title}
              </h2>
              <div className="text-xs text-[color:var(--muted)] mt-1">
                <span>{post.date}</span> • <span>{post.readTime}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)] pt-4 border-t border-[color:var(--border)]">
        <Link href="/projects" className="hover:text-[color:var(--foreground)] transition-colors">projects</Link>
        <span className="text-[color:var(--muted)]/50">/</span>
        <Link href="/resume" className="hover:text-[color:var(--foreground)] transition-colors">resume</Link>
      </div>
    </div>
  );
}


