import React from 'react';

export const BlogContent = () => (
  <div className="text-sm text-[color:var(--foreground)] leading-relaxed">
    <p className="mb-4">
      I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started a bit too late.
    </p>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      The Before Times (A.K.A. The Tale of the Geek)
    </h2>
    <p className="mb-4">
      Let me paint you a picture of a developer&apos;s life pre say 2022 (maybe?). A tech nerd sitting in his corner, booting up his PC opening up his Firefox (coz we love FOSS don&apos;t we?). There sits his 20 tabs lying around displaying countless discussions, articles and what-not. All for that one bug that he wants to resolve. 
    </p>

    <p className="mb-4">
      But these ramblings have a catch that we are missing, i.e great coding skills. That geek has now learnt ig 4 5 different workflows, he did maybe 2-3 experiments and now he knows what not to do while debugging. You know that old guy that has been in the industry for 10+ years and still uses the same workflow as he did 10 years ago? (The f-ing workflow is flawless and works mind you) Yeah, that&apos;s the kind of guy we are talking about. 

      So now, the geek is not just ranting about the bug, he is also providing a solution to it. He is not just a ranting bug reporter, he is a bug solver. He is a HERO.
    </p>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      2020, Lockdown, HP Laptop, Charles Severance and Me
    </h2>
    <p className="mb-4">
      It was 2020 when I got into programming. It started as a hobby back then but now it has become my bread n butter (sort of). I had a modest (2020 standard) HP laptop with a great internet and decided to start with python (because reddit told me so). Took up <a href="https://www.coursera.org/learn/python" target="_blank" rel="noopener noreferrer" className="text-[color:var(--foreground)] hover:underline">Charles Severance&apos;s Coursera course (Python for Everybody)</a> and then started with <a href="https://youtu.be/LfaMVlDaQ24?si=ZQWn4SzJENn0zpTi" target="_blank" rel="noopener noreferrer" className="text-[color:var(--foreground)] hover:underline">CS50</a> (I knew nothing about programming back then). Had a bit of fun with those Chuck lectures (mostly the slytherin jokes) and built a few basic things on Atom (but who cares right?).
    </p>

    <p className="mb-4">
      This was the time when I experienced (somewhat) the joy of rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get my idea into a working code. No coding assistants, no prompt engineering and no context engineering bullshit, just me and my minimal code.
    </p>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      ChatGPT and I
    </h2>
    <p className="mb-4">
      Came 2022, I had just started my undergrad and my first sem had a project requirement for a coursework. I tried building a simple calculus based portfolio optimizer. No AI codes just pure python coding done by a newbie.
    </p>

    <p className="mb-4">
      January 2023, A random physics workshop, assigned to take some readings and make inferences based on those readings. There sat my friend (<a href="https://salty-duck0.github.io/" target="_blank" rel="noopener noreferrer" className="text-[color:var(--foreground)] hover:underline">check him out, he does some crazy RL stuff</a>) typing away on his laptop on a minimal green-black screen and the rest was history. It was ChatGPT and it was crazy. He typed his query and passed those readings and voila, the output streaming like a voice inside the laptop guiding him. Curious me, latched unto him and made him show me the ropes. It was a whole new world.
    </p>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      The project
    </h2>
    <p className="mb-4">
      Remember the project? the calculus based portfolio optimizer? Yes, ChatGPT took over the reigns. What started as a experiment to write code through ChatGPT, turned into a full fledged project with 75% ai-written code and 25% painful debugging. But nonetheless it worked.
    </p>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      The Learning Decelerator
    </h2>
    <p className="mb-4">
      Here&apos;s something I didn&apos;t expect: AI is making me an average developer. Statistically speaking, LLM&apos;s are trained on the corpus of the codes available on all the public forums, yes it contains those great code snippets but the probabilistic distributions ensure that most of the generated code lie in between the -2D and 2D of the bell curve which is the damn average.
    </p>

    <p className="mb-4">
      Yes, learning to code has gotten a lot easier but the quality of the code has gotten a lot worse. I now learn at a faster pace but the code quality is not as good as a top 5%ile developer. This is not just a matter of my skill, it is a matter of the quality of the code that is generated by the AI. 
    </p>

    <p className="mb-4">
      Now my workflow includes a lot of AI and a lot of debugging. I now spend more time debugging than I do coding. Sometimes I just stare at those stream of codes generated by the AI and wonder if I&apos;m the only one? Guilt sometimes creeps in, and then after debugging when the code just works, I feel like the HERO.
    </p>

    <h3 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      My New Workflow (The AI Version):
    </h3>
    <ul className="mb-4 space-y-1 ml-4">
      <li>1. Think: What do I want to build?</li>
      <li>2. Formulate: Design architecture with AI suggestions</li>
      <li>3. Code n Chat: Ask Cursor about edge cases and optimizations</li>
      <li>4. Refactor: Let AI clean up and improve the code (does it really tho?)</li>
      <li>5. Ship (Maybe): Deploy with no-confidence (and more bugs)</li>
    </ul>

    <h2 className="text-sm font-medium mt-6 mb-3 text-[color:var(--foreground)]">
      The Honest Truth About AI Coding
    </h2>
    <p className="mb-4">
      I dont know, I&apos;m just following The RULE &quot;If the code works, why not?&quot;
    </p>
  </div>
);

export const blogMetadata = {
  title: "I never knew the life of pre-AI stack-overflow developers (And Why I'm Mad About It)",
  excerpt: "I hear tales of the old days when geeks spent their billable hours rambling through those classic HTML aesthetic dev-forums, stack-overflow and what-not to get their idea into a working code. But unfortunately I started...",
  date: "August 2025",
  tags: ["Development"],
  slug: "i-never-knew-the-life-of-pre-ai-stack-overflow-developers"
};
