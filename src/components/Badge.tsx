export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-[color:var(--panel)] border border-[color:var(--border)] px-1.5 py-0.5 text-[10px] text-[color:var(--muted)] hover:bg-[color:var(--panel-hover)] hover:border-[color:var(--border-hover)] transition-colors">
      {children}
    </span>
  );
}


