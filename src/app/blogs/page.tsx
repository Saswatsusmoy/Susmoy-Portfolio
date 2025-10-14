"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { data } from "@/data/site";
import { useState, useMemo } from "react";

export default function BlogsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from all blog posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    data.blogs.posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter blog posts based on selected tags
  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) {
      return data.blogs.posts;
    }
    return data.blogs.posts.filter(post => 
      selectedTags.some(tag => post.tags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6 font-sans">
      <SectionHeader title="Blogs" subtitle="ramblings of a sleep-deprived programmer" />
      
      {/* Tag Filter Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-[color:var(--foreground)]">
            Filter by tags
          </h3>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
                  isSelected
                    ? "bg-[color:var(--foreground)] text-[color:var(--background)] border-[color:var(--foreground)]"
                    : "bg-[color:var(--background)] text-[color:var(--muted)] border-[color:var(--border)] hover:border-[color:var(--foreground)]/50 hover:text-[color:var(--foreground)]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {selectedTags.length > 0 && (
        <div className="text-sm text-[color:var(--muted)]">
          Showing {filteredPosts.length} of {data.blogs.posts.length} posts
          {selectedTags.length > 0 && (
            <span> matching: {selectedTags.join(", ")}</span>
          )}
        </div>
      )}
      
      {/* Blog Posts */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[color:var(--muted)]">
              No blog posts found matching the selected tags.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 text-sm text-[color:var(--foreground)] hover:underline"
            >
              Clear filters to see all posts
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.id} className="group">
              <Link 
                href={`/blogs/${post.slug}`}
                className="block p-4 rounded-md border border-[color:var(--border)] hover:border-[color:var(--foreground)]/20 transition-all duration-200 hover:bg-[color:var(--background)]/50 font-sans"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold text-[color:var(--foreground)] group-hover:text-[color:var(--foreground)]/80 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-[color:var(--muted)] whitespace-nowrap">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-[color:var(--muted)] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[color:var(--muted)]">
                      <span>{post.date}</span>
                      <div className="flex items-center gap-1.5">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className={`px-1.5 py-0.5 text-xs border rounded text-[color:var(--muted)] ${
                              selectedTags.includes(tag)
                                ? "bg-[color:var(--foreground)]/10 border-[color:var(--foreground)]/30"
                                : "bg-[color:var(--background)] border-[color:var(--border)]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-[color:var(--muted)] group-hover:text-[color:var(--foreground)] transition-colors">
                      Read more →
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>

      <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)] pt-4 border-t border-[color:var(--border)]">
        <Link href="/projects" className="hover:text-[color:var(--foreground)] transition-colors">projects</Link>
        <span className="text-[color:var(--muted)]/50">/</span>
        <Link href="/resume" className="hover:text-[color:var(--foreground)] transition-colors">resume</Link>
      </div>
    </div>
  );
}


