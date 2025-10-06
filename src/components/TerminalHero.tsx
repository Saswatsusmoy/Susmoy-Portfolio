import { ReactNode } from "react";
import { data } from "@/data/site";

export default function TerminalHero() {
  return (
    <section className="rounded-md border border-[color:var(--border)] bg-[color:var(--panel)] shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[color:var(--border)]">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-red-500" />
          <span className="size-1.5 rounded-full bg-yellow-500" />
          <span className="size-1.5 rounded-full bg-green-500" />
        </div>
        <p className="font-mono text-[10px] text-[color:var(--muted)]">bash — portfolio.sh</p>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 font-mono text-[12px] leading-relaxed">
        <TerminalLine prompt>whoami</TerminalLine>
        <TerminalLine>{data.person.name}</TerminalLine>
        <TerminalLine prompt>focus</TerminalLine>
        <TerminalLine>genai · agentic workflows · rag · evals</TerminalLine>
      </div>
    </section>
  );
}

function TerminalLine({ children, prompt }: { children: ReactNode; prompt?: boolean }) {
  return (
    <div className="flex gap-2.5">
      {prompt ? <span className="text-emerald-400">$</span> : <span className="text-[color:var(--muted)]">→</span>}
      <span className="text-[color:var(--foreground)]">{children}</span>
    </div>
  );
}


