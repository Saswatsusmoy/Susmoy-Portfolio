export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-[color:var(--foreground)] text-sm tracking-[0.15em] uppercase font-semibold">{title}</h2>
      {subtitle ? <p className="text-[color:var(--muted)] text-xs mt-2">{subtitle}</p> : null}
    </div>
  );
}


