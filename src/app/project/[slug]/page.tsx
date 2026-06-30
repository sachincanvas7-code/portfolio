import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — Sachin Kumar` : "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const sections = [
    { label: "The problem", body: p.problem },
    { label: "What I built", body: p.build },
    { label: "My role & decisions", body: p.role },
    { label: "Outcome", body: p.outcome },
  ];

  return (
    <article className="container py-16 max-w-3xl">
      <Link href="/#work" className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)]">
        ← Back
      </Link>

      <p className="eyebrow mt-8 mb-3">Project {p.num}</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">{p.title}</h1>
      <p className="text-lg text-[#c9c9d1] mb-6">{p.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ▶ Live demo
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">View code on GitHub</a>
        )}
        {!p.demo && !p.github && (
          <span className="btn cursor-default opacity-70">Built in the AI Build Lab — walkthrough on request</span>
        )}
      </div>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.label}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">{s.label}</h2>
            <p className="text-[#c9c9d1]">{s.body}</p>
          </section>
        ))}
      </div>

      {p.sourceTutorial && (
        <p className="mt-12 pt-6 border-t border-[var(--border)] text-sm text-[var(--muted)]">
          Built during the Curious PM AI Product Strategy &amp; Build Lab · {p.sourceTutorial}
        </p>
      )}
    </article>
  );
}
