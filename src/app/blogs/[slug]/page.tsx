import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

// Blog metadata - moved from site.ts
const blogPosts = [
  {
    id: "i-never-knew-the-life-of-pre-ai-stack-overflow-developers",
    title: "I never knew the life of pre-AI stack-overflow developers (And Why I'm Mad About It)",
    excerpt: "I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started...",
    date: "August 2025",
    tags: ["Development"],
    slug: "i-never-knew-the-life-of-pre-ai-stack-overflow-developers"
  },
  {
    id: "stop-treating-ai-agents-like-functions",
    title: "Stop Treating AI Agents Like Functions",
    excerpt: "The fundamental mistake we're making in AI agent design: treating autonomous systems like deterministic functions. Here's why this approach is fundamentally flawed and what we should do instead.",
    date: "October 2025",
    tags: ["AI", "Agents", "Architecture"],
    slug: "stop-treating-ai-agents-like-functions"
  }
];

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Redirect to the dedicated blog page
  redirect(`/blogs/${post.slug}`);
}

// Generate static params for all blog posts
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}