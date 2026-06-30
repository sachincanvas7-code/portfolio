import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,11,0.8)] backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest uppercase">
          Sachin<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <Link href="/#work" className="hover:text-[var(--fg)]">Work</Link>
          <Link href="/#experience" className="hover:text-[var(--fg)] hidden sm:inline">Experience</Link>
          <Link href="/blogs" className="hover:text-[var(--fg)]">Writing</Link>
          <a href={profile.resume} className="btn">Resume</a>
        </div>
      </nav>
    </header>
  );
}
