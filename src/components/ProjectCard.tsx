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
      className="group block rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-3 hover:bg-[color:var(--card-hover)] hover:border-[color:var(--border-hover)] hover:shadow-sm transition-all duration-200"
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noreferrer" : undefined}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-[color:var(--foreground)] text-sm font-semibold group-hover:text-[color:var(--foreground)] transition-colors">{project.title}</h3>
      </div>
      <p className="mt-2 text-xs text-[color:var(--muted)] leading-relaxed">{project.description}</p>
    </a>
  );
}


