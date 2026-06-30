import Link from "next/link";
import type { Metadata } from "next";
import { blogs } from "@/data/portfolio";

export const metadata: Metadata = { title: "Writing — Sachin Kumar" };

export default function BlogsIndex() {
  return (
    <main className="container py-16 max-w-3xl">
      <p className="eyebrow mb-3">Thoughts & Ideas</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Writing</h1>
      <p className="text-[var(--muted)] mb-12 max-w-2xl">
        Notes on discovery-driven product, taming complex legal and risk workflows, and shipping things
        that make a user&apos;s Tuesday easier.
      </p>
      <div className="space-y-px">
        {blogs.map((b) => (
          <Link key={b.slug} href={`/blogs/${b.slug}`} className="group block border-t border-[var(--border)] py-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors">{b.title}</h2>
              <span className="font-mono text-xs text-[var(--muted)] shrink-0">{b.readingTime}</span>
            </div>
            <p className="text-sm text-[var(--muted)] mt-2">{b.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
