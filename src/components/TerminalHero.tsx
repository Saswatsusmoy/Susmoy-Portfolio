import { ReactNode } from "react";
import { data } from "@/data/site";

export default function TerminalHero() {
  return (
    <section className="rounded-md border border-[color:var(--border)] bg-[color:var(--panel)] shadow-sm">
      <div className="p-4 sm:p-6 lg:p-8 font-mono text-[12px] leading-relaxed">
        <TerminalLine prompt>whoami</TerminalLine>
        <TerminalLine>{data.person.name}</TerminalLine>
        <TerminalLine prompt>ls ~/skills/</TerminalLine>
        <TerminalLine>debugging  googling  copy-paste  prayer  problem-solving</TerminalLine>
        <TerminalLine prompt>cat /proc/motivation</TerminalLine>
        <TerminalLine>It compiles, ship it!</TerminalLine>
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


