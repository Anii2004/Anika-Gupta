import Image from "next/image";
import Link from "next/link";
import { profile, skills, toolbox, experience, education, certifications } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

const ring = "Product Manager · Design-trained · 0 to 1 · ";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="glow" aria-hidden="true" />
        <div className="streaks" aria-hidden="true" />
        <div className="wrap hero-in">
          <span className="asterisk" aria-hidden="true">✳</span>

          <div className="hero-stage">
            <span className="pill p1"><i />Product strategy</span>
            <span className="pill p2"><i />0 to 1 research</span>
            <span className="pill p3"><i />AI tools</span>
            <span className="pill p4"><i />{profile.pastCompanies}</span>

            <h1 className="hero-name">
              <span>Anika</span>
              <span>Gupta</span>
            </h1>

            <svg className="ring" viewBox="0 0 200 200" aria-hidden="true">
              <defs><path id="ringPath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
              <text><textPath href="#ringPath">{ring}</textPath></text>
            </svg>
          </div>

          <div className="hero-foot">
            <div>
              <p className="hero-role">{profile.title}, {profile.background}</p>
              <p className="hero-line">{profile.headline}</p>
            </div>
            <div className="hero-cta">
              <Link href="#work" className="btn">See my work</Link>
              <a href={profile.resume} className="btn ghost" target="_blank" rel="noopener">Resume</a>
            </div>
          </div>
          <p className="hero-status"><span className="live" />{profile.status}, {profile.city}</p>
        </div>
      </section>

      {/* SKILLS STRIP */}
      <div className="strip" aria-label="Skills">
        <div className="strip-track">
          {[0, 1].map((k) => (
            <span key={k} aria-hidden={k === 1}>
              {skills.map((s) => <b key={s.name + k}>{s.name}<i>✳</i></b>)}
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="section wrap">
        <div className="section-head">
          <h2>Selected work</h2>
          <p>Problems I dug into, and what changed.</p>
        </div>
        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className={`work-card ${i === 0 ? "featured" : ""} ${c.ready ? "" : "soon"}`}>
              <div className="work-top">
                <span className="work-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="work-state">{c.ready ? "Read case study" : "Write-up coming soon"}</span>
              </div>
              <div className="work-metric">
                <b>{c.metric.value}</b>
                <span>{c.metric.label}</span>
              </div>
              <div className="work-body">
                <h3>{c.title}</h3>
                <p>{c.oneLiner}</p>
                <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section wrap about">
        <div className="photo-wrap">
          <Image src="/anika.jpg" alt={`Portrait of ${profile.name}`} width={440} height={440} className="photo" />
        </div>
        <div className="about-text">
          <h2>About me</h2>
          <p className="lead">{profile.intro}</p>
          {profile.story.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* TOOLKIT */}
      <section id="toolkit" className="section wrap">
        <div className="section-head">
          <h2>What I bring</h2>
          <p>The PM side, backed by a designer&apos;s eye.</p>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.name} className="skill">
              <h3>{s.name}</h3>
              <p>{s.note}</p>
            </div>
          ))}
        </div>
        <div className="tools">
          {toolbox.map((t) => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section wrap">
        <div className="section-head">
          <h2>Experience</h2>
          <p>Five roles across healthcare, real estate SaaS and consumer apps.</p>
        </div>
        <ol className="exp">
          {experience.map((e) => (
            <li key={e.role + e.company}>
              <div className="exp-left">
                <h3>{e.company}</h3>
                <span>{e.period}</span>
                <span>{e.place}</span>
              </div>
              <div className="exp-right">
                <p className="exp-role">{e.role}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="edu">
          {education.map((ed) => (
            <p key={ed.school}><b>{ed.degree}</b> at {ed.school}, {ed.period}</p>
          ))}
          <p><b>Certified</b> {certifications.join(", ")}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="glow glow-b" aria-hidden="true" />
        <div className="wrap contact-in">
          <p className="pill static"><i />{profile.status}</p>
          <h2 className="contact-big">Let&apos;s build something worth using.</h2>
          <div className="hero-cta">
            <a href={`mailto:${profile.email}`} className="btn">{profile.email}</a>
            <a href={profile.linkedin} className="btn ghost" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
