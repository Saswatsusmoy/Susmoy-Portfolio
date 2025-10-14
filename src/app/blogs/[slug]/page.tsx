import { notFound } from "next/navigation";
import Link from "next/link";
import { data } from "@/data/site";

// Blog content components

const AICodingContent = () => (
  <div className="prose prose-sm max-w-none text-[color:var(--foreground)]">
    <p className="text-[color:var(--muted)] leading-relaxed">
    I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started a bit too late.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
      The Before Times (A.K.A. The Tale of the Geek)
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
      Let me paint you a picture of a developer's life pre say 2022 (maybe?). A tech nerd sitting in his corner, booting up his PC opening up his Firefox (coz we love FOSS don't we?). There sits his 20 tabs lying around displaying countless discussions, articles and what-not. All for that one bug that he wants to resolve. 
    </p>

    <p className="text-[color:var(--muted)] leading-relaxed">
      But these ramblings have a catch that we are missing, i.e great coding skills. That geek has now learnt ig 4 5 different workflows, he did maybe 2-3 experiments and now he knows what not to do while debugging. You know that old guy that has been in the industry for 10+ years and still uses the same workflow as he did 10 years ago? (The f-ing workflow is flawless and works mind you) Yeah, that's the kind of guy we are talking about. 

      So now, the geek is not just ranting about the bug, he is also providing a solution to it. He is not just a ranting bug reporter, he is a bug solver. He is a HERO.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
    2020, Lockdown, HP Laptop, Charles Severance and Me
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
      It was 2020 when I got into programming. It started as a hobby back then but now it has become my bread n butter (sort of). I had a modest (2020 standard) HP laptop with a great internet and decided to start with python (because reddit told me so). Took up <a href="https://www.coursera.org/learn/python" target="_blank" rel="noopener noreferrer" className="underline text-[color:var(--primary)] hover:text-[color:var(--accent)]">Charles Severance's Coursera course (Python for Everybody)</a> and then started with <a href="https://youtu.be/LfaMVlDaQ24?si=ZQWn4SzJENn0zpTi" target="_blank" rel="noopener noreferrer" className="underline text-[color:var(--primary)] hover:text-[color:var(--accent)]">CS50</a> (I knew nothing about programming back then). Had a bit of fun with those Chuck lectures (mostly the slytherin jokes) and built a few basic things on Atom (but who cares right?).

    </p>

    <p className="text-[color:var(--muted)] leading-relaxed">
      This was the time when I experienced (somewhat) the joy of rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get my idea into a working code. No coding assistants, no prompt engineering and no context engineering bullshit, just me and my minimal code.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
      ChatGPT and I
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
      Came 2022, I had just started my undergrad and my first sem had a project requirement for a coursework. I tried building a simple calculus based portfolio optimizer. No AI codes just pure python coding done by a newbie.
    </p>

    <p className="text-[color:var(--muted)] leading-relaxed">
      January 2023, A random physics workshop, assigned to take some readings and make inferences based on those readings. There sat my friend (<a href="https://salty-duck0.github.io/" target="_blank" rel="noopener noreferrer" className="underline text-[color:var(--primary)] hover:text-[color:var(--accent)]">check him out, he does some crazy RL stuff</a>) typing away on his laptop on a minimal green-black screen and the rest was history. It was ChatGPT and it was crazy. He typed his query and passed those readings and voila, the output streaming like a voice inside the laptop guiding him. Curious me, latched unto him and made him show me the ropes. It was a whole new world.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
    The project
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
     Remember the project? the calculus based portfolio optimizer? Yes, ChatGPT took over the reigns. What started as a experiment to write code through ChatGPT, turned into a full fledged project with 75% ai-written code and 25% painful debugging. But nonetheless it worked.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
      The Learning Decelerator
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
      Here's something I didn't expect: AI is making me an average developer. Statistically speaking, LLM's are trained on the corpus of the codes available on all the public forums, yes it contains those great code snippets but the probabilistic distributions ensure that most of the generated code lie in between the -2D and 2D of the bell curve which is the damn average.
    </p>

    <p className="text-[color:var(--muted)] leading-relaxed">
      Yes, learning to code has gotten a lot easier but the quality of the code has gotten a lot worse. I now learn at a faster pace but the code quality is not as good as a top 5%ile developer. This is not just a matter of my skill, it is a matter of the quality of the code that is generated by the AI. 
    </p>

    <p className="text-[color:var(--muted)] leading-relaxed">
      Now my workflow includes a lot of AI and a lot of debugging. I now spend more time debugging than I do coding. Sometimes I just stare at those stream of codes generated by the AI and wonder if I'm the only one? Guilt sometimes creeps in, and then after debugging when the code just works, I feel like the HERO.
    </p>

    <div className="bg-[color:var(--background)] border border-[color:var(--border)] rounded-lg p-4 my-6">
      <h3 className="font-mono text-sm font-semibold mb-2 text-[color:var(--foreground)]">
        My New Workflow (The AI Version):
      </h3>
      <ul className="space-y-1 text-sm text-[color:var(--muted)]">
        <li>• <strong>1. Think:</strong> What do I want to build?</li>
        <li>• <strong>2. Formulate:</strong> Design architecture with AI suggestions</li>
        <li>• <strong>3. Code n Chat:</strong> Ask Cursor about edge cases and optimizations</li>
        <li>• <strong>4. Refactor:</strong> Let AI clean up and improve the code (does it really tho?)</li>
        <li>• <strong>5. Ship (Maybe):</strong> Deploy with no-confidence (and more bugs)</li>
      </ul>
    </div>

    <h2 className="text-xl font-semibold mt-8 mb-4 text-[color:var(--foreground)]">
      The Honest Truth About AI Coding
    </h2>
    <p className="text-[color:var(--muted)] leading-relaxed">
      I dont know, I'm just following The RULE "If the code works, why not?"
    </p>
  </div>
);

// Content mapping
const contentMap = {
  'ai-coding': AICodingContent,
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = data.blogs.posts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const ContentComponent = contentMap[params.slug as keyof typeof contentMap];

  return (
    <div className="space-y-8">
      {/* Back to blogs link */}
      <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
        <Link 
          href="/blogs" 
          className="hover:text-[color:var(--foreground)] transition-colors flex items-center gap-1"
        >
          ← Back to blogs
        </Link>
      </div>

      {/* Blog post header */}
      <article className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[color:var(--foreground)]">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[color:var(--muted)]">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-[color:var(--background)] border border-[color:var(--border)] rounded text-[color:var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blog content */}
        {ContentComponent && <ContentComponent />}
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return data.blogs.posts.map((post) => ({
    slug: post.slug,
  }));
}

