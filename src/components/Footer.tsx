import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24" id="contact">
      <div className="container py-16">
        <p className="eyebrow mb-3">Let&apos;s chat</p>
        <h2 className="text-2xl sm:text-3xl font-semibold max-w-2xl mb-8">
          Building something where AI actually earns its place? I&apos;d love to hear about it.
        </h2>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        </div>
        <p className="text-xs text-[var(--muted)] mt-12">
          © {2026} {profile.name}. Built and owned by me — designed in the open, shipped on Vercel.
        </p>
      </div>
    </footer>
  );
}
