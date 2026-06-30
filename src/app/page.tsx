import Link from "next/link";
import { profile, experience, projects, skills, blogs, certifications } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="container pt-20 pb-24 sm:pt-28">
        <p className="eyebrow mb-4">{profile.location}</p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-3">{profile.name}</h1>
        <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent)] mb-8">
          {profile.headline}
        </p>
        <p className="max-w-2xl text-lg text-[#c9c9d1] mb-10">{profile.bio}</p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Let&apos;s chat</a>
          <a href={profile.resume} className="btn">Resume</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container py-16">
        <p className="eyebrow mb-2">Work</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Things I&apos;ve actually built</h2>
        <p className="text-[var(--muted)] max-w-2xl mb-10">
          Not slide decks — working AI products. Where they&apos;re live, the demo and the code are linked.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <Link key={p.slug} href={`/project/${p.slug}`} className="card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[var(--muted)]">{p.num}</span>
                <StatusBadge status={p.status} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--muted)] mb-5 flex-1">{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container py-16">
        <p className="eyebrow mb-2">Experience</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 max-w-2xl">
          From data and growth into product — edtech experiments to legal and risk platforms.
        </h2>
        <div className="space-y-px">
          {experience.map((e) => (
            <div key={e.period} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 border-t border-[var(--border)] py-6">
              <span className="font-mono text-xs text-[var(--muted)] pt-1">{e.period}</span>
              <div>
                <h3 className="font-semibold">{e.role} <span className="text-[var(--muted)] font-normal">· {e.company}</span></h3>
                {e.points.length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm text-[#c9c9d1]">
                    {e.points.map((pt, i) => (
                      <li key={i} className="flex gap-2"><span className="text-[var(--accent)]">→</span>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 border-l-2 border-[var(--accent)] pl-5 text-lg italic text-[#c9c9d1]">
          &ldquo;{profile.tagline}&rdquo;
        </blockquote>
      </section>

      {/* SKILLS */}
      <section className="container py-16">
        <p className="eyebrow mb-2">Stack</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">How I run discovery, ship, and stay close to the product</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{group}</h3>
              <ul className="space-y-2 text-sm text-[#c9c9d1]">
                {items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <section className="container py-16">
        <p className="eyebrow mb-2">Thoughts & Ideas</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 max-w-2xl">
          Notes on discovery-driven product and shipping things that make a user&apos;s Tuesday easier.
        </h2>
        <div className="space-y-px">
          {blogs.map((b) => (
            <Link key={b.slug} href={`/blogs/${b.slug}`} className="group grid sm:grid-cols-[1fr_auto] gap-2 border-t border-[var(--border)] py-6">
              <div>
                <h3 className="font-medium group-hover:text-[var(--accent)] transition-colors">{b.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1 max-w-2xl">{b.excerpt}</p>
              </div>
              <span className="font-mono text-xs text-[var(--muted)] pt-1">{b.readingTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container py-16">
        <p className="eyebrow mb-2">Certifications & Education</p>
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          {certifications.map((c) => (
            <div key={c.title} className="card p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-[var(--muted)] mt-1">{c.issuer} · {c.year}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function StatusBadge({ status }: { status: "live" | "code" | "course" }) {
  const map = {
    live: { label: "Live demo", color: "#3ad17e" },
    code: { label: "Code + setup", color: "#5aa9ff" },
    course: { label: "Built in lab", color: "#8a8a93" },
  } as const;
  const s = map[status];
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider" style={{ color: s.color }}>
      <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
      {s.label}
    </span>
  );
}
