import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/data/portfolio";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = blogs.find((x) => x.slug === slug);
  return { title: b ? `${b.title} — Sachin Kumar` : "Writing" };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = blogs.find((x) => x.slug === slug);
  if (!b) notFound();

  return (
    <article className="container py-16 max-w-2xl">
      <Link href="/blogs" className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)]">
        ← All writing
      </Link>
      <p className="font-mono text-xs text-[var(--muted)] mt-8 mb-3">{b.readingTime} read</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-10">{b.title}</h1>
      <div className="prose">
        {b.body.map((para, i) =>
          para.startsWith("## ") ? (
            <h2 key={i}>{para.replace("## ", "")}</h2>
          ) : (
            <p key={i}>{para}</p>
          )
        )}
      </div>
    </article>
  );
}
