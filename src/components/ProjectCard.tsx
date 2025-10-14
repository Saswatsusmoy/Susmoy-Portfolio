export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href || "#"}
      className="group block rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-4 hover:bg-[color:var(--card-hover)] hover:border-[color:var(--border-hover)] hover:shadow-sm transition-all duration-200"
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer" : undefined}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-[color:var(--foreground)] text-sm font-medium">{project.title}</h3>
        <span className="text-[10px] text-[color:var(--muted)] group-hover:text-[color:var(--foreground)] transition-colors">↗</span>
      </div>
      <p className="mt-1.5 text-[12px] text-[color:var(--muted)]">{project.description}</p>
    </a>
  );
}


