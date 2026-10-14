import Link from "next/link";
import { profile } from "@/data/site";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link href="/" className="nav-home" aria-label="Home">
          <span className="nav-mark" aria-hidden="true">→</span>
          <span>{profile.name}</span>
        </Link>
        <nav aria-label="Main">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <a href={profile.resume} target="_blank" rel="noopener">Resume</a>
          <Link href="/#contact" className="nav-cta">Let&apos;s talk</Link>
        </nav>
      </div>
    </header>
  );
}
