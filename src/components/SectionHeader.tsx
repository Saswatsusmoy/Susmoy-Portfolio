export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-[color:var(--foreground)] text-xs tracking-[0.2em] uppercase font-medium">{title}</h2>
      {subtitle ? <p className="text-[color:var(--muted)] text-xs mt-1">{subtitle}</p> : null}
    </div>
  );
}


